import Footer from "@/components/defaults/Footer";
import PreFooter from "@/components/defaults/PreFooter";
import AreasOfFocus from "@/components/home/AreasOfFocus";
import Belief from "@/components/home/Belief";
import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import OurApproach from "@/components/home/OurApproach";
import Partner from "@/components/home/Partner";
import WhatWeDo from "@/components/home/WhatWeDo";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <AreasOfFocus />
      <WhatWeDo />
      <OurApproach />
      <Partner />
      <Belief />
      <PreFooter />
      <Footer />
    </div>
  );
};

export default Home;
