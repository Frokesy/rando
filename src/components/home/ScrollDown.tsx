"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownIcon } from "../icons";

export default function ScrollDown() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
      <motion.button
        type="button"
        aria-label="Scroll down"
        className="flex h-11 w-11 items-center justify-center"
        animate={{ y: reducedMotion ? 0 : [0, 6, 0] }}
        transition={{ duration: 1.6, ease: "easeInOut", repeat: reducedMotion ? 0 : Infinity }}
        onClick={() => window.scrollBy({ top: window.innerHeight * 0.6, behavior: reducedMotion ? "instant" : "smooth" })}
      >
        <ArrowDownIcon />
      </motion.button>
    </div>
  );
}
