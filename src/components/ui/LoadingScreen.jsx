"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const doors = [
  {
    // Simple interior panel door — outer frame, inset leaf, two horizontal
    // rails splitting it into three panels, plus a lever handle.
    label: "Room Doors",
    paths: [
      { d: "M55,190 L55,15 L185,15 L185,190 Z", delay: 0 },
      { d: "M68,178 L68,27 L172,27 L172,178 Z", delay: 0.5 },
      { d: "M68,75 L172,75", delay: 0.9 },
      { d: "M68,130 L172,130", delay: 1.1 },
      {
        d: "M160,100 m-4,0 a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0",
        delay: 1.4,
      },
      { d: "M160,104 L160,116", delay: 1.6 },
    ],
  },
  {
    // Mother-son main entry door — a wide main leaf and a narrow "son" leaf
    // side by side, with a mullioned fanlight transom above.
    label: "Main Entry Doors",
    paths: [
      { d: "M25,190 L25,15 L215,15 L215,190 Z", delay: 0 },
      { d: "M25,45 L215,45", delay: 0.4 },
      { d: "M75,15 L75,45", delay: 0.6 },
      { d: "M120,15 L120,45", delay: 0.6 },
      { d: "M165,15 L165,45", delay: 0.6 },
      { d: "M40,178 L40,58 L142,58 L142,178 Z", delay: 0.9 },
      { d: "M40,120 L142,120", delay: 1.2 },
      { d: "M152,178 L152,58 L202,58 L202,178 Z", delay: 0.9 },
      { d: "M152,120 L202,120", delay: 1.2 },
      {
        d: "M128,120 m-4,0 a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0",
        delay: 1.6,
      },
      { d: "M128,124 L128,136", delay: 1.8 },
    ],
  },
  {
    // Bathroom door — narrower leaf with a frosted-glass upper panel and a
    // louvered vent below, plus a privacy turn-lock.
    label: "Bathroom Doors",
    paths: [
      { d: "M60,190 L60,15 L180,15 L180,190 Z", delay: 0 },
      { d: "M72,178 L72,27 L168,27 L168,178 Z", delay: 0.5 },
      { d: "M85,40 L155,40 L155,90 L85,90 Z", delay: 0.9 },
      { d: "M90,45 L150,85", delay: 1.2 },
      { d: "M115,40 L155,65", delay: 1.3 },
      { d: "M85,130 L155,130 L155,165 L85,165 Z", delay: 1.5 },
      { d: "M85,140 L155,140", delay: 1.7 },
      { d: "M85,150 L155,150", delay: 1.8 },
      {
        d: "M156,108 m-3,0 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0",
        delay: 2.0,
      },
      { d: "M156,112 L156,122", delay: 2.1 },
    ],
  },
  {
    // Mother-son door — a wide primary leaf beside a slimmer secondary leaf,
    // both set beneath a gentle arched head, with a lever handle on the
    // mother leaf and a small ring-pull on the son leaf.
    label: "Mother Son Doors",
    paths: [
      {
        d: "M30,190 L30,60 Q30,15 75,15 L165,15 Q210,15 210,60 L210,190 Z",
        delay: 0,
      },
      { d: "M155,15 L155,190", delay: 0.5 },
      { d: "M42,178 L42,72 L143,72 L143,178 Z", delay: 0.8 },
      { d: "M42,110 L143,110", delay: 1.1 },
      { d: "M42,145 L143,145", delay: 1.2 },
      { d: "M167,178 L167,72 L198,72 L198,178 Z", delay: 0.9 },
      { d: "M167,125 L198,125", delay: 1.3 },
      {
        d: "M130,120 m-4,0 a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0",
        delay: 1.6,
      },
      { d: "M130,124 L130,138", delay: 1.8 },
      {
        d: "M182,150 m-3,0 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0",
        delay: 1.9,
      },
    ],
  },
];

// Each door gets 2.8s to fully draw, then 0.4s pause, then next
const DOOR_DURATION = 3200; // ms per door
const TOTAL = doors.length * DOOR_DURATION;

function DoorSVG({ door }) {
  return (
    <svg
      viewBox="0 0 240 205"
      fill="none"
      stroke="#C9A84C"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-44 h-44"
    >
      {door.paths.map((p, i) => (
        <motion.path
          key={i}
          d={p.d}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 0.8, delay: p.delay, ease: "easeInOut" },
            opacity: { duration: 0.01, delay: p.delay },
          }}
        />
      ))}
    </svg>
  );
}

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling behind the loader while it's showing
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Advance phase every DOOR_DURATION ms
    const timers = doors.map((_, i) =>
      setTimeout(() => setPhase(i), i * DOOR_DURATION)
    );

    // Smooth progress bar over total time
    const steps = 120;
    const interval = TOTAL / steps;
    let step = 0;
    const progressTimer = setInterval(() => {
      step++;
      setProgress(Math.min((step / steps) * 100, 100));
      if (step >= steps) clearInterval(progressTimer);
    }, interval);

    // Complete after all doors shown + small buffer
    const doneTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => onComplete?.(), 400);
    }, TOTAL + 200);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(progressTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = prevOverflow;
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-green-deep"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Eyebrow — bigger now */}
      <motion.p
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mb-14 px-4 text-center text-[12px] uppercase tracking-[0.3em] text-muted md:text-[13px] md:tracking-[0.5em]"
      >
        While You Are Waiting.
      </motion.p>

      {/* Door drawing */}
      <div className="relative flex h-52 w-56 items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={phase}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <DoorSVG door={doors[phase]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Door label */}
      <div className="mt-6 h-12 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={phase}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.4 }}
            className="font-display text-[clamp(26px,3vw,36px)] font-light italic text-gold-light text-center"
          >
            {doors[phase].label}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="mt-8 h-px w-56 overflow-hidden bg-gold/20 rounded-full">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-gold-dim via-gold to-gold-dim"
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.3 }}
        />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-10 flex items-center gap-3"
      >
        <img src="/logo.svg" alt="" className="h-12 w-12 " />
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
          Madina Traders
        </span>
      </motion.div>
    </motion.div>
  );
}
