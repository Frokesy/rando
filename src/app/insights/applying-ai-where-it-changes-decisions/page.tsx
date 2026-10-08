import type { Metadata } from "next";
import ArticleLayout from "@/components/insights/ArticleLayout";

export const metadata: Metadata={
  title: "Applying AI where it changes decisions",
  description:
    "Read Ark Capital’s insight: Applying AI where it changes decisions.",
  openGraph: {
    title: "Applying AI where it changes decisions",
    type: "article",
  },
  twitter: { title: "Applying AI where it changes decisions" },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Applying AI where it changes decisions"
      category="Artificial Intelligence"
      dateTime="8 September 2026 · 2 min read"
      excerpt={"Artificial intelligence creates value when it is connected to a real decision, a real workflow and someone accountable for the outcome."}
      image="/capabilities/img-three.png"
    >
      <p className="lg:text-[18px]">
        It has never been easier to build an impressive artificial intelligence
        demo. It is still difficult to build an AI system that a business relies
        on every day. The gap between the two is rarely the model. It is
        everything around it.
      </p>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        Start with the decision
      </h2>
      <p className="lg:text-[18px]">
        The most useful question is not {'"where can we use AI?" '} but{" "}
        {
          '"which decisions in this business are slow, inconsistent or expensive — and would better information change them?"'
        }{" "}
        Credit assessment, document review, customer support triage and
        operational forecasting are examples where the answer is often yes.
      </p>
      <p className="lg:text-[18px]">
        Starting from the decision keeps the work honest. It defines what good
        looks like, who uses the output and how success will be measured.
      </p>

      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        Data before models
      </h2>
      <p className="lg:text-[18px] my-4">
        Most AI projects that stall do so because of data, not algorithms.
        Before any model is chosen, a team needs to understand:
      </p>
      <ul className="space-y-3">
        <li>Where the relevant data lives and who owns it</li>
        <li>How complete and reliable it is</li>
        <li>
          Whether it reflects the conditions the system will face in practice
        </li>
        <li>What happens when the data is missing or wrong</li>
      </ul>

      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        Keep people in the loop
      </h2>
      <p className="lg:text-[18px] my-4">
        In financial and operational settings, AI works best as decision
        support. Systems that explain their outputs, flag uncertainty and allow
        people to override them earn trust faster than systems that ask to be
        trusted blindly.
      </p>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        Productivity is the near-term prize
      </h2>
      <p className="lg:text-[18px] my-4">
        Some of the most valuable applications are not dramatic. They remove
        repetitive work, shorten turnaround times and let skilled people spend
        more time on judgement. That kind of improvement is measurable,
        compounding and much easier to adopt.
      </p>
      <p className="lg:text-[18px] my-4">
        We look for teams that treat artificial intelligence as an engineering
        and operating discipline — not a feature — because that is where durable
        value is built.
      </p>
    </ArticleLayout>
  );
}
