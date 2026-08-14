"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE = "919696243986";
const WA = "919696243986";
const MAP_LINK = "https://maps.app.goo.gl/81ozopTGjr3PCoM66?g_st=iw";

// Each slide: bg gradient + tagline + door design via SVG
const slides = [
  {
    tagline: "Smart Door for your Smart Home",
    gradient:
      "radial-gradient(ellipse 70% 90% at 50% 60%, #1a5c38 0%, #071a0e 100%)",
    accentText: "Luxury Steel",
  },
  {
    tagline: "Grand Entrances, Built to Last",
    gradient:
      "radial-gradient(ellipse 70% 90% at 50% 60%, #1a3040 0%, #07101a 100%)",
    accentText: "Double Doors",
  },
  {
    tagline: "Quiet Comfort for Every Room",
    gradient:
      "radial-gradient(ellipse 70% 90% at 50% 60%, #3a332c 0%, #120f0a 100%)",
    accentText: "Room Doors",
  },
  {
    tagline: "Style That Handles Everyday Moisture",
    gradient:
      "radial-gradient(ellipse 70% 90% at 50% 60%, #0a3a3a 0%, #041515 100%)",
    accentText: "Bathroom Doors",
  },
  {
    tagline: "Crafted for Family, Built to Welcome",
    gradient:
      "radial-gradient(ellipse 70% 90% at 50% 60%, #4a2010 0%, #170a04 100%)",
    accentText: "Mother Son Doors",
  },
];

// Five distinct door SVGs — one per slide above
function DoorA() {
  return (
    <svg
      viewBox="0 0 300 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="dA-frame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8B7035" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="dA-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A5C38" />
          <stop offset="100%" stopColor="#0A2A1A" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Outer frame */}
      <rect
        x="4"
        y="4"
        width="292"
        height="472"
        rx="3"
        fill="none"
        stroke="url(#dA-frame)"
        strokeWidth="3"
      />
      <rect
        x="14"
        y="14"
        width="272"
        height="452"
        rx="2"
        fill="url(#dA-body)"
      />
      {/* Top decorative panel */}
      <rect
        x="28"
        y="28"
        width="244"
        height="120"
        rx="2"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1"
        strokeOpacity="0.8"
      />
      <rect
        x="40"
        y="40"
        width="220"
        height="96"
        rx="1"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.5"
        strokeOpacity="0.4"
      />
      {/* Ornamental lines top panel */}
      <line
        x1="150"
        y1="28"
        x2="150"
        y2="148"
        stroke="#C9A84C"
        strokeWidth="0.4"
        strokeOpacity="0.3"
      />
      <line
        x1="28"
        y1="88"
        x2="272"
        y2="88"
        stroke="#C9A84C"
        strokeWidth="0.4"
        strokeOpacity="0.3"
      />
      {/* Middle panels */}
      <rect
        x="28"
        y="164"
        width="116"
        height="140"
        rx="2"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1"
        strokeOpacity="0.7"
      />
      <rect
        x="40"
        y="176"
        width="92"
        height="116"
        rx="1"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.4"
        strokeOpacity="0.35"
      />
      <rect
        x="156"
        y="164"
        width="116"
        height="140"
        rx="2"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1"
        strokeOpacity="0.7"
      />
      <rect
        x="168"
        y="176"
        width="92"
        height="116"
        rx="1"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.4"
        strokeOpacity="0.35"
      />
      {/* Bottom panel */}
      <rect
        x="28"
        y="320"
        width="244"
        height="120"
        rx="2"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1"
        strokeOpacity="0.7"
      />
      <rect
        x="40"
        y="332"
        width="220"
        height="96"
        rx="1"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.4"
        strokeOpacity="0.35"
      />
      {/* Handle */}
      <rect
        x="256"
        y="224"
        width="12"
        height="48"
        rx="6"
        fill="#C9A84C"
        filter="url(#glow)"
      />
      <circle cx="262" cy="276" r="8" fill="#C9A84C" fillOpacity="0.6" />
      {/* Center divider */}
      <line
        x1="150"
        y1="164"
        x2="150"
        y2="308"
        stroke="#C9A84C"
        strokeWidth="0.6"
        strokeOpacity="0.4"
      />
      {/* Gold dots ornamental */}
      <circle cx="150" cy="156" r="3" fill="#C9A84C" fillOpacity="0.7" />
      <circle cx="150" cy="316" r="3" fill="#C9A84C" fillOpacity="0.7" />
    </svg>
  );
}

