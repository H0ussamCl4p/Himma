import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client using the service-role key.
 *
 * This key bypasses Row Level Security, so it must NEVER be imported into a
 * Client Component or shipped to the browser. The `server-only` import above
 * makes the build fail if that ever happens.
 */
let client: SupabaseClient | null = null;

export function getServiceSupabase(): SupabaseClient {
  if (client) return client;

  const rawUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!rawUrl || !serviceRoleKey) {
    throw new Error(
      "Supabase is not configured: set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local."
    );
  }

  // supabase-js wants the base project URL and appends /rest/v1 itself.
  // Tolerate a pasted API path or trailing slash (a common copy/paste mistake).
  const url = rawUrl.trim().replace(/\/+$/, "").replace(/\/rest\/v1$/, "");

  client = createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}

export type WaitlistRow = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  school: string;
  created_at: string;
};
