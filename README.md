# emberjs_learning

আধুনিক Ember-এর ৫৮টা best practice, ৬৫ দিনে। দিনে একটা rule, ১০′: সাইট rule-এর Incorrect কোড দেখায়, আপনি না দেখে ঠিকটা লেখেন আর "কেন" ইংরেজিতে বলেন; টিক দিলে Correct আর ব্যাখ্যার পাতা খোলে। শূন্য থেকে Ember শেখার সাইট নয় — "কীভাবে" থেকে "কেন"-তে যাওয়ার, ইন্টারভিউর জন্য।

rule-গুলো `ember-best-practices` skill থেকে হুবহু নেওয়া — লেখক আর লাইসেন্স [guide/README.md](guide/README.md)-এ।

**লাইভ:** https://sojibrd.github.io/emberjs_learning/

## Functional Requirement

- **আজ (`/`):** প্রথমবার খুললে শুরুর তারিখ জিজ্ঞেস করে। তারপর দেখায় ক্যালেন্ডারের আজকের দিনটা, এই ক্রমে: জমে থাকা ⚑ → আজকের ঝালাই → আজকের দিন।
- **Rail:** সব পাতায় বাঁয়ে rail থাকে, মোবাইলে drawer। তাতে ৪টা পাতার লিংক, plan-এর gauge আর ৭টা ব্লক। শুধু খোলা ব্লকের দিনগুলো দেখায়।
- **দিন (`/day/<nnn>/`) · ব্লক (`/block/<slug>/`):** দিনের কাজ আর দিন বা ব্লক শেষের হ্যাঁ/না।
- **rule-এর কাজ:** কাজের নিচে ঐ rule-এর Incorrect কোড আর `impact`। "Correct আর ব্যাখ্যা"-র লিংক আসে টিক দেওয়ার পরে।
- **গাইড (`/guide/`, `/guide/<slug>/`):** ৫৮টা rule উৎসের ১০ সেকশন ধরে, পাশে plan-এর দিন। rule-এর পাতায় Incorrect কোড খোলা, পুরো rule ভাঁজ করা; ঐ কাজে টিক থাকলে ভাঁজ নিজে খোলে।
- **ঝালাই (`/review/`):** প্রতিটা 🔁 কাজ টিকের দিন থেকে ১/৩/৭/২১ দিন পরে ফেরে।
- **নিয়ম (`/rules/`):** `docs/00-rules.md` হুবহু।
- **🧠 chip:** `learning_to_learn`-এর ৫৭টা বিষয়। chip চাপলে এক লাইনে কারণ দেখায়, সাথে ঐ সাইটের লিংক।
- **Sync (`/sync/`):** একই sync key বসালে অন্য device-এ progress নেমে আসে।

## Non-Functional Requirement

- **সত্যের উৎস `docs/` আর `guide/`।** কোডে কোনো দিন, কাজ বা rule হার্ডকোড নেই। কাজের `(rule · <ফাইলনাম>)` যদি `guide/`-এ না মেলে, **build ভাঙে।**
- **`guide/` সম্পাদনা হয় না।** উৎসের হুবহু কপি; সাইট Ember নিয়ে নিজের কোনো দাবি যোগ করে না।
- **Correct কার্ডে পাঠানো হয় না।** দিনের কার্ডে যায় শুধু Incorrect অংশ; পুরো rule থাকে নিজের পাতায়।
- **ফাইলে তারিখ নেই।** তারিখ = শুরুর তারিখ + (দিন − ১)। "আজ" মানে ক্যালেন্ডারের তারিখ, plan পেছায় না।
- **Static export → GitHub Pages।** নিজের backend নেই।
- **Progress `localStorage`-এ,** একমাত্র `app/hooks/useProgress.ts` দিয়ে; sync key থাকলে শেয়ার্ড Supabase-এ কপি যায়। নোটের ঘর নেই, ইচ্ছা করেই।
- **`app/lib/plan.ts` আর `app/lib/guide.ts` server-only।**
- **Theme contract অলঙ্ঘনীয়, সাইট dark-only।** গড়ন `dsa_prep_local_company`-এর মতো।
- **স্ট্যাক:** Next.js 16, React 19, TypeScript, Tailwind v4, react-markdown।

## ডক ইনডেক্স

