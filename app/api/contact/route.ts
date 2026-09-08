import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { siteConfig } from '@/lib/config';
import { getPool, dbConfigured } from '@/lib/db';

const resend = new Resend(process.env.RESEND_API_KEY);

/** Submitted text lands inside an HTML email, so it has to be escaped. */
const esc = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const str = (v: unknown, max: number) => String(v ?? '').trim().slice(0, max);

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Malformed request' }, { status: 400 });
  }

  const name = str(body.name, 200);
  const email = str(body.email, 320);
  const company = str(body.company, 200);
  const kind = str(body.kind, 100);
  const budget = str(body.budget, 100);
  const message = str(body.message, 5000);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email and a description are all needed.' },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'That email address looks wrong.' }, { status: 400 });
  }

  // ── 1. Persist first ──────────────────────────────────────────────────
  // The enquiry is the thing worth keeping. Email delivery depends on Resend
  // being up and the sending domain being verified; the row does not.
  let submissionId: number | null = null;
  if (dbConfigured()) {
    try {
      const { rows } = await getPool().query<{ id: string }>(
        `insert into contact_submissions (name, email, company, kind, budget, message)
         values ($1, $2, $3, $4, $5, $6)
         returning id`,
        [name, email, company || null, kind || null, budget || null, message]
      );
      submissionId = Number(rows[0].id);
    } catch (err) {
      // A database problem must not cost us the enquiry: fall through to email.
      console.error('contact: db insert failed:', err instanceof Error ? err.message : err);
    }
  }

  // ── 2. Notify ─────────────────────────────────────────────────────────
  // NOTE: the `from` domain must be verified in Resend, or this returns 403.
  const subject = [kind, budget, company].filter(Boolean).join(' · ') || 'New enquiry';
  let emailSent = false;
  let emailError: string | null = null;

  try {
    const { error } = await resend.emails.send({
      from: `Portfolio <noreply@${new URL(siteConfig.url).hostname.replace(/^www\./, '')}>`,
      // Where enquiries are actually delivered. Defaults to the address the
      // site displays, but CONTACT_INBOX can point somewhere that works while
      // mail routing for the domain is still being set up.
      to: [process.env.CONTACT_INBOX || siteConfig.contact.email],
      subject: `Portfolio enquiry: ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family:ui-sans-serif,system-ui,sans-serif;max-width:620px;margin:0 auto;color:#15140f">
          <h2 style="border-bottom:2px solid #8a6620;padding-bottom:10px;margin:0 0 20px">New enquiry</h2>
          <p style="margin:8px 0"><strong>From:</strong> ${esc(name)}</p>
          <p style="margin:8px 0"><strong>Email:</strong> ${esc(email)}</p>
          ${company ? `<p style="margin:8px 0"><strong>Company:</strong> ${esc(company)}</p>` : ''}
          ${kind ? `<p style="margin:8px 0"><strong>Work:</strong> ${esc(kind)}</p>` : ''}
          ${budget ? `<p style="margin:8px 0"><strong>Budget:</strong> ${esc(budget)}</p>` : ''}
          <div style="margin:24px 0;padding:16px;background:#f4f1ea;border:1px solid #d7d1c1">
            <p style="white-space:pre-wrap;margin:0;color:#5c574c">${esc(message)}</p>
          </div>
          <p style="color:#6f6a5c;font-size:12px">
            Sent from the contact form on ${siteConfig.url}${
              submissionId ? ` &middot; submission #${submissionId}` : ''
            }
          </p>
        </div>
      `,
    });

    if (error) throw new Error(error.message);
    emailSent = true;
  } catch (err) {
    emailError = err instanceof Error ? err.message : 'Unknown send failure';
    console.error('contact: email failed:', emailError);
  }

  // ── 3. Record what happened to the email ──────────────────────────────
  if (submissionId !== null) {
    try {
      await getPool().query(
        'update contact_submissions set email_sent = $1, email_error = $2 where id = $3',
        [emailSent, emailError, submissionId]
      );
    } catch {
      // Bookkeeping only. The enquiry is already stored.
    }
  }

  // Succeed if the enquiry survived either path.
  if (submissionId !== null || emailSent) {
    return NextResponse.json({ message: 'Received' }, { status: 200 });
  }

  return NextResponse.json(
    { error: 'Could not send. Please email directly instead.' },
    { status: 500 }
  );
}
