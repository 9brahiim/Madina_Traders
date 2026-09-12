"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import ProductDoodles from "@/components/ui/ProductDoodles";
import { useModal } from "@/components/ui/ModalProvider";

const allProducts = [
  {
    id: 1,
    code: "MT 101",
    category: "Room Doors",
    name: "Flush Panel Room Door",
    desc: "Clean single-leaf design with a slim lever handle, built for everyday rooms.",
    img: "/images/room-doors/room-door-1.jpg",
    sizes: ["2050 X 960MM", "2050 X 1050MM", "2400 X 960MM", "2400 X 1050MM"],
  },
  {
    id: 2,
    code: "MT 102",
    category: "Room Doors",
    name: "Fluted Wood Room Door",
    desc: "Subtle vertical fluting over a solid core — quiet comfort for every room.",
    img: "/images/room-doors/room-door-2.jpg",
    sizes: ["2050 X 960MM", "2050 X 1050MM", "2400 X 960MM", "2400 X 1050MM"],
  },
  {
    id: 3,
    code: "MT 103",
    category: "Room Doors",
    name: "Paneled Room Door",
    desc: "Traditional raised-panel styling that fits any bedroom or study.",
    img: "/images/room-doors/room-door-3.jpg",
    sizes: ["2050 X 960MM", "2050 X 1050MM", "2400 X 960MM", "2400 X 1050MM"],
  },
  {
    id: 4,
    code: "MT 104",
    category: "Room Doors",
    name: "Minimalist Room Door",
    desc: "Flat, seamless face with a matte finish for a modern, understated look.",
    img: "/images/room-doors/room-door-4.jpg",
    sizes: ["2050 X 960MM", "2050 X 1050MM", "2400 X 960MM", "2400 X 1050MM"],
  },
  {
    id: 5,
    code: "MT 105",
    category: "Room Doors",
    name: "Grooved Wood Room Door",
    desc: "Horizontal groove detailing adds texture without breaking the room's flow.",
    img: "/images/room-doors/room-door-5.jpg",
    sizes: ["2050 X 960MM", "2050 X 1050MM", "2400 X 960MM", "2400 X 1050MM"],
  },
  {
    id: 6,
    code: "MT 106",
    category: "Room Doors",
    name: "Laminate Finish Room Door",
    desc: "Durable laminate skin over a solid core, easy to maintain day to day.",
    img: "/images/room-doors/room-door-6.jpg",
    sizes: ["2050 X 960MM", "2050 X 1050MM", "2400 X 960MM", "2400 X 1050MM"],
  },
  {
    id: 7,
    code: "MT 107",
    category: "Room Doors",
    name: "Classic Wood Room Door",
    desc: "Natural wood grain finish with a timeless, warm character.",
    img: "/images/room-doors/room-door-7.jpg",
    sizes: ["2050 X 960MM", "2050 X 1050MM", "2400 X 960MM", "2400 X 1050MM"],
  },
  {
    id: 8,
    code: "MT 108",
    category: "Room Doors",
    name: "Two-Tone Room Door",
    desc: "Contrasting frame and panel tones for a subtly distinctive room entrance.",
    img: "/images/room-doors/room-door-8.jpg",
    sizes: ["2050 X 960MM", "2050 X 1050MM", "2400 X 960MM", "2400 X 1050MM"],
  },
  {
    id: 9,
    code: "MT 109",
    category: "Room Doors",
    name: "Textured Wood Room Door",
    desc: "Deep wood-grain texture with a rich matte tone for a warm room entrance.",
    img: "/images/room-doors/room-door-9.jpg",
    sizes: ["2050 X 960MM", "2050 X 1050MM", "2400 X 960MM", "2400 X 1050MM"],
  },
  {
    id: 10,
    code: "MT 201",
    category: "Mother Son Doors",
    name: "Classic Mother Son Door",
    desc: "A full-size main leaf paired with a smaller companion leaf for everyday use.",
    img: "/images/motherson-doors/motherson-door1.jpg",
    sizes: ["2050 X 1200 X 70MM", "2400 X 1200 X 70MM"],
  },
  {
    id: 11,
    code: "MT 202",
    category: "Mother Son Doors",
    name: "Heritage Mother Son Door",
    desc: "Ornamental panel work on both leaves, finished with matching hardware.",
    img: "/images/motherson-doors/motherson-door2.jpg",
    sizes: ["2050 X 1200 X 70MM", "2400 X 1200 X 70MM"],
  },
  {
    id: 12,
    code: "MT 203",
    category: "Mother Son Doors",
    name: "Modern Mother Son Door",
    desc: "Clean flush panels on both leaves for a streamlined double-entry look.",
    img: "/images/motherson-doors/motherson-door3.jpg",
    sizes: ["2050 X 1200 X 70MM", "2400 X 1200 X 70MM"],
  },
  {
    id: 13,
    code: "MT 204",
    category: "Mother Son Doors",
    name: "Twin Panel Mother Son Door",
    desc: "Matching panel detailing across the main and companion leaf.",
    img: "/images/motherson-doors/motherson-door4.jpg",
    sizes: ["2050 X 1200 X 70MM", "2400 X 1200 X 70MM"],
  },
  {
    id: 14,
    code: "MT 301",
    category: "Main Entry Doors",
    name: "Grand Entry Door",
    desc: "Wide single-leaf entrance door with a mullioned fanlight transom above.",
    img: "/images/main-doors/main-door-1.jpg",
    sizes: ["2050 X 960MM", "2050 X 1050MM", "2400 X 960MM", "2400 X 1050MM"],
  },
  {
    id: 15,
    code: "MT 302",
    category: "Main Entry Doors",
    name: "Royal Entry Door",
    desc: "Premium steel core with gold-toned hardware for a grand first impression.",
    img: "/images/main-doors/main-door-2.jpg",
    sizes: ["2050 X 960MM", "2050 X 1050MM", "2400 X 960MM", "2400 X 1050MM"],
  },
  {
    id: 16,
    code: "MT 401",
    category: "Main Entry Doors",
    name: "Fortress Entry Door",
    desc: "Reinforced frame with multi-point locking for serious front-door security.",
    img: "/images/main-doors/main-door-3.jpg",
    sizes: ["2050 X 960MM", "2050 X 1050MM", "2400 X 960MM", "2400 X 1050MM"],
  },
  {
    id: 17,
    code: "MT 303",
    category: "Main Entry Doors",
    name: "Heritage Entry Door",
    desc: "Carved brass detailing across a solid double-leaf entrance.",
    img: "/images/main-doors/main-door-4.jpg",
    sizes: ["2050 X 960MM", "2050 X 1050MM", "2400 X 960MM", "2400 X 1050MM"],
  },
  {
    id: 18,
    code: "MT 501",
    category: "Bathroom Doors",
    name: "Louvered Bathroom Door",
    desc: "Built-in ventilation louvers keep bathrooms fresh without losing privacy.",
    img: "/images/bathroom-doors/bathroom-door-1.jpg",
    sizes: ["2100 X 760MM", "2350 X 760MM"],
  },
  {
    id: 19,
    code: "MT 502",
    category: "Bathroom Doors",
    name: "Frosted Glass Bathroom Door",
    desc: "Reeded glass upper light lets light in while keeping the room private.",
    img: "/images/bathroom-doors/bathroom-door-2.jpg",
    sizes: ["2100 X 760MM", "2350 X 760MM"],
  },
  {
    id: 20,
    code: "MT 503",
    category: "Bathroom Doors",
    name: "PVC Waterproof Bathroom Door",
    desc: "Fully waterproof construction built to handle daily moisture and steam.",
    img: "/images/bathroom-doors/bathroom-door-3.jpg",
    sizes: ["2100 X 760MM", "2350 X 760MM"],
  },
  {
    id: 21,
    code: "MT 504",
    category: "Bathroom Doors",
    name: "Compact Bathroom Door",
    desc: "Space-saving slim profile designed for smaller bathroom openings.",
    img: "/images/bathroom-doors/bathroom-door-4.jpg",
    sizes: ["2100 X 760MM", "2350 X 760MM"],
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

// Sequential catalogue number shown on each card, independent of category —
// e.g. id 6 -> "PD 006". Based on id (not filtered-array index) so a door's
// number stays fixed no matter which category filter is active.
const pdCode = (id) => `PD ${String(id).padStart(3, "0")}`;

// Renders a product's size list, adapting to how many sizes it has and how
// long each one is:
// - Mother Son doors carry three-part dimensions (H x W x thickness), which
//   are too long to sit side-by-side in the card, so each size gets its own
//   centered line instead of being paired with a "|" separator.
// - Everything else is paired two-per-row with "|" between them. An odd
//   trailing size (e.g. a 3-size door) is centered alone on its own row,
//   and a 2-size door simply renders as a single row — no empty second row
//   with a stray "|" left over.
function SizeList({ product }) {
  const sizes = product.sizes || [];
  const stacked = product.category === "Mother Son Doors";

  if (stacked) {
    return (
      <>
        {sizes.map((size, i) => (
          <p
            key={i}
            className="text-center text-[10px] font-bold tracking-wide text-gold sm:text-[11px]"
          >
            {size}
          </p>
        ))}
      </>
    );
  }

  const rows = [];
  for (let i = 0; i < sizes.length; i += 2) {
    rows.push(sizes.slice(i, i + 2));
  }

  return (
    <>
      {rows.map((pair, i) => (
        <p
          key={i}
          className={`text-[11px] font-bold tracking-wide text-gold sm:text-[12px] ${
            pair.length === 1 ? "text-center" : ""
          }`}
        >
          {pair[0]}
          {pair.length === 2 && (
            <>
              <span className="mx-1.5 text-white/30">|</span>
              {pair[1]}
            </>
          )}
        </p>
      ))}
    </>
  );
}

export default function ProductsPageClient() {
  const [active, setActive] = useState("All");
  const [filterOpen, setFilterOpen] = useState(false);
  const { openModal } = useModal();

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
        <ProductDoodles />

        <motion.div
          layout
          className="relative z-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5"
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
                  <CardBody className="group/card relative w-full rounded-lg border border-gold/[0.15] bg-[#0A2A1A] p-3.5 hover:shadow-[0_16px_32px_rgba(0,0,0,0.4)]">
                    <CardItem translateZ="100" className="w-full">
                      <div className="flex w-full items-center justify-center overflow-hidden rounded-lg bg-black/20">
                        <img
                          src={p.img}
                          alt={`${p.category} — ${pdCode(p.id)}`}
                          className="aspect-[9/16] w-full object-contain group-hover/card:shadow-xl"
                          loading="lazy"
                        />
                      </div>
                    </CardItem>
                    <CardItem
                      translateZ="30"
                      className="mt-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gold"
                    >
                      {pdCode(p.id)}
                    </CardItem>
                    <CardItem
                      translateZ="40"
                      as="div"
                      className="mt-2.5 space-y-1 border-t border-gold/15 pt-2.5"
                    >
                      <SizeList product={p} />
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      onClick={() => openModal(pdCode(p.id))}
                      className="mt-3 w-full rounded-sm border border-gold/40 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-green-deep"
                    >
                      Enquire About This Door →
                    </CardItem>
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
