"use client";

import { useState, type FormEvent } from "react";

interface WaitlistFormProps {
  variant: "hero" | "footer";
}

export default function WaitlistForm({ variant }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // TODO: Replace with actual API endpoint (e.g. server action, Resend, Mailchimp, etc.)
    await new Promise((resolve) => setTimeout(resolve, 800));

    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
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
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="primary-gradient text-on-primary px-8 py-4 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {status === "loading" ? "Joining..." : status === "success" ? "You're in!" : "Join the Waitlist"}
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
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email@example.com"
        className="bg-surface-container py-3 px-6 rounded-xl border-0 focus:ring-2 focus:ring-primary min-w-[300px]"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="primary-gradient text-on-primary px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : status === "success" ? "You're in!" : "Submit"}
      </button>
    </form>
  );
}
