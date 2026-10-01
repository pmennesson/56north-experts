-- Language of the form the visitor used (reply in the same language).
alter table public.leads add column if not exists locale text check (locale in ('en','fr'));
alter table public.talents add column if not exists locale text check (locale in ('en','fr'));
