"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const allProducts = [
  {
    id: 1,
    code: "MT 101",
    category: "Steel",
    name: "Classic Steel Door",
    desc: "Galvanized single panel with powder-coated finish.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 2,
    code: "MT 102",
    category: "Steel",
    name: "Premium Steel Panel",
    desc: "Multi-point locking, reinforced frame, matte finish.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: 3,
    code: "MT 201",
    category: "Arch",
    name: "Royal Arch Door",
    desc: "Timeless arched top with sunburst glass detail.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
  },
  {
    id: 4,
    code: "MT 202",
    category: "Arch",
    name: "Heritage Arch",
    desc: "Colonial arch style with ornamental ironwork.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 5,
    code: "MT 301",
    category: "Double",
    name: "Grand Double Door",
    desc: "Dual-leaf entry door with sidelights, premium steel.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: 6,
    code: "MT 302",
    category: "Double",
    name: "Security Double",
    desc: "Reinforced double-leaf with five-point locking system.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
  },
  {
    id: 7,
    code: "MT 401",
    category: "Security",
    name: "Fortress Door",
    desc: "Anti-drill, anti-pick deadbolt, armored core.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 8,
    code: "MT 402",
    category: "Security",
    name: "SafeGuard Pro",
    desc: "Grade A security rating, biometric-ready design.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: 9,
    code: "MT 501",
    category: "Classic",
    name: "Wooden Finish Steel",
    desc: "Steel core with woodgrain laminate — warmth meets strength.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
  },
];

const filters = ["All", "Steel", "Arch", "Double", "Security", "Classic"];

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
      <section className="sticky top-[76px] z-50 border-b border-gold/10 bg-green-deep/95 px-6 py-4 backdrop-blur-lg md:px-20">
        <div className="flex gap-3 overflow-x-auto pb-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`flex-shrink-0 rounded-sm px-5 py-2 text-[10px] uppercase tracking-[0.18em] transition-all ${
                active === f
                  ? "bg-gold text-green-deep font-semibold"
                  : "border border-gold/25 text-muted hover:border-gold/50 hover:text-cream"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 py-16 md:px-20">
        <motion.div
          layout
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
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
