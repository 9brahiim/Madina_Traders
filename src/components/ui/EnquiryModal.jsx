"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "@/components/ui/ModalProvider";

const WEB3FORMS_KEY = "ef1359b6-139b-4cd3-b852-542af028c1ee";

const fields = [
  { name: "name", label: "Your Name", placeholder: "Full name", type: "text" },
  {
    name: "phone",
    label: "Phone Number",
    placeholder: "+91 XXXXX XXXXX",
    type: "tel",
  },
  {
    name: "city",
    label: "City / District",
    placeholder: "e.g. Lucknow",
    type: "text",
  },
  {
    name: "interest",
    label: "Door Type Interest",
    placeholder: "e.g. Steel Double Door",
    type: "text",
  },
  {
    name: "message",
    label: "Message (optional)",
    placeholder: "Any specific requirements...",
    type: "textarea",
  },
];

const STATES = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

export default function EnquiryModal() {
  const { open, closeModal } = useModal();
  const [status, setStatus] = useState(STATES.IDLE);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    interest: "",
    message: "",
  });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.phone) return;

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
          subject: `New Enquiry from ${form.name} — Madina Traders`,
          from_name: "Madina Traders Website",
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus(STATES.SUCCESS);
        setForm({ name: "", phone: "", city: "", interest: "", message: "" });
      } else {
        setStatus(STATES.ERROR);
      }
    } catch {
      setStatus(STATES.ERROR);
    }
  }

  function handleClose() {
    closeModal();
    setTimeout(() => setStatus(STATES.IDLE), 400);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-green-deep/85 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            className="relative w-full max-w-[500px] rounded-sm border border-gold/20 bg-green-base shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
            initial={{ y: 28, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 28, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Gold top bar */}
            <div className="h-[3px] w-full rounded-t-sm bg-gradient-to-r from-gold-dim via-gold to-gold-dim" />

            <div className="p-6 md:p-10">
              {/* Close */}
              <button
                onClick={handleClose}
                aria-label="Close"
                className="absolute right-5 top-5 flex h-7 w-7 items-center justify-center rounded-full border border-gold/20 text-sm text-muted transition-colors hover:border-gold/50 hover:text-gold"
              >
                ✕
              </button>

              <AnimatePresence mode="wait">
                {status === STATES.SUCCESS ? (
                  /* ── Success state ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center py-8 text-center"
                  >
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
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
                      Enquiry Sent!
                    </h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-muted">
                      Thank you. We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-8 rounded-sm bg-gold px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-green-deep transition-colors hover:bg-gold-light"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  /* ── Form state ── */
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="font-display text-3xl font-light text-white">
                      Quick Enquiry
                    </h3>
                    <p className="mt-1 text-[11px] text-muted">
                      We&apos;ll get back to you within 24 hours.
                    </p>

                    <form
                      onSubmit={handleSubmit}
                      className="mt-7 flex flex-col gap-4"
                    >
                      {/* Two columns for name + phone */}
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <Field
                          data={fields[0]}
                          value={form.name}
                          onChange={handleChange}
                        />
                        <Field
                          data={fields[1]}
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <Field
                          data={fields[2]}
                          value={form.city}
                          onChange={handleChange}
                        />
                        <Field
                          data={fields[3]}
                          value={form.interest}
                          onChange={handleChange}
                        />
                      </div>
                      {/* Textarea */}
                      <label className="block">
                        <span className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-muted">
                          Message (optional)
                        </span>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Any specific requirements..."
                          rows={3}
                          className="w-full resize-none rounded-sm border border-gold/15 bg-green-mid/50 px-4 py-3 text-[13px] text-cream placeholder:text-muted outline-none transition-colors focus:border-gold/50"
                        />
                      </label>

                      {status === STATES.ERROR && (
                        <p className="text-[11px] text-red-400">
                          Something went wrong. Please try WhatsApp or call us
                          directly.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={
                          status === STATES.LOADING || !form.name || !form.phone
                        }
                        className="mt-1 flex w-full items-center justify-center gap-2 rounded-sm bg-gold py-3.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-green-deep transition-all hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === STATES.LOADING ? (
                          <>
                            <Spinner /> Sending...
                          </>
                        ) : (
                          "Send Enquiry →"
                        )}
                      </button>

                      <p className="text-center text-[10px] text-muted">
                        Or reach us on{" "}
                        <a
                          href="https://wa.me/91XXXXXXXXXX"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold underline-offset-2 hover:underline"
                        >
                          WhatsApp
                        </a>
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ data, value, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-muted">
        {data.label}
      </span>
      <input
        type={data.type}
        name={data.name}
        value={value}
        onChange={onChange}
        placeholder={data.placeholder}
        className="w-full rounded-sm border border-gold/15 bg-green-mid/50 px-4 py-3 text-[13px] text-cream placeholder:text-muted outline-none transition-colors focus:border-gold/50"
      />
    </label>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
