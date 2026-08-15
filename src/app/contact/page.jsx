"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const WEB3FORMS_KEY = "ef1359b6-139b-4cd3-b852-542af028c1ee";
const PHONE1 = "+91 9696243986";
const PHONE2 = "+91 8090033986";
const WA = "919696243986";
const MAP_LINK = "https://maps.app.goo.gl/81ozopTGjr3PCoM66?g_st=iw";

const STATES = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function ContactPage() {
  const [status, setStatus] = useState(STATES.IDLE);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    interest: "",
    message: "",
  });

  function handleChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(STATES.LOADING);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Contact Form — ${form.name} — Madina Traders`,
          from_name: "Madina Traders Website",
          ...form,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? STATES.SUCCESS : STATES.ERROR);
    } catch {
      setStatus(STATES.ERROR);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[44vh] min-h-[320px] items-end overflow-hidden pb-14 px-6 md:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_70%_0%,#1a4a30_0%,#071a0e_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-deep" />
        <div className="relative z-10">
          <div className="mb-3 flex items-center gap-4 text-[9px] uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-6 bg-gold" /> Reach Us
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-[clamp(36px,5vw,72px)] font-light text-white"
          >
            Let&apos;s <em className="italic text-gold-light">Talk</em>
          </motion.h1>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-16 gold-surface px-6 py-16 md:grid-cols-2 md:px-20">
        {/* Contact info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="font-display text-4xl font-light text-ink mb-8">
            Find <em className="italic text-green-mid">Us</em>
          </h2>

          <div className="flex flex-col gap-6">
            <InfoRow
              color="#C9A84C"
              icon={
                <>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </>
              }
              label="Showroom Address"
              value="Near Shahi Masjid, Begumganj, Barabanki, Uttar Pradesh"
              href={MAP_LINK}
              external
            />
            <InfoRow
              color="#22C55E"
              icon={
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.97-1.01a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              }
              label="Phone Numbers"
              value={`${PHONE1}\n${PHONE2}`}
              href={`tel:${PHONE1.replace(/\s/g, "")}`}
            />
            <InfoRow
              color="#3B82F6"
              icon={
                <>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </>
              }
              label="Email"
              value="madina.traders.bbk@gmail.com"
              href="mailto:madina.traders.bbk@gmail.com"
            />
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${WA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-sm bg-[#25D366] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Chat on WhatsApp
          </a>

          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-3 rounded-sm border border-ink/40 px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:border-ink hover:bg-ink/[0.08]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#07190D"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Get Directions on Google Maps
          </a>

          {/* Hours */}
          <div className="mt-10 border-t border-ink/10 pt-8">
            <div className="mb-4 text-[9px] uppercase tracking-[0.28em] text-green-mid">
              Showroom Hours
            </div>
            <div className="flex flex-col gap-2 text-[13px] text-ink-muted">
              <div className="flex justify-between max-w-xs">
                <span>Monday – Saturday</span>
                <span className="text-ink">9:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between max-w-xs">
                <span>Sunday</span>
                <span className="text-ink">10:00 AM – 4:00 PM</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="rounded-sm border border-gold/15 bg-green-base p-8">
            <div
              className="h-[3px] w-full rounded-t-sm bg-gradient-to-r from-gold-dim via-gold to-gold-dim -mt-8 -mx-8 mb-8 w-[calc(100%+4rem)]"
              style={{
                width: "calc(100% + 4rem)",
                marginLeft: "-2rem",
                marginTop: "-2rem",
                borderRadius: "2px 2px 0 0",
              }}
            />
            {status === STATES.SUCCESS ? (
              <div className="flex flex-col items-center py-10 text-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl font-light text-white">
                  Message Sent!
                </h3>
                <p className="text-[13px] text-muted">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus(STATES.IDLE)}
                  className="mt-4 rounded-sm bg-gold px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-green-deep hover:bg-gold-light"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-3xl font-light text-white mb-1">
                  Send a Message
                </h3>
                <p className="text-[11px] text-muted mb-7">
                  We reply within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field
                      name="name"
                      label="Your Name"
                      placeholder="Full name"
                      value={form.name}
                      onChange={handleChange}
                    />
                    <Field
                      name="phone"
                      label="Phone"
                      placeholder="+91 XXXXX XXXXX"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field
                      name="city"
                      label="City"
                      placeholder="e.g. Lucknow"
                      value={form.city}
                      onChange={handleChange}
                    />
                    <Field
                      name="interest"
                      label="Door Interest"
                      placeholder="e.g. Steel Door"
                      value={form.interest}
                      onChange={handleChange}
                    />
                  </div>
                  <label className="block">
                    <span className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-muted">
                      Message
                    </span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your requirements..."
                      className="w-full resize-none rounded-sm border border-gold/15 bg-green-mid/50 px-4 py-3 text-[13px] text-cream placeholder:text-muted outline-none transition-colors focus:border-gold/50"
                    />
                  </label>
                  {status === STATES.ERROR && (
                    <p className="text-[11px] text-red-400">
                      Something went wrong. Please call us directly.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={
                      status === STATES.LOADING || !form.name || !form.phone
                    }
                    className="mt-1 flex w-full items-center justify-center gap-2 rounded-sm bg-gold py-3.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-green-deep transition-colors hover:bg-gold-light disabled:opacity-50"
                  >
                    {status === STATES.LOADING
                      ? "Sending..."
                      : "Send Message →"}
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </section>
    </>
  );
}

function InfoRow({ label, value, icon, color, href, external }) {
  const content = (
    <div className="flex items-start gap-4 pb-6 border-b border-ink/10">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm border border-gold/15 bg-green-mid">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon}
        </svg>
      </div>
      <div>
        <div className="mb-1 text-[9px] uppercase tracking-[0.2em] text-ink-muted">
          {label}
        </div>
        <div className="font-sans text-lg text-ink whitespace-pre-line">
          {value}
        </div>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block hover:opacity-80 transition-opacity"
    >
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}

function Field({ name, label, placeholder, type = "text", value, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-muted">
        {label}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-sm border border-gold/15 bg-green-mid/50 px-4 py-3 text-[13px] text-cream placeholder:text-muted outline-none transition-colors focus:border-gold/50"
      />
    </label>
  );
}
