import { pageMetadata } from "@/lib/page-metadata";
import ImageWipe from "@/components/motion/ImageWipe";
import RevealItem from "@/components/RevealItem";
import ConfiguredLink from "@/components/ConfiguredLink";
import { externalLinks } from "@/config/external-links";
import Footer from "@/components/defaults/Footer";
import PreFooter from "@/components/defaults/PreFooter";
import TopNav from "@/components/defaults/TopNav";
import { Briefcase, Checkmark, PortfolioIconTwo } from "@/components/icons";
import Image from "next/image";

export const metadata = pageMetadata("Portfolio", "Discover Ezrah, Ark Quant and the companies and systems Ark Capital builds and supports.", "/portfolio", "/portfolio-hero.png");

const PortfolioPage = () => {
  return (
    <>
      <TopNav theme="dark" />
      <main className="mx-auto w-[90%] pt-4 lg:w-[80%] lg:mt-20 mt-10 top lg:pb-20 pb-10">
        <RevealItem independent>
        <div className="flex items-center space-x-2">
          <Briefcase />
          <p className="text-[14px] text-[#636363]">Portfolio</p>
        </div>
        <h1 className="mt-4 font-semibold lg:text-[64px] text-[34px]">
          Focused companies. Shared capabilities. Long-term ambition.
        </h1>
        <p className="text-[#636363] lg:mt-0 mt-2">
          Our portfolio reflects our belief that specialised teams, disciplined
          execution and connected operating capabilities can produce enduring
          businesses.
        </p>

        <ImageWipe className="mt-10 h-full w-full"><Image
          src="/portfolio-hero.png"
          alt="hero-img"
          width={1120}
          height={480}
          className="w-full h-auto  rounded-xl"
        /></ImageWipe>
              </RevealItem>
</main>

      <div id="ezrah" className="scroll-mt-6 bg-[#F8F7F5] py-20">
        <RevealItem independent className="lg:w-[80%] w-[90%] mx-auto">
          <div className="">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold lg:text-[56px] text-[34px]">
                Ezrah
              </h2>
              <Image
                src="/ezrah-logo.png"
                alt="hero-img"
                width={52}
                height={52}
                className="lg:w-auto lg:h-auto w-10 h-10"
              />
            </div>
            <p className="lg:text-[24px] text-[20px] lg:mt-0 mt-4">
              Building digital infrastructure for the intelligence age
            </p>
            <p className="lg:text-[24px] text-[20px] mt-6">
              Ezrah is a technology company building infrastructure for trusted
              interactions between individuals, businesses and institutions.
            </p>
            <p className="lg:text-[24px] text-[20px] mt-6">
              Its tools help organisations issue and verify digital credentials,
              while giving people greater control over their data and the
              information they share. This makes it easier to prove
              qualifications, achievements and other claims across services
              without disclosing unnecessary personal data.
            </p>
            <p className="lg:text-[24px] text-[20px] mt-6">
              Ezrah&apos;s vision is to strengthen trust, protect data ownership
              and help businesses, creators and professionals participate in the
              global digital economy.
            </p>
            <ConfiguredLink href={externalLinks.ezrah} className="inline-flex items-center justify-center bg-[#F0EFEC] text-[#636363] py-2 px-4 rounded-lg mt-3 font-semibold">
              Visit Ezrah
            </ConfiguredLink>
          </div>
        </RevealItem>
        <RevealItem independent className="py-10 lg:w-[80%] w-[90%] mx-auto bg-white p-6 rounded-xl mt-10">
          <h2 className="text-[#8A8A8A] text-[14px]">
            Ark Capital supports Ezrah through:
          </h2>
          <div className="mt-6 grid lg:grid-cols-3 grid-cols-1 gap-4">
            {[
              "Corporate and product strategy",
              "Commercial partnerships",
              "Operational development",
              "Technology and product development",
              "Compliance support",
              "Financial planning",
              "Institutional growth",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center space-x-2 bg-[#F8F7F5] p-2 rounded-lg"
              >
                <Checkmark />
                <span className="text-[14px]">{item}</span>
              </div>
            ))}
          </div>
        </RevealItem>
      </div>

      <div
        id="ark-quant"
        className="scroll-mt-6 min-h-100 lg:py-20 py-10 bg-[#000501] lg:min-h-140"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 0% 100%, #7FE3F229 0%, transparent 45%), radial-gradient(ellipse at 50% 55%, #0E28598C 0%, transparent 50%), radial-gradient(ellipse at 100% 45%, #2E6CA824 0%, transparent 40%)",
        }}
      >
        <div className="lg:w-[80%] w-[90%] mx-auto text-white">
          <div className="">
            <div className="flex items-center justify-between">
              <div className="">
                <h2 className="font-semibold lg:text-[56px] text-[34px]">
                  Ark Quant
                </h2>
                <p className="text-[24px] lg:block hidden">
                  A systematic approach to research and capital deployment
                </p>
              </div>
              <Image
                src="/icon.svg"
                alt="hero-img"
                width={52}
                height={52}
                className=""
              />
            </div>
            <p className="text-[18px] block lg:hidden pt-6">
              A systematic approach to research and capital deployment
            </p>
            <p className="lg:text-[20px] text-[18px] mt-6">
              Ark Quant is Ark Capital&apos;s internal proprietary trading
              system.
            </p>
            <p className="lg:text-[20px] text-[18px] mt-6">
              It is being built to connect the entire quantitative trading
              workflow within one disciplined operating structure.
            </p>
          </div>

          <div className="py-10 mx-auto border border-white/10 bg-[#000501]/30 backdrop-blur-3xl p-6 rounded-xl mt-10">
            <h2 className="text-[#8A8A8A] text-[14px]">The system covers:</h2>
            <div className="mt-6 grid lg:grid-cols-3 grid-cols-1 gap-2">
              {[
                "Market-data collection",
                "Data preparation and analysis",
                "Strategy research",
                "Backtesting and validation",
                "Risk management",
                "Automated execution",
                "Position monitoring",
                "Performance measurement",
                "Trade reconciliation",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-6 bg-[#1A1A1A]/80 p-2 rounded-lg"
                >
                  <span className="text-[13px] font-semibold text-[#7FE3F2]">
                    0{index + 1}
                  </span>
                  <span className="text-[14px] text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex lg:items-center items-start space-x-3 mt-10 border border-white/10 bg-[#000501]/30 backdrop-blur-3xl p-4 rounded-xl">
            <Image src="/shield.png" alt="shield" width={36} height={36} />
            <p className="text-[15px] text-white/80">
              Ark Quant is an internal research and proprietary capital
              initiative. It is not presented as a public investment product or
              an invitation to invest.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 w-[90%] lg:w-[80%] mx-auto">
        <div className="w-full min-w-0 space-y-3 lg:flex-1">
          <div className="flex items-center space-x-2">
            <PortfolioIconTwo />
            <p className="text-[14pborder-t border-[#ccc]x] text-[#3F4044]">
              New Ventures
            </p>
          </div>
          <h2 className="lg:text-[28px] text-[20px] font-semibold">
            Researching the next generation of opportunities
          </h2>
          <p className="text-[16px] text-[#636363]">
            We are interested in technically strong founders and teams working
            on important problems with clear commercial potential.
          </p>
        </div>

        <div className="lg:w-[50%] lg:my-20 my-10">
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
          <ConfiguredLink href={externalLinks.submitVenture} className="inline-flex items-center justify-center bg-black text-white text-[14px] py-2 px-4 mt-6 rounded-full hover:bg-[#333]">
            Introduce your company
          </ConfiguredLink>
        </div>
      </div>
      <PreFooter />
      <Footer />
    </>
  );
};

export default PortfolioPage;
