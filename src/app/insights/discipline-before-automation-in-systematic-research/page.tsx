import type { Metadata } from "next";
import ArticleLayout from "@/components/insights/ArticleLayout";

export const metadata: Metadata = {
  title: "Discipline before automation in systematic research",
  description:
    "Read Ark Capital’s insight: Discipline before automation in systematic research.",
  openGraph: {
    title: "Discipline before automation in systematic research",
    type: "article",
  },
  twitter: { title: "Discipline before automation in systematic research" },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Discipline before automation in systematic research"
      category="Quantitave Markets"
      dateTime="11 August 2026 · 2 min read"
      excerpt={"Automated execution is the last step of a quantitative workflow, not the first. The work that comes before it determines whether a strategy deserves capital."}
      image="/capabilities/img-six.png"
    >
      <p className="lg:text-[18px]">
        There is a common temptation in quantitative work to move quickly from
        an idea to a live strategy. Automation feels like progress. But a
        strategy that is automated before it is understood simply makes mistakes
        faster.
      </p>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        A workflow, not a shortcut
      </h2>
      <p className="lg:text-[18px]">
        A disciplined quantitative process connects a series of stages, each of
        which can fail on its own:
      </p>

      <ol className="space-y-3">
        <li>1. Collecting market data</li>
        <li>2. Preparing and analysing that data</li>
        <li>3. Researching a strategy</li>
        <li>4. Backtesting and validating it</li>
        <li>5. Managing risk</li>
        <li>6. Executing automatically</li>
        <li>7. Monitoring positions</li>
        <li>8. Measuring performance</li>
        <li>9. Reconciling trades</li>
      </ol>

      <p className="lg:text-[18px]">
        Treating these as one connected structure — rather than separate tools —
        is what makes the process repeatable.
      </p>

      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        Data quality is the first risk
      </h2>
      <p className="lg:text-[18px] my-4">
        Gaps, errors and inconsistencies in market data quietly shape every
        result built on top of them. Time spent cleaning and understanding data
        is rarely wasted; it is often the difference between a result and an
        illusion.
      </p>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        Validation over optimisation
      </h2>
      <p className="lg:text-[18px] my-4">
        A strategy that performs beautifully on historical data may have been
        tuned to the past rather than built for the future. Out-of-sample
        testing, realistic cost assumptions and scepticism toward results that
        look too good are essential habits.
      </p>
      <h2 className="mt-10 mb-4 text-[32px] font-semibold">
        Risk is designed, not added
      </h2>
      <p className="lg:text-[18px] my-4">
        Position limits, drawdown controls and clear rules for stopping a
        strategy belong in the design from the start. So does reconciliation:
        knowing exactly what the system did, and confirming it matches what was
        intended.
      </p>
      <p className="lg:text-[18px] my-4">
        Ark Quant is an internal research and proprietary capital initiative,
        and this piece describes general principles. It is not investment advice
        or an invitation to invest.
      </p>
    </ArticleLayout>
  );
}
