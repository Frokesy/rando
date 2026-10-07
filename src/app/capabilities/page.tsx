import Footer from "@/components/defaults/Footer";
import PreFooter from "@/components/defaults/PreFooter";
import TopNav from "@/components/defaults/TopNav";
import {
  FinanceIcon,
  GrowthIcon,
  MissionSubIconOne,
  PortfolioIconTwo,
  ResearchIcon,
  ShieldIcon,
  TechIcon,
} from "@/components/icons";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Capabilities",
};

export default function CapabilitiesPage() {
  const capabilities = [
    {
      id: 1,
      icon: <ResearchIcon />,
      iconText: "Research and Opportunity Development",
      mainText:
        "We study markets, industries, technologies and structural problems to identify opportunities with strong commercial and                 strategic potential.",
      workItems: [
        "Market and industry research",
        "Opportunity Identification",
        "Competitive analysis",
        "Business-model assessment",
        "Commercial and technical due diligence",
        "Financial modelling",
        "Risk assessment",
      ],
      img: "/capabilities/img-one.png",
    },
    {
      id: 2,
      icon: <PortfolioIconTwo />,
      iconText: "Venture Building",
      mainText:
        "We support companies from early validation through commercial growth.",
      workItems: [
        "Venture design",
        "Product and market validation",
        "Business-model development",
        "Organizational planning",
        "Hiring and team development",
        "Performance tracking",
        "Governance and reporting",
      ],
      img: "/capabilities/img-two.png",
    },
    {
      id: 3,
      icon: <TechIcon />,
      iconText: "Technology and Product",
      mainText:
        "We work with technical teams to connect product development to clear business outcomes.",
      workItems: [
        "Product strategy",
        "Technical planning",
        "Digital-platform development",
        "Data and systems architecture",
        "Automation",
        "Artificial intelligence integration",
        "Technology partnerships",
      ],
      img: "/capabilities/img-three.png",
    },
    {
      id: 4,
      icon: <FinanceIcon />,
      iconText: "Finance and capital",
      mainText:
        "We help companies understand their financial position and deploy capital responsibly.",
      workItems: [
        "Financial planning and analysis",
        "Budgeting and cash-flow management",
        "Capital allocation",
        "Management reporting",
        "Fundraising preparation",
        "Investor materials",
        "Transaction support",
      ],
      img: "/capabilities/img-four.png",
    },
    {
      id: 5,
      icon: <ShieldIcon />,
      iconText: "Operations and Risk",
      mainText:
        "We help portfolio companies establish the processes and controls required for reliable execution.",
      workItems: [
        "Operational systems",
        "Internal controls",
        "Compliance support",
        "Risk monitoring",
        "Documentation",
        "Performance reporting",
        "Process improvement",
      ],
      img: "/capabilities/img-five.png",
    },
    {
      id: 6,
      icon: <GrowthIcon />,
      iconText: "Community Growth",
      mainText:
        "We support the development of the relationships and distribution channels required to grow.",
      workItems: [
        "Go-to-market strategy",
        "Strategic partnerships",
        "Institutional relationships",
        "Customer development",
        "Commercial negotiations",
        "Market expansion",
      ],
      img: "/capabilities/img-six.png",
    },
  ];
  return (
    <>
      <TopNav theme="dark" />
      <main className="mx-auto w-[90%] pt-4 lg:w-[80%] lg:mt-20 mt-10 top lg:pb-20 pb-10">
        <div className="flex items-center space-x-2">
          <MissionSubIconOne />
          <p className="text-[14px] text-[#636363]">Capabilities</p>
        </div>
        <h2 className="mt-4 font-semibold lg:text-[64px] text-[34px]">
          The capabilities required to turn ideas into institutions.
        </h2>
        <p className="text-[#636363] lg:mt-0 mt-2">
          Ark Capital provides more than financing. We bring together the
          strategic, technical, financial and operational capabilities required
          to build enduring companies.
        </p>
        <button className="bg-black text-white mt-6 text-[14px] py-2 px-4 rounded-full hover:bg-[#333]">
          Work with us
        </button>

        <Image
          src="/capabilities/capabilities-hero.png"
          alt="hero-img"
          width={1120}
          height={480}
          className="w-full h-full mt-10 rounded-xl"
        />
      </main>
      <div className="bg-[#F8F7F5] lg:py-20 py-10">
        <div className="w-[90%] lg:w-[80%] mx-auto lg:space-y-10 space-y-6">
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              className="bg-[#F0EFEC] p-1 rounded-xl flex lg:flex-row lg:space-x-3 flex-col-reverse"
            >
              <div className="lg:w-[50%] bg-white p-6 rounded-xl flex flex-col justify-between self-stretch">
                <div className="space-y-3 lg:mt-0 mt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center  space-x-2">
                      {capability.icon}
                      <span className="text-[#1A1A1A] lg:pr-0 pr-6 text-[14px] ">
                        {capability.iconText}
                      </span>
                    </div>
                    <span className="text-[#1A1A1A] text-[14px]">
                      0{capability.id}
                    </span>
                  </div>

                  <p className="text-[#1A1A1A] lg:text-[28px] text-[20px] lg:pr-12">
                    {capability.mainText}
                  </p>
                </div>

                <div className="mt-auto flex flex-col pt-6">
                  <span className="text-[#1A1A1A] text-[14px] font-semibold">
                    Our work includes
                  </span>
                  <div className="flex w-full min-w-0 mt-4 flex-wrap gap-2 lg:flex-1 lg:pr-12">
                    {capability.workItems.map((item) => (
                      <div
                        className="max-w-full rounded-full bg-[#F8F7F5] px-3 py-2 text-[12px] text-[#3F4044] sm:px-4 sm:text-[13px]"
                        key={item}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <button className="bg-black text-white mt-6 text-[14px] py-2 px-4 rounded-full hover:bg-[#333]">
                    Work with us
                  </button>
                </div>
              </div>
              <div className="lg:w-[50%]">
                <Image
                  src={capability.img}
                  alt={capability.iconText}
                  width={516}
                  height={624}
                  className="w-full lg:h-full h-64 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <PreFooter />
      <Footer />
    </>
  );
}
