"use client";

import { useMounted, useProgress } from "../hooks/useProgress";

/**
 * rule-এর Correct আর ব্যাখ্যা — ভাঁজ করা। plan-এ এই rule-এর কাজে টিক পড়ে থাকলে
 * নিজে থেকে খোলা; না পড়লে বন্ধ, কারণ Correct খোলা থাকলে চোখ চলে যায় আর "বুঝেছি"
 * মনে হওয়া আর নিজে লিখতে পারা আলাদা জিনিস। 🧠 Test yourself
 */
export default function RuleReveal({ taskIds, children }: { taskIds: string[]; children: React.ReactNode }) {
  const mounted = useMounted();
  const { isTaskDone } = useProgress();

  const done = mounted && taskIds.some((id) => isTaskDone(id));

  return (
    <details className="surface-panel p-4 sm:p-6" open={done || undefined}>
      <summary className="t-label cursor-pointer select-none">
        {done
          ? "পুরো rule · Correct আর ব্যাখ্যা — কাজে টিক দেওয়া আছে"
          : "পুরো rule · Correct আর ব্যাখ্যা — আগে নিজে লিখুন, তারপর খুলুন"}
      </summary>
      <div className="mt-4">{children}</div>
    </details>
  );
}
