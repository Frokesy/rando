import StaggerReveal from "../StaggerReveal";
import RevealItem from "../RevealItem";
import {
  LogoBlackNoText,
  MissionIcon,
  MissionSubIconOne,
  MissionSubIconTwo,
} from "../icons";

const Mission=() => {
  return (
    <div className="bg-[#F8F7F5]">
      <StaggerReveal duration={0.45} stagger={0.1} className="lg:w-[80%] w-[90%] mx-auto lg:py-20 py-10">
        <div className="flex lg:flex-row flex-col justify-between lg:items-end lg:space-y-0 space-y-6">
          <StaggerReveal duration={0.45} stagger={0.1} className="lg:w-[60%]">
            <RevealItem><div className="flex items-center space-x-2">
              <MissionIcon />
              <p className="text-[14px] text-[#636363]">Mission</p>
            </div></RevealItem>
            <RevealItem><h2 className="font-semibold lg:text-[56px] text-[34px] lg:mt-0 mt-3">
              We build where technology, capital and execution meet.
            </h2></RevealItem>
          </StaggerReveal>

          <RevealItem className="flex items-center space-x-2 mb-6">
            <LogoBlackNoText />
            <p className="text-[14px] text-[#636363]">Ark Capital</p>
          </RevealItem>
        </div>

        <div className="flex lg:flex-row flex-col justify-between lg:mt-20 mt-10 lg:space-x-10 lg:space-y-0 space-y-6">
          <RevealItem independent duration={0.45} className="lg:w-[50%] bg-white p-4 rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-[#636363] text-[14px]">01</span>
              <MissionSubIconOne />
            </div>
            <p className="lg:text-[24px] text-[18px] text-[#1A1A1A] mt-10">
              Africa&apos;s next generation of globally relevant companies will
              require more than funding. They will require technical depth,
              disciplined capital, strong operating systems and teams prepared
              to solve difficult problems.
            </p>
          </RevealItem>

          <RevealItem independent duration={0.45} delay={0.1} className="lg:w-[50%] bg-white p-4 rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-[#636363] text-[14px]">02</span>
              <MissionSubIconTwo />
            </div>
            <p className="lg:text-[24px] text-[18px] text-[#1A1A1A] mt-10">
              Ark Capital brings these capabilities together to identify
              opportunities, build businesses and support their long-term
              growth.
            </p>
          </RevealItem>
        </div>
      </StaggerReveal>
    </div>
  );
};

export default Mission;
