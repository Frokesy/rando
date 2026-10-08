import StaggerReveal from "../StaggerReveal";
import RevealItem from "../RevealItem";
import React from "react";
import { BeliefIcon } from "../icons";

const Belief = () => {
  return (
    <StaggerReveal duration={0.45} stagger={0.1} className="bg-[#F8F7F5] lg:pt-30 pt-20 pb-6 flex flex-col items-center justify-center text-center">
      <RevealItem><div className="flex items-center space-x-2">
        <BeliefIcon />
        <p className="text-[14px] text-[#636363]">Our Belief</p>
      </div></RevealItem>
      <RevealItem className="lg:text-[68px] max-w-[90%] lg:max-w-225 text-[38px] mt-3"><h2 >
        Africa should not only participate in the future. It should{" "}
        <span className="text-[#636363]">help build it.</span>
      </h2></RevealItem>
      <RevealItem className="text-[18px] text-[#636363] lg:mt-6 mt-4 lg:max-w-2xl max-w-[90%]"><p >
        Technology has repeatedly transformed how Africans communicate,
        transact, build businesses and participate in the global economy.
      </p></RevealItem>
      <RevealItem className="text-[18px] text-[#636363] lg:mt-6 mt-4 lg:max-w-2xl max-w-[90%]"><p >
        We believe the next phase should include more technologies, businesses
        and financial systems researched, built and controlled from Africa.
      </p></RevealItem>
      <RevealItem className="text-[18px] text-[#636363] lg:mt-6 mt-4 lg:max-w-2xl max-w-[90%]"><p >
        Ark Capital exists to contribute to that future.
      </p></RevealItem>
    </StaggerReveal>
  );
};

export default Belief;
