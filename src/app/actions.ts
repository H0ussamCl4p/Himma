"use server";

import { getServiceSupabase } from "@/lib/supabase";
import { validateWaitlist, type WaitlistInput } from "@/lib/validation";

export type JoinResult = { ok: true } | { ok: false; error: string };

/**
 * Server Action: validate again on the server, then insert into Supabase using
 * the service-role key. Duplicate email (unique constraint) → friendly message.
 */
export async function joinWaitlist(input: WaitlistInput): Promise<JoinResult> {
  const validated = validateWaitlist(input);
  if (!validated.ok) {
    return { ok: false, error: validated.error };
  }

  try {
    const supabase = getServiceSupabase();
    const { error } = await supabase.from("waitlist").insert(validated.data);

    if (error) {
      // 23505 = unique_violation (email already on the list)
      if (error.code === "23505") {
        return { ok: false, error: "You're already on the list!" };
      }
      console.error("[waitlist] insert error:", error);
      return { ok: false, error: "Something went wrong. Please try again." };
    }

    return { ok: true };
  } catch (e) {
    console.error("[waitlist] unexpected error:", e);
    return { ok: false, error: "Something went wrong. Please try again." };
  }
}
