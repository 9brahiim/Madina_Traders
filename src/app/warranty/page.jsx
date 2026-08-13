"use client";

import { motion } from "framer-motion";

const coverageItems = [
  {
    title: "Frame & Structure",
    desc: "Full coverage on door frame integrity, welding, and structural deformation for the warranty period.",
  },
  {
    title: "Surface Finish",
    desc: "Paint, powder coat, and laminate finishes covered against peeling, bubbling, or discoloration under normal conditions.",
  },
  {
    title: "Hardware & Locks",
    desc: "All locks, hinges, and handles covered against manufacturing defects and mechanical failure.",
  },
  {
    title: "Weather Sealing",
    desc: "Rubber gaskets and weather seals covered for the full period against shrinkage, cracking or detachment.",
  },
];

const notCovered = [
  "Physical damage from accidents, misuse, or improper installation",
  "Damage from alterations or modifications made by customer",
  "Normal wear and tear over time",
  "Damage from floods, fire, or natural disasters",
  "Corrosion from exposure to chemicals or saltwater",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function WarrantyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[44vh] min-h-[320px] items-end overflow-hidden pb-14 px-6 md:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_0%,#1a3a2a_0%,#071a0e_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-deep" />
        <div className="relative z-10">
          <div className="mb-3 flex items-center gap-4 text-[9px] uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-6 bg-gold" /> Our Promise
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-[clamp(36px,5vw,72px)] font-light text-white"
          >
            Built to <em className="italic text-gold-light">Last</em>
          </motion.h1>
        </div>
      </section>

      {/* Warranty badge */}
      <section className="bg-gold-bg px-6 py-16 md:px-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex h-36 w-36 flex-col items-center justify-center rounded-full border-2 border-gold bg-green-mid"
          >
            <span className="font-sans text-5xl font-semibold text-gold">
              5
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-cream/80">
              Year Warranty
            </span>
          </motion.div>
          <motion.p
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-xl text-[14px] leading-relaxed text-ink-muted"
          >
            Every door purchased from Madina Traders comes with a 5-year
            manufacturer warranty on structure, finish, and hardware. We stand
            behind every product we sell.
          </motion.p>
        </div>
      </section>

      {/* What's covered */}
      <section className="border-t border-ink/10 bg-gold-bg px-6 py-16 md:px-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="mb-3 flex items-center gap-4 text-[9px] uppercase tracking-[0.35em] text-green-mid">
            <span className="h-px w-6 bg-green-mid" /> Coverage
          </div>
          <h2 className="font-display text-4xl font-light text-ink">
            What&apos;s <em className="italic text-green-mid">Covered</em>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {coverageItems.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i * 0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-4 rounded-sm border border-gold/20 bg-green-mid p-6 transition-colors hover:border-gold/40"
            >
              <div className="mt-1 h-5 w-5 flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <div className="mb-1 font-display text-lg text-cream">
                  {item.title}
                </div>
                <div className="text-[12px] leading-relaxed text-cream/70">
                  {item.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Not covered */}
      <section className="border-t border-ink/10 bg-gold-bg px-6 py-16 md:px-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="font-display text-4xl font-light text-ink">
            Not <em className="italic text-green-mid">Covered</em>
          </h2>
        </motion.div>
        <ul className="flex flex-col gap-3 max-w-xl">
          {notCovered.map((item, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              custom={i * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-3 text-[13px] text-ink-muted"
            >
              <span className="mt-1 text-green-mid/70">—</span>
              {item}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Claim process */}
      <section className="border-t border-ink/10 bg-gold-bg-deep px-6 py-16 md:px-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="font-display text-4xl font-light text-ink">
            How to <em className="italic text-green-mid">Claim</em>
          </h2>
        </motion.div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              step: "01",
              title: "Contact Us",
              desc: "Call or WhatsApp us with your purchase details and description of the issue.",
            },
            {
              step: "02",
              title: "Inspection",
              desc: "Our team will visit or ask for photos to assess the warranty claim.",
            },
            {
              step: "03",
              title: "Resolution",
              desc: "Valid claims are resolved within 7 working days — repair or replacement.",
            },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              variants={fadeUp}
              custom={i * 0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="font-sans text-5xl font-semibold text-ink/25">
                {s.step}
              </div>
              <div className="font-display text-xl text-ink">{s.title}</div>
              <div className="text-[12px] leading-relaxed text-ink-muted">
                {s.desc}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex justify-center gap-4">
          <a
            href="tel:+919696243986"
            className="rounded-sm bg-green-deep px-8 py-3.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold transition-colors hover:bg-green-base"
          >
            Call Us
          </a>
          <a
            href="https://wa.me/919696243986"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-ink/40 px-8 py-3.5 text-[10px] uppercase tracking-[0.22em] text-ink transition-colors hover:border-ink hover:bg-ink/[0.08]"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}