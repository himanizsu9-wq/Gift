create table if not exists public.gift_state (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.gift_state enable row level security;

drop policy if exists "Gift state is readable" on public.gift_state;
drop policy if exists "Gift state can be inserted" on public.gift_state;
drop policy if exists "Gift state can be updated" on public.gift_state;
drop policy if exists "Gift state can be deleted" on public.gift_state;

create policy "Gift state is readable"
on public.gift_state
for select
to anon
using (id = 'main');

create policy "Gift state can be inserted"
on public.gift_state
for insert
to anon
with check (id = 'main');

create policy "Gift state can be updated"
on public.gift_state
for update
to anon
using (id = 'main')
with check (id = 'main');

create policy "Gift state can be deleted"
on public.gift_state
for delete
to anon
using (id = 'main');
