"use client";

import { useState, type FormEvent } from "react";
import { joinWaitlist } from "@/app/actions/waitlist";

interface WaitlistFormProps {
  variant: "hero" | "footer";
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
      }, 600);
    } else {
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  if (variant === "hero") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
        <div className="flex-grow group relative">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-1 focus:ring-0 focus:border-primary transition-all text-lg placeholder:text-outline"
          />
          {status === "error" && (
            <p className="absolute -bottom-6 left-0 text-error text-sm">{errorMsg}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="primary-gradient text-on-primary px-8 py-4 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {status === "loading"
            ? "Joining..."
            : status === "success"
              ? "You're in! Redirecting..."
              : "Join the Waitlist"}
          {status === "idle" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          )}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <div className="relative">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@example.com"
          className="bg-surface-container py-3 px-6 rounded-xl border-0 focus:ring-2 focus:ring-primary min-w-[300px]"
        />
        {status === "error" && (
          <p className="absolute -bottom-6 left-0 text-error text-sm">{errorMsg}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="primary-gradient text-on-primary px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all disabled:opacity-60"
      >
        {status === "loading"
          ? "Submitting..."
          : status === "success"
            ? "You're in!"
            : "Submit"}
      </button>
    </form>
  );
}
