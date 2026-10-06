import PreFooter from "@/components/defaults/PreFooter";
import AreasOfFocus from "@/components/home/AreasOfFocus";
import Belief from "@/components/home/Belief";
import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
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
      <Partner />
      <Belief />
      <PreFooter />
    </div>
  );
};

export default Home;
