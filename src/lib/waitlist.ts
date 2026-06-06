import "server-only";
import { getServiceSupabase } from "./supabase";

/**
 * Approximate number of people on the waitlist, for social proof.
 * Returns null if Supabase isn't configured or the query fails — callers
 * should fall back to non-numeric copy in that case.
 */
export async function getSignupCount(): Promise<number | null> {
  try {
    const supabase = getServiceSupabase();
    const { count, error } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });
    if (error) return null;
    return count ?? 0;
  } catch {
    return null;
  }
}
