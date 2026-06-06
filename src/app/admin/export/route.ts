import { getServiceSupabase, type WaitlistRow } from "@/lib/supabase";
import { isAuthed } from "../auth";

/** Escape a value for a CSV cell (RFC 4180 style). */
function csvCell(value: string): string {
  if (/[",\n\r]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export async function GET() {
  if (!(await isAuthed())) {
    return new Response("Unauthorized", { status: 401 });
  }

  const supabase = getServiceSupabase();
  const { data, error } = await supabase
    .from("waitlist")
    .select("id, first_name, last_name, email, school, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return new Response(`Error: ${error.message}`, { status: 500 });
  }

  const rows = (data ?? []) as WaitlistRow[];
  const header = ["id", "first_name", "last_name", "email", "school", "created_at"];
  const lines = [
    header.join(","),
    ...rows.map((r) =>
      [r.id, r.first_name, r.last_name, r.email, r.school, r.created_at]
        .map((v) => csvCell(String(v ?? "")))
        .join(",")
    ),
  ];
  // Prepend a UTF-8 BOM so Excel reads accented names correctly.
  const csv = "﻿" + lines.join("\r\n");

  const date = new Date().toISOString().slice(0, 10);
  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="himma-waitlist-${date}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