// "Double Doors" — twin leaves flanked by panelled sidelights
function DoorB() {
  return (
    <svg
      viewBox="0 0 340 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="dC-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a304a" />
          <stop offset="100%" stopColor="#07101a" />
        </linearGradient>
      </defs>
      {/* Left sidelight */}
      <rect
        x="2"
        y="2"
        width="58"
        height="476"
        rx="2"
        fill="#0a1a28"
        stroke="#C9A84C"
        strokeWidth="1.2"
      />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x="10"
          y={18 + i * 78}
          width="42"
          height="66"
          rx="1"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.5"
          strokeOpacity="0.5"
        />
      ))}
      {/* Right sidelight */}
      <rect
        x="280"
        y="2"
        width="58"
        height="476"
        rx="2"
        fill="#0a1a28"
        stroke="#C9A84C"
        strokeWidth="1.2"
      />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x="288"
          y={18 + i * 78}
          width="42"
          height="66"
          rx="1"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.5"
          strokeOpacity="0.5"
        />
      ))}
      {/* Left door leaf */}
      <rect
        x="64"
        y="2"
        width="104"
        height="476"
        rx="2"
        fill="url(#dC-body)"
        stroke="#C9A84C"
        strokeWidth="2"
      />
      <rect
        x="76"
        y="16"
        width="80"
        height="100"
        rx="1"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.8"
        strokeOpacity="0.7"
      />
      <rect
        x="76"
        y="130"
        width="80"
        height="100"
        rx="1"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.8"
        strokeOpacity="0.7"
      />
      <rect
        x="76"
        y="244"
        width="80"
        height="100"
        rx="1"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.8"
        strokeOpacity="0.7"
      />
      <rect
        x="76"
        y="358"
        width="80"
        height="100"
        rx="1"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.8"
        strokeOpacity="0.7"
      />
      <rect x="155" y="228" width="10" height="36" rx="5" fill="#C9A84C" />
      {/* Right door leaf */}
      <rect
        x="172"
        y="2"
        width="104"
        height="476"
        rx="2"
        fill="url(#dC-body)"
        stroke="#C9A84C"
        strokeWidth="2"
      />
      <rect
        x="184"
        y="16"
        width="80"
        height="100"
        rx="1"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.8"
        strokeOpacity="0.7"
      />
      <rect
        x="184"
        y="130"
        width="80"
        height="100"
        rx="1"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.8"
        strokeOpacity="0.7"
      />
      <rect
        x="184"
        y="244"
        width="80"
        height="100"
        rx="1"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.8"
        strokeOpacity="0.7"
      />
      <rect
        x="184"
        y="358"
        width="80"
        height="100"
        rx="1"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.8"
        strokeOpacity="0.7"
      />
      <rect x="175" y="228" width="10" height="36" rx="5" fill="#C9A84C" />
      {/* Center seam */}
      <line
        x1="170"
        y1="2"
        x2="170"
        y2="478"
        stroke="#C9A84C"
        strokeWidth="0.6"
        strokeOpacity="0.5"
      />
    </svg>
  );
}

// "Room Doors" — quiet, minimalist interior door: one large fluted panel
// over a small base panel, deliberately different rhythm from the steel door
function DoorC() {
  return (
    <svg
      viewBox="0 0 300 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="dRoom-frame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8B7035" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="dRoom-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a332c" />
          <stop offset="100%" stopColor="#120f0a" />
        </linearGradient>
      </defs>
      {/* Outer frame */}
      <rect
        x="4"
        y="4"
        width="292"
        height="472"
        rx="3"
        fill="none"
        stroke="url(#dRoom-frame)"
        strokeWidth="3"
      />
      <rect
        x="14"
        y="14"
        width="272"
        height="452"
        rx="2"
        fill="url(#dRoom-body)"
      />
      {/* One large fluted panel — most of the door's height */}
      <rect
        x="28"
        y="28"
        width="244"
        height="300"
        rx="2"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1"
        strokeOpacity="0.75"
      />
      <rect
        x="40"
        y="40"
        width="220"
        height="276"
        rx="1"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.4"
        strokeOpacity="0.3"
      />
      {/* Subtle vertical fluting inside the large panel */}
      {[58, 83, 108, 133, 158, 183, 208, 233].map((x, i) => (
        <line
          key={i}
          x1={x}
          y1="50"
          x2={x}
          y2="306"
          stroke="#C9A84C"
          strokeWidth="0.4"
          strokeOpacity="0.18"
        />
      ))}
      {/* Small base panel */}
      <rect
        x="28"
        y="342"
        width="244"
        height="98"
        rx="2"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1"
        strokeOpacity="0.75"
      />
      <rect
        x="40"
        y="354"
        width="220"
        height="74"
        rx="1"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.4"
        strokeOpacity="0.3"
      />
      {/* Slim lever handle, sitting in the gap between panels */}
      <rect
        x="256"
        y="304"
        width="10"
        height="44"
        rx="5"
        fill="#C9A84C"
        fillOpacity="0.85"
      />
      <circle cx="261" cy="358" r="6" fill="#C9A84C" fillOpacity="0.6" />
      {/* Gold dot accent in the gap */}
      <circle cx="150" cy="332" r="2.5" fill="#C9A84C" fillOpacity="0.7" />
    </svg>
  );
}

