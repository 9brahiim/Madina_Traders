"use client";

import { motion } from "framer-motion";
import { whyUs } from "@/data/site";

const iconPaths = [
  <path key="1" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  <>
    <path key="2a" d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
    <path key="2b" d="M12 6v6l4 2" />
  </>,
  <>
    <circle key="3a" cx="12" cy="12" r="3" />
    <path key="3b" d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
  </>,
  <path key="4" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
];

export default function WhyUs() {
  return (
    <section className="border-t border-ink/10 bg-gold-bg px-6 py-24 md:px-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <div className="mb-4 flex items-center justify-center gap-4 text-[9px] uppercase tracking-[0.35em] text-green-mid">
          <span className="h-px w-6 bg-green-mid" />
          Why Choose Us
          <span className="h-px w-6 bg-green-mid" />
        </div>
        <h2 className="font-display text-[clamp(32px,4vw,52px)] font-light text-ink">
          Built on <em className="italic text-green-mid">Promise</em>
        </h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 border border-ink/10 sm:grid-cols-2 lg:grid-cols-4">
        {whyUs.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border-b border-r border-ink/10 p-8 transition-colors last:border-r-0 hover:bg-green-mid/10 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-5 text-ink">
              {iconPaths[i]}
            </svg>
            <div className="mb-2 font-display text-xl font-medium text-ink">{item.title}</div>
            <p className="text-[12px] leading-[1.8] text-ink-muted">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}