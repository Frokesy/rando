import { pageMetadata } from "@/lib/page-metadata";
import RevealItem from "@/components/RevealItem";
import Link from "next/link";
import ContactEnquiry from "@/components/contact/ContactEnquiry";
import { Suspense } from "react";
import Footer from "@/components/defaults/Footer";
import TopNav from "@/components/defaults/TopNav";
import {
  Checkmark,
  CompanyIcon,
  ContactIconOne,
  ContactIconTwo,
  GrowthIcon,
  PortfolioIconTwo,
  TechnicalIcon,
} from "@/components/icons";
import React from "react";

export const metadata=pageMetadata("Contact","Contact Ark Capital to introduce your company, explore a partnership or discuss an investor or general enquiry.","/contact");

const Contact=() => {
  const categories=[
    {
      id: 1,
      icon: <PortfolioIconTwo />,
      title: "Founders",
      subText: "Introduce your company or technology",
    },
    {
      id: 2,
      icon: <ContactIconTwo />,
      title: "Partners",
      subText: "Discuss a commercial, technical or strategic partnership",
    },
    {
      id: 3,
      icon: <GrowthIcon />,
      title: "Investors",
      subText: "Learn more about Ark Capital and its portfolio",
    },
    {
      id: 4,
      icon: <ContactIconOne />,
      title: "General Enquiries",
      subText: "Contact Ark Capital for other matters",
    },
  ];
  return (
    <>
      <TopNav theme="dark" />
      <main className="mx-auto w-[90%] pt-4 lg:w-[80%] lg:mt-20 mt-10 top lg:pb-20 pb-10">
        <RevealItem independent>
          <div className="flex items-center space-x-2">
            <ContactIconOne />
            <p className="text-[14px] text-[#636363]">Contact</p>
          </div>
          <h1 className="mt-4 font-semibold lg:text-[64px] text-[34px]">
            Start a conversation
          </h1>
          <p className="text-[#636363] lg:mt-0 mt-2">
            Whether you are building a company, exploring a partnership or
            interested in working with us, we would like to hear from you.
          </p>
        </RevealItem>
      </main>

      <div className="bg-[#F8F7F5] lg:py-20 py-10">
        <div className="lg:w-[80%] w-[90%] mx-auto">
          <div className="">
            <div className="flex items-center space-x-2">
              <ContactIconTwo />
              <p className="text-[14px] text-[#636363]">Partners</p>
            </div>
            <h2 className="mt-4 font-semibold lg:text-[64px] text-[34px]">
              Let&apos;s build what matters
            </h2>
            <p className="text-[#636363] lg:mt-0 mt-2">
              Ark Capital works with people and institutions that bring
              specialised knowledge, technology, capital, market access or
              operating experience.
            </p>
          </div>

          <div className="mt-6 flex flex-col items-stretch gap-4 lg:flex-row">
            <RevealItem independent className="flex w-full min-w-0 flex-col bg-[#1A1A1A] lg:p-6 p-4 rounded-lg text-white lg:w-[55%]">
              <PortfolioIconTwo color="white" />
              <h2 className="mt-4 text-[20px]">Founders and technical teams</h2>
              <p className="text-[15px] mt-1">We work with teams that have:</p>
              <div className="space-y-2 mt-4">
                {[
                  "A strong understanding of the problem they are solving",
                  "Genuine technical capability",
                  "Evidence of execution",
                  "Openness to close operational collaboration",
                  "The ambition to build a globally relevant company",
                ].map((item,index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Checkmark color="#7FE3F2" />
                    <span className="text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="">
                <Link href="/contact?category=founders#enquiry" className="inline-flex items-center justify-center bg-white text-black mt-6 text-[14px] py-2 px-4 rounded-full">
                  Submit a venture
                </Link>
              </div>
            </RevealItem>

            <RevealItem independent className="w-full min-w-0 bg-white flex flex-col justify-between lg:p-6 p-4 rounded-lg lg:w-[45%] lg:min-h-80">
              <div className="">
                <GrowthIcon />
                <h2 className="text-[20px] mt-2">
                  Investors and Financial Partners
                </h2>
                <p className="text-[15px] text-[#636363] mt-2">
                  We develop relationships with investors and institutions
                  interested in technology, financial infrastructure,
                  quantitative markets and high-potential African businesses.
                </p>
              </div>

              <div className="mt-auto pt-8">
                <Link href="/contact?category=investors#enquiry" className="inline-flex items-center justify-center bg-white text-black mt-6 text-[14px]">
                  Speak with our team
                </Link>
              </div>
            </RevealItem>
          </div>

          <div className="mt-6 flex flex-col items-stretch gap-4 lg:flex-row">
            <RevealItem independent className="w-full min-w-0 bg-white flex flex-col justify-between lg:p-6 p-4 rounded-lg lg:w-[45%] lg:min-h-80">
              <div className="">
                <CompanyIcon />
                <h2 className="text-[20px] mt-2">Companies and institutions</h2>
                <p className="text-[15px] text-[#636363] mt-2">
                  We work with organisations seeking technology, financial
                  infrastructure, strategic partnerships or access to
                  specialised portfolio capabilities.
                </p>
              </div>

              <div className="mt-auto pt-8">
                <Link href="/contact?category=partners#enquiry" className="inline-flex items-center justify-center bg-white text-black mt-6 text-[14px]">
                  Start a Conversation
                </Link>
              </div>
            </RevealItem>

            <RevealItem independent className="flex w-full min-w-0 flex-col justify-between bg-white lg:p-6 p-4 rounded-lg text-black lg:w-[55%] lg:min-h-80">
              <div className="">
                <TechnicalIcon />
                <h2 className="text-[20px] mt-2">
                  Technical and Strategic Partners
                </h2>
                <p className="text-[15px] text-[#636363] mt-2">
                  We collaborate with researchers, engineers, operators and
                  advisers whose capabilities can strengthen our companies and
                  internal systems.
                </p>
              </div>

              <div className="mt-auto pt-8">
                <Link href="/contact?category=partners#enquiry" className="inline-flex items-center justify-center bg-white text-black mt-6 text-[14px]">
                  Partner with Ark
                </Link>
              </div>
            </RevealItem>
          </div>
        </div>
      </div>

      <div id="enquiry" className="scroll-mt-6 lg:w-[80%] w-[90%] mx-auto lg:py-20 py-10 flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-10">
        <RevealItem independent className="w-full min-w-0 lg:w-[40%]">
          <div className="flex items-center space-x-2">
            <ContactIconOne />
            <p className="text-[14px] text-[#636363]">Enquiry</p>
          </div>
          <h2 className="font-semibold lg:text-[56px] text-[34px] lg:mt-0 mt-3">
            Contact Categories
          </h2>
        </RevealItem>

        <RevealItem independent className="w-full min-w-0 lg:w-[60%]">
          <Suspense fallback={<p>Loading enquiry form…</p>}>
            <ContactEnquiry categories={categories} />
          </Suspense>
        </RevealItem>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
