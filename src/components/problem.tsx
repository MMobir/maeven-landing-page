"use client";

import { motion } from "framer-motion";

const brainItems = [
  { text: "Zoe's birthday — 3 weeks — need gift", cat: "Birthday", catClass: "bg-sage-pale text-sage", done: true },
  { text: "Lila's annual checkup — 14 months overdue", cat: "Medical", catClass: "bg-blush-pale text-clay", done: true },
  { text: "School permission slip due Friday", cat: "School", catClass: "bg-clay/10 text-clay-deep", done: false },
  { text: "Prescription refill — running out", cat: "Medical", catClass: "bg-blush-pale text-clay", done: false },
  { text: "Mom's birthday — did we plan anything?", cat: "Birthday", catClass: "bg-sage-pale text-sage", done: false },
  { text: "Car registration renewal this month", cat: "Admin", catClass: "bg-charcoal/[0.08] text-charcoal-light", done: false },
];

export default function Problem() {
  return (
    <section className="bg-cream">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-charcoal-light mb-5">
            The problem
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] font-light text-[42px] leading-[1.2] text-charcoal mb-6">
            It&apos;s not the doing.
            <br />
            It&apos;s the <em className="italic text-clay">knowing</em>
            <br />
            it needs to be done.
          </h2>
          <p className="text-[15px] font-light leading-[1.9] text-charcoal-mid mb-4">
            You&apos;ve split the chores. You&apos;ve asked for help. But somehow you&apos;re
            still the one who knows the dentist appointment is overdue, the birthday
            is in two weeks, the school form is due Friday.
          </p>
          <p className="text-[15px] font-light leading-[1.9] text-charcoal-mid mb-4">
            The exhausting part isn&apos;t the tasks. It&apos;s holding all of it in your
            head, all the time, never getting a break.
          </p>
          <div className="inline-flex items-center gap-[10px] py-3 px-[18px] bg-sage-pale border border-sage-light rounded-full text-[13px] font-normal text-charcoal-mid mt-2">
            <span className="font-[family-name:var(--font-cormorant)] text-2xl font-normal text-sage leading-none">6–10</span>
            hours per week spent on invisible family mental labor
          </div>
        </motion.div>

        {/* Brain dump card */}
        <motion.div
          className="bg-warm-white border border-stone rounded-[20px] p-8 relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-charcoal-light mb-5">
            Things in my head right now
          </p>

          {brainItems.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3 py-[10px] border-b border-stone last:border-b-0 text-[13px] text-charcoal-mid font-light leading-snug"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
            >
              <div
                className={`w-4 h-4 rounded-full shrink-0 mt-0.5 border-[1.5px] flex items-center justify-center ${
                  item.done
                    ? "bg-sage border-sage"
                    : "border-stone-mid bg-transparent"
                }`}
              >
                {item.done && (
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="flex-1">{item.text}</span>
              <span className={`text-[9px] font-medium tracking-[0.15em] uppercase px-2 py-[2px] rounded-full shrink-0 ${item.catClass}`}>
                {item.cat}
              </span>
            </motion.div>
          ))}

          <div className="mt-5 p-[14px] px-4 bg-sage-pale border border-sage-light rounded-xl flex gap-[10px] items-center">
            <div className="w-8 h-8 bg-sage rounded-lg flex items-center justify-center text-sm shrink-0">
              ✨
            </div>
            <p className="text-xs text-charcoal-mid font-normal leading-relaxed">
              <strong className="text-charcoal font-medium">Maeven handled 2 of these.</strong>{" "}
              The rest are on your radar with a plan attached.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
