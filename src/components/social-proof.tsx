"use client";

import { motion } from "framer-motion";

const proofs = [
  "Women spend 6–10 hrs/week on invisible family planning",
  "Built by someone who felt it before the chaos hit",
  "Free during early access",
];

export default function SocialProof() {
  return (
    <motion.div
      className="py-6 px-6 md:px-12 bg-warm-white border-t border-b border-stone flex items-center justify-center gap-12 flex-wrap"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {proofs.map((text, i) => (
        <div key={i} className="flex items-center gap-[10px] text-[13px] text-charcoal-light font-light">
          <div className="w-1.5 h-1.5 rounded-full bg-sage-light shrink-0" />
          {text}
        </div>
      ))}
    </motion.div>
  );
}
