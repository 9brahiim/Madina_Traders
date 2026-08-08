"use client";

import { motion } from "framer-motion";

// Circle circumference = 2 * PI * r = 2 * 3.14159 * 112 ≈ 703.7
// Inner circle r=100, circumference ≈ 628.3
const C_OUTER = 703.7;
const C_INNER = 628.3;

// We animate pathLength 0→1 for all strokes
// Top half and bottom half drawn simultaneously by splitting stroke-dashoffset

const transition = (delay = 0, duration = 1.4) => ({
  duration,
  delay,
  ease: [0.4, 0, 0.2, 1],
  repeat: Infinity,
  repeatDelay: 6, // hold 5s after building, then restart
  repeatType: "loop",
});

const strokeVariants = (delay = 0, duration = 1.2) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
        repeat: Infinity,
        repeatDelay: 6,
        repeatType: "loop",
      },
      opacity: {
        duration: 0.01,
        delay,
        repeat: Infinity,
        repeatDelay: 6,
        repeatType: "loop",
      },
    },
  },
});

// M letter — fills from left and right concurrently
// We fake this by animating clipPath width from center out
function AnimatedM() {
  return (
    <g>
      {/* Base M always faint */}
      <text
        x="120"
        y="172"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="110"
        fontWeight="700"
        textAnchor="middle"
        fill="#C9A84C"
        opacity="0.08"
      >
        M
      </text>

      {/* Left half clip — grows from center-left */}
      <motion.g
        initial={{ clipPath: "inset(0 50% 0 50%)" }}
        animate={{ clipPath: "inset(0 0% 0 0%)" }}
        transition={{
          duration: 1.0,
          delay: 1.6, // after circle is built
          ease: [0.4, 0, 0.2, 1],
          repeat: Infinity,
          repeatDelay: 5.4,
          repeatType: "loop",
        }}
      >
        <text
          x="120"
          y="172"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="110"
          fontWeight="700"
          textAnchor="middle"
          fill="#C9A84C"
        >
          M
        </text>
      </motion.g>
    </g>
  );
}

