import Link from "next/link";

// This page is a conversion-tracking / confirmation destination only — it
// isn't meant to be found via search, so it's excluded from indexing while
// still allowing crawlers to follow its links.
export const metadata = {
  title: "Thank You",
  description:
    "Thanks for reaching out to Madina Traders. Our team will get back to you within 24 hours.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden gold-surface px-6 py-24 text-center md:px-20">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <h1 className="font-display text-[clamp(32px,5vw,56px)] font-light text-ink">
        Thank <em className="italic text-green-mid">You</em>
      </h1>
      <p className="mt-4 max-w-md text-[14px] leading-relaxed text-ink-muted">
        We&apos;ve received your message. Our team will get back to you within
        24 hours — or reach us sooner on WhatsApp or by phone.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://wa.me/918090033986"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-sm bg-[#25D366] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90"
        >
          Chat on WhatsApp
        </a>
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-sm border border-ink/40 px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:border-ink hover:bg-ink/[0.08]"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
