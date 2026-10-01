-- Diagnostic requests from the 56north.io "Premier échange" form.
-- Same rules as leads/talents: written only by the server with the secret key,
-- RLS on with no policies, no access for anon/authenticated.
create table if not exists public.diagnostic_requests (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  job_title   text not null,
  company     text not null,
  email       text not null,
  ai_count    text not null,
  locale      text check (locale in ('en','fr')),
  status      text not null default 'new'
              check (status in ('new', 'contacted', 'diagnostic', 'won', 'lost', 'spam')),
  notes       text
);
create index if not exists diagnostic_requests_created_at_idx on public.diagnostic_requests (created_at desc);
alter table public.diagnostic_requests enable row level security;
revoke all on public.diagnostic_requests from anon, authenticated;