// "Bathroom Doors" — frosted / reeded glass upper light + louvered vent below
function DoorD() {
  return (
    <svg
      viewBox="0 0 300 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="dBath-frame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8B7035" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="dBath-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a3a3a" />
          <stop offset="100%" stopColor="#041515" />
        </linearGradient>
      </defs>
      {/* Outer frame */}
      <rect
        x="4"
        y="4"
        width="292"
        height="472"
        rx="3"
        fill="none"
        stroke="url(#dBath-frame)"
        strokeWidth="3"
      />
      <rect
        x="14"
        y="14"
        width="272"
        height="452"
        rx="2"
        fill="url(#dBath-body)"
      />
      {/* Frosted / reeded glass light */}
      <rect
        x="40"
        y="40"
        width="220"
        height="150"
        rx="2"
        fill="#C9A84C"
        fillOpacity="0.06"
        stroke="#C9A84C"
        strokeWidth="1"
        strokeOpacity="0.75"
      />
      {[...Array(9)].map((_, i) => (
        <line
          key={i}
          x1={50 + i * 22}
          y1="48"
          x2={50 + i * 22}
          y2="182"
          stroke="#C9A84C"
          strokeWidth="0.5"
          strokeOpacity="0.25"
        />
      ))}
      {/* Mid rail */}
      <rect
        x="28"
        y="206"
        width="244"
        height="14"
        rx="1"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.6"
        strokeOpacity="0.4"
      />
      {/* Louvered ventilation panel */}
      <rect
        x="40"
        y="234"
        width="220"
        height="130"
        rx="2"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1"
        strokeOpacity="0.75"
      />
      {[...Array(7)].map((_, i) => (
        <line
          key={i}
          x1="50"
          y1={248 + i * 16}
          x2="250"
          y2={248 + i * 16}
          stroke="#C9A84C"
          strokeWidth="1.4"
          strokeOpacity="0.55"
        />
      ))}
      {/* Kick panel */}
      <rect
        x="28"
        y="382"
        width="244"
        height="58"
        rx="2"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      {/* Privacy turn-lock + handle */}
      <circle
        cx="256"
        cy="228"
        r="6"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1"
        strokeOpacity="0.8"
      />
      <rect
        x="253"
        y="238"
        width="8"
        height="30"
        rx="4"
        fill="#C9A84C"
        fillOpacity="0.8"
      />
    </svg>
  );
}

// "Mother Son Doors" — wide main leaf + narrow son leaf, mullioned fanlight above
function DoorE() {
  return (
    <svg
      viewBox="0 0 320 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="dMS-frame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8B7035" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="dMS-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a2010" />
          <stop offset="100%" stopColor="#170a04" />
        </linearGradient>
        <filter id="ms-glow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Outer frame */}
      <rect
        x="4"
        y="4"
        width="312"
        height="472"
        rx="3"
        fill="none"
        stroke="url(#dMS-frame)"
        strokeWidth="3"
      />
      {/* Fanlight transom */}
      <rect
        x="14"
        y="14"
        width="292"
        height="64"
        rx="1"
        fill="url(#dMS-body)"
        stroke="#C9A84C"
        strokeWidth="0.8"
        strokeOpacity="0.6"
      />
      {[76, 122, 168, 214, 260].map((x, i) => (
        <line
          key={i}
          x1={x}
          y1="14"
          x2={x}
          y2="78"
          stroke="#C9A84C"
          strokeWidth="0.5"
          strokeOpacity="0.35"
        />
      ))}
      {/* Main (mother) leaf */}
      <rect
        x="14"
        y="88"
        width="200"
        height="378"
        rx="2"
        fill="url(#dMS-body)"
        stroke="#C9A84C"
        strokeWidth="2"
      />
      <rect
        x="28"
        y="104"
        width="172"
        height="150"
        rx="1"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.8"
        strokeOpacity="0.7"
      />
      <rect
        x="28"
        y="266"
        width="172"
        height="182"
        rx="1"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.8"
        strokeOpacity="0.7"
      />
      <rect
        x="192"
        y="256"
        width="10"
        height="40"
        rx="5"
        fill="#C9A84C"
        filter="url(#ms-glow)"
      />
      {/* Son leaf — narrower companion */}
      <rect
        x="222"
        y="88"
        width="84"
        height="378"
        rx="2"
        fill="url(#dMS-body)"
        stroke="#C9A84C"
        strokeWidth="2"
      />
      <rect
        x="234"
        y="104"
        width="60"
        height="150"
        rx="1"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.6"
        strokeOpacity="0.6"
      />
      <rect
        x="234"
        y="266"
        width="60"
        height="182"
        rx="1"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.6"
        strokeOpacity="0.6"
      />
      {/* Center seam between leaves */}
      <line
        x1="218"
        y1="88"
        x2="218"
        y2="466"
        stroke="#C9A84C"
        strokeWidth="0.6"
        strokeOpacity="0.45"
      />
    </svg>
  );
}

