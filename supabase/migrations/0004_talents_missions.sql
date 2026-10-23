-- Expert application: "your last three missions" step (optional).
-- Array of {client, year, stake}; client may be a name or an industry when confidential.
alter table public.talents add column if not exists missions jsonb;
