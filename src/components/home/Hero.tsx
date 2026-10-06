"use client";

import type { SyntheticEvent } from "react";
import TopNav from "../defaults/TopNav";
import HeroMarquee from "./HeroMarquee";

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
    <div className="relative isolate w-full overflow-hidden lg:min-h-svh">
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
        <div className="mt-8 flex flex-col items-center justify-center space-y-4 pb-8 text-white lg:mt-[20vh] lg:space-y-6 lg:pb-0">
          <HeroMarquee />
          <p className="lg:text-[32px] text-[22px] font-semibold text-center max-w-200 px-6">
            Building the companies and systems that will power Africa&apos;s
            next economy.
          </p>
          <p className="lg:text-[20px] text-[16px] text-center max-w-200 px-6">
            Ark Capital is an investment and venture-building company combining
            research, capital, technology and hands-on execution to build
            globally relevant businesses from Africa.
          </p>
          <div className="flex items-center space-x-4 mb-20 lg:mb-0">
            <button className="text-[15px] bg-white py-2 px-6 rounded-full text-black hover:bg-gray-200 transition-colors duration-200">
              Work with us
            </button>
            <button className="text-[15px] bg-inherit py-2 px-6 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-200">
              Explore our portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
