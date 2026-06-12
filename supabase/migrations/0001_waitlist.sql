-- Forge waitlist table.
-- Writes happen server-side with the service-role key, which bypasses RLS,
-- so we enable RLS but intentionally add NO public/anon policies.

create table if not exists public.waitlist (
  id         uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name  text not null,
  email      text not null unique,
  school     text not null,
  created_at timestamptz default now()
);

-- Helpful for the admin list, which orders by newest first.
create index if not exists waitlist_created_at_idx
  on public.waitlist (created_at desc);

alter table public.waitlist enable row level security;

-- No anon/authenticated policies on purpose: only the service role may read/write.
