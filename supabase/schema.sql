-- ============================================================
-- eCreator – AI Analyse Lead Funnel · Supabase schema
-- Run this in the Supabase SQL editor to activate CRM capture.
-- The frontend writes directly to `leads` via the anon key (RLS insert).
-- A trigger auto-creates a follow-up task + a sales notification.
-- ============================================================

-- 1) Leads -----------------------------------------------------
create table if not exists public.leads (
  id            uuid primary key default gen_random_uuid(),
  first_name    text not null,
  last_name     text not null,
  company       text not null,
  website       text,
  email         text not null,
  phone         text,
  interest      text,
  source        text not null default 'Website AI Analyse',
  status        text not null default 'Neu',
  overall_score int,
  scores        jsonb,
  quick_wins    jsonb,
  analysis_raw  jsonb,
  created_at    timestamptz not null default now()
);

-- 2) Sales tasks ----------------------------------------------
create table if not exists public.tasks (
  id          uuid primary key default gen_random_uuid(),
  lead_id     uuid references public.leads(id) on delete cascade,
  title       text not null,
  status      text not null default 'Offen',
  due_at      timestamptz default (now() + interval '1 day'),
  created_at  timestamptz not null default now()
);

-- 3) Notifications --------------------------------------------
create table if not exists public.notifications (
  id          uuid primary key default gen_random_uuid(),
  lead_id     uuid references public.leads(id) on delete cascade,
  message     text not null,
  read        boolean not null default false,
  created_at  timestamptz not null default now()
);

-- 4) Auto follow-up + notification on new lead ----------------
create or replace function public.on_new_lead()
returns trigger language plpgsql security definer as $$
begin
  insert into public.tasks (lead_id, title)
  values (new.id, 'AI Analyse Lead kontaktieren: ' || new.company);

  insert into public.notifications (lead_id, message)
  values (new.id, 'Neuer AI-Analyse Lead: ' || new.company || ' (' || new.email || ')');

  return new;
end;
$$;

drop trigger if exists trg_on_new_lead on public.leads;
create trigger trg_on_new_lead
  after insert on public.leads
  for each row execute function public.on_new_lead();

-- 5) Row Level Security ---------------------------------------
alter table public.leads enable row level security;

-- Allow anonymous visitors to INSERT a lead (but not read others')
drop policy if exists "anon can insert leads" on public.leads;
create policy "anon can insert leads"
  on public.leads for insert
  to anon
  with check (true);

-- tasks & notifications are internal only (no anon access) — keep RLS on,
-- read them with the service role from your CRM / dashboard.
alter table public.tasks enable row level security;
alter table public.notifications enable row level security;
