"use client";

import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { categories } from "@/data/site";

const cardImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80",
];

export default function ProductCategories() {
  return (
    <section
      id="products"
      className="bg-green-base px-6 py-24 md:px-20 md:py-28"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
      >
        <div>
          <div className="mb-4 flex items-center gap-4 text-[9px] uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-6 bg-gold" />
            Our Collection
          </div>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-light text-white">
            Better &amp; <em className="italic text-gold-light">Durable</em>
          </h2>
        </div>
        <a
          href="#"
          className="flex items-center gap-2 border-b border-gold/30 pb-1 text-[10px] uppercase tracking-[0.2em] text-gold transition-all hover:gap-3.5"
        >
          View All Products
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

      {/* Cards — each one matches the Aceternity demo structure exactly */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: i * 0.13 }}
            className="flex justify-center"
          >
            <CardContainer className="inter-var w-full">
              {/*
                CardBody: the base card. NO overflow-hidden.
                Has padding so content sits inside.
                Everything inside is a CardItem with its own translateZ depth.
                The card tilts as a whole unit; each item floats at its own Z depth.
              */}
              <CardBody className="group/card relative h-auto w-full rounded-xl border border-gold/[0.18] bg-[#0A2A1A] p-6 hover:shadow-[0_32px_64px_rgba(0,0,0,0.5)]">
                {/* Category tag — lowest float */}
                <CardItem
                  translateZ="30"
                  className="text-[8px] uppercase tracking-[0.32em] text-gold"
                >
                  {cat.tag}
                </CardItem>

                {/* Title — mid float */}
                <CardItem
                  translateZ="50"
                  as="h3"
                  className="mt-2 font-display text-2xl font-normal leading-tight text-white"
                >
                  {cat.name}
                </CardItem>

                {/* Description — slightly lower */}
                <CardItem
                  as="p"
                  translateZ="40"
                  className="mt-2 max-w-xs text-[12px] leading-relaxed text-muted"
                >
                  {cat.desc}
                </CardItem>

                {/* Image — highest translateZ = floats most above card */}
                <CardItem translateZ="100" className="mt-5 w-full">
                  <img
                    src={cardImages[i]}
                    alt={cat.name}
                    className="h-56 w-full rounded-xl object-cover group-hover/card:shadow-2xl"
                    loading="lazy"
                  />
                </CardItem>

                {/* Bottom actions — low float, same level as demo */}
                <div className="mt-6 flex items-center justify-between">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="#"
                    className="text-[11px] uppercase tracking-[0.18em] text-gold transition-opacity hover:opacity-70"
                  >
                    Explore →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="rounded-lg border border-gold/40 px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold hover:text-green-deep"
                  >
                    View Details
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
