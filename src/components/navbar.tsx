"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./logo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass-nav">
      <div className="flex justify-between items-center w-full px-8 md:px-16 py-6 max-w-[1440px] mx-auto">
        <a href="#">
          <Logo markSize={28} />
        </a>

        <div className="hidden md:flex gap-10 items-center">
          <a
            href="#how-it-works"
            className="text-on-surface/60 font-medium hover:text-on-surface transition-colors"
          >
            How it Works
          </a>
          <a
            href="#philosophy"
            className="text-on-surface/60 font-medium hover:text-on-surface transition-colors"
          >
            Philosophy
          </a>
          <a
            href="#waitlist"
            className="text-on-surface/60 font-medium hover:text-on-surface transition-colors"
          >
            Waitlist
          </a>
          <a
            href="#waitlist"
            className="primary-gradient text-on-primary px-6 py-2.5 rounded-xl font-medium hover:opacity-80 transition-opacity duration-300"
          >
            Join the Waitlist
          </a>
        </div>

        <button
          className="md:hidden text-on-surface"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
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
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-outline-variant/20"
          >
            <div className="flex flex-col gap-4 px-8 py-6">
              <a
                href="#how-it-works"
                className="text-on-surface/60 font-medium hover:text-on-surface transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                How it Works
              </a>
              <a
                href="#philosophy"
                className="text-on-surface/60 font-medium hover:text-on-surface transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Philosophy
              </a>
              <a
                href="#waitlist"
                className="text-on-surface/60 font-medium hover:text-on-surface transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Waitlist
              </a>
              <a
                href="#waitlist"
                className="primary-gradient text-on-primary px-6 py-2.5 rounded-xl font-medium text-center hover:opacity-80 transition-opacity duration-300"
                onClick={() => setMobileOpen(false)}
              >
                Join the Waitlist
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
