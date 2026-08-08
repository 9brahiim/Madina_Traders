"use client";

import { useRef, useEffect } from "react";
import { regions } from "@/data/site";

// Enough copies to always fill the screen + loop seamlessly
const items = [...regions, ...regions, ...regions, ...regions];

export default function Marquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    let raf;
    // px per frame at 60fps — lower = slower
    const speed = 0.4;

    // Total width of ONE set of regions (25% of track since we have 4 copies)
    function getUnitWidth() {
      return track.scrollWidth / 4;
    }

    function tick() {
      x -= speed;
      if (Math.abs(x) >= getUnitWidth()) {
        x = 0;
      }
      track.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="overflow-hidden border-y border-gold/[0.15] bg-green-deep py-5"
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className="flex w-max"
        style={{ willChange: "transform" }}
      >
        {items.map((r, i) => (
          <div
            key={i}
            className="flex items-center gap-10 px-10"
            style={{ whiteSpace: "nowrap" }}
          >
            <span
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.28em",
                color: "#7A8C82",
              }}
            >
              {r}
            </span>
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "rgba(201,168,76,0.5)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}