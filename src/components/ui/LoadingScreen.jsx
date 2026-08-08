"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const doors = [
  {
    label: "Steel Doors",
    paths: [
      { d: "M50,190 L50,15 L190,15 L190,190 Z", delay: 0 },
      { d: "M65,175 L65,30 L175,30 L175,175 Z", delay: 0.5 },
      { d: "M65,100 L175,100", delay: 1.0 },
      { d: "M120,30 L120,100", delay: 1.3 },
      { d: "M120,100 L120,175", delay: 1.5 },
      {
        d: "M162,112 L162,128 A5,5 0 0,1 157,128 L157,112 A5,5 0 0,1 162,112 Z",
        delay: 1.8,
      },
    ],
  },
  {
    label: "Arch Doors",
    paths: [
      { d: "M45,190 L45,95 Q45,15 120,15 Q195,15 195,95 L195,190 Z", delay: 0 },
      {
        d: "M63,188 L63,98 Q63,38 120,38 Q177,38 177,98 L177,188 Z",
        delay: 0.6,
      },
      { d: "M63,135 L177,135", delay: 1.1 },
      { d: "M63,135 L63,188", delay: 1.4 },
      { d: "M177,135 L177,188", delay: 1.4 },
      { d: "M100,135 L100,188", delay: 1.7 },
      { d: "M140,135 L140,188", delay: 1.7 },
      { d: "M108,160 L108,172 A5,5 0 0,0 118,172 L118,160", delay: 2.0 },
      { d: "M122,160 L122,172 A5,5 0 0,1 132,172 L132,160", delay: 2.0 },
    ],
  },
  {
    label: "Double Doors",
    paths: [
      { d: "M25,190 L25,15 L115,15 L115,190 Z", delay: 0 },
      { d: "M125,190 L125,15 L215,15 L215,190 Z", delay: 0.3 },
      { d: "M38,28 L102,28 L102,100 L38,100 Z", delay: 0.7 },
      { d: "M38,110 L102,110 L102,177 L38,177 Z", delay: 0.9 },
      { d: "M138,28 L202,28 L202,100 L138,100 Z", delay: 1.1 },
      { d: "M138,110 L202,110 L202,177 L138,177 Z", delay: 1.3 },
      { d: "M106,102 L106,118", delay: 1.7 },
      { d: "M134,102 L134,118", delay: 1.7 },
    ],
  },
  {
    label: "Security Doors",
    paths: [
      { d: "M40,190 L40,15 L200,15 L200,190 Z", delay: 0 },
      { d: "M55,30 L185,30 L185,175 L55,175 Z", delay: 0.5 },
      { d: "M55,80 L185,80", delay: 0.9 },
      { d: "M55,130 L185,130", delay: 1.1 },
      { d: "M120,15 L120,190", delay: 1.3 },
      {
        d: "M175,90 L175,120 A6,6 0 0,1 168,120 L168,90 A6,6 0 0,1 175,90 Z",
        delay: 1.6,
      },
      { d: "M168,103 L160,103", delay: 2.0 },
      { d: "M55,50 L120,50", delay: 1.4 },
      { d: "M120,50 L185,50", delay: 1.4 },
    ],
  },
  {
    label: "Classic Doors",
    paths: [
      { d: "M48,190 L48,15 L192,15 L192,190 Z", delay: 0 },
      { d: "M62,29 L178,29 L178,175 L62,175 Z", delay: 0.5 },
      { d: "M62,80 L178,80", delay: 0.9 },
      { d: "M62,130 L178,130", delay: 1.1 },
      { d: "M62,29 L62,80", delay: 1.2 },
      { d: "M178,29 L178,80", delay: 1.2 },
      { d: "M62,80 L62,130", delay: 1.4 },
      { d: "M178,80 L178,130", delay: 1.4 },
      { d: "M62,130 L62,175", delay: 1.6 },
      { d: "M178,130 L178,175", delay: 1.6 },
      { d: "M120,29 L120,80", delay: 1.8 },
      { d: "M120,130 L120,175", delay: 1.9 },
      {
        d: "M166,100 L166,115 A5,5 0 0,1 160,115 L160,100 A5,5 0 0,1 166,100 Z",
        delay: 2.2,
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
        className="mb-14 text-[13px] uppercase tracking-[0.5em] text-muted"
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
