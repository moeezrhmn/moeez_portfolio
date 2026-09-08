/**
 * Creates the contact_submissions table. Idempotent, so it is safe to re-run.
 *
 *   node --env-file=.env scripts/init-db.mjs
 *
 * Uses the UNPOOLED endpoint: PgBouncer in transaction mode is fine for the
 * app's plain queries but is the wrong place to run DDL.
 */
import { Client } from 'pg';

const url = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;
if (!url) {
  console.error('DATABASE_URL_UNPOOLED (or DATABASE_URL) is not set.');
  process.exit(1);
}

const SQL = `
create table if not exists contact_submissions (
  id          bigserial   primary key,
  created_at  timestamptz not null default now(),
  name        text        not null,
  email       text        not null,
  company     text,
  kind        text,
  budget      text,
  message     text        not null,
  -- Whether the notification email actually went out, and why it did not.
  email_sent  boolean     not null default false,
  email_error text
);

create index if not exists contact_submissions_created_at_idx
  on contact_submissions (created_at desc);
`;

const client = new Client({ connectionString: url });

try {
  await client.connect();
  await client.query(SQL);

  const { rows } = await client.query(`
    select column_name, data_type, is_nullable
    from information_schema.columns
    where table_name = 'contact_submissions'
    order by ordinal_position
  `);

  console.log('contact_submissions is ready:\n');
  for (const r of rows) {
    console.log(`  ${r.column_name.padEnd(12)} ${r.data_type.padEnd(26)} ${r.is_nullable === 'YES' ? 'null' : 'not null'}`);
  }

  const { rows: count } = await client.query('select count(*)::int as n from contact_submissions');
  console.log(`\n  rows: ${count[0].n}`);
} catch (err) {
  console.error('Failed:', err.message);
  process.exitCode = 1;
} finally {
  await client.end();
}
