import Link from "next/link";
import React from "react";
import StaggerReveal from "../StaggerReveal";
import RevealItem from "../RevealItem";
import {
  MiniLogo,
  PortfolioIconOne,
  PortfolioIconTwo,
  RightArrowIcon,
} from "../icons";
import Image from "next/image";

const OurPortfolio=() => {
  return (
    <StaggerReveal duration={0.45} stagger={0.1} className="lg:w-[80%] w-[90%] mx-auto lg:py-30 py-20">
      <StaggerReveal duration={0.45} stagger={0.1} className="">
        <RevealItem><div className="flex items-center space-x-2">
          <PortfolioIconOne />
          <p className="text-[14px] text-[#636363]">Portfolio</p>
        </div></RevealItem>
        <RevealItem><h2 className="font-semibold lg:text-[56px] text-[34px] lg:mt-0 mt-3">
          Our Portfolio
        </h2></RevealItem>
        <RevealItem><p className="text-[#636363] my-3">
          We build and support focused companies and internal systems that solve
          important operational and financial problems.
        </p></RevealItem>
        <RevealItem><Link href="/portfolio" className="inline-flex items-center justify-center bg-black text-white text-[14px] py-2 px-4 rounded-full hover:bg-[#333]">
          Explore our portfolio
        </Link></RevealItem>
      </StaggerReveal>

      <div className="mt-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
        <RevealItem independent duration={0.45} className="flex min-w-0"><div className="flex min-w-0 flex-1 flex-col">
          <div className="relative z-10 -ml-0.5 -mb-2 flex h-13 w-58 max-w-full shrink-0 items-center px-6">
            <Image
              src="/port-attach-one.svg"
              alt=""
              fill
              sizes="229px"
              className="object-fill"
              aria-hidden="true"
            />
            <Image
              src="/ezrah.png"
              alt="Ezrah"
              width={66}
              height={18}
              className="relative h-auto max-w-full"
            />
          </div>
          <div className="flex flex-1 flex-col bg-white border-t-8 border border-[#E9E7E3] rounded-xl rounded-tl-none py-6 px-4">
            <div className="flex h-66 shrink-0 items-center justify-center py-10">
              <Image
                src="/port-img-one.png"
                alt="Ezrah"
                width={151}
                height={181}
                className="relative h-auto max-w-full"
              />
            </div>
            <h2 className="text-[30px] font-semibold">
              Digital Infrastructure for the intelligence age
            </h2>
            <p className="text-[15px] text-[#636363] mt-3 mb-6">
              Ezrah is a technology company building infrastructure for trusted
              interactions between individuals, businesses and institutions.
            </p>
            <Link href="/portfolio#ezrah" className="bg-[#E7E5E1] flex w-fit items-center space-x-3 mt-auto py-2 px-6 rounded-full hover:bg-[#f1f1f1] transition-all duration-300">
              <span className="text-[14px]  text-black transition-all duration-300 font-semibold">
                Explore Ezrah
              </span>
              <div className="bg-black rounded-full w-8 h-8 flex justify-center items-center">
                <RightArrowIcon className="w-4 h-4 text-white inline-block" />
              </div>
            </Link>
          </div>
        </div></RevealItem>

        <RevealItem independent duration={0.45} delay={0.1} className="flex min-w-0"><div className="flex min-w-0 flex-1 flex-col">
          <div className="relative z-10 -ml-0.5 -mb-2 flex h-13 w-58 max-w-full shrink-0 items-center px-6">
            <Image
              src="/port-attach-two.svg"
              alt=""
              fill
              sizes="229px"
              className="object-fill"
              aria-hidden="true"
            />
            <div className="relative flex items-center space-x-3">
              <MiniLogo />
              <p className="text-[14px] text-white">Ark Quant</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col bg-black border-t-8 border border-[#1B1E1C] rounded-xl rounded-tl-none py-6 px-4">
            <div className="flex h-66 shrink-0 items-center justify-center py-10">
              <Image
                src="/port-img-two.png"
                alt="Ark Quant"
                width={151}
                height={181}
                className="relative h-auto max-w-full"
              />
            </div>
            <h2 className="text-[30px] text-white font-semibold">
              Research. Systems. Execution.
            </h2>
            <p className="text-[15px] text-white mt-3 mb-6">
              Ark Quant is Ark Capital&apos;s internal proprietary trading and
              capital-management initiative.
            </p>
            <Link href="/portfolio#ark-quant" className="flex w-fit items-center space-x-3 mt-auto py-2 px-6 rounded-full bg-gray-800 transition-colors duration-200 hover:bg-[#636363]">
              <span className="text-[14px]  text-white transition-all duration-300 font-semibold">
                Explore Ark Quant
              </span>
              <div className="bg-white rounded-full w-8 h-8 flex justify-center items-center">
                <RightArrowIcon className="w-4 h-4 text-black inline-block" />
              </div>
            </Link>
          </div>
        </div></RevealItem>
      </div>

      <div className="mt-10 flex flex-col gap-6 border-t border-[#ccc] py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <RevealItem independent duration={0.45} className="w-full min-w-0 lg:flex-1"><div className="space-y-3">
          <div className="flex items-center space-x-2">
            <PortfolioIconTwo />
            <p className="text-[14px] text-[#3F4044]">New Ventures</p>
          </div>
          <h2 className="lg:text-[28px] text-[20px] font-semibold">
            Building what comes next
          </h2>
          <p className="text-[16px] text-[#636363]">
            We continue to research and develop opportunities in artificial
            intelligence, digital infrastructure, financial technology and other
            frontier markets.
          </p>
        </div></RevealItem>

        <RevealItem independent duration={0.45} delay={0.1} className="lg:w-[50%]"><div>
          <div className="flex w-full min-w-0 flex-wrap gap-2 lg:flex-1">
            {[
              "Artificial Intelligence",
              "Financial Technology",
              "Web3 Infrastructure",
              "Digital Infrastructure",
              "Data and automation",
              "Quantitative financial systems",
              "Other frontier technologies",
            ].map((item) => (
              <div
                className="max-w-full rounded-full bg-[#F8F7F5] px-3 py-2 text-[12px] text-[#3F4044] sm:px-4 sm:text-[13px]"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          <Link href="/contact?category=founders#enquiry" className="inline-flex items-center justify-center bg-black text-white text-[14px] py-2 px-4 mt-6 rounded-full hover:bg-[#333]">
            Build with us
          </Link>
        </div></RevealItem>
      </div>
    </StaggerReveal>
  );
};

export default OurPortfolio;
