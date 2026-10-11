import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "../../components/Markdown";
import Pager from "../../components/Pager";
import RuleReveal from "../../components/RuleReveal";
import { getGuideRule, getGuideRules } from "../../lib/guide";
import { getRuleDays } from "../../lib/plan";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getGuideRules().map((rule) => ({ slug: rule.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: getGuideRule(slug)?.title ?? "গাইড" };
}

/**
 * একটা rule: Incorrect কোড আগে, পুরো rule (ব্যাখ্যা, Correct, Reference) ভাঁজ করা।
 *
 * পুরো লেখাটা উৎসের হুবহু — কাটা বা সাজানো নয়, তাই Incorrect কোডটা ভাঁজের ভেতরে
 * আরেকবার আসে। plan-এ এই rule-এর কাজে টিক থাকলে ভাঁজ নিজে খোলে।
 * 🧠 Test yourself · Active vs Passive learning
 */
export default async function GuideRulePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const rules = getGuideRules();
  const index = rules.findIndex((rule) => rule.slug === slug);
  if (index === -1) notFound();

  const rule = rules[index];
  const days = getRuleDays()[rule.slug] ?? [];
  const prev = rules[index - 1];
  const next = rules[index + 1];

  return (
    <>
      <header className="flex flex-col gap-2">
        <div className="t-label flex flex-wrap items-center gap-2">
          <Link href="/guide/" className="t-accent">
            গাইড
          </Link>
          <span>•</span>
          <span>
            {rule.sectionNum} · {rule.sectionName}
          </span>
        </div>
        <h1 className="t-title text-2xl sm:text-3xl">{rule.title}</h1>
        <div className="flex flex-wrap gap-1.5">
          <span className="chip">impact · {rule.impact}</span>
          {rule.impactDescription && <span className="chip">{rule.impactDescription}</span>}
          {days.map((day) => (
            <Link key={day.code} href={`/day/${day.code}/`} className="chip chip--accent">
              plan · দিন {day.label}
            </Link>
          ))}
        </div>
      </header>

      <section className="surface-panel flex flex-col gap-3 p-4 sm:p-6">
        <div className="t-label">আগে নিজে — এই কোডে কী ভুল, ঠিকটা কেমন হবে?</div>
        <Markdown>{rule.problem}</Markdown>
      </section>

      <RuleReveal taskIds={days.map((day) => day.taskId)}>
        <Markdown>{rule.body}</Markdown>
      </RuleReveal>

      <Pager
        label="rule"
        prev={prev && { href: `/guide/${prev.slug}/`, label: prev.title }}
        next={next && { href: `/guide/${next.slug}/`, label: next.title }}
      />
    </>
  );
}
