"use client";

import { motion } from "framer-motion";
import WaitlistForm from "./waitlist-form";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-[120px] pb-20 relative overflow-hidden text-center">
      <div className="hero-bg-gradient absolute inset-0 pointer-events-none" />

      {/* Floating notifications — desktop only */}
      <motion.div
        className="hidden lg:block absolute left-[5%] top-[35%] animate-float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="bg-warm-white border border-stone rounded-[14px] p-[14px] pr-5 flex gap-3 items-start shadow-[0_8px_32px_rgba(44,40,37,0.1)] max-w-[240px] text-left">
          <span className="text-lg shrink-0 mt-0.5">🎂</span>
          <div>
            <p className="text-xs font-medium text-charcoal mb-0.5 leading-snug">Zoe&apos;s birthday in 3 weeks</p>
            <p className="text-[11px] text-charcoal-light font-light leading-relaxed">Here are 3 gift ideas based on her interests.</p>
            <p className="text-[10px] text-sage font-medium tracking-[0.08em] mt-1">maeven</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute right-[5%] top-[45%] animate-float-delayed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="bg-warm-white border border-stone rounded-[14px] p-[14px] pr-5 flex gap-3 items-start shadow-[0_8px_32px_rgba(44,40,37,0.1)] max-w-[240px] text-left">
          <span className="text-lg shrink-0 mt-0.5">🩺</span>
          <div>
            <p className="text-xs font-medium text-charcoal mb-0.5 leading-snug">Annual checkup overdue</p>
            <p className="text-[11px] text-charcoal-light font-light leading-relaxed">3 open slots this week that fit your schedule.</p>
            <p className="text-[10px] text-sage font-medium tracking-[0.08em] mt-1">maeven</p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="flex items-center gap-[10px] text-[11px] font-medium tracking-[0.25em] uppercase text-sage mb-6"
        {...fadeUp(0.1)}
      >
        <div className="w-8 h-px bg-sage-light" />
        Early access · Joining now
        <div className="w-8 h-px bg-sage-light" />
      </motion.div>

      <motion.h1
        className="font-[family-name:var(--font-cormorant)] font-light text-[clamp(48px,7vw,88px)] leading-[1.08] tracking-[0.01em] text-charcoal max-w-[780px] mb-7"
        {...fadeUp(0.25)}
      >
        The things living
        <br />
        in your head — <em className="italic text-clay">finally handled.</em>
      </motion.h1>

      <motion.p
        className="font-light text-lg leading-[1.7] text-charcoal-mid max-w-[520px] mb-12"
        {...fadeUp(0.4)}
      >
        Maeven is the AI that notices what needs doing before you have to think about it.
        Birthdays, checkups, school deadlines, appointments — the invisible load, lifted.
      </motion.p>

      <motion.div className="w-full flex flex-col items-center" {...fadeUp(0.55)}>
        <WaitlistForm variant="hero" />
      </motion.div>
    </section>
  );
}
