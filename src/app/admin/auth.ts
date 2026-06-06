import "server-only";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "himma_admin";

/**
 * Returns the configured admin password, or throws if it isn't set.
 * A simple shared-password gate — good enough for the waitlist admin for now.
 */
function getAdminPassword(): string {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) {
    throw new Error("ADMIN_PASSWORD is not set in .env.local.");
  }
  return pw;
}

export function checkPassword(candidate: string): boolean {
  const expected = getAdminPassword();
  // Length check first avoids a trivial early-exit timing signal.
  if (candidate.length !== expected.length) return false;
  let mismatch = 0;
  for (let i = 0; i < expected.length; i++) {
    mismatch |= candidate.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return mismatch === 0;
}

/** True when the request carries a valid admin cookie. */
export async function isAuthed(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(ADMIN_COOKIE)?.value;
  return typeof token === "string" && checkPassword(token);
}
