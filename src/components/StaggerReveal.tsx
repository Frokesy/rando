"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = { children: ReactNode; className?: string };

export default function StaggerReveal({ children, className }: RevealProps) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.15 } } }}
    >
      {children}
    </motion.div>
  );
}

