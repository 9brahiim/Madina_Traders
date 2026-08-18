"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const allProducts = [
  {
    id: 1,
    code: "MT 101",
    category: "Room Doors",
    name: "Flush Panel Room Door",
    desc: "Clean single-leaf design with a slim lever handle, built for everyday rooms.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 2,
    code: "MT 102",
    category: "Room Doors",
    name: "Fluted Wood Room Door",
    desc: "Subtle vertical fluting over a solid core — quiet comfort for every room.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: 3,
    code: "MT 201",
    category: "Mother Son Doors",
    name: "Classic Mother Son Door",
    desc: "A full-size main leaf paired with a smaller companion leaf for everyday use.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
  },
  {
    id: 4,
    code: "MT 202",
    category: "Mother Son Doors",
    name: "Heritage Mother Son Door",
    desc: "Ornamental panel work on both leaves, finished with matching hardware.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 5,
    code: "MT 301",
    category: "Main Entry Doors",
    name: "Grand Entry Door",
    desc: "Wide single-leaf entrance door with a mullioned fanlight transom above.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: 6,
    code: "MT 302",
    category: "Main Entry Doors",
    name: "Royal Entry Door",
    desc: "Premium steel core with gold-toned hardware for a grand first impression.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
  },
  {
    id: 7,
    code: "MT 401",
    category: "Main Entry Doors",
    name: "Fortress Entry Door",
    desc: "Reinforced frame with multi-point locking for serious front-door security.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 8,
    code: "MT 501",
    category: "Bathroom Doors",
    name: "Louvered Bathroom Door",
    desc: "Built-in ventilation louvers keep bathrooms fresh without losing privacy.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: 9,
    code: "MT 502",
    category: "Bathroom Doors",
    name: "Frosted Glass Bathroom Door",
    desc: "Reeded glass upper light lets light in while keeping the room private.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
  },
];

const filters = [
  "All",
  "Room Doors",
  "Mother Son Doors",
  "Main Entry Doors",
  "Bathroom Doors",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07 },
  }),
};

export default function ProductsPage() {
  const [active, setActive] = useState("All");
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered =
    active === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[44vh] min-h-[320px] items-end overflow-hidden pb-14 px-6 md:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#2a4a1a_0%,#071a0e_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-deep" />
        <div className="relative z-10">
          <div className="mb-3 flex items-center gap-4 text-[9px] uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-6 bg-gold" /> Our Collection
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-[clamp(36px,5vw,72px)] font-light text-white"
          >
            All <em className="italic text-gold-light">Doors</em>
          </motion.h1>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[76px] z-50 border-b border-ink/10 bg-gold-bg-deep/95 px-6 py-4 backdrop-blur-lg md:px-20">
        {/* Desktop / tablet — pill row */}
        <div className="hidden gap-3 md:flex">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`flex-shrink-0 rounded-sm px-5 py-2 text-[10px] uppercase tracking-[0.18em] transition-all ${
                active === f
                  ? "bg-green-deep text-gold font-semibold"
                  : "border border-ink/25 text-ink-muted hover:border-ink/50 hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Mobile — tap-to-open dropdown selector instead of a horizontal
            scroll strip; one tap shows every category at once. */}
        <div className="relative md:hidden">
          <button
            onClick={() => setFilterOpen((v) => !v)}
            aria-expanded={filterOpen}
            className="flex w-full items-center justify-between rounded-sm border border-ink/25 bg-transparent px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-ink transition-colors active:border-ink/50"
          >
            <span className="flex items-center gap-2.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              {active}
            </span>
            <motion.svg
              animate={{ rotate: filterOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </motion.svg>
          </button>

          <AnimatePresence>
            {filterOpen && (
              <>
                {/* Tap-outside-to-close backdrop */}
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setFilterOpen(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-sm border border-ink/15 bg-gold-bg-deep shadow-[0_16px_36px_rgba(0,0,0,0.25)]"
                >
                  {filters.map((f) => (
                    <button
                      key={f}
                      onClick={() => {
                        setActive(f);
                        setFilterOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-4 py-3 text-left text-[11px] uppercase tracking-[0.16em] transition-colors ${
                        active === f
                          ? "bg-green-deep font-semibold text-gold"
                          : "text-ink-muted active:bg-ink/5"
                      }`}
                    >
                      {f}
                      {active === f && (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </button>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Grid */}
      <section className="gold-surface relative overflow-hidden px-6 py-16 md:px-20">
        {/* Background image swaps in when the Bathroom Doors filter is active */}
        <AnimatePresence>
          {active === "Bathroom Doors" && (
            <motion.div
              key="bathroom-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-0"
            >
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: "url(/backimage.jpg)",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          layout
          className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                variants={fadeUp}
                custom={i}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <CardContainer containerClassName="!p-0 w-full">
                  <CardBody
                    className="group/card relative w-full rounded-xl border border-gold/[0.15] bg-[#0A2A1A] p-6 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)]"
                    style={{ height: 420 }}
                  >
                    <CardItem
                      translateZ="30"
                      className="text-[8px] uppercase tracking-[0.28em] text-gold"
                    >
                      {p.code}
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      as="h3"
                      className="mt-1 font-display text-2xl font-normal text-white"
                    >
                      {p.name}
                    </CardItem>
                    <CardItem
                      translateZ="40"
                      as="p"
                      className="mt-1 text-[11px] leading-relaxed text-muted"
                    >
                      {p.desc}
                    </CardItem>
                    <CardItem translateZ="100" className="mt-4 w-full">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="h-48 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                        loading="lazy"
                      />
                    </CardItem>
                    <div className="mt-5 flex items-center justify-between">
                      <CardItem
                        translateZ={20}
                        as="span"
                        className="text-[9px] uppercase tracking-[0.18em] text-gold opacity-0 transition-opacity group-hover/card:opacity-100"
                      >
                        View Details →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="rounded-sm border border-gold/40 px-4 py-2 text-[9px] uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold hover:text-green-deep"
                      >
                        Enquire
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
