"use client";

import { useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { useRef } from "react";
import { stats } from "@/data/site";

function Counter({ target }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-[clamp(48px,6vw,84px)] font-light leading-none text-gold">
      {val.toLocaleString()}
      <span className="align-super text-[40px] text-gold-dim">+</span>
    </span>
  );
}

export default function Stats() {
  return (
    <div className="relative grid grid-cols-1 gap-px overflow-hidden bg-green-mid px-6 py-14 sm:grid-cols-3 md:px-20 md:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(201,168,76,0.05)_0%,transparent_60%)]" />
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: i * 0.12 }}
          className={`relative px-8 py-10 text-center ${i < stats.length - 1 ? "sm:border-r sm:border-gold/15" : ""}`}
        >
          <Counter target={s.target} />
          <div className="mt-3 text-[10px] uppercase tracking-[0.25em] text-muted">{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
