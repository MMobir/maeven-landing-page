"use client";

import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section className="py-[100px] px-6 md:px-12 max-w-[800px] mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-charcoal-light mb-5">
          Why we&apos;re building this
        </p>
        <p className="font-[family-name:var(--font-cormorant)] font-light text-[28px] leading-[1.6] text-charcoal mb-6">
          I&apos;m not a mom yet. But I&apos;m already{" "}
          <em className="italic text-clay">the one who holds everything.</em>
        </p>
        <p className="text-[15px] font-light leading-[1.9] text-charcoal-mid">
          My brain never stops. I track appointments, birthdays, plans, deadlines
          — for my partner, my family, my friends. I can only imagine what this
          feels like once there are kids in the picture. Maeven is the thing
          I&apos;m building now, before the chaos hits — because nobody should
          have to be the family&apos;s operating system.
        </p>
      </motion.div>
    </section>
  );
}
