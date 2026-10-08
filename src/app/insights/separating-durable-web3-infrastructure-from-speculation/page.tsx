import type { Metadata } from "next";
import ArticleLayout from "@/components/insights/ArticleLayout";

export const metadata: Metadata={
  title: "Separating durable Web3 infrastructure from speculation",
  description:
    "Read Ark Capital’s insight: Separating durable Web3 infrastructure from speculation.",
  openGraph: {
    title: "Separating durable Web3 infrastructure from speculation",
    type: "article",
  },
  twitter: { title: "Separating durable Web3 infrastructure from speculation" },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Separating durable Web3 infrastructure from speculation"
      category="Web3"
      dateTime="14 July 2026 · 2 min read"
      excerpt={"Beyond market cycles, some blockchain-based systems are solving real problems in settlement, verification and ownership. The question is how to tell them apart."}
      image="/portfolio-hero.png"
    >
      <p className="lg:text-[18px]">
        Few areas of technology attract as much attention, or as much noise, as
        Web3. Market cycles amplify both enthusiasm and scepticism. Underneath
        them, a narrower set of questions deserves serious attention: where does
        blockchain-based infrastructure solve a problem better than existing
        systems, and where is it simply a different way of doing something that
        already works?
      </p>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        Problems worth solving
      </h2>

      <p className="lg:text-[18px] my-4">
        The most credible use cases tend to share a few characteristics:
      </p>
      <ul className="space-y-3">
        <li>
          Multiple parties need to rely on the same record without fully
          trusting each other
        </li>
        <li>Settlement or verification is slow, costly or opaque today</li>
        <li>Ownership or provenance needs to be proven, not just stated</li>
        <li>
          Interoperability across systems or borders is a genuine constraint
        </li>
      </ul>

      <h2 className="mt-10 mb-4 text-[32px] font-semibold">Questions we ask</h2>
      <p className="lg:text-[18px]">
        When we assess Web3 infrastructure, we look past the token and the
        narrative to the fundamentals:
      </p>

      <ol className="space-y-3">
        <li>1. Who uses this, and what were they doing before?</li>
        <li>2. Would the system still be valuable if token prices fell?</li>
        <li>
          3. How does it handle regulation, compliance and consumer protection?
        </li>
        <li>
          4. Is the technology mature enough for the reliability users expect?
        </li>
      </ol>

      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        Infrastructure over hype
      </h2>
      <p className="lg:text-[18px] my-4">
        The durable opportunities in Web3 are likely to look like
        infrastructure: settlement layers, verification systems and tools that
        connect to existing financial and commercial systems rather than trying
        to replace them overnight.
      </p>

      <p className="lg:text-[18px] my-4">
        We approach this area with curiosity and caution in equal measure. It
        remains one of the frontier technologies we continue to research — on
        its fundamentals, not its cycles.
      </p>
    </ArticleLayout>
  );
}
