"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WaitlistForm from "./waitlist-form";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  return (
    <header className="relative pt-20 pb-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-10">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="font-[family-name:var(--font-manrope)] text-5xl md:text-7xl font-extrabold tracking-[-0.04em] text-on-surface leading-[1.05]"
          >
            Stop nagging.
            <br />
            Start <span className="italic font-medium text-primary">delegating.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed"
          >
            Maeven is the AI Chief Operating Officer for your household. Dump
            your mental load, automate the groceries, and let Maeven manage the
            chores. Reclaim your time and your sanity.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <WaitlistForm variant="hero" />
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden editorial-shadow bg-surface-container-low border border-outline-variant/10">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC-oQsgpM-h0SGVKUnVLgutxoWSKkQEry0pOmnwqsMvbhXYawuEkYpjZT7D1wIt0FlVD_Tl4k3JI9aFmw3kdyXfe7RUvHHlbofnpY4qCSdy3puaDBKtqN8xsNBm_CLdqG4tVHWR-mw4swxB9ik1NXgLOo2uU7QRml3uh1wzmMabZ5YpG1gISvPODlDjFf4hU5yWPZJppEd1bx7jbbK-XDzRcfH9TmvA_l_z6Y5TBBeeGvJ6VeWzuyjTdBBD3R10xltnYsW2XKgg2AB"
              alt="Minimalist, sun-drenched modern living room with warm wood accents, linen textures, and a large window showing green trees"
              width={600}
              height={750}
              className="w-full h-full object-cover mix-blend-multiply opacity-90"
              priority
            />
          </div>

          <motion.div
            className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-8 rounded-2xl editorial-shadow max-w-[280px] border-l-[6px] border-secondary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-sm uppercase tracking-wider text-secondary font-bold mb-2">
              Household Status
            </p>
            <p className="text-on-surface font-medium italic">
              &ldquo;Maeven has successfully coordinated the grocery delivery and
              synced the school calendar.&rdquo;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
