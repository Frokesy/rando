import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import TopNav from "../defaults/TopNav";
import Footer from "../defaults/Footer";
import { MiniLogo, RightArrowIcon } from "../icons";
import CategoryIcon from "./CategoryIcon";
import MoreInsights from "./MoreInsights";

type ArticleLayoutProps = {
  title: string;
  category: string;
  dateTime: string;
  image: string;
  excerpt: string;
  children: ReactNode;
};

export default function ArticleLayout({
  title,
  category,
  dateTime,
  image,
  excerpt,
  children,
}: ArticleLayoutProps) {
  return (
    <>
      <TopNav theme="dark" />
      <main className="mx-auto w-[90%] py-10 lg:w-[80%] lg:py-20">
        <Link
          href="/insights"
          className="text-sm flex items-center space-x-3 text-[#636363] transition-colors hover:text-black w-full lg:w-[80%] mx-auto"
        >
          <div className="rotate-180">
            <RightArrowIcon />
          </div>
          <span>All insights</span>
        </Link>
        <article className="mt-8">
          <header className="lg:w-[80%] mx-auto">
            <div className="flex items-center gap-2 text-[#0E2859]">
              <span aria-hidden="true" className="shrink-0 [&_path]:stroke-[#0E2859]"><CategoryIcon category={category} /></span>
              <p className="text-sm font-medium">{category}</p>
            </div>
            <h1 className="mt-4 text-[34px] font-semibold leading-tight sm:text-5xl lg:text-[64px]">
              {title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#636363] sm:text-lg">{excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#636363]">
              <div className="flex items-center text-black space-x-2">
                <div className="bg-[#000501] w-7 h-7 flex items-center justify-center rounded-full">
                  <MiniLogo />
                </div>
                <span className="text-[13px]">Ark Capital</span>
              </div>
              <span>{dateTime}</span>
            </div>
          </header>
          <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-xl lg:aspect-auto lg:h-[480px]">
            <Image
              src={image}
              alt={title}
              fill
              priority
              sizes="(min-width: 1024px) 80vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="mx-auto mt-10 max-w-3xl space-y-6 text-base leading-8 text-[#3F4044] sm:text-lg [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-black [&_ul]:list-disc [&_ul]:pl-6">
            {children}
          </div>
        </article>
      </main>
      <MoreInsights currentTitle={title} />
      <Footer />
    </>
  );
}
