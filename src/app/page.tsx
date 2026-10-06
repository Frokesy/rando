import AreasOfFocus from "@/components/home/AreasOfFocus";
import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import WhatWeDo from "@/components/home/WhatWeDo";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <AreasOfFocus />
      <WhatWeDo />
    </div>
  );
};

export default Home;
