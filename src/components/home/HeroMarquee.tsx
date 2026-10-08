"use client";

import { motion,useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

const text="Capital • Technology • Research • Execution • Scale •";

function subscribeToViewport(callback: () => void) {
  const desktop=window.matchMedia("(min-width: 64rem)");
  desktop.addEventListener("change",callback);
  return () => desktop.removeEventListener("change",callback);
}

const isDesktop=() => window.matchMedia("(min-width: 64rem)").matches;
const serverSnapshot=() => false;

export default function HeroMarquee() {
  const reducedMotion=useReducedMotion();
  const desktop=useSyncExternalStore(subscribeToViewport,isDesktop,serverSnapshot);

  return (
    <h1 className="w-full overflow-hidden text-[64px] lg:text-[140px]">
      <span className="sr-only">
        Capital, Technology, Research, Execution, Scale
      </span>
      <motion.span
        aria-hidden="true"
        className="inline-flex w-max whitespace-nowrap"
        animate={{ x: reducedMotion? 0:["0%","-50%"] }}
        transition={{
          duration: desktop? 30:18,
          ease: "linear",
          repeat: reducedMotion? 0:Infinity,
        }}
      >
        <span className="shrink-0 pr-[0.3em]">{text}</span>
        <span className="shrink-0 pr-[0.3em]">{text}</span>
      </motion.span>
    </h1>
  );
}
