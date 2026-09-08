/**
 * Re-sends notifications for enquiries that were stored but never delivered,
 * i.e. anything with email_sent = false. Run this once the sending domain
 * verifies in Resend, to clear the backlog that built up while it did not.
 *
 *   node --env-file=.env scripts/retry-emails.mjs          # dry run
 *   node --env-file=.env scripts/retry-emails.mjs --send   # actually send
 *
 * The canonical email template lives in app/api/contact/route.ts. This is a
 * deliberately simpler copy: it is a recovery tool, and keeping it dependency
 * free means it runs as plain Node without a TypeScript step.
 */
import { Client } from 'pg';

const SEND = process.argv.includes('--send');
const KEY = process.env.RESEND_API_KEY;
const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://moeezrehman.com';
const HOST = new URL(SITE).hostname.replace(/^www\./, '');
const TO = process.env.CONTACT_INBOX || `contact@${HOST}`;

if (!KEY) { console.error('RESEND_API_KEY is not set.'); process.exit(1); }

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
           .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const client = new Client({ connectionString: process.env.DATABASE_URL });
await client.connect();

const { rows } = await client.query(
  `select id, created_at, name, email, company, kind, budget, message, email_error
     from contact_submissions
    where email_sent = false
    order by created_at asc`
);

if (!rows.length) {
  console.log('Nothing pending: every submission has been delivered.');
  await client.end();
  process.exit(0);
}

console.log(`${rows.length} undelivered submission(s)${SEND ? '' : '  (dry run, pass --send to deliver)'}\n`);

let ok = 0, failed = 0;

for (const r of rows) {
  const when = new Date(r.created_at).toISOString().replace('T', ' ').slice(0, 16);
  const label = `#${r.id}  ${when}  ${r.name} <${r.email}>`;

  if (!SEND) {
    console.log(`  would send  ${label}`);
    continue;
  }

  const subject = [r.kind, r.budget, r.company].filter(Boolean).join(' · ') || 'New enquiry';
  const line = (k, v) => (v ? `<p style="margin:8px 0"><strong>${k}:</strong> ${esc(v)}</p>` : '');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: `Portfolio <noreply@${HOST}>`,
        to: [TO],
        reply_to: r.email,
        subject: `Portfolio enquiry (backfill): ${subject}`,
        html: `
          <div style="font-family:ui-sans-serif,system-ui,sans-serif;max-width:620px;margin:0 auto;color:#15140f">
            <h2 style="border-bottom:2px solid #8a6620;padding-bottom:10px;margin:0 0 20px">
              Enquiry #${r.id}, received ${when}
            </h2>
            ${line('From', r.name)}${line('Email', r.email)}${line('Company', r.company)}
            ${line('Work', r.kind)}${line('Budget', r.budget)}
            <div style="margin:24px 0;padding:16px;background:#f4f1ea;border:1px solid #d7d1c1">
              <p style="white-space:pre-wrap;margin:0;color:#5c574c">${esc(r.message)}</p>
            </div>
            <p style="color:#6f6a5c;font-size:12px">
              Delivered late. Original failure: ${esc(r.email_error || 'unknown')}
            </p>
          </div>`,
      }),
    });

    if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);

    await client.query(
      'update contact_submissions set email_sent = true, email_error = null where id = $1',
      [r.id]
    );
    console.log(`  sent        ${label}`);
    ok++;
  } catch (err) {
    await client.query('update contact_submissions set email_error = $1 where id = $2',
      [err.message.slice(0, 500), r.id]);
    console.log(`  FAILED      ${label}\n              ${err.message.slice(0, 120)}`);
    failed++;
  }
}

if (SEND) console.log(`\nsent ${ok}, failed ${failed}`);
await client.end();
