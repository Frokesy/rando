"use client";

import { motion, useReducedMotion } from "framer-motion";
import { createContext, type ReactNode } from "react";

export const RevealDurationContext = createContext(0.55);

type RevealProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  stagger?: number;
};

export default function StaggerReveal({
  children,
  className,
  duration = 0.4,
  stagger = 0.3,
}: RevealProps) {
  const reducedMotion = useReducedMotion();
  return (
    <RevealDurationContext.Provider value={duration}>
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: reducedMotion ? 0 : stagger },
          },
        }}
      >
        {children}
      </motion.div>
    </RevealDurationContext.Provider>
  );
}
