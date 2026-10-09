import { pageMetadata } from "@/lib/page-metadata";
import RevealItem from "@/components/RevealItem";
import Link from "next/link";
import ArticleBrowser from "@/components/insights/ArticleBrowser";
import TopNav from "@/components/defaults/TopNav";
import {
  Brain,
  DIIcon,
  Globe,
  GrowthIcon,
  InsightsIcon,
  MiniLogo,
  PortfolioIconTwo,
  WalletIcon,
  Web3Icon,
} from "@/components/icons";
import React from "react";
import PreFooter from "@/components/defaults/PreFooter";
import Footer from "@/components/defaults/Footer";

export const metadata = pageMetadata("Insights", "Read Ark Capital’s research on artificial intelligence, financial technology, venture building and the systems shaping Africa’s next economy.", "/insights", "/capabilities/img-four.png");

const Insights = () => {
  const articles = [
    {
      id: 1,
      categoryIcon: <Brain />,
      category: "Artificial Intelligence",
      dateTime: "8 September 2026 · 2 min read",
      title: "Applying AI where it changes decisions",
      img: "/capabilities/img-three.png",
      href: "/insights/applying-ai-where-it-changes-decisions",
      excerpt:
        "Artificial intelligence creates value when it is connected to a real decision, a real workflow and someone accountable for the outcome.",
    },
    {
      id: 2,
      categoryIcon: <PortfolioIconTwo />,
      category: "Venture building",
      dateTime: "25 August 2026 · 2 min read",
      title: "What venture building adds beyond capital",
      img: "/capabilities/capabilities-hero.png",
      href: "/insights/what-venture-building-adds-beyond-capital",
      excerpt:
        "Capital is necessary but rarely sufficient. Early companies also need technical depth, operating systems and the right relationships at the right time.",
    },
    {
      id: 3,
      categoryIcon: <GrowthIcon />,
      category: "Quantitave Markets",
      dateTime: "11 August 2026 · 2 min read",
      title: "Discipline before automation in systematic research",
      img: "/capabilities/img-six.png",
      href: "/insights/discipline-before-automation-in-systematic-research",
      excerpt:
        "Automated execution is the last step of a quantitative workflow, not the first. The work that comes before it determines whether a strategy deserves capital.",
    },
    {
      id: 4,
      categoryIcon: <DIIcon />,
      category: "Digital Infrastructure",
      dateTime: "28 July 2026 · 2 min read",
      title: "Infrastructure first: the systems growing business depend on",
      img: "/capabilities/img-five.png",
      href: "/insights/infrastructure-first-the-systems-growing-business-depend-on",
      excerpt:
        "Platforms, data systems and operational tools rarely make headlines. They are what allow a business to grow without losing control of its operations.",
    },
    {
      id: 5,
      categoryIcon: <Web3Icon />,
      category: "Web3",
      dateTime: "14 July 2026 · 2 min read",
      title: "Separating durable Web3 infrastructure from speculation",
      img: "/portfolio-hero.png",
      href: "/insights/separating-durable-web3-infrastructure-from-speculation",
      excerpt:
        "Beyond market cycles, some blockchain-based systems are solving real problems in settlement, verification and ownership. The question is how to tell them apart.",
    },
    {
      id: 6,
      categoryIcon: <Globe />,
      category: "African Technology",
      dateTime: "30 June 2026 · 2 min read",
      title: "Building globally relevant technologies from Africa",
      img: "/capabilities/img-two.png",
      href: "/insights/building-globally-relevant-technologies-from-africa",
      excerpt:
        "Technology has repeatedly transformed how Africans communicate, transact and build. The next phase should include more of those systems being built and controlled from Africa.",
    },
    {
      id: 7,
      categoryIcon: <PortfolioIconTwo />,
      category: "Venture building",
      dateTime: "16 June 2026 · 2 min read",
      title: "How we assess an opportunity before we build",
      img: "/capabilities/img-one.png",
      href: "/insights/how-we-assess-an-opportunity-before-we-build",
      excerpt:
        "Before any capital or effort is committed, we look closely at the problem, the market, the business model and the team's ability to execute.",
    },
  ];
  return (
    <>
      <TopNav theme="dark" />
      <main className="mx-auto w-[90%] pt-4 lg:w-[80%] lg:mt-20 mt-10 top lg:pb-20 pb-10">
        <RevealItem independent>
        <div className="flex items-center space-x-2">
          <InsightsIcon />
          <p className="text-[14px] text-[#636363]">Insights</p>
        </div>
        <h1 className="mt-4 font-semibold lg:text-[64px] text-[34px]">
          Research for building and investing at the frontier.
        </h1>
        <p className="text-[#636363] lg:mt-0 mt-2">
          Our insights examine the technologies, markets and systems shaping the
          future of business and finance in Africa and beyond.
        </p>

        <div className="group relative isolate mt-10 flex min-h-100 w-full flex-col justify-between gap-10 overflow-hidden rounded-xl lg:p-5 p-3 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none sm:p-6 lg:aspect-7/3">
          <div
            aria-hidden="true"
            data-page-media
            className="absolute inset-0 -z-10 bg-cover bg-center scale-100 blur-none transition-[scale,transform,filter] duration-700 ease-out group-hover:scale-[1.04] group-hover:blur-[2px] motion-reduce:transform-none motion-reduce:transition-none"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.75)), url('/capabilities/img-four.png')",
            }}
          />
          <div className="flex">
            <div className="backdrop-blur-3xl flex items-center p-3 bg-white/20 font-semibold rounded-xl space-x-2 text-white transition-colors duration-300 group-hover:bg-white/30 motion-reduce:transition-none">
              <WalletIcon />
              <span className="text-[13px]">Financial Technology</span>
            </div>
          </div>

          <div className="mt-auto w-full min-w-0 space-y-4 text-white lg:w-[60%]">
            <span className="text-[13px]">22 September 2026 · 2 min read </span>
            <h2 className="text-[26px] leading-tight font-semibold sm:text-[32px] lg:text-[40px]">
              <Link
                href="/insights/building-payment-infrastructure-that-institutions-can-trust"
                className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-white"
              >
                Building payment infrastructure that institutions can trust
              </Link>
            </h2>
            <p className="text-[14px] leading-relaxed sm:text-base">
              Reliable payments, collections and reporting are not features to
              add later. For businesses and financial institutions, they are the
              foundation everything else depends on.
            </p>

            <div className="flex items-center text-white space-x-2">
              <div className="bg-[#0E2859] w-7 h-7 flex items-center justify-center rounded-full">
                <MiniLogo />
              </div>
              <span className="text-[13px]">Ark Capital</span>
            </div>
          </div>
        </div>

        <ArticleBrowser articles={articles} />
              </RevealItem>
</main>

      <PreFooter />
      <Footer />
    </>
  );
};

export default Insights;
