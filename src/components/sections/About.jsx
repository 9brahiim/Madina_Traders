"use client";

import { motion } from "framer-motion";
import ProductDoodles from "@/components/ui/ProductDoodles";

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
      className="relative grid grid-cols-1 gap-10 overflow-hidden border-t border-ink/10 gold-surface px-6 py-14 md:grid-cols-[minmax(0,400px)_1fr] md:items-center md:gap-14 md:py-24 md:px-20"
    >
      <ProductDoodles />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 mx-auto w-full max-w-[320px] rounded-md border border-gold/15 bg-green-base/40 p-4 md:mx-0 md:max-w-none md:p-5"
        style={{ filter: "drop-shadow(0 28px 54px rgba(7,25,13,0.28))" }}
      >
        <div className="relative aspect-[658/735] overflow-hidden rounded-sm bg-green-mid">
          <img
            src="/images/about/entrance-door.jpg"
            alt="Madina Traders carved wooden entrance door with brass fittings"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-gold shadow-[0_16px_32px_rgba(139,112,53,0.4)] md:-bottom-6 md:-right-6 md:h-24 md:w-24">
          <strong className="font-sans text-xl font-semibold text-green-deep md:text-2xl">
            15
          </strong>
          <span className="text-[7px] uppercase tracking-[0.15em] text-green-deep md:text-[8px]">
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
          Crafting{" "}
          <em className="italic font-medium text-green-mid">Entrances</em>
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
