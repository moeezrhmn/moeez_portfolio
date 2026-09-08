import { Pool } from 'pg';

/**
 * Postgres (Neon) access for the contact form.
 *
 * `DATABASE_URL` is the `-pooler` endpoint, which is PgBouncer in transaction
 * mode. node-postgres only issues prepared statements for named queries, and
 * this app uses none, so plain `pool.query()` is safe against it.
 *
 * The pool is created lazily and cached on globalThis. Lazily, because module
 * evaluation happens during the build and a missing env var must not fail it.
 * Cached, because Next re-evaluates modules on hot reload and a fresh Pool per
 * reload would leak connections until Neon refused new ones.
 */
declare global {
  // eslint-disable-next-line no-var
  var __pgPool: Pool | undefined;
}

/** True when a connection string is configured at all. */
export const dbConfigured = () => Boolean(process.env.DATABASE_URL);

export function getPool(): Pool {
  if (global.__pgPool) return global.__pgPool;

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error('DATABASE_URL is not set');

  const pool = new Pool({
    connectionString,
    // A single VPS process should not hold more connections than it needs.
    max: 5,
    idleTimeoutMillis: 30_000,
    // Neon's free tier auto-suspends, so the first query after an idle period
    // waits for the compute to wake.
    connectionTimeoutMillis: 15_000,
  });

  // Without this, an idle client erroring out takes the process down.
  pool.on('error', (err) => console.error('pg pool error:', err.message));

  global.__pgPool = pool;
  return pool;
}
