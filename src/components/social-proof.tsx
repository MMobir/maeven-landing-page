"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
  return (
    <section className="w-full bg-surface-container-low py-12">
      <motion.div
        className="max-w-[1440px] mx-auto px-8 md:px-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm uppercase tracking-[0.2em] text-on-surface-variant/60 font-medium">
          Built for the 80% of women carrying the invisible mental load of the
          household.
        </p>
      </motion.div>
    </section>
  );
}
