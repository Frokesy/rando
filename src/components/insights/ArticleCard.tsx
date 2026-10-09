import Link from "next/link";
import type { ReactNode } from "react";

type Article = {
  id: number;
  href: string;
  categoryIcon: ReactNode;
  category: string;
  dateTime: string;
  title: string;
  img: string;
};

export type { Article };

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group relative isolate flex lg:h-150 h-100 flex-col justify-between overflow-hidden rounded-xl p-5 text-white transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-[0.99] motion-reduce:transform-none motion-reduce:transition-none sm:p-6">
      <div
        aria-hidden="true"
        data-page-media
        className="absolute inset-0 -z-10 bg-cover bg-center scale-100 blur-none transition-[scale,transform,filter] duration-700 ease-out group-hover:scale-[1.04] group-hover:blur-[2px] motion-reduce:transform-none motion-reduce:transition-none"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.8)), url('${article.img}')`,
        }}
      />
      <div className="flex">
        <span className="inline-flex items-center gap-2 rounded-xl bg-white/20 p-3 text-[13px] font-semibold backdrop-blur-2xl transition-colors duration-300 group-hover:bg-white/30 motion-reduce:transition-none">
          <span className="shrink-0 [&_path]:stroke-white" aria-hidden="true">
            {article.categoryIcon}
          </span>
          {article.category}
        </span>
      </div>
      <div className="mt-12 space-y-4">
        <p className="text-[13px] text-white/80">{article.dateTime}</p>
        <h3 className="text-2xl font-semibold leading-tight lg:text-3xl">
          <Link href={article.href} className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-white">{article.title}</Link>
        </h3>
      </div>
    </article>
  );
}
