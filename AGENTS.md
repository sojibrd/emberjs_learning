# emberjs_learning — Agent Instructions

আধুনিক Ember-এর best practice-এর দিনভিত্তিক সাইট — ৬৫ দিন: ৫৮ দিনে একটা করে rule, প্রতি ব্লকের শেষে একটা ⚑। chassis `dsa_prep_local_company` থেকে (২০২৬-১০-১১); তিন repo-র পরিবার নয়, একটাই সাইট।

- **`guide/` = ৫৮টা rule ফাইল**, `ember-best-practices` skill-এর `rules/` থেকে হুবহু (ইংরেজি; লেখক আর লাইসেন্স `guide/README.md`-এ)। **সম্পাদনা নয়** — উৎস বদলালে নতুন কপি। route `/guide/<ফাইলনাম>/`; সেকশন `_sections.md` থেকে, ফাইলনামের প্রথম অংশ ধরে।
- **`docs/` = plan** — `00-rules.md` আর ৭টা ব্লক, ইন্টারভিউর ক্রমে: Reactivity → State → Async → Data loading → Template → Build → Quality। উৎসের সেকশন ভাঙা হয়নি; সেকশনের ভেতরে উৎসের মতো title-এর বর্ণানুক্রম। দিনের নম্বর পরপর না হলে build ভাঙে; ফাইলে তারিখ নেই, "আজ" = ক্যালেন্ডারের তারিখ।
- কাজে `(rule · <ফাইলনাম>)` = `guide/`-এর rule; না মিললে **build ভাঙে** — ইচ্ছাকৃত। দিনের শিরোনাম আর কাজের `**…**` = rule-এর `title` হুবহু।
- **দিনের কার্ডে শুধু Incorrect কোড** — `**Incorrect …**` label থেকে তার প্রথম code block পর্যন্ত (`app/lib/guide.ts`-এর `problemOf`)। Correct কার্ডে পাঠানো হয় না; টিকের পরে `/guide/<slug>/`-এর লিংক আসে, আর ঐ পাতার ভাঁজ টিক থাকলে নিজে খোলে (`RuleReveal`)। হোমে সব দিনের ডেটা যায় — পুরো rule কার্ডে তুললে হোম ~৩০০ KB ভারী হবে।
- কাজ শুধু rule-এর লেখা থেকে — Ember নিয়ে নতুন দাবি বা নতুন rule নয়। ⚑ দিনের প্রশ্নের উৎস `docs/00-rules.md`-এর "সত্যের উৎস"-এ।
- **Office-এর কিছুই এই repo-তে নয়** — প্রজেক্টের নাম, কোড, ভেতরের নকশা কিছুই না; সাইট public। "নিজের কাজে কোথায় দেখেছেন" ব্যবহারকারীর খাতায় থাকে। এই কারণেই **নোটের ঘর আর `note` key নেই** — sync-এর টেবিলের policy খোলা।
- **Sandbox নেই** — কোড চালানোর Ember app এই repo-তে বা পাশে বানাবেন না, ব্যবহারকারী না বললে।
- **সময় ⏳** — দিনের ১০′ সপ্তাহে ৭ ঘণ্টার ভেতরে না বাইরে, ব্যবহারকারীর উত্তর বাকি। `suggestedStart` তাই `null`; কোনো plan-এর ঘর থেকে সময় কাটবেন না।
- 🧠 নাম → `app/lib/principles.ts`, `learning_to_learn`-এর ঐ ফাইলের কপি (৫৭টা বিষয়; এক লাইন = ব্যাখ্যার প্রথম বাক্য), লিংক ঐ সাইটের লাইভ Pages-এ। ওখানে বদলালে এখানেও।
- Progress চার key (`ember:v1:start`, `task`, `check`, `review`) — একমাত্র `app/hooks/useProgress.ts` দিয়ে; পঞ্চম key `ember:v1:meta` শুধু sync-এর timestamp। কাজের লেখা বদলালে ঐ কাজের টিক হারায় (id = দিন + লেখার hash)।
- **Cross-device sync** — বাকি সাইটের মতোই: `app/lib/supabase.ts`, `app/hooks/useSync(Key).ts`, `app/components/SyncSettings.tsx`, `app/sync/page.tsx` chassis থেকে হুবহু, নিজে থেকে বদলাবেন না। `site_prefix` = `SITE.storagePrefix` = `ember`। `deploy.yml`-এর env নাম `NEXT_PUBLIC_SUPABASE_*` — বদলালে sync চুপচাপ মরে যাবে। **লাইভ ২০২৬-১০-১১** — deployed chunk-এ Supabase-এর URL আর anon key `learning_to_learn`-এরটার সাথে মিলিয়ে দেখা, আর ঐ key দিয়ে `progress_sync` সাড়া দেয়। দুই device-এ আসল push/pull এখনো পরীক্ষা হয়নি — পরীক্ষায় টেবিলে একটা row লেখা লাগে, সেটা ব্যবহারকারীর নিজের sync key দিয়ে হবে।
- `app/lib/plan.ts` আর `app/lib/guide.ts` server-only।
- **Theme contract অলঙ্ঘনীয়**, সাইট **dark-only**। code block-এ syntax highlighting নেই — chassis-এর `.doc-prose pre`।

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
