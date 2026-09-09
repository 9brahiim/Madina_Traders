"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [loaded, setLoaded] = useState(!isHome);

  // Stable reference so LoadingScreen's scroll-lock effect (keyed on this
  // prop) only ever runs once on mount / once on unmount, instead of on
  // every AppShell re-render.
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <AnimatePresence>
        {isHome && !loaded && <LoadingScreen onComplete={handleComplete} />}
      </AnimatePresence>
      {/* Don't mount the real page (Navbar/Hero/etc.) until the loader is
          done on the home route — mounting it underneath the loader was
          the actual cause of the scroll glitch (it gave the document real
          height to scroll before the lock kicked in) and meant every
          entrance animation had already finished playing, invisibly,
          before the loader ever faded out. Other routes have no loader,
          so `loaded` starts true for them and this is a no-op. */}
      {(!isHome || loaded) && children}
    </>
  );
}
