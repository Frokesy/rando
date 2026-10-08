import { pageMetadata } from "@/lib/page-metadata";
import ImageWipe from "@/components/motion/ImageWipe";
import Link from "next/link";
import Accordion from "@/components/Accordion";
import PreFooter from "@/components/defaults/PreFooter";
import TopNav from "@/components/defaults/TopNav";
import {
  AofIcon,
  BeliefIcon,
  Bulb,
  CompanyIcon,
  DiscoverIcon,
  MissionIcon,
  MissionSubIconOne,
  TriCirc,
  WhatWeDoIcon,
} from "@/components/icons";
import RevealItem from "@/components/RevealItem";
import Image from "next/image";
import Footer from "@/components/defaults/Footer";

export const metadata = pageMetadata("Company", "Learn about Ark Capital, an investment and venture-building company connecting technology, disciplined capital and hands-on execution in Africa.", "/company", "/company-hero.png");

const Company = () => {
  const items = [
    {
      id: 1,
      icon: <MissionSubIconOne />,
      title: "We co-build",
      description:
        "We work closely with teams and participate in the difficult process of turning technology into a functioning business.",
    },
    {
      id: 2,
      icon: <MissionIcon />,
      title: "We specialise",
      description:
        "We focus on areas where research, technical knowledge and operational understanding can create a genuine advantage.",
    },
    {
      id: 3,
      icon: <DiscoverIcon />,
      title: "We think long term",
      description:
        "We are interested in durable systems and valuable companies, not temporary attention or short-term trends.",
    },
    {
      id: 4,
      icon: <TriCirc />,
      title: "We combine disciplines",
      description:
        "Our work brings together investment, technology, strategy, finance, operations, risk and commercial execution.",
    },
    {
      id: 5,
      icon: <Bulb />,
      title: "We remain focused",
      description:
        "We build a concentrated portfolio so that each company receives meaningful attention and support.",
    },
  ];

  const principles = [
    {
      id: 1,
      title: "Technical depth",
      subText:
        "Strong businesses begin with a genuine understanding of the problem and the technology required to solve it.",
    },
    {
      id: 2,
      title: "Capital discipline",
      subText:
        "Strong businesses begin with a genuine understanding of the problem and the technology required to solve it.",
    },
    {
      id: 3,
      title: "Ownership",
      subText:
        "Strong businesses begin with a genuine understanding of the problem and the technology required to solve it.",
    },
    {
      id: 4,
      title: "Clarity",
      subText:
        "Strong businesses begin with a genuine understanding of the problem and the technology required to solve it.",
    },
    {
      id: 5,
      title: "Long-term value",
      subText:
        "Strong businesses begin with a genuine understanding of the problem and the technology required to solve it.",
    },
  ];
  return (
    <>
      <TopNav theme="dark" />
      <main className="mx-auto w-[90%] pt-4 lg:w-[80%] lg:mt-20 mt-10 top lg:pb-20 pb-10">
        <RevealItem independent>
        <div className="flex items-center space-x-2">
          <CompanyIcon />
          <p className="text-[14px] text-[#636363]">Company</p>
        </div>
        <h1 className="mt-4 font-semibold lg:text-[64px] text-[34px]">
          Built in Africa. Designed for global relevance.
        </h1>
        <p className="text-[#636363] lg:mt-0 mt-2">
          Ark Capital is an investment and venture-building company established
          in 2024 to build high-potential businesses at the intersection of
          technology, finance and infrastructure.
        </p>
        <Link
          href="/contact#enquiry"
          className="inline-flex items-center justify-center bg-black text-white mt-6 text-[14px] py-2 px-4 rounded-full hover:bg-[#333]"
        >
          Work with us
        </Link>

        <ImageWipe className="mt-10 h-full w-full"><Image
          src="/company-hero.png"
          alt="hero-img"
          width={1120}
          height={480}
          className="w-full h-auto  rounded-xl"
        /></ImageWipe>
              </RevealItem>
</main>

      <div className="bg-[#F8F7F5] lg:py-20 py-10">
        <div className="lg:w-[80%] w-[90%] mx-auto">
          <div className="flex items-center space-x-2">
            <BeliefIcon />
            <p className="text-[14px] text-[#636363]">Our Story</p>
          </div>
          <h2 className="lg:text-[44px] lg:w-[80%] text-[28px] mt-3">
            <span className="text-[#636363]">
              Ark Capital was founded on a simple conviction:
            </span>{" "}
            some of Africa&apos;s most important companies will be built by
            combining technical talent with disciplined capital and hands-on
            operational support.
          </h2>
          <div className="bg-white my-20 flex lg:flex-row flex-col justify-between items-center lg:space-y-0 space-y-10 lg:space-x-10 ">
            <RevealItem independent className="lg:w-[50%] w-full">
              <ImageWipe className="h-full w-full"><Image
                src="/company-img-two.png"
                width={534}
                height={428}
                className="h-auto w-full"
                alt="Ark Capital Prefooter Graphic"
              /></ImageWipe>
            </RevealItem>
            <RevealItem independent className="lg:w-[50%] w-full">
              <p className="lg:text-[18px] text-[#636363] mt-3">
                Too many promising ventures receive funding without the
                specialised assistance required to turn a strong product into a
                sustainable company. Others have capable technical teams but
                lack the financial structure, commercial direction or operating
                systems required to scale.
              </p>
              <p className="lg:text-[18px] text-[#636363] mt-6">
                We created Ark Capital to help close that gap.
              </p>
              <p className="lg:text-[18px] text-[#636363] mt-6">
                We work closely with founders and technical teams to understand
                the problem, strengthen the product, refine the business model,
                and build the operational foundation required for long-term
                growth.
              </p>
            </RevealItem>
          </div>
        </div>
      </div>

      <div className="lg:w-[80%] w-[90%] mx-auto lg:py-20 py-10 flex justify-between lg:space-x-10 lg:space-y-0 space-y-10 lg:flex-row flex-col">
        <RevealItem independent className="lg:w-[50%] p-4 bg-[#F8F7F5] space-y-20 rounded-lg">
          <div className="flex justify-between">
            <span className="text-[#636363] text-[14px]">Our Mission</span>
            <MissionIcon />
          </div>
          <h2 className="lg:text-[34px] text-[24px]">
            To build globally relevant companies and financial systems from
            Africa while creating long-term economic and financial value.
          </h2>
        </RevealItem>
        <RevealItem independent className="lg:w-[50%] p-4 bg-[#0E2859] space-y-20 rounded-lg text-white">
          <div className="flex justify-between">
            <span className="text-[14px]">Our Vision</span>
            <AofIcon />
          </div>
          <h2 className="lg:text-[34px] text-[24px]">
            An Africa that does not merely consume the technologies shaping the
            future but actively designs, builds and owns them.
          </h2>
        </RevealItem>
      </div>

      <div className="bg-[#F8F7F5] lg:py-20 py-10">
        <div className="lg:w-[80%] w-[90%] mx-auto">
          <RevealItem independent className="">
            <div className="flex items-center space-x-2">
              <WhatWeDoIcon />
              <p className="text-[14px] text-[#636363]">Why Ark Capital</p>
            </div>
            <h2 className="font-semibold lg:text-[56px] text-[34px] lg:mt-0 mt-3">
              What Makes Us Different
            </h2>
            <Link
              href="/contact?category=partners#enquiry"
              className="inline-flex items-center justify-center bg-black text-white text-[14px] py-2 px-4 rounded-full hover:bg-[#333]"
            >
              Partner with us
            </Link>
          </RevealItem>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-6">
            {items.map((item, index) => (
              <RevealItem independent
                key={index}
                delay={index * 0.12}
                className={index >= 3 ? "lg:col-span-3" : "lg:col-span-2"}
              >
                <article className="h-full overflow-hidden rounded-xl bg-white p-4">
                  {item.icon}
                  <div className="space-y-3 mt-6">
                    <h3 className="text-[20px] font-semibold lg:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-base text-[15px] leading-relaxed text-[#636363]">
                      {item.description}
                    </p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:w-[80%] w-[90%] mx-auto lg:py-20 py-10 flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-10">
        <div className="w-full min-w-0 lg:flex-1">
          <div className="flex items-center space-x-2">
            <DiscoverIcon />
            <p className="text-[14px] text-[#636363]">Principles</p>
          </div>
          <h2 className="font-semibold lg:text-[56px] text-[34px] lg:mt-0 mt-3">
            Operating Principles
          </h2>
        </div>

        <div className="w-full min-w-0 lg:flex-1">
          <Accordion items={principles} />
        </div>
      </div>
      <PreFooter />
      <Footer />
    </>
  );
};

export default Company;
