-- Cross-device progress sync — একটা শেয়ার্ড Supabase project, workspace-এর
-- সব দিনভিত্তিক সাইটের জন্য। টেবিলটা ঐ project-এ আগে থেকেই আছে; নতুন project
-- হলে Supabase dashboard-এর SQL editor-এ এটা একবার চালান। `site_prefix` =
-- প্রতিটা সাইটের `SITE.storagePrefix` (যেমন `ember`, `nextjs`, `nestjs`) —
-- একই টেবিলে সাইটগুলোর ডেটা আলাদা থাকে।

create table if not exists progress_sync (
  sync_key text not null,
  site_prefix text not null,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (sync_key, site_prefix)
);

alter table progress_sync enable row level security;

-- এখানে কোনো auth নেই। anon role সব row পড়তে আর লিখতে পারে, আর select
-- `using (true)` হওয়ায় sync_key-সহ পুরো টেবিল তালিকা করা যায় — anon key
-- সাইটের JS-এ public, তাই key জানা থাকা কোনো boundary নয়। personal,
-- low-stakes progress-এর জন্য মেনে নেওয়া; গোপন বা সংবেদনশীল তথ্য এখানে নয়।
-- delete policy নেই, তাই anon role কোনো row মুছতে পারে না।
create policy "sync by key - select" on progress_sync for select using (true);
create policy "sync by key - insert" on progress_sync for insert with check (true);
create policy "sync by key - update" on progress_sync for update using (true) with check (true);
