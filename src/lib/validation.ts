// Shared validation used on BOTH the client and the server so the rules never drift.

export type WaitlistInput = {
  first_name: string;
  last_name: string;
  email: string;
  school: string;
};

export type ValidationResult =
  | { ok: true; data: WaitlistInput }
  | { ok: false; error: string };

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

/**
 * Validate and normalise raw waitlist form values.
 * Mirrors the original page's checks and returns French error copy.
 */
export function validateWaitlist(raw: {
  first_name?: unknown;
  last_name?: unknown;
  email?: unknown;
  school?: unknown;
}): ValidationResult {
  const first_name = typeof raw.first_name === "string" ? raw.first_name.trim() : "";
  const last_name = typeof raw.last_name === "string" ? raw.last_name.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  const school = typeof raw.school === "string" ? raw.school.trim() : "";

  // last_name is optional (less friction); the rest are required.
  if (!first_name || !email || !school) {
    return { ok: false, error: "Please fill in the required fields." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please check your email address." };
  }
  // Guard against absurdly long values reaching the database.
  if (first_name.length > 80 || last_name.length > 80 || email.length > 160 || school.length > 120) {
    return { ok: false, error: "One of the values is too long." };
  }

  return {
    ok: true,
    data: { first_name, last_name, email: email.toLowerCase(), school },
  };
}
