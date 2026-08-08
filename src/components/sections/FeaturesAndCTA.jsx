"use client";

import { motion } from "framer-motion";
import { features } from "@/data/site";
import { useModal } from "@/components/ui/ModalProvider";

export function Features() {
  return (
    <section className="border-t border-gold/10 px-6 py-24 md:px-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <div className="mb-4 flex items-center justify-center gap-4 text-[9px] uppercase tracking-[0.35em] text-gold">
          <span className="h-px w-6 bg-gold" />
          Every Door, Every Promise
          <span className="h-px w-6 bg-gold" />
        </div>
        <h2 className="font-display text-[clamp(32px,4vw,52px)] font-light text-white">
          What Sets Our Doors <em className="italic text-gold-light">Apart</em>
        </h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {features.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group flex flex-col items-center gap-4 rounded-sm border border-gold/[0.12] px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/35 hover:bg-green-mid/40"
          >
            {/* Colored SVG icon rendered from string */}
            <div
              className="h-9 w-9 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{ color: f.color }}
              dangerouslySetInnerHTML={{ __html: f.icon }}
            />
            <div className="text-[9px] uppercase leading-[1.5] tracking-[0.18em] text-muted">
              {f.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function CTA() {
  const { openModal } = useModal();
  return (
    <section
      id="cta"
      className="grid grid-cols-1 gap-16 border-t border-gold/15 bg-green-base px-6 py-24 md:grid-cols-2 md:gap-20 md:px-20 md:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-4 flex items-center gap-4 text-[9px] uppercase tracking-[0.35em] text-gold">
          <span className="h-px w-6 bg-gold" />
          Get In Touch
        </div>
        <h2 className="font-display text-[clamp(36px,4.5vw,60px)] font-light leading-[1.08] text-white">
          Let&apos;s Find Your
          <br />
          <em className="italic text-gold-light">Perfect Door.</em>
        </h2>
        <p className="mt-5 max-w-[440px] text-[13px] leading-[1.9] text-muted">
          Visit our showroom in Barabanki, or reach us directly. Our team is ready to guide
          you through our full collection and help you make the right choice for your home.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2.5 rounded-sm bg-gold px-8 py-3.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-green-deep transition-colors hover:bg-gold-light"
          >
            Quick Enquiry
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-sm border border-gold/40 px-8 py-3.5 text-[10px] uppercase tracking-[0.22em] text-gold-light transition-colors hover:border-gold hover:bg-gold/[0.08]"
          >
            {/* WhatsApp icon */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#C9A84C">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="flex flex-col gap-7"
      >
        <ContactRow
          label="Showroom"
          value="Barabanki, Uttar Pradesh"
          iconColor="#C9A84C"
          icon={<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>}
        />
        <ContactRow
          label="Phone"
          value="+91 XXXXX XXXXX"
          iconColor="#22C55E"
          icon={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.97-1.01a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />}
        />
        <ContactRow
          label="Email"
          value="info@madinatraders.com"
          iconColor="#3B82F6"
          icon={<><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>}
          last
        />
      </motion.div>
    </section>
  );
}

function ContactRow({ label, value, icon, iconColor, last }) {
  return (
    <div className={`flex items-start gap-4 pb-7 ${last ? "" : "border-b border-gold/10"}`}>
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm border border-gold/15 bg-green-mid/40">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </div>
      <div>
        <div className="mb-1 text-[9px] uppercase tracking-[0.2em] text-muted">{label}</div>
        <div className="font-display text-lg text-cream">{value}</div>
      </div>
    </div>
  );
}