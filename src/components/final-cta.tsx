"use client";

import { motion } from "framer-motion";
import WaitlistForm from "./waitlist-form";

export default function FinalCta() {
  return (
    <section id="waitlist" className="bg-sage py-[100px] px-6 md:px-12 text-center">
      <motion.h2
        className="font-[family-name:var(--font-cormorant)] font-light text-[clamp(40px,5vw,64px)] leading-[1.1] text-white mb-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Your brain deserves
        <br />
        a <em className="italic text-white/70">rest.</em>
      </motion.h2>
      <motion.p
        className="text-base font-light text-white/70 mb-11 tracking-[0.02em]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Join the waitlist for early access. Free to start.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <WaitlistForm variant="final" />
      </motion.div>
    </section>
  );
}
