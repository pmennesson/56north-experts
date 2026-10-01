import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client using the SECRET key (bypasses RLS).
 * Never import this from a client component: `server-only` breaks the build if you do.
 *
 * Env vars (shared .env.production on the VPS, .env.local for dev):
 *   SUPABASE_URL=https://<ref>.supabase.co
 *   SUPABASE_SECRET_KEY=sb_secret_...   (or the legacy service_role key)
 */
let client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return null;
  client ??= createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  return client;
}

/**
 * Insert one row. Returns true on success.
 * Without env vars in development, logs the row instead so forms stay testable.
 * Without env vars in production, returns false so the user is told to email us
 * rather than losing the submission silently.
 */
export async function insertRow(table: "diagnostic_requests", row: Record<string, unknown>): Promise<boolean> {
  const db = getSupabaseAdmin();
  if (!db) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[${table}] (no Supabase env, dev log only)`, row);
      return true;
    }
    console.error(`[${table}] Supabase env vars missing in production`);
    return false;
  }
  const { error } = await db.from(table).insert(row);
  if (error) {
    console.error(`[${table}] insert failed`, error.message);
    return false;
  }
  return true;
}
