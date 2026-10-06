import Image from "next/image";
import { CPIcon } from "../icons";

const Partner = () => {
  return (
    <div className="bg-[#1A1A1A] lg:py-30 py-20">
      <div className="lg:w-[80%] w-[90%] mx-auto flex lg:flex-row flex-col justify-between items-center lg:space-y-0 space-y-10 lg:space-x-10 text-white">
        <div className="lg:w-[50%] w-full">
          <Image
            src="/boardroom.png"
            width={536}
            height={496}
            className="h-auto w-full"
            alt="Ark Capital Prefooter Graphic"
          />
        </div>
        <div className="lg:w-[50%] w-full">
          <div className="flex items-center space-x-2">
            <CPIcon />
            <p className="text-[14px] text-[#636363]">Connected Platform</p>
          </div>
          <h2 className="lg:text-[56px] text-[34px] font-semibold lg:mt-0 mt-3">
            One Portfolio. <br /> Shared Capabilities.
          </h2>
          <p className="lg:text-[16px] text-white mt-3">
            Ark Capital provides strategic direction, capital discipline,
            technology, financial planning, operational support and risk
            oversight across its portfolio.
          </p>
          <p className="lg:text-[16px] text-white mt-3">
            Our portfolio companies contribute market access, technical
            experience, data and new commercial opportunities.
          </p>
          <p className="lg:text-[16px] text-white mt-3">
            Together, these capabilities form a connected platform in which
            every business maintains a clear focus while benefiting from the
            experience, infrastructure and relationships developed across the
            wider portfolio.
          </p>
          <button className="text-[14px] mt-4 hover:bg-[#636363] py-2 px-6 rounded-full text-white bg-gray-600 transition-colors duration-200">
            Partner with us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partner;
