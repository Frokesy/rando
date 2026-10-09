import { externalLinks } from "@/config/external-links";
import ConfiguredLink from "@/components/ConfiguredLink";
import StaggerReveal from "../StaggerReveal";
import RevealItem from "../RevealItem";
import Image from "next/image";
import { CPIcon } from "../icons";

const Partner = () => {
  return (
    <StaggerReveal duration={0.45} stagger={0.1} className="bg-[#1A1A1A] lg:py-30 py-20">
      <div className="lg:w-[80%] w-[90%] mx-auto flex lg:flex-row flex-col justify-between items-center lg:space-y-0 space-y-10 lg:space-x-10 text-white">
        <RevealItem className="lg:w-[50%] w-full"><div>
          <Image
            src="/boardroom.png"
            width={536}
            height={496}
            className="h-auto w-full"
            alt="Ark Capital Prefooter Graphic"
          />
        </div></RevealItem>
        <StaggerReveal duration={0.45} stagger={0.1} className="lg:w-[50%] w-full">
          <div className="flex items-center space-x-2">
            <CPIcon />
            <RevealItem className="text-[14px] text-[#636363]"><p >Connected Platform</p></RevealItem>
          </div>
          <RevealItem className="lg:text-[56px] text-[34px] font-semibold lg:mt-0 mt-3"><h2 >
            One Portfolio. <br /> Shared Capabilities.
          </h2></RevealItem>
          <RevealItem className="lg:text-[16px] text-white mt-3"><p >
            Ark Capital provides strategic direction, capital discipline,
            technology, financial planning, operational support and risk
            oversight across its portfolio.
          </p></RevealItem>
          <RevealItem className="lg:text-[16px] text-white mt-3"><p >
            Our portfolio companies contribute market access, technical
            experience, data and new commercial opportunities.
          </p></RevealItem>
          <RevealItem className="lg:text-[16px] text-white mt-3"><p >
            Together, these capabilities form a connected platform in which
            every business maintains a clear focus while benefiting from the
            experience, infrastructure and relationships developed across the
            wider portfolio.
          </p></RevealItem>
          <RevealItem><ConfiguredLink href={externalLinks.partnerWithUs} className="inline-flex items-center justify-center text-[14px] mt-4 hover:bg-[#636363] py-2 px-6 rounded-full text-white bg-gray-600 transition-colors duration-200">
            Partner with us
          </ConfiguredLink></RevealItem>
        </StaggerReveal>
      </div>
    </StaggerReveal>
  );
};

export default Partner;
