import React from "react";
import { BeliefIcon } from "../icons";

const Belief = () => {
  return (
    <div className="bg-[#F8F7F5] lg:pt-30 pt-20 pb-6 flex flex-col items-center justify-center text-center">
      <div className="flex items-center space-x-2">
        <BeliefIcon />
        <p className="text-[14px] text-[#636363]">Our Belief</p>
      </div>
      <h2 className="lg:text-[68px] max-w-[90%] lg:max-w-225 text-[38px] mt-3">
        Africa should not only participate in the future. It should{" "}
        <span className="text-[#636363]">help build it.</span>
      </h2>
      <p className="text-[18px] text-[#636363] lg:mt-6 mt-4 lg:max-w-2xl max-w-[90%]">
        Technology has repeatedly transformed how Africans communicate,
        transact, build businesses and participate in the global economy.
      </p>
      <p className="text-[18px] text-[#636363] lg:mt-6 mt-4 lg:max-w-2xl max-w-[90%]">
        We believe the next phase should include more technologies, businesses
        and financial systems researched, built and controlled from Africa.
      </p>
      <p className="text-[18px] text-[#636363] lg:mt-6 mt-4 lg:max-w-2xl max-w-[90%]">
        Ark Capital exists to contribute to that future.
      </p>
    </div>
  );
};

export default Belief;
