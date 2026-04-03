"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: "👨‍👩‍👧‍👦",
    title: "Tell Maeven about your people",
    body: "Add your family members, their birthdays, their doctors, their schools. The more context, the smarter Maeven gets.",
  },
  {
    num: "02",
    icon: "🔗",
    title: "Connect your calendar and email",
    body: "Maeven reads your existing life — no manual entry. It finds gaps, upcoming deadlines, and things that need attention.",
  },
  {
    num: "03",
    icon: "✨",
    title: "Maeven handles the rest",
    body: "Proactive nudges, gift ideas, appointment suggestions, task delegation to your partner. The right thing at the right time.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-charcoal py-[100px] px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto">
        <motion.p
          className="text-[10px] font-medium tracking-[0.25em] uppercase text-white/40 mb-5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          How it works
        </motion.p>

        <motion.h2
          className="font-[family-name:var(--font-cormorant)] font-light text-[clamp(36px,4vw,46px)] leading-[1.15] text-cream text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Smart enough to <em className="italic text-blush">notice.</em>
          <br />
          Thoughtful enough to act.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="p-8 bg-white/[0.04] border border-white/10 rounded-2xl relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-white/[0.08] leading-none mb-4">
                {step.num}
              </div>
              <span className="text-2xl block mb-4">{step.icon}</span>
              <h3 className="font-[family-name:var(--font-cormorant)] text-[22px] font-normal text-cream mb-[10px] leading-snug">
                {step.title}
              </h3>
              <p className="text-[13px] font-light leading-[1.8] text-white/50">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
