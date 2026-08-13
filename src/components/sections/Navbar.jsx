"use client";

import { useEffect, useState } from "react";
import LogoMark from "@/components/ui/LogoMark";
import LogoText from "@/components/ui/LogoText";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "@/components/ui/ModalProvider";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Warranty", href: "/warranty" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="fixed inset-x-0 top-0 z-[100] flex h-[76px] items-center justify-between px-6 md:px-14"
      >
        {/* Animated backdrop */}
        <motion.div
          className="absolute inset-0 border-b border-gold/0"
          animate={{
            backgroundColor: scrolled
              ? "rgba(7,26,14,0.94)"
              : "rgba(7,26,14,0)",
            borderColor: scrolled
              ? "rgba(201,168,76,0.18)"
              : "rgba(201,168,76,0)",
            backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Gold line at very top when scrolled */}
        <motion.div
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* LOGO */}
        <motion.a
          href="/"
          className="relative z-10 flex items-center gap-3"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <LogoMark className="h-14 w-14 flex-shrink-0" />
          <LogoText className="h-12 w-auto flex-shrink-0" />
        </motion.a>

        {/* DESKTOP LINKS */}
        <ul className="relative z-10 hidden items-center gap-8 md:flex">
          {navLinks.map((l, i) => (
            <NavLink key={l.label} {...l} delay={0.3 + i * 0.07} />
          ))}

          {/* CTA */}
          <motion.li
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.65 }}
          >
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="relative overflow-hidden rounded-sm border border-gold px-6 py-2.5 text-[10px] uppercase tracking-[0.22em] text-gold transition-colors hover:bg-gold hover:text-green-deep"
            >
              Quick Enquiry
            </motion.button>
          </motion.li>
        </ul>

        {/* HAMBURGER */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="relative z-10 flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="h-px w-6 bg-gold origin-center"
          />
          <motion.span
            animate={
              mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
            }
            transition={{ duration: 0.2 }}
            className="h-px w-6 bg-gold"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="h-px w-6 bg-gold origin-center"
          />
        </button>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-x-0 top-[76px] z-[99] overflow-hidden border-b border-gold/15 bg-green-deep/97 backdrop-blur-xl"
          >
            <div className="flex flex-col px-6 py-6">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className="border-b border-gold/[0.08] py-4 text-[12px] uppercase tracking-[0.2em] text-cream/80 transition-colors hover:text-gold"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.button
                onClick={() => {
                  setMobileOpen(false);
                  openModal();
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-5 rounded-sm border border-gold px-6 py-3.5 text-center text-[10px] uppercase tracking-[0.22em] text-gold transition-colors hover:bg-gold hover:text-green-deep"
              >
                Quick Enquiry
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ label, href, delay = 0 }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <a
        href={href}
        className="group relative text-[11px] uppercase tracking-[0.18em] text-cream/70 transition-colors hover:text-gold-light"
      >
        {label}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
      </a>
    </motion.li>
  );
}
