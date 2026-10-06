"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = { children: ReactNode; className?: string };

export default function RevealItem({ children, className }: RevealProps) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0, transition: { duration: reducedMotion ? 0 : 0.55, ease: "easeOut" } },
      }}
    >
      {children}
    </motion.div>
  );
}
