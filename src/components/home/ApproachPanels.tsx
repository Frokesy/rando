"use client";

import { useId, useRef, useState } from "react";
import ApproachPanel from "./ApproachPanel";

export default function ApproachPanels() {
  const [activeIndex, setActiveIndex] = useState(0);
  const id = useId();
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const suppressClick = useRef(false);

  return (
    <div
      className="mt-10 flex flex-col gap-3 lg:mt-20 lg:flex-row"
      onTouchStart={(event) => {
        suppressClick.current = false;
        if (event.touches.length !== 1 || window.matchMedia("(min-width: 64rem)").matches) {
          touchStart.current = null;
          return;
        }
        const touch = event.touches[0];
        touchStart.current = { x: touch.clientX, y: touch.clientY };
      }}
      onTouchEnd={(event) => {
        const start = touchStart.current;
        touchStart.current = null;
        if (!start) return;
        const touch = event.changedTouches[0];
        const dx = touch.clientX - start.x;
        const dy = touch.clientY - start.y;
        if (Math.abs(dx) < 40 || Math.abs(dx) <= Math.abs(dy)) return;
        suppressClick.current = true;
        setActiveIndex((current) => Math.max(0, Math.min(3, current + (dx < 0 ? 1 : -1))));
      }}
      onTouchCancel={() => { touchStart.current = null; }}
      onClickCapture={(event) => {
        if (!suppressClick.current) return;
        suppressClick.current = false;
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      {[0, 1, 2, 3].map((index) => (
        <ApproachPanel
          key={index}
          index={index}
          activeIndex={activeIndex}
          onSelect={() => setActiveIndex(index)}
          contentId={`${id}-phase-${index}`}
        />
      ))}
    </div>
  );
}
