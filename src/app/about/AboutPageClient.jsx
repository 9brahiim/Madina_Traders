"use client";

import { motion } from "framer-motion";
import ProductDoodles from "@/components/ui/ProductDoodles";
import { useModal } from "@/components/ui/ModalProvider";

// ── About Us — icon list ────────────────────────────────────────────────
const aboutPoints = [
  {
    label: "Quality Doors",
    icon: (
      <>
        <path d="M12 2 4 5v6c0 5.25 3.75 9.74 8 11 4.25-1.26 8-5.75 8-11V5l-8-3z" />
        <polyline points="9 12 11 14 15 10" />
      </>
    ),
  },
  {
    label: "Modern Designs",
    icon: (
      <>
        <path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4L12 3z" />
        <path d="M19 15l.7 1.8L21.5 17.5l-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" />
      </>
    ),
  },
  {
    label: "Reliable Service",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 16 14" />
      </>
    ),
  },
  {
    label: "Local Business",
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

// ── Doors for Every Space — real catalogue photography ─────────────────
const doorSpaces = [
  {
    name: "Main Entrance Doors",
    desc: "Statement doors designed to give your entrance a strong and finished appearance.",
    img: "/images/main-doors/main-door-1.jpg",
  },
  {
    name: "Steel Security Doors",
    desc: "Galvanized steel doors designed with strength and security in mind.",
    img: "/images/main-doors/main-door-2.jpg",
  },
  {
    name: "Room Doors",
    desc: "Practical steel doors available in different designs and dimensions.",
    img: "/images/room-doors/room-door-1.jpg",
  },
  {
    name: "Bathroom & Office Doors",
    desc: "Compact door options suited for bathrooms, offices and utility spaces.",
    img: "/images/bathroom-doors/bathroom-door-1.jpg",
  },
  {
    name: "Designer Doors",
    desc: "Modern patterns and finishes for customers looking for something beyond a conventional door.",
    img: "/images/motherson-doors/motherson-door1.jpg",
  },
];

// ── Why Madina Traders — bordered icon grid ─────────────────────────────
const whyPoints = [
  {
    title: "Built Around Your Requirement",
    desc: "Different spaces require different dimensions, designs and configurations. We help you choose accordingly.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "Steel Door Expertise",
    desc: "Our focus is on steel and galvanized steel doors, giving customers access to modern alternatives to conventional wooden doors.",
    icon: (
      <>
        <path d="M12 2 4 5v6c0 5.25 3.75 9.74 8 11 4.25-1.26 8-5.75 8-11V5l-8-3z" />
        <polyline points="9 12 11 14 15 10" />
      </>
    ),
  },
  {
    title: "Design Meets Function",
    desc: "Our doors are selected not only for appearance, but also for everyday practicality and durability.",
    icon: (
      <>
        <path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4L12 3z" />
        <path d="M19 15l.7 1.8L21.5 17.5l-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" />
      </>
    ),
  },
  {
    title: "Local & Accessible",
    desc: "Based in Begumganj, Barabanki, we serve customers looking for quality doors within the region.",
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    title: "Straightforward Service",
    desc: "We believe customers should clearly understand what they are buying, including the design, size, specifications and price.",
    icon: (
      <>
        <rect x="6" y="4" width="12" height="16" rx="2" />
        <path d="M9 4V2h6v2" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function AboutPageClient() {
  const { openModal } = useModal();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[480px] items-center overflow-hidden px-6 py-20 md:min-h-[560px] md:px-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_20%,#1a5c38_0%,#071a0e_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-deep via-green-deep/70 to-green-deep/20" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 grid w-full grid-cols-1 items-center gap-14 md:grid-cols-[1fr_380px]">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mb-5 flex items-center gap-4 text-[9px] uppercase tracking-[0.35em] text-gold"
            >
              <span className="h-px w-6 bg-gold" /> Our Story
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="font-display text-[clamp(40px,6vw,80px)] font-light leading-[1.02] text-white"
            >
              Doors Made to
              <br />
              <em className="italic text-gold-light">Stand Out</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="mt-6 max-w-md text-[13px] leading-[1.9] text-cream/65"
            >
              Strength, security and design — brought together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="/catalogue.pdf"
                download
                className="group inline-flex items-center gap-2.5 rounded-sm bg-gold px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-green-deep transition-colors hover:bg-gold-light"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-y-0.5"
                >
                  <path d="M12 3v12m0 0-4-4m4 4 4-4" />
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                </svg>
                Catalogue
              </a>
              <a
                href="/products"
                className="inline-flex items-center gap-2.5 rounded-sm border border-gold/40 px-7 py-3.5 text-[10px] uppercase tracking-[0.22em] text-gold-light transition-colors hover:border-gold hover:bg-gold/[0.08]"
              >
                Explore Doors
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Framed photo */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="relative hidden md:block"
          >
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-gold/25 bg-green-mid"
              style={{ filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.55))" }}
            >
              <img
                src="/images/main-doors/main-door-1.jpg"
                alt="Madina Traders premium double-leaf entrance door"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-deep/50 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── About Madina Traders ── */}
      <section className="relative overflow-hidden gold-surface px-6 py-20 md:px-20 md:py-24">
        <ProductDoodles />
        <div className="relative z-10 grid grid-cols-1 gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="mb-4 flex items-center gap-4 text-[9px] uppercase tracking-[0.35em] text-green-mid">
              <span className="h-px w-6 bg-green-mid" /> About Us
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] font-light text-ink">
              About <em className="italic text-green-mid">Madina Traders</em>
            </h2>
            <div className="mt-7 flex flex-col gap-4 text-[14px] leading-[1.9] text-ink-muted">
              <p>
                Madina Traders is a door business based in Begumganj, Barabanki,
                Uttar Pradesh, specializing in modern steel and designer doors.
              </p>
              <p>
                Our range includes galvanized steel doors, main entrance doors,
                room doors, bathroom and office doors, along with different
                designs, sizes and finishes.
              </p>
              <p>
                We focus on bringing together strength, security and appearance
                so that customers don&apos;t have to choose between a door that
                looks good and one that is built for everyday use.
              </p>
              <p>
                From selecting a design to choosing the right size and
                configuration, we help customers find a door that fits their
                space and requirements.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {aboutPoints.map((p, i) => (
                <motion.div
                  key={p.label}
                  variants={fadeUp}
                  custom={i * 0.6}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-3 rounded-md border border-gold/20 bg-white/30 px-4 py-3.5 transition-colors hover:border-gold/40 hover:bg-white/50"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 text-green-mid"
                  >
                    {p.icon}
                  </svg>
                  <span className="text-[12px] font-medium tracking-wide text-ink">
                    {p.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex items-center"
          >
            <div className="relative w-full rounded-md border border-gold/20 bg-green-base/[0.06] p-9 md:p-11">
              <svg
                width="34"
                height="26"
                viewBox="0 0 34 26"
                fill="none"
                className="mb-5 text-gold"
              >
                <path
                  d="M0 26V15.6C0 6.9 5.3 1.4 13.2 0l1.4 3.9C9.8 5.6 7.3 9 7.3 13h6.2v13H0Zm19.4 0V15.6c0-8.7 5.3-14.2 13.2-15.6l1.4 3.9c-4.8 1.7-7.3 5.1-7.3 9.1h6.2v13H19.4Z"
                  fill="currentColor"
                />
              </svg>
              <p className="font-display text-2xl italic font-light leading-[1.3] text-ink md:text-3xl">
                Building{" "}
                <em className="not-italic font-medium text-green-mid">
                  Better Homes
                </em>{" "}
                Together
              </p>
              <div className="mt-8 h-px w-14 bg-gold/50" />
              <p className="mt-6 text-[12px] leading-[1.8] text-ink-muted">
                We believe a door is one of the most important decisions in a
                home — and we&apos;re here to make that decision simple, honest,
                and lasting.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Doors for Every Space ── */}
      <section className="relative overflow-hidden border-t border-ink/10 gold-surface-soft px-6 py-20 md:px-20 md:py-24">
        <ProductDoodles />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 mb-14"
        >
          <div className="mb-4 flex items-center gap-4 text-[9px] uppercase tracking-[0.35em] text-green-mid">
            <span className="h-px w-6 bg-green-mid" /> Our Products
          </div>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-light text-ink">
            Doors for <em className="italic text-green-mid">Every Space</em>
          </h2>
        </motion.div>

        <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {doorSpaces.map((d, i) => (
            <motion.a
              key={d.name}
              href="/products"
              variants={fadeUp}
              custom={i * 0.5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group overflow-hidden rounded-lg border border-gold/15 bg-green-base/5 transition-all hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_24px_48px_rgba(7,25,13,0.18)]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-green-mid">
                <img
                  src={d.img}
                  alt={d.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="p-4">
                <h3 className="font-display text-base font-medium leading-tight text-ink">
                  {d.name}
                </h3>
                <p className="mt-2 text-[11px] leading-[1.7] text-ink-muted">
                  {d.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── Why Madina Traders ── */}
      <section className="relative overflow-hidden border-t border-ink/10 gold-surface px-6 py-20 md:px-20 md:py-24">
        <ProductDoodles />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 mb-14 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-4 text-[9px] uppercase tracking-[0.35em] text-green-mid">
            <span className="h-px w-6 bg-green-mid" /> Why Madina Traders{" "}
            <span className="h-px w-6 bg-green-mid" />
          </div>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-light text-ink">
            Why Choose <em className="italic text-green-mid">Us</em>
          </h2>
        </motion.div>

        <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {whyPoints.map((w, i) => (
            <motion.div
              key={w.title}
              variants={fadeUp}
              custom={i * 0.4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-lg border border-ink/10 bg-white/30 p-6 transition-colors hover:border-gold/40 hover:bg-white/55"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-5 text-green-mid"
              >
                {w.icon}
              </svg>
              <div className="mb-2 font-display text-lg font-medium leading-snug text-ink">
                {w.title}
              </div>
              <p className="text-[11.5px] leading-[1.75] text-ink-muted">
                {w.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Our Journey ── */}
      <section className="relative overflow-hidden border-t border-ink/10 gold-surface-deep px-6 py-20 md:px-20 md:py-24">
        <ProductDoodles />
        <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="mb-4 flex items-center gap-4 text-[9px] uppercase tracking-[0.35em] text-green-mid">
              <span className="h-px w-6 bg-green-mid" /> Our Journey
            </div>
            <h2 className="font-display text-[clamp(30px,3.6vw,46px)] font-light leading-[1.15] text-ink">
              From Local Business to a{" "}
              <em className="italic text-green-mid">Growing Door Brand</em>
            </h2>
            <p className="mt-6 text-[14px] leading-[1.9] text-ink-muted">
              Madina Traders has grown by focusing on one thing — providing
              customers with a wider choice of modern doors while maintaining
              personal, local service.
            </p>
            <p className="mt-4 text-[14px] leading-[1.9] text-ink-muted">
              Today, our showroom offers a range of steel, galvanized steel and
              designer door options across different applications, sizes and
              designs.
            </p>
            <div className="mt-7 border-l-2 border-gold/50 pl-5">
              <p className="font-display text-lg italic text-ink">
                Better designs. Better choices. Better doors.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-md border border-gold/20 bg-green-mid"
              style={{ filter: "drop-shadow(0 28px 54px rgba(7,25,13,0.25))" }}
            >
              <img
                src="/backimage.jpg"
                alt="Row of premium finished doors on display at Madina Traders showroom"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-md bg-gold px-5 py-3.5 shadow-[0_16px_32px_rgba(139,112,53,0.35)] sm:-bottom-5 sm:-left-5">
              <span className="text-[9px] uppercase tracking-[0.2em] text-green-deep">
                Rooted in Barabanki
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Our Philosophy ── */}
      <section className="relative flex items-center justify-center overflow-hidden px-6 py-24 md:px-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,#0f3d25_0%,#071a0e_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-2xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-4 text-[9px] uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-6 bg-gold" /> Our Philosophy{" "}
            <span className="h-px w-6 bg-gold" />
          </div>
          <h2 className="font-display text-[clamp(30px,4.2vw,54px)] font-light leading-[1.15] text-white">
            Strength Outside.{" "}
            <em className="italic text-gold-light">Character Inside.</em>
          </h2>
          <div className="mt-8 flex flex-col gap-4 text-[13px] leading-[1.9] text-cream/65">
            <p>A door is more than an entry point.</p>
            <p>
              It is one of the first things people notice about a home and one
              of the things you rely on every day.
            </p>
            <p>
              That&apos;s why at Madina Traders, we look for the balance between
              security, strength, design and practicality.
            </p>
            <p>
              Whether you are selecting a main entrance door or a smaller door
              for a room, bathroom or office, our aim is simple:
            </p>
          </div>
          <p className="mt-7 font-display text-xl italic text-gold-light md:text-2xl">
            Give you a door that fits your space and feels right for your home.
          </p>
        </motion.div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative overflow-hidden border-t border-gold/10 bg-green-deep px-6 py-20 md:px-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_20%,rgba(201,168,76,0.08)_0%,transparent_60%)]" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 flex items-center gap-4 text-[9px] uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-6 bg-gold" /> Our Commitment
            </div>
            <h2 className="font-display text-[clamp(30px,4vw,52px)] font-light leading-[1.1] text-white">
              Find the Door That{" "}
              <em className="italic text-gold-light">Fits Your Space</em>
            </h2>
            <p className="mt-5 max-w-md text-[13px] leading-[1.9] text-cream/60">
              Explore our collection of modern steel and designer doors, or
              visit Madina Traders in Begumganj, Barabanki.
            </p>
            <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-gold-dim">
              Quality &middot; Security &middot; Design
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            <a
              href="/catalogue.pdf"
              download
              className="inline-flex items-center gap-2.5 rounded-sm bg-gold px-8 py-3.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-green-deep transition-colors hover:bg-gold-light"
            >
              View Catalogue
            </a>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2.5 rounded-sm border border-gold/40 px-8 py-3.5 text-[10px] uppercase tracking-[0.22em] text-gold-light transition-colors hover:border-gold hover:bg-gold/[0.08]"
            >
              Quick Enquiry
            </button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
