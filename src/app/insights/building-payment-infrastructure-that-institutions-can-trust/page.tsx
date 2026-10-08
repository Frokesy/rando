import type { Metadata } from "next";
import ArticleLayout from "@/components/insights/ArticleLayout";

export const metadata: Metadata={
  title: "Building payment infrastructure that institutions can trust",
  description:
    "Read Ark Capital’s insight: Building payment infrastructure that institutions can trust.",
  openGraph: {
    title: "Building payment infrastructure that institutions can trust",
    type: "article",
  },
  twitter: {
    title: "Building payment infrastructure that institutions can trust",
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Building payment infrastructure that institutions can trust"
      category="Financial Technology"
      dateTime="22 September 2026 · 2 min read"
      excerpt={"Reliable payments, collections and reporting are not features to add later. For businesses and financial institutions, they are the foundation everything else depends on."}
      image="/capabilities/img-four.png"
    >
      <p className="lg:text-[18px]">
        Much of the conversation about financial technology focuses on the
        customer-facing layer: the app, the onboarding flow, the card. Those
        things matter. But the businesses and institutions that move money every
        day judge financial technology by something less visible — whether
        payments arrive, whether collections reconcile and whether the numbers
        at the end of the day can be trusted.
      </p>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        Infrastructure is a promise
      </h2>
      <p className="lg:text-[18px]">
        When a business receives payments through a platform, it is relying on
        that platform to behave predictably under pressure: during month-end
        peaks, during outages at partner banks and during the unusual cases that
        never appear in a product demo. Infrastructure is, in practice, a
        promise about how a system behaves when things go wrong.
      </p>
      <p className="lg:text-[18px] my-4">
        That promise is earned through design choices that are rarely
        celebrated:
      </p>
      <ul className="space-y-3">
        <li>Clear ownership of every step a payment passes through</li>
        <li>
          Reconciliation that runs continuously rather than at the end of the
          month
        </li>
        <li>
          Reporting that finance teams can use without rebuilding it in a
          spreadsheet
        </li>
        <li>Controls and audit trails that make problems visible early</li>
      </ul>

      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        Built for institutions, not just individuals
      </h2>
      <p className="lg:text-[18px] my-4">
        Financial institutions have requirements that consumer products can
        postpone. They need documentation, compliance support and integration
        with systems that may have been in place for decades. A platform that
        wants to serve them has to treat these requirements as part of the
        product, not as paperwork around it.
      </p>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        Why it matters for growth
      </h2>
      <p className="lg:text-[18px] my-4">
        Reliable financial operations are what allow a business to take on more
        customers, more volume and more complexity without losing control. The
        companies that invest in this foundation early tend to scale more calmly
        — because they are not rebuilding their core systems at the moment they
        can least afford to.
      </p>
      <p className="lg:text-[18px] my-4">
        This is one reason we focus on financial infrastructure: it is
        unglamorous, it is difficult and it compounds. Every business that runs
        on dependable payment and collection systems is better placed to grow.
      </p>
    </ArticleLayout>
  );
}
