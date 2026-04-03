"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-stone/60">
      <div className="flex items-center justify-between px-6 md:px-12 py-5 max-w-[1440px] mx-auto">
        <a
          href="#"
          className="font-[family-name:var(--font-cormorant)] font-light text-[26px] tracking-[0.12em] text-charcoal no-underline"
        >
          maeven
        </a>

        <a
          href="#waitlist"
          className="hidden md:inline-block text-[13px] font-normal tracking-[0.06em] text-charcoal bg-transparent border-[1.5px] border-charcoal px-[22px] py-[9px] rounded-full no-underline transition-all duration-200 hover:bg-charcoal hover:text-cream"
        >
          Join the waitlist
        </a>

        <button
          className="md:hidden text-charcoal"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-stone/40 px-6 py-4"
          >
            <a
              href="#waitlist"
              onClick={() => setMobileOpen(false)}
              className="block text-center text-[13px] font-normal tracking-[0.06em] text-charcoal border-[1.5px] border-charcoal px-6 py-3 rounded-full no-underline transition-all duration-200 hover:bg-charcoal hover:text-cream"
            >
              Join the waitlist
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
