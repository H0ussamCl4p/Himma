"use client";

import { useActionState } from "react";
import { login } from "./actions";

export function LoginForm() {
  const [error, formAction, isPending] = useActionState(login, null);

  return (
    <form action={formAction} className="admin-login card">
      <h3>Himma Admin</h3>
      <p className="sub">Enter the password to view the waitlist.</p>
      <div className="field">
        <label htmlFor="pw">Password</label>
        <input
          id="pw"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          autoFocus
        />
      </div>
      <button className="cta" type="submit" disabled={isPending}>
        {isPending ? "Checking…" : "Sign in"}
      </button>
      {error && (
        <div className="err" role="alert">
          {error}
        </div>
      )}
    </form>
  );
}
