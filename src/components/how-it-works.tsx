"use client";

import { motion } from "framer-motion";

const steps = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "The Brain Dump",
    description:
      "Just speak. Tell Maeven what needs doing on your drive to work. Our natural language processing captures every nuance of your household's unique needs.",
    step: "01",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    title: "Autopilot Execution",
    description:
      "Maeven connects to Instacart, Amazon, and your Calendar to get it done. It doesn't just add items to a list; it fills your cart and schedules the delivery.",
    step: "02",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "Neutral Delegation",
    description:
      "Maeven assigns tasks to your partner via SMS, holding them accountable without you saying a word. Delegating without the emotional labor.",
    step: "03",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <motion.div
          className="text-center mb-24 max-w-2xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[family-name:var(--font-manrope)] text-4xl md:text-5xl font-bold tracking-tight">
            How it Works
          </h2>
          <p className="text-on-surface-variant text-lg">
            Sophisticated AI that feels like a quiet conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              className="bg-surface-container-lowest p-10 rounded-3xl editorial-shadow group hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="font-[family-name:var(--font-manrope)] text-2xl font-bold mb-4">
                {step.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                {step.description}
              </p>
              <span className="text-sm font-bold uppercase tracking-widest text-primary/40">
                Step {step.step}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
