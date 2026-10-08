"use client";

import { motion,useReducedMotion } from "framer-motion";
import { useId } from "react";
import { CloseIconTwo,PlusIcon } from "./icons";

type AccordionItemProps={
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function AccordionItem({ title,content,isOpen,onToggle }: AccordionItemProps) {
  const id=useId();
  const reducedMotion=useReducedMotion();

  return (
    <div className="rounded-xl bg-[#F8F7F5] text-[#1A1A1A]">
      <button
        type="button"
        id={`${id}-trigger`}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        onClick={onToggle}
        className="flex min-h-16 w-full cursor-pointer items-center justify-between gap-4 rounded-xl p-4 text-left font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E2859] sm:p-5"
      >
        <span>{title}</span>
        <motion.span
          className="inline-flex shrink-0"
          aria-hidden="true"
          animate={{ rotate: isOpen? 90:0 }}
          transition={{ duration: reducedMotion? 0:0.25 }}
        >
          {isOpen? <CloseIconTwo />:<PlusIcon />}
        </motion.span>
      </button>
      <motion.div
        id={`${id}-content`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        aria-hidden={!isOpen}
        initial={false}
        animate={{ height: isOpen? "auto":0,opacity: isOpen? 1:0 }}
        transition={{ duration: reducedMotion? 0:0.3,ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-4 pb-5 text-[15px] leading-relaxed text-[#636363] sm:px-5">
          {content}
        </p>
      </motion.div>
    </div>
  );
}
