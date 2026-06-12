"use client";

import { useState, useTransition } from "react";
import { joinWaitlist } from "@/app/actions";
import { validateWaitlist } from "@/lib/validation";
import { SCHOOLS } from "@/lib/schools";
import { SparkleMascot } from "@/components/brand/Mascot";

export function WaitlistForm() {
  const [error, setError] = useState<string>("");
  const [done, setDone] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const raw = {
      first_name: String(data.get("first_name") ?? ""),
      last_name: String(data.get("last_name") ?? ""),
      email: String(data.get("email") ?? ""),
      school: String(data.get("school") ?? ""),
    };

    // Client-side validation first (same rules as the server).
    const validated = validateWaitlist(raw);
    if (!validated.ok) {
      setError(validated.error);
      return;
    }

    startTransition(async () => {
      const result = await joinWaitlist(validated.data);
      if (result.ok) {
        setDone(true);
      } else {
        setError(result.error);
      }
    });
  }

  if (done) {
    return (
      <div className="done" role="status" aria-live="polite">
        <SparkleMascot id="mk-done" />
        <h3>You&apos;re on the list!</h3>
        <p>We&apos;ll let you know the moment Himma opens at your school. Dir himma 🔥</p>
      </div>
    );
  }

  return (
    <form id="form" onSubmit={handleSubmit} noValidate>
      <h3>Join the waitlist</h3>
      <p className="sub">Be among the first to get access at launch.</p>

      <div className="row">
        <div className="field">
          <label htmlFor="fn">First name</label>
          <input
            id="fn"
            name="first_name"
            type="text"
            placeholder="Your name"
            autoComplete="given-name"
            required
            maxLength={80}
          />
        </div>
        <div className="field">
          <label htmlFor="ln">
            Last name <span className="opt">(optional)</span>
          </label>
          <input
            id="ln"
            name="last_name"
            type="text"
            placeholder="Your last name"
            autoComplete="family-name"
            maxLength={80}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="em">Email</label>
        <input
          id="em"
          name="email"
          type="email"
          placeholder="you@email.com"
          autoComplete="email"
          required
          maxLength={160}
        />
      </div>

      <div className="field">
        <label htmlFor="sc">Your school / university</label>
        <input
          id="sc"
          name="school"
          type="text"
          placeholder="Your school / university"
          list="schools"
          required
          maxLength={120}
        />
        <datalist id="schools">
          {SCHOOLS.map((s) => (
            <option value={s} key={s} />
          ))}
        </datalist>
      </div>

      <button className="cta" type="submit" disabled={isPending}>
        {isPending ? "One sec…" : "Join the list"}
      </button>

      {error && (
        <div className="err" role="alert">
          {error}
        </div>
      )}

      <div className="privacy">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6e6a64"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        We never sell your data. Ever.
      </div>
    </form>
  );
}
