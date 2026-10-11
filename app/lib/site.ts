/**
 * সাইটের পরিচয় — plan-এর কনটেন্ট নয়, তাই `docs/`-এ নয়, এখানে।
 *
 * chassis `dsa_prep_local_company` থেকে; এই সাইট একটাই পথ, তিন repo-র পরিবার নয়।
 */
export const SITE: {
  title: string;
  short: string;
  emoji: string;
  description: string;
  storagePrefix: string;
  suggestedStart: string | null;
} = {
  title: "Ember.js — কীভাবে থেকে কেন",
  short: "emberjs learning",
  emoji: "🐹",
  description:
    "আধুনিক Ember-এর ৫৮টা best practice — দিনে একটা, ১০′: Incorrect কোড দেখে না দেখে ঠিকটা লেখা আর কেন ইংরেজিতে বলা, ঝালাইসহ।",
  /** localStorage key-এর prefix */
  storagePrefix: "ember",
  /** শুরুর তারিখের প্রস্তাব নেই — কখন বসবেন ⏳ */
  suggestedStart: null,
};
