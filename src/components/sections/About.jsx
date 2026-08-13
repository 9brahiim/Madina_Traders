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
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-green-mid">
          <svg
            viewBox="0 0 400 530"
            fill="none"
            className="absolute inset-0 h-full w-full"
          >
            <rect
              x="60"
              y="40"
              width="280"
              height="460"
              rx="3"
              fill="#0A2A1A"
              stroke="#C9A84C"
              strokeWidth="1"
            />
            <rect
              x="85"
              y="65"
              width="230"
              height="200"
              rx="1"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.7"
              strokeOpacity="0.6"
            />
            <rect
              x="110"
              y="90"
              width="180"
              height="150"
              rx="1"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.4"
              strokeOpacity="0.4"
            />
            <rect
              x="85"
              y="285"
              width="230"
              height="180"
              rx="1"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.7"
              strokeOpacity="0.6"
            />
            <rect
              x="110"
              y="308"
              width="180"
              height="134"
              rx="1"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.4"
              strokeOpacity="0.4"
            />
            <rect
              x="335"
              y="250"
              width="14"
              height="44"
              rx="7"
              fill="#C9A84C"
            />
            <circle cx="342" cy="298" r="7" fill="#C9A84C" opacity="0.6" />
            <rect
              x="40"
              y="20"
              width="320"
              height="500"
              rx="4"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="2"
            />
            <rect
              x="30"
              y="10"
              width="340"
              height="520"
              rx="5"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.5"
              strokeOpacity="0.3"
            />
          </svg>
        </div>
        <div className="absolute -bottom-5 -right-5 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-gold">
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
        <h2 className="font-display text-[clamp(32px,4vw,52px)] font-light leading-[1.1] text-ink">
          Crafting <em className="italic text-green-mid">Entrances</em>
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
