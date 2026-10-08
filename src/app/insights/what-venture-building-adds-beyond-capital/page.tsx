import type { Metadata } from "next";
import ArticleLayout from "@/components/insights/ArticleLayout";

export const metadata: Metadata = {
  title: "What venture building adds beyond capital",
  description:
    "Read Ark Capital’s insight: What venture building adds beyond capital.",
  openGraph: {
    title: "What venture building adds beyond capital",
    type: "article",
  },
  twitter: { title: "What venture building adds beyond capital" },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="What venture building adds beyond capital"
      category="Venture building"
      dateTime="25 August 2026 · 2 min read"
      excerpt={"Capital is necessary but rarely sufficient. Early companies also need technical depth, operating systems and the right relationships at the right time."}
      image="/capabilities/capabilities-hero.png"
    >
      <p className="lg:text-[18px]">
        Africa&apos;s next generation of globally relevant companies will
        require more than funding. That belief shapes how we work. A cheque can
        extend a company&apos;s runway; it cannot, on its own, give the company
        the structure it needs to use that runway well.
      </p>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        The problems money does not solve
      </h2>
      <p className="lg:text-[18px]">
        Early teams are usually strong in one or two areas and stretched
        everywhere else. A technical founding team may need commercial
        discipline. A commercially strong team may need help turning a product
        idea into a dependable platform. Almost every early company needs
        financial planning, reporting and controls sooner than it expects.
      </p>
      <h2 className="my-4 text-[32px] font-semibold">
        Working from the inside
      </h2>
      <p className="lg:text-[18px] my-4">
        Venture building means working alongside a team rather than observing it
        from a distance. In practice, that can include:
      </p>
      <ul className="space-y-3">
        <li>
          Testing the product and market before significant capital is committed
        </li>
        <li>Shaping the business model and the organisation around it</li>
        <li>Setting up financial planning, reporting and governance early</li>
        <li>Supporting hiring for the roles that matter most</li>
        <li>Opening doors to partners and institutions</li>
      </ul>

      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        Shared capabilities, clear focus
      </h2>
      <p className="lg:text-[18px] my-4">
        One advantage of building several businesses within one platform is that
        capabilities can be shared. Technology, financial operations and risk
        oversight do not have to be rebuilt from nothing for every company. Each
        business keeps a clear focus while benefiting from the experience
        developed across the wider portfolio.
      </p>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        Patience and discipline
      </h2>
      <p className="lg:text-[18px] my-4">
        Venture building is slower than writing a cheque. It asks for patience,
        honest feedback and a willingness to change direction when the evidence
        says so. We think that discipline is what turns strong ideas and
        technical capabilities into businesses that last.
      </p>
    </ArticleLayout>
  );
}
