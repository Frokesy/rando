"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DiscoverIcon } from "../icons";

type ApproachPanelProps = {
  index: number;
  activeIndex: number;
  onSelect: () => void;
  contentId: string;
};

export default function ApproachPanel({ index, activeIndex, onSelect, contentId }: ApproachPanelProps) {
  const active = index === activeIndex;
  const reducedMotion = useReducedMotion();
  const phase = String(index + 1).padStart(2, "0");

  return (
    <motion.button
      type="button"
      layout
      aria-expanded={active}
      aria-controls={contentId}
      aria-label={`Phase ${phase}${index === 0 ? ": Discover" : ""}`}
      onClick={onSelect}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse" && window.matchMedia("(min-width: 64rem) and (hover: hover)").matches) {
          onSelect();
        }
      }}
      transition={{ layout: { duration: reducedMotion ? 0 : 0.4, ease: "easeInOut" } }}
      className={`relative flex w-full min-w-0 flex-col justify-between overflow-hidden rounded-xl p-4 text-left transition-[height,background-color,color,flex-grow] duration-400 ease-in-out motion-reduce:transition-none lg:h-106 lg:basis-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600 ${active ? "h-80 bg-[#1A1A1A] text-white lg:grow-2" : "h-20 bg-white text-[#1A1A1A] lg:grow hover:bg-neutral-100"}`}
    >
      <span className={`flex w-full items-center ${active ? "justify-between" : "justify-center"}`}>
        <span className="text-sm font-semibold">
          {active && "Phase "}
          <span className={active ? "text-white/55" : undefined}>{phase}</span>
        </span>
        {active && (
          <span className="flex gap-1" aria-label={`Phase ${phase} of 4`}>
            {[0, 1, 2, 3].map((dot) => (
              <span key={dot} className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${dot <= activeIndex ? "bg-[#7FE3F2]" : "bg-white/55"}`} />
            ))}
          </span>
        )}
      </span>
      <span id={contentId} className="block w-full">
        <AnimatePresence mode="wait">
          {active && (
            <motion.span
              key={phase}
              className="block"
              initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.2, delay: reducedMotion ? 0 : 0.1 }}
            >
              {index === 0 ? (
                <>
                  <span className="flex items-center gap-2">
                    <DiscoverIcon />
                    <span className="text-xl font-semibold lg:text-2xl">Discover</span>
                  </span>
                  <span className="mt-2 block text-sm text-white/55">
                    We identify important problems, market gaps and technical teams with a credible advantage.
                  </span>
                </>
              ) : (
                <span className="text-xl font-semibold lg:text-2xl">Phase {phase}</span>
              )}
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </motion.button>
  );
}