export default function LogoMark({ className = "h-14 w-14" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 240"
      fill="none"
      className={className}
    >
      {/* ── OUTER CIRCLE — drawn top+bottom simultaneously ── */}
      {/* Top half: stroke from 12-o'clock going clockwise 180° */}
      <motion.circle
        cx="120"
        cy="120"
        r="112"
        stroke="#C9A84C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={`${C_OUTER / 2} ${C_OUTER}`}
        initial={{ strokeDashoffset: C_OUTER / 2, opacity: 0 }}
        animate={{ strokeDashoffset: 0, opacity: 1 }}
        transition={{
          strokeDashoffset: {
            duration: 1.4,
            delay: 0.1,
            ease: [0.4, 0, 0.2, 1],
            repeat: Infinity,
            repeatDelay: 5.6,
            repeatType: "loop",
          },
          opacity: {
            duration: 0.01,
            delay: 0.1,
            repeat: Infinity,
            repeatDelay: 5.6,
            repeatType: "loop",
          },
        }}
        style={{ rotate: "-90deg", transformOrigin: "120px 120px" }}
      />
      {/* Bottom half: stroke from 12-o'clock going counter-clockwise 180° */}
      <motion.circle
        cx="120"
        cy="120"
        r="112"
        stroke="#C9A84C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={`${C_OUTER / 2} ${C_OUTER}`}
        initial={{ strokeDashoffset: C_OUTER / 2, opacity: 0 }}
        animate={{ strokeDashoffset: 0, opacity: 1 }}
        transition={{
          strokeDashoffset: {
            duration: 1.4,
            delay: 0.1,
            ease: [0.4, 0, 0.2, 1],
            repeat: Infinity,
            repeatDelay: 5.6,
            repeatType: "loop",
          },
          opacity: {
            duration: 0.01,
            delay: 0.1,
            repeat: Infinity,
            repeatDelay: 5.6,
            repeatType: "loop",
          },
        }}
        style={{ rotate: "90deg", transformOrigin: "120px 120px" }}
      />

      {/* ── INNER CIRCLE — same, slight delay ── */}
      <motion.circle
        cx="120"
        cy="120"
        r="100"
        stroke="#C9A84C"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeDasharray={`${C_INNER / 2} ${C_INNER}`}
        initial={{ strokeDashoffset: C_INNER / 2, opacity: 0 }}
        animate={{ strokeDashoffset: 0, opacity: 1 }}
        transition={{
          strokeDashoffset: {
            duration: 1.3,
            delay: 0.25,
            ease: [0.4, 0, 0.2, 1],
            repeat: Infinity,
            repeatDelay: 5.45,
            repeatType: "loop",
          },
          opacity: {
            duration: 0.01,
            delay: 0.25,
            repeat: Infinity,
            repeatDelay: 5.45,
            repeatType: "loop",
          },
        }}
        style={{ rotate: "-90deg", transformOrigin: "120px 120px" }}
      />
      <motion.circle
        cx="120"
        cy="120"
        r="100"
        stroke="#C9A84C"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeDasharray={`${C_INNER / 2} ${C_INNER}`}
        initial={{ strokeDashoffset: C_INNER / 2, opacity: 0 }}
        animate={{ strokeDashoffset: 0, opacity: 1 }}
        transition={{
          strokeDashoffset: {
            duration: 1.3,
            delay: 0.25,
            ease: [0.4, 0, 0.2, 1],
            repeat: Infinity,
            repeatDelay: 5.45,
            repeatType: "loop",
          },
          opacity: {
            duration: 0.01,
            delay: 0.25,
            repeat: Infinity,
            repeatDelay: 5.45,
            repeatType: "loop",
          },
        }}
        style={{ rotate: "90deg", transformOrigin: "120px 120px" }}
      />

      {/* ── DIAMONDS — top, bottom, left, right ── */}
      {[
        { points: "120,2 125,10 120,18 115,10", d: 0.3 },
        { points: "120,222 125,230 120,238 115,230", d: 0.3 },
        { points: "2,120 10,115 18,120 10,125", d: 0.5 },
        { points: "222,120 230,115 238,120 230,125", d: 0.5 },
      ].map((dm, i) => (
        <motion.polygon
          key={i}
          points={dm.points}
          fill="#C9A84C"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            scale: {
              duration: 0.3,
              delay: dm.d,
              repeat: Infinity,
              repeatDelay: 6.7,
              repeatType: "loop",
            },
            opacity: {
              duration: 0.1,
              delay: dm.d,
              repeat: Infinity,
              repeatDelay: 6.7,
              repeatType: "loop",
            },
          }}
          style={{ transformOrigin: "120px 120px" }}
        />
      ))}

      {/* ── TOP ORNAMENT — center spike ── */}
      <motion.polygon
        points="120,18 122,26 120,34 118,26"
        fill="#C9A84C"
        {...strokeVariants(0.7, 0.3).initial}
        initial={{ scaleY: 0, opacity: 0, originY: 1 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.7,
          repeat: Infinity,
          repeatDelay: 6.7,
          repeatType: "loop",
        }}
        style={{ transformOrigin: "120px 34px" }}
      />
      <motion.polygon
        points="120,34 123,40 120,46 117,40"
        fill="#C9A84C"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.85,
          repeat: Infinity,
          repeatDelay: 6.55,
          repeatType: "loop",
        }}
        style={{ transformOrigin: "120px 46px" }}
      />

      {/* Top scrolls — draw from center outward */}
      <motion.path
        d="M120,48 C108,48 94,50 86,58 C80,64 80,72 86,75 C92,78 99,74 99,68 C99,63 94,61 90,63"
        stroke="#C9A84C"
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: {
            duration: 0.8,
            delay: 0.9,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6.3,
            repeatType: "loop",
          },
          opacity: {
            duration: 0.01,
            delay: 0.9,
            repeat: Infinity,
            repeatDelay: 6.3,
            repeatType: "loop",
          },
        }}
      />
      <motion.path
        d="M86,58 C76,54 66,56 62,62 C59,68 62,75 68,75"
        stroke="#C9A84C"
        strokeWidth="1.3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: {
            duration: 0.6,
            delay: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6.3,
            repeatType: "loop",
          },
          opacity: {
            duration: 0.01,
            delay: 1.1,
            repeat: Infinity,
            repeatDelay: 6.3,
            repeatType: "loop",
          },
        }}
      />
      <motion.path
        d="M120,48 C132,48 146,50 154,58 C160,64 160,72 154,75 C148,78 141,74 141,68 C141,63 146,61 150,63"
        stroke="#C9A84C"
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: {
            duration: 0.8,
            delay: 0.9,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6.3,
            repeatType: "loop",
          },
          opacity: {
            duration: 0.01,
            delay: 0.9,
            repeat: Infinity,
            repeatDelay: 6.3,
            repeatType: "loop",
          },
        }}
      />
      <motion.path
        d="M154,58 C164,54 174,56 178,62 C181,68 178,75 172,75"
        stroke="#C9A84C"
        strokeWidth="1.3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: {
            duration: 0.6,
            delay: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6.3,
            repeatType: "loop",
          },
          opacity: {
            duration: 0.01,
            delay: 1.1,
            repeat: Infinity,
            repeatDelay: 6.3,
            repeatType: "loop",
          },
        }}
      />

      {/* ── BOTTOM ORNAMENT — spikes ── */}
      <motion.polygon
        points="120,182 123,190 120,198 117,190"
        fill="#C9A84C"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.7,
          repeat: Infinity,
          repeatDelay: 6.7,
          repeatType: "loop",
        }}
        style={{ transformOrigin: "120px 182px" }}
      />
      <motion.polygon
        points="120,198 123,206 120,214 117,206"
        fill="#C9A84C"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.85,
          repeat: Infinity,
          repeatDelay: 6.55,
          repeatType: "loop",
        }}
        style={{ transformOrigin: "120px 198px" }}
      />

      {/* Bottom scrolls */}
      <motion.path
        d="M120,182 C108,182 94,180 86,172 C80,166 80,158 86,155 C92,152 99,156 99,162 C99,167 94,169 90,167"
        stroke="#C9A84C"
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: {
            duration: 0.8,
            delay: 0.9,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6.3,
            repeatType: "loop",
          },
          opacity: {
            duration: 0.01,
            delay: 0.9,
            repeat: Infinity,
            repeatDelay: 6.3,
            repeatType: "loop",
          },
        }}
      />
      <motion.path
        d="M86,172 C76,176 66,174 62,168 C59,162 62,155 68,155"
        stroke="#C9A84C"
        strokeWidth="1.3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: {
            duration: 0.6,
            delay: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6.3,
            repeatType: "loop",
          },
          opacity: {
            duration: 0.01,
            delay: 1.1,
            repeat: Infinity,
            repeatDelay: 6.3,
            repeatType: "loop",
          },
        }}
      />
      <motion.path
        d="M120,182 C132,182 146,180 154,172 C160,166 160,158 154,155 C148,152 141,156 141,162 C141,167 146,169 150,167"
        stroke="#C9A84C"
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: {
            duration: 0.8,
            delay: 0.9,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6.3,
            repeatType: "loop",
          },
          opacity: {
            duration: 0.01,
            delay: 0.9,
            repeat: Infinity,
            repeatDelay: 6.3,
            repeatType: "loop",
          },
        }}
      />
      <motion.path
        d="M154,172 C164,176 174,174 178,168 C181,162 178,155 172,155"
        stroke="#C9A84C"
        strokeWidth="1.3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: {
            duration: 0.6,
            delay: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6.3,
            repeatType: "loop",
          },
          opacity: {
            duration: 0.01,
            delay: 1.1,
            repeat: Infinity,
            repeatDelay: 6.3,
            repeatType: "loop",
          },
        }}
      />

      {/* ── M LETTER — fills from left+right after circle built ── */}
      <AnimatedM />
    </svg>
  );
}
