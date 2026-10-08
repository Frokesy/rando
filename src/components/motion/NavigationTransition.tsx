"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import LogoLoader from "./LogoLoader";

export default function NavigationTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [destination, setDestination] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let expiry: ReturnType<typeof setTimeout>;
    const start = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element)?.closest?.("a[href]");
      if (!link || link.hasAttribute("download") || link.getAttribute("target") === "_blank") return;
      const url = new URL(link.getAttribute("href")!, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      setDestination(url.pathname);
      clearTimeout(expiry);
      expiry = setTimeout(() => setDestination(null), 8000);
    };
    // Capture before Next.js handles and prevents the link's native navigation.
    document.addEventListener("click", start, true);
    return () => { document.removeEventListener("click", start, true); clearTimeout(expiry); };
  }, []);

  useEffect(() => {
    if (!destination || pathname !== destination) return;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    let minimum: ReturnType<typeof setTimeout>;
    const frame = requestAnimationFrame(() => {
      const images = Array.from(document.querySelectorAll<HTMLImageElement>("main img"))
        .filter((image) => image.getBoundingClientRect().top < window.innerHeight);
      const backgrounds = Array.from(document.querySelectorAll<HTMLElement>("main [data-page-media]"))
        .filter((element) => element.getBoundingClientRect().top < window.innerHeight)
        .flatMap((element) => Array.from(getComputedStyle(element).backgroundImage.matchAll(/url\(["']?(.*?)["']?\)/g), (match) => match[1]));
      const backgroundReady = backgrounds.map((src) => {
        const image = new Image();
        image.src = src;
        return image.decode();
      });
      const ready = Promise.allSettled([...images.map((image) => image.decode()), ...backgroundReady]);
      const limit = new Promise<void>((resolve) => { timer = setTimeout(resolve, 1200); });
      const brief = new Promise<void>((resolve) => { minimum = setTimeout(resolve, reducedMotion ? 0 : 300); });
      void Promise.all([Promise.race([ready, limit]), brief]).then(() => {
        if (!cancelled) setDestination(null);
      });
    });
    return () => { cancelled = true; cancelAnimationFrame(frame); clearTimeout(timer); clearTimeout(minimum); };
  }, [pathname, destination, reducedMotion]);

  return (
    <>
      {children}
      <AnimatePresence>
        {destination && (
          <motion.div key="navigation-loader" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.18 }} className="fixed inset-0 z-[100]">
            <LogoLoader />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
