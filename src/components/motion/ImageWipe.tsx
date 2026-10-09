"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

export default function ImageWipe({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const inView = useInView(containerRef, {
    once: true,
    amount: "some",
    margin: "0px 0px 100px 0px",
  });

  return (
    <div ref={containerRef} className={className}>
      <motion.div
        className="relative h-full w-full"
        initial={false}
        animate={{
          clipPath:
            reducedMotion || inView
              ? "inset(0% 0% 0% 0%)"
              : "inset(0% 0% 100% 0%)",
        }}
        transition={{
          duration: reducedMotion ? 0 : 3,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
