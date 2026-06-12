import type { Metadata } from "next";
import { getServiceSupabase, type WaitlistRow } from "@/lib/supabase";
import { isAuthed } from "./auth";
import { logout } from "./actions";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin — Forge",
  robots: { index: false, follow: false },
};

// Always render fresh (auth + live data).
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isAuthed())) {
    return (
      <main className="admin-wrap">
        <LoginForm />
      </main>
    );
  }

  const supabase = getServiceSupabase();
  const { data, error } = await supabase
    .from("waitlist")
    .select("id, first_name, last_name, email, school, created_at")
    .order("created_at", { ascending: false });

  const rows = (data ?? []) as WaitlistRow[];

  return (
    <main className="admin-wrap">
      <header className="admin-head">
        <div>
          <h1 className="admin-title">Waitlist</h1>
          <p className="admin-count">
            {rows.length} {rows.length === 1 ? "signup" : "signups"}
          </p>
        </div>
        <div className="admin-actions">
          <a className="admin-btn" href="/admin/export">
            Export CSV
          </a>
          <form action={logout}>
            <button className="admin-btn admin-btn-ghost" type="submit">
              Sign out
            </button>
          </form>
        </div>
      </header>

      {error && (
        <p className="err" style={{ display: "block" }}>
          Failed to load: {error.message}
        </p>
      )}

      {rows.length === 0 ? (
        <p className="admin-empty">No signups yet.</p>
      ) : (
        <div className="admin-table-scroll">
          <table className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>School</th>
                <th>Signed up</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.id}>
                  <td>{i + 1}</td>
                  <td>{r.first_name}</td>
                  <td>{r.last_name || "—"}</td>
                  <td>{r.email}</td>
                  <td>{r.school}</td>
                  <td>
                    {new Date(r.created_at).toLocaleString("en-US", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
