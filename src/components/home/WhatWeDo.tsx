import Link from "next/link";
import StaggerReveal from "../StaggerReveal";
import RevealItem from "../RevealItem";
import { RightArrowIcon, WhatWeDoIcon } from "../icons";
import WhatWeDoCard from "./WhatWeDoCard";

const WhatWeDo = () => {
  const whatWeDo = [
    {
      id: 1,
      title: "Research and Investment",
      icon: "/wwd-icons/rai.svg",
      description:
        "We study emerging markets, technologies and business models to identify opportunities with meaningful long-term potential.",
    },
    {
      id: 2,
      title: "Venture Building",
      icon: "/wwd-icons/vb.svg",
      description:
        "We work alongside founding and technical teams to develop products, strengthen business models and build the systems required for execution.",
    },
    {
      id: 3,
      title: "Technology and Product",
      icon: "/wwd-icons/tap.svg",
      description:
        "We support product strategy, technical development and the creation of reliable digital infrastructure.",
    },
    {
      id: 4,
      title: "Finance and Operations",
      icon: "/wwd-icons/fao.svg",
      description:
        "We help portfolio companies improve financial planning, reporting, compliance, internal processes and capital allocation.",
    },
    {
      id: 5,
      title: "Partnerships and Growth",
      icon: "/wwd-icons/pag.svg",
      description:
        "We support commercial strategy, institutional relationships, market access and the partnerships required for sustainable growth.",
    },
  ];
  return (
    <div className="bg-[#F8F7F5]">
      <StaggerReveal duration={0.45} stagger={0.1} className="lg:w-[80%] w-[90%] mx-auto lg:py-30 py-20">
        <StaggerReveal duration={0.45} stagger={0.1} className="">
          <RevealItem><div className="flex items-center space-x-2">
            <WhatWeDoIcon />
            <p className="text-[14px] text-[#636363]">What We Do</p>
          </div></RevealItem>
          <RevealItem><h2 className="font-semibold lg:text-[56px] text-[34px] lg:mt-0 mt-3">
            More than capital
          </h2></RevealItem>
          <RevealItem><p className="text-[#636363] my-3">
            We do not operate as a passive investor. We work closely with
            founders, engineers and operators to turn strong ideas and technical
            capabilities into scalable businesses.
          </p></RevealItem>
          <RevealItem><Link href="/contact#enquiry" className="inline-flex items-center justify-center bg-black text-white text-[14px] py-2 px-4 rounded-full hover:bg-[#333]">
            Work with us
          </Link></RevealItem>
        </StaggerReveal>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {whatWeDo.map((item, index) => (
            <WhatWeDoCard
              key={item.id}
              title={item.title}
              icon={item.icon}
              description={item.description}
              delay={index * 0.1}
            />
          ))}
          <RevealItem independent delay={whatWeDo.length * 0.1} className="min-h-64 rounded-xl bg-[#1A1A1A] text-white">
            <div className="h-full p-6 lg:p-8 flex flex-col justify-between space-y-6">
              <div className="">
                <h2 className="text-[20px] font-semibold">Capabilities</h2>
                <p className="text-[15px] mt-3">
                  Explore the full range of support we bring to the companies we
                  build.
                </p>
              </div>
              <Link href="/capabilities" className="group flex justify-between items-center border-t-2 border-[#333] pt-4">
                <p className="text-[14px]">View capabilities</p>
                <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-[#333] hover:text-white transition-all duration-300">
                  <RightArrowIcon className="w-6 h-6 text-black inline-block hover:text-white" />
                </div>
              </Link>
            </div>
          </RevealItem>
        </div>
      </StaggerReveal>
    </div>
  );
};

export default WhatWeDo;
