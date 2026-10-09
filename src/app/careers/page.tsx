import CareerValueCard from "@/components/careers/CareerValueCard";
import StaggerReveal from "@/components/StaggerReveal";
import TopNav from "@/components/defaults/TopNav";
import {
  AofIcon,
  ApproachIcon,
  BeliefIcon,
  Bulb,
  CareersIcon,
  ContactIconTwo,
  DiscoverIcon,
  MissionSubIconTwo,
  WhatWeDoIcon,
} from "@/components/icons";
import ImageWipe from "@/components/motion/ImageWipe";
import RevealItem from "@/components/RevealItem";
import Image from "next/image";
import Link from "next/link";
import PreFooter from "@/components/defaults/PreFooter";
import Footer from "@/components/defaults/Footer";

const Careers = () => {
  const items = [
    {
      id: 1,
      icon: <MissionSubIconTwo />,
      text: "Take ownership of their responsibilities",
    },
    {
      id: 2,
      icon: <ContactIconTwo />,
      text: "Think clearly and communicate honestly",
    },
    {
      id: 3,
      icon: <Bulb />,
      text: "Learn quickly",
    },
    {
      id: 4,
      icon: <WhatWeDoIcon />,
      text: "Care about the quality of their work",
    },
    {
      id: 5,
      icon: <DiscoverIcon />,
      text: "Are comfortable solving unfamiliar problems",
    },
    {
      id: 6,
      icon: <BeliefIcon />,
      text: "Combine ambition with humility",
    },
    {
      id: 7,
      icon: <ApproachIcon />,
      text: "Can operate effectively in a fast-moving environment",
    },
    {
      id: 8,
      icon: <AofIcon />,
      text: "Believe globally relevant companies can be built from Africa",
    },
  ];
  return (
    <>
      <TopNav theme="dark" />
      <main className="mx-auto w-[90%] pt-4 lg:w-[80%] lg:mt-20 mt-10 lg:pb-20 pb-10">
        <StaggerReveal duration={0.45} stagger={0.1}>
          <RevealItem>
            <div className="flex items-center space-x-2">
              <CareersIcon />
              <p className="text-[14px] text-[#636363]">Careers</p>
            </div>
          </RevealItem>
          <RevealItem>
            <h1 className="mt-4 font-semibold lg:text-[64px] text-[34px]">
              Build ambitious companies from Africa
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-[#636363] lg:mt-0 mt-2">
              Ark Capital brings together people who are curious, disciplined,
              technically capable and committed to solving difficult problems.
            </p>
          </RevealItem>
          <RevealItem>
            <p className="text-[#636363] lg:mt-0 mt-2">
              We work across investment, technology, finance, operations,
              research and venture building.
            </p>
          </RevealItem>
          <RevealItem>
            <Link
              href="/contact#enquiry"
              className="inline-flex items-center justify-center bg-black text-white mt-6 text-[14px] py-2 px-4 rounded-full hover:bg-[#333]"
            >
              View open roles
            </Link>
          </RevealItem>
        </StaggerReveal>
        <ImageWipe className="mt-10 h-full w-full">
          <Image
            src="/careers-hero.png"
            alt="Ark Capital careers"
            width={1120}
            height={480}
            className="w-full h-auto rounded-xl"
            sizes="(min-width: 64rem) 80vw, 90vw"
          />
        </ImageWipe>
      </main>
      <div className="bg-[#F8F7F5] lg:py-20 py-10">
        <div className="w-[90%] lg:w-[80%] mx-auto space-y-6 lg:space-y-12 lg:pb-20">
          <StaggerReveal duration={0.45} stagger={0.1}>
            <RevealItem>
              <div className="flex items-center space-x-2">
                <CareersIcon />
                <p className="text-[14px] text-[#636363]">Careers</p>
              </div>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-4 font-semibold lg:text-[64px] text-[34px]">
                Who We Look For
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="text-[#636363] lg:mt-0 mt-2">We value people who</p>
            </RevealItem>
          </StaggerReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, index) => (
              <CareerValueCard
                key={item.id}
                icon={item.icon}
                number={item.id}
                text={item.text}
                delay={(index % 4) * 0.1}
              />
            ))}
          </div>
          <Link
            href="/contact#enquiry"
            className="inline-flex items-center justify-center bg-black text-white mt-6 text-[14px] py-2 px-4 rounded-full hover:bg-[#333]"
          >
            View open roles
          </Link>
        </div>
      </div>

      <PreFooter />
      <Footer />
    </>
  );
};

export default Careers;
