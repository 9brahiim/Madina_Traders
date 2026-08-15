"use client";

const PHONE = "+919696243986";

export default function CallFloat() {
  return (
    <a
      href={`tel:${PHONE}`}
      aria-label="Call Madina Traders"
      className="fixed bottom-[80px] right-5 z-[90] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold shadow-[0_8px_32px_rgba(201,168,76,0.35)] transition-transform hover:scale-110 hover:shadow-[0_12px_40px_rgba(201,168,76,0.5)] md:bottom-[104px] md:right-8 md:h-14 md:w-14"
      style={{ animation: "call-pulse 3s infinite" }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="#0A2A1A"
        className="h-[20px] w-[20px] md:h-[24px] md:w-[24px]"
      >
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.25 1.01l-2.2 2.2z" />
      </svg>
    </a>
  );
}
