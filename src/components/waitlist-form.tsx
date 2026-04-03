"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { joinWaitlist } from "@/app/actions/waitlist";

interface WaitlistFormProps {
  variant: "hero" | "final";
}

const TALLY_FORM_ID = process.env.NEXT_PUBLIC_TALLY_FORM_ID;

export default function WaitlistForm({ variant }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    const result = await joinWaitlist(email);

    if (!result.success) {
      setStatus("error");
      setErrorMsg(result.error ?? "Something went wrong.");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    setStatus("success");

    if (TALLY_FORM_ID) {
      setTimeout(() => {
        window.location.href = `https://tally.so/r/${TALLY_FORM_ID}?email=${encodeURIComponent(email)}`;
      }, 1200);
    }
  }

  if (variant === "hero") {
    return (
      <div>
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-2 py-5"
            >
              <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white text-lg">✓</div>
              <p className="font-[family-name:var(--font-cormorant)] text-xl font-light italic text-charcoal">
                You&apos;re on the list.
              </p>
              <p className="text-[13px] text-charcoal-light font-light">
                {TALLY_FORM_ID ? "Redirecting to a quick survey..." : "We'll be in touch when early access opens."}
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-[10px] max-w-[440px] w-full mb-4"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 py-[15px] px-5 border-[1.5px] border-stone-mid rounded-full bg-warm-white font-[family-name:var(--font-dm-sans)] text-sm font-light text-charcoal outline-none transition-colors duration-200 focus:border-sage placeholder:text-charcoal-light"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="py-[15px] px-7 bg-charcoal text-cream border-none rounded-full font-[family-name:var(--font-dm-sans)] text-[13px] font-normal tracking-[0.06em] cursor-pointer transition-all duration-200 whitespace-nowrap hover:bg-clay-deep disabled:opacity-60"
              >
                {status === "loading" ? "Joining..." : "Get early access"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
        {status === "error" && (
          <p className="text-sm text-red-600 mb-2">{errorMsg}</p>
        )}
        {status !== "success" && (
          <p className="text-xs text-charcoal-light font-light tracking-[0.02em]">
            No spam. No pressure. Just early access when we&apos;re ready.
          </p>
        )}
      </div>
    );
  }

  return (
    <div>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-2 py-5"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sage text-lg">✓</div>
            <p className="font-[family-name:var(--font-cormorant)] text-[22px] font-light italic text-white">
              You&apos;re on the list.
            </p>
            <p className="text-[13px] text-white/70 font-light">
              {TALLY_FORM_ID ? "Redirecting to a quick survey..." : "We'll be in touch when early access opens."}
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="flex gap-[10px] max-w-[420px] mx-auto mb-4"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 py-[15px] px-5 border-[1.5px] border-white/30 rounded-full bg-white/15 font-[family-name:var(--font-dm-sans)] text-sm font-light text-white outline-none transition-colors duration-200 focus:border-white/70 placeholder:text-white/50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="py-[15px] px-7 bg-white text-sage border-none rounded-full font-[family-name:var(--font-dm-sans)] text-[13px] font-medium tracking-[0.06em] cursor-pointer transition-all duration-200 whitespace-nowrap hover:bg-cream disabled:opacity-60"
            >
              {status === "loading" ? "Joining..." : "Join waitlist"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
      {status === "error" && (
        <p className="text-sm text-red-200 mb-2 text-center">{errorMsg}</p>
      )}
      {status !== "success" && (
        <p className="text-xs text-white/50 font-light text-center">
          No spam. Unsubscribe anytime.
        </p>
      )}
    </div>
  );
}
