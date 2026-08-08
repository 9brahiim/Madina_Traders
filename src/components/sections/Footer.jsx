import { regions } from "@/data/site";
import LogoMark from "@/components/ui/LogoMark";
import LogoText from "@/components/ui/LogoText";

const PHONE1 = "+91 9696243986";
const PHONE2 = "+91 8090033986";
const WA = "919696243986";

const productLinks = [
  "Steel Doors",
  "Wooden Doors",
  "Arch Doors",
  "Double Doors",
  "Security Doors",
];
const companyLinks = ["About Us", "Dealership", "Warranty", "Blog", "Contact"];

export default function Footer() {
  return (
    <footer className="border-t border-gold/[0.12] bg-green-deep px-6 pb-8 pt-14 md:px-12">
      <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-[2.2fr_1fr_1fr_1fr]">
        {/* Brand column */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3">
            <LogoMark className="h-16 w-16 flex-shrink-0" />
            <LogoText className="h-14 w-auto flex-shrink-0" />
            <div>
              <div className="font-display text-[20px] font-semibold uppercase tracking-[0.1em] text-gold">
                Madina Traders
              </div>
              <div className="text-[8px] uppercase tracking-[0.28em] text-muted">
                Premium Doors &amp; Hardware
              </div>
            </div>
          </div>

          <p className="mt-5 max-w-[260px] text-[12px] leading-[1.9] text-muted">
            Barabanki&apos;s trusted door supplier — serving homes and
            businesses across Uttar Pradesh for over a decade.
          </p>

          {/* Contact info */}
          <div className="mt-5 flex flex-col gap-2">
            <a
              href={`tel:${PHONE1.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-[12px] text-muted transition-colors hover:text-cream"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.97-1.01a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {PHONE1}
            </a>
            <a
              href={`tel:${PHONE2.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-[12px] text-muted transition-colors hover:text-cream"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.97-1.01a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {PHONE2}
            </a>
            <div className="flex items-center gap-2 text-[12px] text-muted">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Near Shahi Masjid, Begumganj, Barabanki
            </div>
          </div>

          {/* Socials */}
          <div className="mt-5 flex gap-3">
            <SocialIcon href="#" aria-label="Facebook">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </SocialIcon>
            <SocialIcon href={`https://wa.me/${WA}`} aria-label="WhatsApp">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        <FooterCol title="Products" links={productLinks} />
        <FooterCol title="Company" links={companyLinks} />
        <FooterCol title="Regions Served" links={regions.slice(0, 6)} />
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-gold/[0.08] pt-6 md:flex-row">
        <span className="text-[11px] text-muted">
          © 2026 Madina Traders, Barabanki. All rights reserved.
        </span>
        <div className="flex gap-6">
          <a
            href="/privacy"
            className="text-[11px] text-muted transition-colors hover:text-cream"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-[11px] text-muted transition-colors hover:text-cream"
          >
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, children, "aria-label": label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/20 text-muted transition-colors hover:border-gold hover:bg-gold/[0.08] hover:text-gold"
    >
      {children}
    </a>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="mb-5 text-[9px] uppercase tracking-[0.28em] text-gold">
        {title}
      </div>
      <ul className="flex flex-col gap-3">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-[12px] text-muted transition-colors hover:text-cream"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
