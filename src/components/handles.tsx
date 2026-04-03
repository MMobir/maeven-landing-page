"use client";

import { motion } from "framer-motion";

const cards = [
  { emoji: "🎂", title: "Birthdays", desc: "Remembers every birthday, suggests gifts based on interests, reminds you to order in time." },
  { emoji: "🩺", title: "Medical", desc: "Tracks when checkups are due, finds open appointments, suggests times that work for your schedule." },
  { emoji: "🏫", title: "School", desc: "Permission slips, form deadlines, school events — nothing slips through because it's in someone's inbox." },
  { emoji: "🎉", title: "Celebrations", desc: "Birthday parties, holiday planning, family events — Maeven helps you plan before the panic sets in." },
  { emoji: "👫", title: "Partner delegation", desc: 'Assign tasks to your partner with context — not just "handle the dentist" but everything they need to know.' },
  { emoji: "🌱", title: "And much more", desc: "Extracurriculars, prescriptions, anniversaries, friend birthdays. The list grows as Maeven learns your life." },
];

export default function Handles() {
  return (
    <section className="bg-cream">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-[100px]">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-charcoal-light mb-4">
            What Maeven handles
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] font-light text-[clamp(34px,4vw,44px)] leading-[1.15] text-charcoal">
            All the things that <em className="italic text-clay">live rent-free</em>
            <br />
            in your head
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-warm-white border border-stone rounded-2xl p-7 transition-all duration-200 hover:border-sage-light hover:shadow-[0_4px_20px_rgba(138,158,140,0.15)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="text-[28px] block mb-3.5">{card.emoji}</span>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-normal text-charcoal mb-2">
                {card.title}
              </h3>
              <p className="text-[13px] font-light leading-[1.7] text-charcoal-light">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
