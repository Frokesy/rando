import type { Metadata } from "next";
import ArticleLayout from "@/components/insights/ArticleLayout";

export const metadata: Metadata = {
  title: "How we assess an opportunity before we build",
  description:
    "Read Ark Capital’s insight: How we assess an opportunity before we build.",
  openGraph: {
    title: "How we assess an opportunity before we build",
    type: "article",
  },
  twitter: { title: "How we assess an opportunity before we build" },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="How we assess an opportunity before we build"
      category="Venture building"
      dateTime="16 June 2026 · 2 min read"
      excerpt={"Before any capital or effort is committed, we look closely at the problem, the market, the business model and the team's ability to execute."}
      image="/capabilities/img-one.png"
    >
      <p className="lg:text-[18px]">
        Our approach moves from opportunity to operating company in four stages:
        discover, assess, build and scale. The assessment stage is where we try
        hardest to be proven wrong, because it is far cheaper to find a flaw
        before building than after.
      </p>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">The problem</h2>
      <p className="lg:text-[18px]">
        Every assessment starts with the problem. Is it important? Who
        experiences it, how often and at what cost? Is it getting worse or
        better on its own? Strong companies are usually built around problems
        that are painful, persistent and poorly served today.
      </p>

      <h2 className="mt-10 mb-4 text-[32px] font-semibold">The market</h2>
      <p className="lg:text-[18px] my-4">
        We study the market and industry around the problem: who the customers
        are, how they buy, what they use now and what would make them switch. We
        also look at the competitive landscape honestly — including the option
        of customers doing nothing.
      </p>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        The business model
      </h2>
      <p className="lg:text-[18px] my-4">
        A good product does not guarantee a good business. We examine how the
        company will make money, what it costs to serve each customer and how
        those economics change as the business grows.
      </p>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">The technology</h2>
      <p className="lg:text-[18px] my-4">
        For technology-led companies, we assess whether the product is
        technically credible, whether the architecture can scale and where the
        hardest engineering risks lie.
      </p>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        The team and execution capacity
      </h2>
      <p className="lg:text-[18px] my-4">
        Finally — and often most importantly — we ask whether this team, with
        the right support, can execute. Technical teams with a credible
        advantage are one of the strongest signals we look for.
      </p>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        Turning findings into a plan
      </h2>
      <p className="lg:text-[18px] my-4">
        Assessment does not end with a yes or no. It produces a clear view of
        the risks to address first, which becomes the starting point for
        building the company together.
      </p>
    </ArticleLayout>
  );
}
