import type { Metadata } from "next";
import ArticleLayout from "@/components/insights/ArticleLayout";

export const metadata: Metadata = {
  title: "Building globally relevant technologies from Africa",
  description:
    "Read Ark Capital’s insight: Building globally relevant technologies from Africa.",
  openGraph: {
    title: "Building globally relevant technologies from Africa",
    type: "article",
  },
  twitter: { title: "Building globally relevant technologies from Africa" },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Building globally relevant technologies from Africa"
      category="African Technology"
      dateTime="30 June 2026 · 2 min read"
      excerpt={"Technology has repeatedly transformed how Africans communicate, transact and build. The next phase should include more of those systems being built and controlled from Africa."}
      image="/capabilities/img-two.png"
    >
      <p className="lg:text-[18px]">
        Africa should not only participate in the future. It should help build
        it. That conviction sits behind everything we do, and it raises a
        practical question: what does it take to build a company in Africa that
        is relevant far beyond its home market?
      </p>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        Local insight, global standards
      </h2>
      <p className="lg:text-[18px]">
        Many of the most important problems on the continent — in payments,
        financial access, logistics and infrastructure — are also problems
        elsewhere. Companies that solve them well locally can develop
        capabilities that travel. But that only happens if the product, the
        engineering and the operations are held to global standards from the
        beginning.
      </p>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">What it takes</h2>
      <p className="lg:text-[18px] my-4">
        Building globally relevant companies requires more than a good idea. It
        requires:
      </p>
      <ul className="space-y-3">
        <li>Technical depth, so products are dependable at scale</li>
        <li>Disciplined capital, deployed against clear milestones</li>
        <li>
          Strong operating systems — finance, reporting, controls and governance
        </li>
        <li>Teams prepared to solve difficult problems over a long period</li>
        <li>
          Relationships with institutions and partners who can help a company
          grow
        </li>
      </ul>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        Ownership of the systems
      </h2>
      <p className="lg:text-[18px] my-4">
        There is a difference between using technology and owning the systems
        behind it. The next phase of Africa&apos;s digital economy should
        include more technologies, businesses and financial systems researched,
        built and controlled from Africa — so that more of the value, expertise
        and decision-making stays close to the people they serve.
      </p>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">A long-term view</h2>
      <p className="lg:text-[18px] my-4">
        None of this happens quickly. It takes patient capital, hands-on support
        and a willingness to build carefully. Ark Capital exists to contribute
        to that future, one focused company at a time.
      </p>
    </ArticleLayout>
  );
}
