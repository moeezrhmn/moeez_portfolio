/**
 * Read recent contact submissions.
 *   node --env-file=.env scripts/submissions.mjs [limit]
 */
import { Client } from 'pg';

const limit = Number(process.argv[2] ?? 10);
const c = new Client({ connectionString: process.env.DATABASE_URL });
await c.connect();

const { rows } = await c.query(
  `select id, created_at, name, email, company, kind, budget,
          email_sent, email_error, message
     from contact_submissions
    order by created_at desc
    limit $1`,
  [limit]
);

if (!rows.length) console.log('No submissions yet.');

for (const r of rows) {
  const when = new Date(r.created_at).toISOString().replace('T', ' ').slice(0, 16);
  console.log(`\n#${r.id}  ${when}  ${r.email_sent ? 'emailed' : 'NOT EMAILED'}`);
  console.log(`  ${r.name} <${r.email}>${r.company ? `  ${r.company}` : ''}`);
  if (r.kind || r.budget) console.log(`  ${[r.kind, r.budget].filter(Boolean).join('  ·  ')}`);
  if (r.email_error) console.log(`  send error: ${r.email_error}`);
  console.log(`  ${r.message.split('\n')[0].slice(0, 90)}`);
}

await c.end();
