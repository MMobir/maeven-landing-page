"use client";

import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="bg-blush-pale border-t border-b border-blush-light py-20 px-6 md:px-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <span className="font-[family-name:var(--font-cormorant)] text-[80px] font-light text-blush leading-[0.6] block mb-6">
          &ldquo;
        </span>
        <p className="font-[family-name:var(--font-cormorant)] font-light text-[clamp(24px,3vw,38px)] leading-[1.4] text-charcoal max-w-[700px] mx-auto mb-6 italic">
          I&apos;m not doing more work than my husband. I&apos;m just the one
          who knows everything has to be done.
        </p>
        <p className="text-xs font-normal tracking-[0.15em] uppercase text-charcoal-light">
          Every mom, everywhere
        </p>
      </motion.div>
    </section>
  );
}
