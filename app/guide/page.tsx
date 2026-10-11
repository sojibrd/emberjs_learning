import type { Metadata } from "next";
import Link from "next/link";
import { toBnDigits } from "../lib/dates";
import { getGuideRules, getGuideSections } from "../lib/guide";
import { getRuleDays } from "../lib/plan";

export const metadata: Metadata = { title: "গাইড" };

/**
 * সব rule, উৎসের সেকশন ধরে। রেফারেন্স — রোজ এখান থেকে শুরু নয়, শুরু "আজ" থেকে।
 * plan-এর ক্রম আলাদা (ইন্টারভিউর ক্রম), তাই কোন rule কোন দিনে তা পাশে।
 * 🧠 Create a roadmap
 */
export default function GuidePage() {
  const sections = getGuideSections();
  const rules = getGuideRules();
  const ruleDays = getRuleDays();

  return (
    <>
      <header className="flex flex-col gap-2">
        <h1 className="t-title text-2xl sm:text-3xl">গাইড</h1>
        <p className="t-body measure text-sm">
          <code>ember-best-practices</code>-এর {toBnDigits(rules.length)}টা rule, হুবহু ইংরেজিতে। প্রতিটা পাতায় আগে
          Incorrect কোড, তার নিচে ভাঁজ করা Correct আর ব্যাখ্যা — আগে নিজে লিখুন, তারপর খুলুন।
        </p>
      </header>

      {sections.map((section) => {
        const items = rules.filter((rule) => rule.sectionNum === section.num);
        if (items.length === 0) return null;
        return (
          <section key={section.num} className="surface-panel flex flex-col gap-3 p-4 sm:p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="t-title text-base sm:text-lg">
                {section.num} · {section.name}
              </h2>
              <span className="chip shrink-0">{toBnDigits(items.length)}</span>
            </div>
            <p className="t-caption">{section.description}</p>
            <ul className="flex flex-col gap-1">
              {items.map((rule) => (
                <li key={rule.slug}>
                  <Link href={`/guide/${rule.slug}/`} className="row flex items-center gap-3 px-3 py-2 text-sm">
                    <span className="min-w-0 flex-1 truncate">{rule.title}</span>
                    {(ruleDays[rule.slug] ?? []).map((day) => (
                      <span key={day.code} className="chip chip--accent shrink-0">
                        দিন {day.label}
                      </span>
                    ))}
                    <span className="chip hidden shrink-0 sm:inline-flex">{rule.impact}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
}
