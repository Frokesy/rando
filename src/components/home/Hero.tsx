"use client";

import Link from "next/link";

import type { SyntheticEvent } from "react";
import TopNav from "../defaults/TopNav";
import HeroMarquee from "./HeroMarquee";
import ScrollDown from "./ScrollDown";
import RevealItem from "../RevealItem";
import StaggerReveal from "../StaggerReveal";

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
          <StaggerReveal duration={0.5} stagger={0.12} className="flex w-full flex-col items-center gap-4 lg:gap-6">
          <RevealItem className="lg:text-[32px] text-[22px] font-semibold text-center max-w-200 px-6"><p >
            Building the companies and systems that will power Africa&apos;s
            next economy.
          </p></RevealItem>
          <RevealItem className="lg:text-[20px] text-[16px] text-center max-w-200 px-6"><p >
            Ark Capital is an investment and venture-building company combining
            research, capital, technology and hands-on execution to build
            globally relevant businesses from Africa.
          </p></RevealItem>
          <div className="flex items-center space-x-4 mb-20 lg:mb-0">
            <RevealItem><Link href="/contact#enquiry" className="inline-flex items-center justify-center text-[15px] bg-white py-2 px-6 rounded-full text-black hover:bg-gray-200 transition-colors duration-200">
              Work with us
            </Link></RevealItem>
            <RevealItem><Link href="/portfolio" className="inline-flex items-center justify-center text-[15px] bg-inherit py-2 px-6 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-200">
              Explore our portfolio
            </Link></RevealItem>
          </div>
          <RevealItem><ScrollDown /></RevealItem>
          </StaggerReveal>
        </div>
      </div>
    </div>
  );
};

export default Hero;