| ফাইল | Gist |
|---|---|
| [docs/00-rules.md](docs/00-rules.md) | লক্ষ্য, সত্যের উৎস, চিহ্ন, "আজ", কখন বসবেন ⏳, ১০′-এর বসা, ঝালাই, ⚑ দিনের সাত প্রশ্ন, গাইডের পাতা, যা করবেন না, দিন ০৬৫-এর পরে |
| [docs/01-reactivity.md](docs/01-reactivity.md) | দিন ০০১–০১৮: `component-` ১৬ + `exports-` ১; ⚑ autotracking বনাম re-render |
| [docs/02-state.md](docs/02-state.md) | দিন ০১৯–০২৪: `service-` ৫; ⚑ কোন state কোথায় |
| [docs/03-async.md](docs/03-async.md) | দিন ০২৫–০৩০: `advanced-` ৫; ⚑ task বনাম `useEffect` |
| [docs/04-data-loading.md](docs/04-data-loading.md) | দিন ০৩১–০৩৬: `route-` ৫; ⚑ loading, error, empty |
| [docs/05-template.md](docs/05-template.md) | দিন ০৩৭–০৪৮: `template-` ৭ + `helper-` ৩ + `performance-` ১; ⚑ logic কোথায় বসবে |
| [docs/06-build.md](docs/06-build.md) | দিন ০৪৯–০৫৩: `bundle-` ৩ + `vscode-` ১; ⚑ ব্লকের তিনটা rule |
| [docs/07-quality.md](docs/07-quality.md) | দিন ০৫৪–০৬৫: `testing-` ৬ + `a11y-` ৫; ⚑ ব্লকের তিনটা rule |
| [guide/](guide/) | ৫৮টা rule ফাইল আর `_sections.md`, হুবহু; `README.md`-এ উৎস আর লাইসেন্স |

## প্রজেক্ট-নির্দিষ্ট নিয়ম

### ব্লক ফাইলের ছাঁচ

- `# ব্লক ১ — নাম` — প্রথম H1। "— "-এর পরের অংশ rail-এ দেখায়।
- `*দিন ০০১–০১৮ · …*` — H1-এর নিচের italic লাইন।
- `> **ব্লক শেষে:** …` · `### দিন ০০৭ · শিরোনাম` · `- [ ] ১০′ …` · `> **দিন শেষে:** …`
- দিনের নম্বর সব ব্লক মিলিয়ে পরপর থাকতে হবে। না থাকলে build ভাঙে।
- কাজে `(rule · component-cached-getters)` = `guide/`-এর ঐ ফাইল। লেখাটা কার্ডে দেখায় না; তার জায়গায় আসে Incorrect কোড আর chip।
- `⚑` = মাইলফলক, `🔁` = ঝালাই হবে, শেষে `🧠 (নাম · নাম)`। 🧠 নাম `app/lib/principles.ts`-এ থাকা নামগুলো থেকে।

### rule ফাইলের ছাঁচ

`guide/<prefix>-<নাম>.md` — frontmatter-এ `title`, `impact`, `impactDescription`, `tags`; তারপর `## Title`, ব্যাখ্যা, `**Incorrect (…):**` + code block, `**Correct (…):**` + code block। `<prefix>` কোন সেকশনে পড়ে তা `_sections.md`-এর শিরোনামের বন্ধনীতে। কার্ডে যায় প্রথম `**Incorrect …**` label থেকে তার প্রথম code block-এর শেষ পর্যন্ত।

### Progress key

| key | মান |
|---|---|
| `ember:v1:start` | শুরুর তারিখ `"YYYY-MM-DD"` |
| `ember:v1:task` | কাজ শেষের তারিখ। id = দিন + কাজের **লেখা** থেকে hash — লেখা বদলালে টিক হারায় |
| `ember:v1:check` | দিন শেষ (`d007`) ও ব্লক শেষ (`b1`)-এর হ্যাঁ/না |
| `ember:v1:review` | 🔁 ঝালাইয়ের অবস্থা `{ base, step }` |
| `ember:v1:meta` | sync-এর শেষ timestamp |

## চালানো

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → out/
```

push করলে `.github/workflows/deploy.yml` সাইটটা GitHub Pages-এ তোলে। build-এ repo secret লাগে: `NEXT_PUBLIC_SUPABASE_URL` আর `NEXT_PUBLIC_SUPABASE_ANON_KEY` — না থাকলে build সফল হয়, কিন্তু sync চুপচাপ বন্ধ থাকে।
