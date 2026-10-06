"use client";

import type { SyntheticEvent } from "react";
import TopNav from "../defaults/TopNav";

const resumeVideo = (event: SyntheticEvent<HTMLVideoElement>) => {
  const video = event.currentTarget;
  video.muted = true;
  void video.play().catch((error: unknown) => {
    console.warn("Hero video playback could not resume:", error);
  });
};

const restartVideo = (event: SyntheticEvent<HTMLVideoElement>) => {
  event.currentTarget.currentTime = 0;
  resumeVideo(event);
};

const Hero = () => {
  return (
    <div className="relative isolate min-h-svh w-full overflow-hidden">
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={restartVideo}
        onSeeked={resumeVideo}
        aria-hidden="true"
      >
        <source src="/hero-vid.mp4" type="video/mp4" />
      </video>
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-black/40"
        aria-hidden="true"
      />
      <div className="">
        <TopNav />
      </div>
    </div>
  );
};

export default Hero;
