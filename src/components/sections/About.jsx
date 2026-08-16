"use client";

import { motion } from "framer-motion";

const features = [
  { label: "Termite & Fire Proof" },
  { label: "Weather Resistant" },
  { label: "Multi-Point Locking" },
  { label: "100+ Designs" },
];

export default function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 gap-16 border-t border-ink/10 gold-surface px-6 py-24 md:grid-cols-2 md:gap-20 md:px-20 md:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10"
        style={{ filter: "drop-shadow(0 28px 54px rgba(7,25,13,0.28))" }}
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-green-mid">
          <svg
            viewBox="0 0 400 530"
            fill="none"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              <linearGradient id="ad-body" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e6b40" />
                <stop offset="55%" stopColor="#0f4a2b" />
                <stop offset="100%" stopColor="#082617" />
              </linearGradient>
              <linearGradient id="ad-frame" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#E8D5A3" />
                <stop offset="50%" stopColor="#C9A84C" />
                <stop offset="100%" stopColor="#8B7035" />
              </linearGradient>
              <linearGradient id="ad-handle" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#F3E3B4" />
                <stop offset="45%" stopColor="#D8B75A" />
                <stop offset="100%" stopColor="#8B7035" />
              </linearGradient>
            </defs>

            {/* Outer wall/frame lines */}
            <rect
              x="30" y="10" width="340" height="520" rx="5"
              stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.3"
            />
            <rect
              x="40" y="20" width="320" height="500" rx="4"
              stroke="url(#ad-frame)" strokeWidth="2.5"
            />

            {/* Door body — gradient for real dimensionality */}
            <rect
              x="60" y="40" width="280" height="460" rx="3"
              fill="url(#ad-body)"
              stroke="url(#ad-frame)"
              strokeWidth="1.5"
            />

            {/* Upper panel — nested mouldings for a carved, defined look */}
            <rect x="85" y="65" width="230" height="212" rx="2" fill="none" stroke="#C9A84C" strokeWidth="1.4" strokeOpacity="0.85" />
            <rect x="101" y="81" width="198" height="180" rx="1.5" fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.55" />
            <rect x="119" y="99" width="162" height="144" rx="1" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.35" />

            {/* Mid rail */}
            <line x1="60" y1="297" x2="340" y2="297" stroke="#C9A84C" strokeWidth="0.6" strokeOpacity="0.3" />

            {/* Lower panel — matching nested mouldings */}
            <rect x="85" y="316" width="230" height="150" rx="2" fill="none" stroke="#C9A84C" strokeWidth="1.4" strokeOpacity="0.85" />
            <rect x="101" y="332" width="198" height="118" rx="1.5" fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.55" />

            {/* Handle — metallic gradient bar + escutcheon */}
            <rect x="332" y="248" width="15" height="66" rx="7.5" fill="url(#ad-handle)" />
            <rect x="335" y="253" width="4" height="52" rx="2" fill="#F8ECC9" fillOpacity="0.5" />
            <circle cx="339.5" cy="330" r="8" fill="url(#ad-handle)" />
            <circle cx="339.5" cy="330" r="8" fill="none" stroke="#5C4A22" strokeWidth="0.5" strokeOpacity="0.4" />
          </svg>
        </div>
        <div className="absolute -bottom-5 -right-5 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-gold shadow-[0_16px_32px_rgba(139,112,53,0.4)]">
          <strong className="font-sans text-3xl font-semibold text-green-deep">
            15
          </strong>
          <span className="text-[8px] uppercase tracking-[0.15em] text-green-deep">
            Years
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10"
      >
        <div className="mb-4 flex items-center gap-4 text-[9px] uppercase tracking-[0.35em] text-green-mid">
          <span className="h-px w-6 bg-green-mid" />
          Our Story
        </div>
        <h2 className="font-display text-[clamp(32px,4vw,52px)] font-normal leading-[1.1] text-ink">
          Crafting <em className="italic font-medium text-green-mid">Entrances</em>
          <br />
          Since Day One
        </h2>
        <p className="mt-7 max-w-[480px] text-[14px] leading-[1.9] text-ink-muted">
          Rooted in Barabanki, Madina Traders has been a trusted name for
          premium doors across Uttar Pradesh. Every door we supply carries the
          weight of craftsmanship, the promise of security, and the elegance
          that transforms a house into a home.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.label}
              className="rounded-sm border border-gold/20 bg-green-mid p-4 transition-colors hover:border-gold/40 hover:bg-green-base"
            >
              <span className="text-[11px] font-medium tracking-wide text-cream">
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}