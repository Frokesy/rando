"use client";

export default function BackToTop() {
  return (
    <button type="button" className="text-white/55 text-[14px] hover:text-white" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}>
      Back to top ↗
    </button>
  );
}
