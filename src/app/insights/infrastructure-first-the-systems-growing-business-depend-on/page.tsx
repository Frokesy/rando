import type { Metadata } from "next";
import ArticleLayout from "@/components/insights/ArticleLayout";

export const metadata: Metadata={
  title: "Infrastructure first: the systems growing business depend on",
  description:
    "Read Ark Capital’s insight: Infrastructure first: the systems growing business depend on.",
  openGraph: {
    title: "Infrastructure first: the systems growing business depend on",
    type: "article",
  },
  twitter: {
    title: "Infrastructure first: the systems growing business depend on",
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Infrastructure first: the systems growing business depend on"
      category="Digital Infrastructure"
      dateTime="28 July 2026 · 2 min read"
      excerpt={"Platforms, data systems and operational tools rarely make headlines. They are what allow a business to grow without losing control of its operations."}
      image="/capabilities/img-five.png"
    >
      <p className="lg:text-[18px]">
        Every growing business eventually discovers which of its systems were
        built to last and which were built to get started. The difference
        usually shows up at the worst possible time: during a surge in
        customers, an audit or a new partnership that needs data the business
        cannot easily produce.
      </p>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        Three layers that matter
      </h2>
      <p className="lg:text-[18px]">
        <span className="font-semibold">Platforms. </span> The core software
        that runs the business — how customers are served, how transactions are
        processed and how teams do their work.
      </p>
      <p className="lg:text-[18px]">
        <span className="font-semibold">Data systems. </span> How information is
        captured, stored and made available. A business that cannot trust its
        own data cannot make good decisions with it.
      </p>
      <p className="lg:text-[18px]">
        <span className="font-semibold">Operational tools. </span> The internal
        systems for reporting, controls and process management that keep
        day-to-day execution reliable.
      </p>
      <h2 className="my-4 text-[32px] font-semibold">
        Build for the next stage
      </h2>
      <p className="lg:text-[18px] my-4">
        Infrastructure decisions should anticipate the next stage of growth
        without over-engineering for a future that may never arrive. That
        usually means:
      </p>
      <ul className="space-y-3">
        <li>Choosing simple, well-understood technology over novelty</li>
        <li>Documenting how systems work and who is responsible for them</li>
        <li>
          Designing data structures that can support reporting and compliance
          later
        </li>
        <li>
          Automating repetitive processes once they are understood, not before
        </li>
      </ul>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        Reliability is a feature
      </h2>
      <p className="lg:text-[18px] my-4">
        Customers and partners rarely praise reliability, but they notice its
        absence immediately. Businesses and financial institutions in particular
        need systems that behave predictably, recover cleanly and leave a clear
        record of what happened.
      </p>
      <p className="lg:text-[18px] my-4">
        We treat digital infrastructure as a core capability rather than a
        support function, because the platforms, data systems and operational
        tools a company builds early shape what it can become.
      </p>
    </ArticleLayout>
  );
}
