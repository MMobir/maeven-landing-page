"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { joinWaitlist } from "@/app/actions/waitlist";

interface WaitlistFormProps {
  variant: "hero" | "final";
}

function getTallyUrl(email: string): string | null {
  const raw = process.env.NEXT_PUBLIC_TALLY_FORM_ID;
  if (!raw) return null;

  // Handle both bare IDs ("obd0YN") and full URLs someone might paste
  const match = raw.match(/([A-Za-z0-9]+)$/);
  const id = match ? match[1] : raw;
  return `https://tally.so/r/${id}?email=${encodeURIComponent(email)}`;
}

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
  }

  const tallyUrl = getTallyUrl(email);

  /* ── Hero variant (light background) ── */
  if (variant === "hero") {
    return (
      <div>
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-3 py-5 max-w-[480px]"
            >
              <div className="w-11 h-11 rounded-full bg-sage flex items-center justify-center text-white text-lg">
                ✓
              </div>
              <p className="font-[family-name:var(--font-cormorant)] text-2xl font-light italic text-charcoal">
                You&apos;re on the list.
              </p>
              <p className="text-[13px] text-charcoal-light font-light leading-relaxed text-center">
                We&apos;ll be in touch when it&apos;s your turn.
              </p>

              {tallyUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mt-3 flex flex-col items-center gap-2"
                >
                  <div className="w-12 h-px bg-stone-mid" />
                  <p className="text-[13px] text-charcoal-mid font-light leading-relaxed text-center mt-1">
                    Want <strong className="font-medium text-charcoal">priority access</strong>?
                    <br />
                    Answer a few quick questions so we can build Maeven around your life.
                  </p>
                  <a
                    href={tallyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-2 py-[10px] px-6 bg-charcoal text-cream rounded-full text-[13px] font-normal tracking-[0.04em] transition-all duration-200 hover:bg-clay-deep no-underline"
                  >
                    Unlock priority access
                    <span className="text-[11px] opacity-60">→</span>
                  </a>
                  <p className="text-[11px] text-charcoal-light/60 font-light">
                    Takes less than 2 minutes
                  </p>
                </motion.div>
              )}
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

  /* ── Final CTA variant (sage background) ── */
  return (
    <div>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-3 py-5 max-w-[480px] mx-auto"
          >
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-sage text-lg">
              ✓
            </div>
            <p className="font-[family-name:var(--font-cormorant)] text-[22px] font-light italic text-white">
              You&apos;re on the list.
            </p>
            <p className="text-[13px] text-white/70 font-light leading-relaxed text-center">
              We&apos;ll be in touch when it&apos;s your turn.
            </p>

            {tallyUrl && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-3 flex flex-col items-center gap-2"
              >
                <div className="w-12 h-px bg-white/20" />
                <p className="text-[13px] text-white/70 font-light leading-relaxed text-center mt-1">
                  Want <strong className="font-medium text-white">priority access</strong>?
                  <br />
                  Answer a few quick questions so we can build Maeven around your life.
                </p>
                <a
                  href={tallyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 py-[10px] px-6 bg-white text-sage rounded-full text-[13px] font-medium tracking-[0.04em] transition-all duration-200 hover:bg-cream no-underline"
                >
                  Unlock priority access
                  <span className="text-[11px] opacity-60">→</span>
                </a>
                <p className="text-[11px] text-white/40 font-light">
                  Takes less than 2 minutes
                </p>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-[10px] max-w-[420px] mx-auto mb-4"
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
