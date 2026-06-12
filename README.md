# Himma — Waitlist

Waitlist landing page for **Himma**, a study-focus app with campus leaderboards for
Moroccan students. Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**,
and **Supabase**. Deploys on **Vercel**.

## Brand kit

All branding lives in [`branding/`](branding/README.md): logos (SVG), design tokens,
brand guidelines, and the [Remotion motion-design video](branding/video/README.md)
(16:9 MP4 for social — `cd branding/video && npm install && npm run render`).

## Quick start

```bash
npm install
cp .env.local.example .env.local   # then fill in the values below
npm run dev                         # http://localhost:3000  (admin: /admin)
```

In the Supabase dashboard → **SQL Editor**, run
[`supabase/migrations/0001_waitlist.sql`](supabase/migrations/0001_waitlist.sql) once to
create the table (RLS on, no public policies — writes go through the server).

## Environment variables

| Variable                    | What                                                    |
| --------------------------- | ------------------------------------------------------- |
| `SUPABASE_URL`              | Project URL (Settings → API)                            |
| `SUPABASE_SERVICE_ROLE_KEY` | `service_role` key — server-only, never expose          |
| `ADMIN_PASSWORD`            | Gates the `/admin` page                                 |

## How it works

- Form submits via a **Server Action** that inserts into Supabase with the service-role
  key. Validation runs on the client **and** the server; duplicate emails get a friendly
  message.
- **`/admin`** — password-gated table of signups with CSV export.

## Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `npm run dev`    | Dev server                           |
| `npm run dev:lan`| Dev server on your LAN (test on phone) |
| `npm run build`  | Production build                     |
| `npm run start`  | Serve the production build           |

## Deploy

Push to GitHub, import into Vercel (framework auto-detected as Next.js), add the three
env vars, and deploy.
