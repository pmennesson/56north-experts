-- Leads (staffing requests from /contact) and talents (applications from /talents).
-- Written only by the Next.js server with the secret key. RLS is enabled with
-- no policies, so the public (anon) key can neither read nor write.

create table if not exists public.leads (
  id               uuid primary key default gen_random_uuid(),
  created_at       timestamptz not null default now(),
  name             text not null,
  email            text not null,
  company          text not null,
  ecosystem        text not null,
  role             text not null,
  engagement_model text,
  target_start     text,
  location         text,
  message          text,
  status           text not null default 'new'
                   check (status in ('new', 'qualified', 'shortlisted', 'won', 'lost', 'spam')),
  owner            text,
  notes            text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

create table if not exists public.talents (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),
  name            text not null,
  email           text not null,
  linkedin_url    text not null,
  ecosystem       text not null,
  years_band      text not null,
  modules         text not null,
  certifications  text,
  community       text,
  day_rate        text,
  availability    text,
  location        text,
  referral        text,
  consent_at      timestamptz not null,
  status          text not null default 'new'
                  check (status in ('new', 'screening', 'panel', 'approved', 'placed', 'declined')),
  panel_member    boolean not null default false,
  notes           text
);

create index if not exists talents_created_at_idx on public.talents (created_at desc);
create index if not exists talents_ecosystem_idx on public.talents (ecosystem, status);
create index if not exists talents_email_idx on public.talents (lower(email));

alter table public.leads   enable row level security;
alter table public.talents enable row level security;

revoke all on public.leads   from anon, authenticated;
revoke all on public.talents from anon, authenticated;
