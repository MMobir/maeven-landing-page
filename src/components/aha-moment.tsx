"use client";

import { motion } from "framer-motion";

const smsBubbles = [
  {
    from: "maeven",
    text: "Hi Dave. Maeven here. The kitchen sink is leaking. I have added the replacement pipe to your Home Depot cart for pickup and attached a YouTube tutorial.",
  },
  {
    from: "maeven",
    text: "Reply '1' to fix it by Sunday, or reply '2' and I will automatically book a TaskRabbit plumber for $150.",
  },
  { from: "user", text: "2" },
  { from: "maeven", text: "Confirmed. Plumber booked for Tuesday at 10 AM." },
];

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Neutral Third-Party",
    desc: "Removes the emotional friction of domestic management by acting as an objective project manager.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    title: "Instant Friction Removal",
    desc: "Carts are pre-loaded, tutorials are attached, and service providers are one click away.",
  },
];

export default function AhaMoment() {
  return (
    <section id="philosophy" className="py-32 bg-surface">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Phone mockup */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="max-w-md mx-auto bg-[#F2F2F7] rounded-[3rem] p-8 editorial-shadow border-[8px] border-on-surface aspect-[9/16] flex flex-col">
              {/* Status bar */}
              <div className="flex justify-between items-center mb-8 px-4">
                <span className="text-sm font-bold">9:41</span>
                <div className="flex gap-1.5">
                  <div className="w-4 h-4 rounded-full border border-on-surface/20" />
                  <div className="w-4 h-4 rounded-full bg-on-surface" />
                </div>
              </div>

              <div className="flex-grow space-y-6">
                {/* Contact header */}
                <div className="flex flex-col items-center mb-10">
                  <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                    </svg>
                  </div>
                  <p className="text-xs font-bold text-on-surface/40">
                    Maeven Concierge
                  </p>
                </div>

                {/* SMS bubbles with staggered animation */}
                {smsBubbles.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.2 }}
                    className={
                      msg.from === "maeven"
                        ? "bg-primary text-on-primary p-5 rounded-2xl rounded-tl-none text-[15px] leading-relaxed shadow-sm"
                        : "bg-on-surface-variant/10 text-on-surface ml-auto p-4 rounded-2xl rounded-tr-none text-[15px] max-w-[80%]"
                    }
                  >
                    {msg.text}
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-on-surface/5">
                <div className="bg-white rounded-full py-3 px-5 text-on-surface/30 text-sm">
                  Text Message
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="font-[family-name:var(--font-manrope)] text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              The Ultimate Husband Delegation Engine
            </h2>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Say goodbye to the &ldquo;Where is the...?&rdquo; and &ldquo;Can
              you...?&rdquo; loop. Maeven speaks the language of action. We
              don&rsquo;t just remind; we provide the solution, the supplies, and
              the choice.
            </p>
            <div className="space-y-6 pt-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="flex gap-6 items-start"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                >
                  <div className="p-3 bg-primary-fixed rounded-full text-primary shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{f.title}</h4>
                    <p className="text-on-surface-variant">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
