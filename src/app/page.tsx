import { pageMetadata } from "@/lib/page-metadata";
import Footer from "@/components/defaults/Footer";
import PreFooter from "@/components/defaults/PreFooter";
import AreasOfFocus from "@/components/home/AreasOfFocus";
import Belief from "@/components/home/Belief";
import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import OurApproach from "@/components/home/OurApproach";
import OurPortfolio from "@/components/home/OurPortfolio";
import Partner from "@/components/home/Partner";
import WhatWeDo from "@/components/home/WhatWeDo";
import React from "react";

export const metadata=pageMetadata("Ark Capital","Ark Capital combines research, capital, technology and hands-on execution to build globally relevant businesses and financial systems from Africa.","/");

const Home=() => {
  return (
    <div>
      <Hero />
      <Mission />
      <AreasOfFocus />
      <WhatWeDo />
      <OurPortfolio />
      <OurApproach />
      <Partner />
      <Belief />
      <PreFooter />
      <Footer />
    </div>
  );
};

export default Home;
