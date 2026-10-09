import { externalLinks } from "@/config/external-links";
import ConfiguredLink from "@/components/ConfiguredLink";
import StaggerReveal from "../StaggerReveal";
import RevealItem from "../RevealItem";
import { ApproachIcon } from "../icons";
import ApproachPanels from "./ApproachPanels";

const OurApproach = () => {
  return (
    <div className="bg-[#F8F7F5]">
      <StaggerReveal className="lg:w-[80%] w-[90%] mx-auto lg:py-30 py-20">
        <RevealItem className="">
          <div className="flex items-center space-x-2">
            <ApproachIcon />
            <p className="text-[14px] text-[#636363]">Our Approach</p>
          </div>
          <h2 className="font-semibold lg:text-[56px] text-[34px] lg:mt-0 mt-3">
            From opportunity to operating company
          </h2>
          <p className="text-[#636363] my-3">
            This approach allows us to understand each business from the inside
            and provide the support it genuinely needs.
          </p>
          <ConfiguredLink href={externalLinks.submitVenture} className="inline-flex items-center justify-center bg-black text-white text-[14px] py-2 px-4 rounded-full hover:bg-[#333]">
            Submit a venture
          </ConfiguredLink>
        </RevealItem>
        <ApproachPanels />
      </StaggerReveal>
    </div>
  );
};

export default OurApproach;
