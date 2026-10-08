"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useContext, type ReactNode } from "react";
import { RevealDurationContext } from "./StaggerReveal";

type RevealProps = { children: ReactNode; className?: string; independent?: boolean; delay?: number; duration?: number };

export default function RevealItem({ children, className, independent = false, delay = 0, duration }: RevealProps) {
  const inheritedDuration = useContext(RevealDurationContext);
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={independent ? "hidden" : undefined}
      whileInView={independent ? "visible" : undefined}
      viewport={independent ? { once: true, amount: 0.2 } : undefined}
      variants={{
        hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0, transition: { delay: reducedMotion ? 0 : delay, duration: reducedMotion ? 0 : (duration ?? inheritedDuration), ease: "easeOut" } },
      }}
    >
      {children}
    </motion.div>
  );
}
