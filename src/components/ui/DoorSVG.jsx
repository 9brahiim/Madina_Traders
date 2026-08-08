export function DoorSingle({ className }) {
  return (
    <svg className={className} viewBox="0 0 340 520" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="320" height="500" rx="2" fill="#0F3D25" stroke="#C9A84C" strokeWidth="1.5" />
      <rect x="30" y="30" width="280" height="460" rx="1" fill="#0A2A1A" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.5" />
      <rect x="50" y="60" width="240" height="160" rx="1" fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.7" />
      <rect x="70" y="80" width="200" height="120" rx="1" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.4" />
      <rect x="50" y="240" width="240" height="200" rx="1" fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.7" />
      <rect x="70" y="260" width="200" height="160" rx="1" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.4" />
      <rect x="290" y="250" width="12" height="40" rx="6" fill="#C9A84C" />
      <circle cx="296" cy="295" r="6" fill="#C9A84C" opacity="0.7" />
    </svg>
  );
}

export function DoorArch({ className }) {
  return (
    <svg className={className} viewBox="0 0 340 520" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 180 Q10 10 170 10 Q330 10 330 180 L330 510 L10 510 Z" fill="#1A3020" stroke="#C9A84C" strokeWidth="1.5" />
      <path d="M30 185 Q30 40 170 40 Q310 40 310 185 L310 490 L30 490 Z" fill="#0A2018" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.4" />
      <path d="M60 190 Q60 80 170 80 Q280 80 280 190" fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.6" />
      <rect x="50" y="210" width="110" height="240" rx="1" fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.6" />
      <rect x="180" y="210" width="110" height="240" rx="1" fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.6" />
      <rect x="155" y="330" width="30" height="10" rx="5" fill="#C9A84C" />
    </svg>
  );
}

export function DoorDouble({ className }) {
  return (
    <svg className={className} viewBox="0 0 340 520" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="155" height="500" rx="2" fill="#0F3D25" stroke="#C9A84C" strokeWidth="1.5" />
      <rect x="25" y="30" width="126" height="460" rx="1" fill="#0A2A1A" stroke="#C9A84C" strokeWidth="0.4" strokeOpacity="0.4" />
      <rect x="38" y="55" width="100" height="130" rx="1" fill="none" stroke="#C9A84C" strokeWidth="0.7" strokeOpacity="0.6" />
      <rect x="38" y="205" width="100" height="110" rx="1" fill="none" stroke="#C9A84C" strokeWidth="0.7" strokeOpacity="0.6" />
      <rect x="38" y="335" width="100" height="110" rx="1" fill="none" stroke="#C9A84C" strokeWidth="0.7" strokeOpacity="0.6" />
      <rect x="155" y="250" width="10" height="28" rx="5" fill="#C9A84C" />
      <rect x="175" y="10" width="155" height="500" rx="2" fill="#0F3D25" stroke="#C9A84C" strokeWidth="1.5" />
      <rect x="189" y="30" width="126" height="460" rx="1" fill="#0A2A1A" stroke="#C9A84C" strokeWidth="0.4" strokeOpacity="0.4" />
      <rect x="202" y="55" width="100" height="130" rx="1" fill="none" stroke="#C9A84C" strokeWidth="0.7" strokeOpacity="0.6" />
      <rect x="202" y="205" width="100" height="110" rx="1" fill="none" stroke="#C9A84C" strokeWidth="0.7" strokeOpacity="0.6" />
      <rect x="202" y="335" width="100" height="110" rx="1" fill="none" stroke="#C9A84C" strokeWidth="0.7" strokeOpacity="0.6" />
      <rect x="175" y="250" width="10" height="28" rx="5" fill="#C9A84C" />
      <line x1="170" y1="10" x2="170" y2="510" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.4" />
    </svg>
  );
}
