// Hand-drawn-style decorative layer for the products page background:
// outline doors (a few different styles), potted plants, dot clusters,
// squiggles, rings and plus marks, scattered generously across the section.
// Purely decorative — no pointer events, gold stroke, low-but-visible opacity.

function DoorOutline({ className }) {
    return (
      <svg
        className={className}
        viewBox="0 0 160 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="6" y="6" width="148" height="288" rx="3" />
        <rect x="20" y="20" width="120" height="260" rx="2" />
        <rect x="34" y="36" width="92" height="100" rx="1" />
        <rect x="34" y="150" width="92" height="112" rx="1" />
        <circle cx="128" cy="168" r="5" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  
  function ArchDoorOutline({ className }) {
    return (
      <svg
        className={className}
        viewBox="0 0 160 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 130 Q6 6 80 6 Q154 6 154 130 L154 294 L6 294 Z" />
        <path d="M20 132 Q20 24 80 24 Q140 24 140 132 L140 280 L20 280 Z" />
        <path d="M36 134 Q36 46 80 46 Q124 46 124 134" />
        <rect x="30" y="150" width="52" height="120" rx="1" />
        <rect x="88" y="150" width="52" height="120" rx="1" />
        <circle cx="82" cy="212" r="4.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  
  function DoubleDoorOutline({ className }) {
    return (
      <svg
        className={className}
        viewBox="0 0 220 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="6" y="6" width="98" height="288" rx="3" />
        <rect x="18" y="20" width="74" height="258" rx="2" />
        <rect x="30" y="36" width="50" height="90" rx="1" />
        <rect x="30" y="150" width="50" height="90" rx="1" />
        <circle cx="86" cy="152" r="4" fill="currentColor" stroke="none" />
        <rect x="116" y="6" width="98" height="288" rx="3" />
        <rect x="128" y="20" width="74" height="258" rx="2" />
        <rect x="140" y="36" width="50" height="90" rx="1" />
        <rect x="140" y="150" width="50" height="90" rx="1" />
        <circle cx="134" cy="152" r="4" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  
  function PotOutline({ className }) {
    return (
      <svg
        className={className}
        viewBox="0 0 140 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M40 90 L48 150 H92 L100 90 Z" />
        <path d="M34 90 H106" />
        <path d="M70 90 C70 55 40 55 34 22" />
        <path d="M70 90 C70 50 100 48 108 12" />
        <path d="M70 90 C70 60 70 40 70 8" />
      </svg>
    );
  }
  
  function TallPotOutline({ className }) {
    return (
      <svg
        className={className}
        viewBox="0 0 120 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M34 100 L40 168 H80 L86 100 Z" />
        <path d="M30 100 H90" />
        <path d="M60 100 C40 80 30 60 44 24" />
        <path d="M60 100 C74 74 60 44 76 10" />
        <path d="M60 100 C68 70 92 62 96 30" />
      </svg>
    );
  }
  
  function DotCluster({ className }) {
    const spots = [
      [0, 0], [16, 0], [32, 0],
      [0, 16], [16, 16], [32, 16],
      [0, 32], [16, 32], [32, 32],
    ];
    return (
      <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        {spots.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x + 3} cy={y + 3} r="2.4" fill="currentColor" />
        ))}
      </svg>
    );
  }
  
  function SmallDots({ className }) {
    const spots = [[0, 0], [14, 4], [4, 16]];
    return (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        {spots.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x + 3} cy={y + 3} r="2" fill="currentColor" />
        ))}
      </svg>
    );
  }
  
  function Squiggle({ className }) {
    return (
      <svg className={className} viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12 Q17 2 32 12 T62 12 T92 12 T118 12" />
      </svg>
    );
  }
  
  function Ring({ className }) {
    return (
      <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="17" />
      </svg>
    );
  }
  
  function Plus({ className }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3 V21 M3 12 H21" strokeLinecap="round" />
      </svg>
    );
  }
  
  const strokeStyle = {
    stroke: "currentColor",
    strokeWidth: 1.5,
    fill: "none",
  };
  
  export default function ProductDoodles() {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden text-gold/[0.32]"
        style={strokeStyle}
      >
        {/* top row */}
        <DoorOutline className="absolute -left-8 -top-6 h-56 w-32 md:h-72 md:w-40" />
        <DotCluster className="absolute left-40 top-16 h-10 w-10 md:left-56 md:top-10" />
        <Plus className="absolute left-[26%] top-8 h-4 w-4" />
        <Ring className="absolute left-[38%] top-6 h-6 w-6" />
        <ArchDoorOutline className="absolute left-[46%] -top-10 h-40 w-24 -rotate-2 hidden md:block" />
        <SmallDots className="absolute left-[58%] top-14 h-6 w-6" />
        <Squiggle className="absolute right-24 top-24 h-6 w-28 md:right-40" />
        <DotCluster className="absolute right-52 top-40 h-8 w-8 md:right-72" />
        <DoorOutline className="absolute -right-10 -top-8 h-52 w-28 rotate-3 md:h-64 md:w-36" />
        <Plus className="absolute right-6 top-4 h-4 w-4" />
  
        {/* mid row */}
        <Squiggle className="absolute left-6 top-1/2 h-6 w-24 -translate-y-1/2 -rotate-6 md:left-14" />
        <Ring className="absolute left-24 top-[58%] h-6 w-6 md:left-32" />
        <DoubleDoorOutline className="absolute left-[36%] top-[40%] h-44 w-40 -translate-y-1/2 rotate-1 hidden lg:block" />
        <TallPotOutline className="absolute left-[62%] top-[46%] h-28 w-20 -translate-y-1/2 hidden md:block" />
        <SmallDots className="absolute left-[70%] top-[36%] h-6 w-6" />
        <Ring className="absolute right-16 top-[38%] h-8 w-8 md:right-24" />
        <DotCluster className="absolute right-8 top-[52%] h-9 w-9 md:right-16" />
        <Plus className="absolute right-[30%] top-[44%] h-4 w-4" />
  
        {/* bottom row */}
        <DoorOutline className="absolute -left-4 bottom-0 h-64 w-36 md:h-80 md:w-44" />
        <PotOutline className="absolute left-24 bottom-4 h-24 w-24 md:left-32 md:h-32 md:w-32" />
        <DotCluster className="absolute left-6 bottom-40 h-8 w-8" />
        <Squiggle className="absolute left-52 bottom-6 h-5 w-20 rotate-2 md:left-72" />
        <ArchDoorOutline className="absolute left-[42%] bottom-0 h-48 w-28 hidden md:block" />
        <SmallDots className="absolute left-[54%] bottom-10 h-6 w-6" />
        <Plus className="absolute left-[62%] bottom-20 h-4 w-4" />
        <TallPotOutline className="absolute right-[22%] bottom-0 h-24 w-16 rotate-2 hidden lg:block" />
        <Ring className="absolute right-40 bottom-24 h-5 w-5 md:right-56" />
        <Ring className="absolute right-28 bottom-10 h-7 w-7 md:right-40" />
        <DotCluster className="absolute right-8 bottom-36 h-9 w-9 md:right-16" />
        <DoorOutline className="absolute -right-6 bottom-0 h-60 w-32 -rotate-2 md:h-72 md:w-40" />
      </div>
    );
  }