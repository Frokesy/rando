import StaggerReveal from "../StaggerReveal";
import RevealItem from "../RevealItem";
import { AofIcon } from "../icons";
import FocusCard from "./FocusCard";

const AreasOfFocus = () => {
  const areasOfFocus = [
    {
      id: 1,
      vid: "/aof/vid-one.mp4",
      title: "Fintech",
      description:
        "Payment, collection and financial infrastructure that helps businesses and institutions operate more efficiently.",
    },
    {
      id: 2,
      vid: "/aof/vid-two.mp4",
      title: "Artificial Intelligence",
      description:
        "Practical AI systems that improve decision-making, productivity and business operations.",
    },
    {
      id: 3,
      vid: "/aof/vid-three.mp4",
      title: "Web3",
      description:
        "Decentralised infrastructure and applications designed around real economic and commercial use cases.",
    },
    {
      id: 4,
      vid: "/aof/vid-four.mp4",
      title: "Digital Infrastructure",
      description:
        "The platforms, data systems and operational tools required to support modern businesses and financial institutions.",
    },
    {
      id: 5,
      vid: "/aof/vid-five.mp4",
      title: "Quantitative Financial Markets",
      description:
        "Research, data analysis, systematic strategies and proprietary technology for disciplined capital deployment.",
    },
  ];
  return (
    <StaggerReveal duration={0.45} stagger={0.1} className="lg:w-[80%] w-[90%] mx-auto lg:py-30 py-20">
      <StaggerReveal duration={0.45} stagger={0.1} className="">
        <RevealItem><div className="flex items-center space-x-2">
          <AofIcon />
          <p className="text-[14px] text-[#636363]">Areas of Focus</p>
        </div></RevealItem>
        <RevealItem><h2 className="font-semibold lg:text-[56px] text-[34px] lg:mt-0 mt-3">
          Building in markets that will shape the future
        </h2></RevealItem>
      </StaggerReveal>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-6">
        {areasOfFocus.map((area, index) => (
          <FocusCard
            key={area.id}
            delay={(index % 3) * 0.1}
            video={area.vid}
            title={area.title}
            description={area.description}
            wide={index >= 3}
            containVideoOnMobile={area.id === 5}
          />
        ))}
      </div>
    </StaggerReveal>
  );
};

export default AreasOfFocus;
