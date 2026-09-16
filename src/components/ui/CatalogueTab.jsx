"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = "CATALOGUE".split("");

// A small "hanging tag" hooked onto the bottom edge of the navbar — a
// common pattern for a persistent secondary CTA (download brochure /
// catalogue) that stays out of the way of the main nav links but is
// always reachable. Update the href below once the actual catalogue PDF
// is added to /public/catalogue.pdf.
//
// Desktop: a horizontal pill hooked under the navbar's right edge.
// Mobile: that pill would sit over the hero heading, so instead we show
// a slim tab hooked onto the right edge of the screen, vertically
// centred — each letter still reads upright, just stacked top to bottom.
export default function CatalogueTab() {
  // Desktop-only: a small self-dismissing hint bubble that points at the
  // pill for the first few seconds so first-time visitors notice it.
  // Skipped on mobile — the stacked tab there is already large/obvious
  // enough on its own. Runs once per app load (this component lives in
  // the root layout, so it doesn't remount on client-side navigation).
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowHint(true), 1200);
    const hideTimer = setTimeout(() => setShowHint(false), 6500);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {/* Desktop-only hint bubble pointing at the pill below */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed right-8 top-[134px] z-[94] hidden w-[210px] md:block"
          >
            <div className="relative rounded-md border border-gold/40 bg-green-deep px-4 py-3 shadow-[0_16px_32px_rgba(0,0,0,0.45)]">
              {/* Arrow pointing up at the pill */}
              <div className="absolute -top-1.5 right-24 h-3 w-3 rotate-45 border-l border-t border-gold/40 bg-green-deep" />
              <button
                type="button"
                onClick={() => setShowHint(false)}
                aria-label="Dismiss"
                className="absolute right-1.5 top-1.5 p-1 text-gold/50 transition-colors hover:text-gold"
              >
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
              <p className="pr-3 text-[11px] leading-snug text-cream">
                <span className="font-semibold text-gold">Tip —</span> click
                here to download our full door catalogue
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop / tablet — horizontal, hooked under the navbar */}
      <motion.a
        href="/catalogue.pdf"
        download
        aria-label="Download our door catalogue (PDF)"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        whileHover={{ y: 3 }}
        onMouseEnter={() => setShowHint(false)}
        className="fixed right-12 top-[76px] z-[95] hidden flex-row items-center gap-2 border border-t-0 border-gold/50 bg-gradient-to-b from-gold-light to-gold px-5 py-3 text-green-deep shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition-shadow hover:shadow-[0_14px_30px_rgba(0,0,0,0.45)] md:flex"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 78%, 92% 100%, 8% 100%, 0 78%)",
        }}
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0A2A1A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0"
        >
          <path d="M12 3v12" />
          <path d="M7 10l5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
        <span className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.15em]">
          Catalogue
        </span>
      </motion.a>

      {/* Mobile — floats above the call button, in the same bottom-right
          stack as WhatsApp/Call. Same hooked-ribbon look, letters stacked
          but each one stays upright and easy to read (not rotated). */}
      <motion.a
        href="/catalogue.pdf"
        download
        aria-label="Download our door catalogue (PDF)"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        whileHover={{ y: -3 }}
        className="fixed bottom-[140px] right-5 z-[95] flex w-12 flex-col items-center gap-1.5 border border-t-0 border-gold/50 bg-gradient-to-b from-gold-light to-gold px-1 pb-3 pt-2 text-green-deep shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition-shadow hover:shadow-[0_14px_30px_rgba(0,0,0,0.45)] md:hidden"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 88%, 50% 100%, 0 88%)",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0A2A1A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0"
        >
          <path d="M12 3v12" />
          <path d="M7 10l5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
        <span className="flex flex-col items-center leading-[1.1]">
          {LETTERS.map((ch, i) => (
            <span
              key={i}
              className="text-[9px] font-bold uppercase tracking-normal"
            >
              {ch}
            </span>
          ))}
        </span>
      </motion.a>
    </>
  );
}
