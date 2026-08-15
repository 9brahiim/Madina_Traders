"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2008",
    title: "Founded",
    desc: "Madina Traders opened its doors in Begumganj, Barabanki, starting with a small showroom and a vision for quality.",
  },
  {
    year: "2012",
    title: "Expanded Range",
    desc: "Introduced premium steel doors and expanded the catalogue to over 50 designs serving the Lucknow region.",
  },
  {
    year: "2016",
    title: "Regional Trust",
    desc: "Became a preferred supplier for builders and contractors across Barabanki, Sitapur and Rae Bareli.",
  },
  {
    year: "2020",
    title: "100+ Models",
    desc: "Crossed 100 door designs in catalogue, adding arch, double-leaf and security door categories.",
  },
  {
    year: "2024",
    title: "200+ Models",
    desc: "Today we serve 5000+ families with 200+ models and a team dedicated to craft and customer satisfaction.",
  },
];

const values = [
  {
    title: "Quality First",
    desc: "Every door we stock is vetted for material quality, finish, and durability before it reaches our showroom floor.",
  },
  {
    title: "Honest Pricing",
    desc: "We believe premium doors should be accessible. Transparent pricing with no hidden costs — ever.",
  },
  {
    title: "Local Roots",
    desc: "Born and built in Barabanki. We understand local homes, local climates, and local needs better than anyone.",
  },
  {
    title: "After Sales Care",
    desc: "Our relationship doesn't end at the sale. We stand behind every door with service and support.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[55vh] min-h-[400px] items-end overflow-hidden pb-16 px-6 md:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,#1a5c38_0%,#071a0e_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-deep/40 to-green-deep" />
        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-4 flex items-center gap-4 text-[9px] uppercase tracking-[0.35em] text-gold"
          >
            <span className="h-px w-6 bg-gold" /> Our Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="font-display text-[clamp(40px,6vw,80px)] font-light leading-[1.0] text-white"
          >
            Crafting <em className="italic text-gold-light">Entrances</em>
            <br />
            Since 2008
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="gold-surface px-6 py-20 md:px-20">
        <div className="relative z-10 grid grid-cols-1 gap-16 md:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-light text-ink">
              Who We <em className="italic text-green-mid">Are</em>
            </h2>
            <p className="mt-6 text-[14px] leading-[1.9] text-ink-muted">
              Madina Traders is Barabanki&apos;s most trusted name in premium
              doors and hardware. Founded near Shahi Masjid in Begumganj, we
              have spent over 15 years building a reputation on three pillars —
              quality, honesty, and service.
            </p>
            <p className="mt-4 text-[14px] leading-[1.9] text-ink-muted">
              We stock doors for every need — from simple and sturdy steel doors
              for everyday homes, to ornate luxury arch doors for grand
              residences. Every product in our showroom has been personally
              selected for its build quality and finish.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-light text-ink">
              Our <em className="italic text-green-mid">Values</em>
            </h2>
            <div className="mt-6 flex flex-col gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  custom={i * 0.5}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="border-l-2 border-green-mid/50 pl-5"
                >
                  <div className="mb-1 font-display text-lg text-ink">
                    {v.title}
                  </div>
                  <div className="text-[12px] leading-relaxed text-ink-muted">
                    {v.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-ink/10 gold-surface px-6 py-20 md:px-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 mb-14 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-4 text-[9px] uppercase tracking-[0.35em] text-green-mid">
            <span className="h-px w-6 bg-green-mid" /> Our Journey{" "}
            <span className="h-px w-6 bg-green-mid" />
          </div>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-light text-ink">
            15 Years of <em className="italic text-green-mid">Excellence</em>
          </h2>
        </motion.div>
        <div className="relative z-10 mx-auto max-w-2xl">
          <div className="absolute left-1/2 top-0 h-full w-px bg-ink/20" />
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              variants={fadeUp}
              custom={i * 0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative mb-10 flex items-start gap-4 md:gap-8 ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div
                className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}
              >
                <div className="font-sans text-lg font-semibold text-green-mid md:text-2xl">
                  {t.year}
                </div>
                <div className="mt-1 font-display text-base text-ink md:text-xl">
                  {t.title}
                </div>
                <div className="mt-2 text-[11px] leading-relaxed text-ink-muted md:text-[12px]">
                  {t.desc}
                </div>
              </div>
              {/* Dot */}
              <div className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gold/40 bg-green-base md:h-10 md:w-10">
                <div className="h-2 w-2 rounded-full bg-gold" />
              </div>
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-t border-ink/10 gold-surface-deep px-6 py-16 md:px-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center gap-6 text-center"
        >
          <h2 className="font-display text-4xl font-light text-ink">
            Come Visit Our <em className="italic text-green-mid">Showroom</em>
          </h2>
          <p className="max-w-md text-[13px] leading-relaxed text-ink-muted">
            Near Shahi Masjid, Begumganj, Barabanki. Open Monday to Saturday,
            9am – 7pm.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-green-deep px-8 py-3.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold transition-colors hover:bg-green-base"
          >
            Get Directions →
          </a>
        </motion.div>
      </section>
    </>
  );
}
