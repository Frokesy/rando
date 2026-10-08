"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function LogoLoader() {
  const reducedMotion = useReducedMotion();
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white" role="status" aria-label="Loading page">
      <motion.div animate={{ opacity: reducedMotion ? 1 : [0.5, 1, 0.5] }} transition={{ duration: 1.2, repeat: reducedMotion ? 0 : Infinity }}>
        <Image src="/logo-black.svg" width={198} height={30} alt="Ark Capital" priority />
      </motion.div>
    </div>
  );
}
