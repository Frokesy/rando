"use client";

import type { SyntheticEvent } from "react";

const resume = (event: SyntheticEvent<HTMLVideoElement>) => {
  const video = event.currentTarget;
  video.muted = true;
  void video.play().catch((error: unknown) => {
    console.warn("Video playback could not resume:", error);
  });
};

export default function LoopingVideo({ src, className }: { src: string; className?: string }) {
  return (
    <video
      className={className}
      autoPlay
      muted
      playsInline
      preload="metadata"
      aria-hidden="true"
      onEnded={(event) => {
        event.currentTarget.currentTime = 0;
        resume(event);
      }}
      onSeeked={resume}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