const doorComponents = [DoorA, DoorB, DoorC, DoorD, DoorE];

const stats = [
  { num: "200+", label: "Door Models" },
  { num: "15+", label: "Years of Trust" },
  { num: "5k+", label: "Happy Families" },
];

export default function Hero() {
  const [cur, setCur] = useState(0);
  const [prev, setPrev] = useState(null);
  const timerRef = useRef(null);

  function goTo(i) {
    if (i === cur) return;
    setPrev(cur);
    setCur(i);
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCur((c) => {
        setPrev(c);
        return (c + 1) % slides.length;
      });
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const DoorNow = doorComponents[cur];

  return (
    <section className="relative flex h-screen min-h-[600px] items-center overflow-hidden">
      {/* Background — crossfade */}
      <AnimatePresence>
        <motion.div
          key={`bg-${cur}`}
          className="absolute inset-0"
          style={{ background: slides[cur].gradient }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4 }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-green-deep/90 via-green-deep/30 to-green-deep/80" />

      {/* Subtle grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* DOOR — centre stage, large (desktop/tablet only; on phones it would sit under the text column) */}
      <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
        <AnimatePresence mode="wait">
          <motion.div
            key={`door-${cur}`}
            className="relative"
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.03 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            style={{
              width: "min(340px, 42vw)",
              height: "min(520px, 66vw)",
              filter: "drop-shadow(0 48px 96px rgba(0,0,0,0.7))",
            }}
          >
            <DoorNow />
            {/* Gold halo glow */}
            <div
              className="absolute inset-0 rounded-sm"
              style={{
                boxShadow: "0 0 80px 10px rgba(201,168,76,0.08)",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTENT — left */}
      <div className="relative z-10 flex h-full w-full flex-col justify-center px-6 md:px-20">
        <div className="max-w-[360px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-5 flex items-center gap-3"
          >
            <div className="h-px w-8 bg-gold" />
            <span className="text-[9px] uppercase tracking-[0.35em] text-gold">
              Est. Barabanki · Serving Lucknow &amp; Region
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="font-display text-[clamp(40px,5.5vw,76px)] font-light leading-[1.0] text-white"
          >
            Doors That
            <br />
            <em className="italic text-gold-light">Define</em>
            <br />
            Homes.
          </motion.h1>

          {/* Slide tagline — changes with slide */}
          <div className="mt-5 h-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={`tag-${cur}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
                className="text-[12px] leading-[1.8] text-muted"
              >
                {slides[cur].tagline}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="mt-3 text-[12px] leading-[1.9] text-cream/60"
          >
            Premium steel &amp; architectural doors for security, elegance, and
            generations of trust.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2.5 rounded-sm bg-gold px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-green-deep transition-colors hover:bg-gold-light"
            >
              Explore Collection
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={`https://wa.me/${WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-sm border border-gold/40 px-7 py-3.5 text-[10px] uppercase tracking-[0.22em] text-gold-light transition-colors hover:border-gold hover:bg-gold/[0.08]"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#C9A84C">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-sm border border-gold/40 px-7 py-3.5 text-[10px] uppercase tracking-[0.22em] text-gold-light transition-colors hover:border-gold hover:bg-gold/[0.08]"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>

      {/* RIGHT — accent label */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex"
      >
        <div className="h-16 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
        <AnimatePresence mode="wait">
          <motion.span
            key={`accent-${cur}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="text-[9px] uppercase tracking-[0.3em] text-gold/70"
            style={{ writingMode: "vertical-rl" }}
          >
            {slides[cur].accentText}
          </motion.span>
        </AnimatePresence>
        <div className="h-16 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
      </motion.div>

      <style>{`
        @keyframes scrollLine {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.3); }
        }
      `}</style>
    </section>
  );
}
