"use client";

import { motion } from "framer-motion";

// Lines grow from OUTSIDE inward toward the arrow heads, then hold, then reset
// Left line: x1=8 → x2=68 (grows from left edge toward diamond at x=68)
// Right line: x1=268 → x2=332 (grows from right edge toward diamond at x=268)

const lineVariant = {
  // Animate scaleX from 0→1, with transform origin at the outer edge
  initial: { scaleX: 0, opacity: 1 },
  animate: {
    scaleX: 1,
    opacity: 1,
    transition: {
      scaleX: {
        duration: 1.0,
        delay: 0,
        ease: [0.4, 0, 0.2, 1],
        repeat: Infinity,
        repeatDelay: 4.0, // hold 4s then restart
        repeatType: "loop",
      },
    },
  },
};

const diamondVariant = (delay = 0.8) => ({
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      scale: {
        duration: 0.25,
        delay,
        repeat: Infinity,
        repeatDelay: 4.75,
        repeatType: "loop",
      },
      opacity: {
        duration: 0.1,
        delay,
        repeat: Infinity,
        repeatDelay: 4.75,
        repeatType: "loop",
      },
    },
  },
});

export default function LogoText({ className = "h-12 w-auto" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 340 80"
      fill="none"
      className={className}
    >
      {/* MADINA — static, always visible */}
      <text
        x="170"
        y="44"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="38"
        fontWeight="700"
        textAnchor="middle"
        letterSpacing="6"
        fill="#F5F0E8"
      >
        MADINA
      </text>

      {/* TRADERS — static */}
      <text
        x="170"
        y="72"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="19"
        fontWeight="400"
        textAnchor="middle"
        letterSpacing="8"
        fill="#F5F0E8"
      >
        TRADERS
      </text>

      {/* ── LEFT SIDE — line grows from outer edge (x=8) inward to diamond (x=68) ── */}
      <motion.line
        x1="8"
        y1="62"
        x2="68"
        y2="62"
        stroke="#C9A84C"
        strokeWidth="1.4"
        style={{ transformOrigin: "8px 62px" }} // scale from left edge
        variants={lineVariant}
        initial="initial"
        animate="animate"
      />
      {/* Left diamond — appears when line reaches it */}
      <motion.polygon
        points="68,62 76,57 80,62 76,67"
        fill="#C9A84C"
        variants={diamondVariant(0.85)}
        initial="initial"
        animate="animate"
      />

      {/* ── RIGHT SIDE — line grows from outer edge (x=332) inward to diamond (x=268) ── */}
      <motion.line
        x1="268"
        y1="62"
        x2="332"
        y2="62"
        stroke="#C9A84C"
        strokeWidth="1.4"
        style={{ transformOrigin: "332px 62px" }} // scale from right edge
        variants={lineVariant}
        initial="initial"
        animate="animate"
      />
      {/* Right diamond */}
      <motion.polygon
        points="260,62 264,57 268,62 264,67"
        fill="#C9A84C"
        variants={diamondVariant(0.85)}
        initial="initial"
        animate="animate"
      />
    </svg>
  );
}
