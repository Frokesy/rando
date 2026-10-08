import Link from "next/link";
import ArticleCard from "./ArticleCard";
import CategoryIcon from "./CategoryIcon";

// Hardcoded previews only; article bodies remain in their individual pages.
const previews = [
  {
    "category": "Artificial Intelligence",
    "dateTime": "8 September 2026 · 2 min read",
    "title": "Applying AI where it changes decisions",
    "img": "/capabilities/img-three.png",
    "href": "/insights/applying-ai-where-it-changes-decisions",
    "excerpt": "Artificial intelligence creates value when it is connected to a real decision, a real workflow and someone accountable for the outcome.",
    "id": 1
  },
  {
    "category": "Venture building",
    "dateTime": "25 August 2026 · 2 min read",
    "title": "What venture building adds beyond capital",
    "img": "/capabilities/capabilities-hero.png",
    "href": "/insights/what-venture-building-adds-beyond-capital",
    "excerpt": "Capital is necessary but rarely sufficient. Early companies also need technical depth, operating systems and the right relationships at the right time.",
    "id": 2
  },
  {
    "category": "Quantitave Markets",
    "dateTime": "11 August 2026 · 2 min read",
    "title": "Discipline before automation in systematic research",
    "img": "/capabilities/img-six.png",
    "href": "/insights/discipline-before-automation-in-systematic-research",
    "excerpt": "Automated execution is the last step of a quantitative workflow, not the first. The work that comes before it determines whether a strategy deserves capital.",
    "id": 3
  },
  {
    "category": "Digital Infrastructure",
    "dateTime": "28 July 2026 · 2 min read",
    "title": "Infrastructure first: the systems growing business depend on",
    "img": "/capabilities/img-five.png",
    "href": "/insights/infrastructure-first-the-systems-growing-business-depend-on",
    "excerpt": "Platforms, data systems and operational tools rarely make headlines. They are what allow a business to grow without losing control of its operations.",
    "id": 4
  },
  {
    "category": "Web3",
    "dateTime": "14 July 2026 · 2 min read",
    "title": "Separating durable Web3 infrastructure from speculation",
    "img": "/portfolio-hero.png",
    "href": "/insights/separating-durable-web3-infrastructure-from-speculation",
    "excerpt": "Beyond market cycles, some blockchain-based systems are solving real problems in settlement, verification and ownership. The question is how to tell them apart.",
    "id": 5
  },
  {
    "category": "African Technology",
    "dateTime": "30 June 2026 · 2 min read",
    "title": "Building globally relevant technologies from Africa",
    "img": "/capabilities/img-two.png",
    "href": "/insights/building-globally-relevant-technologies-from-africa",
    "excerpt": "Technology has repeatedly transformed how Africans communicate, transact and build. The next phase should include more of those systems being built and controlled from Africa.",
    "id": 6
  },
  {
    "category": "Venture building",
    "dateTime": "16 June 2026 · 2 min read",
    "title": "How we assess an opportunity before we build",
    "img": "/capabilities/img-one.png",
    "href": "/insights/how-we-assess-an-opportunity-before-we-build",
    "excerpt": "Before any capital or effort is committed, we look closely at the problem, the market, the business model and the team's ability to execute.",
    "id": 7
  },
  {
    "id": 8,
    "category": "Financial Technology",
    "dateTime": "22 September 2026 · 2 min read",
    "title": "Building payment infrastructure that institutions can trust",
    "img": "/capabilities/img-four.png",
    "href": "/insights/building-payment-infrastructure-that-institutions-can-trust",
    "excerpt": "Reliable payments, collections and reporting are not features to add later. For businesses and financial institutions, they are the foundation everything else depends on."
  }
];

function hash(value: string) {
  let result = 2166136261;
  for (const character of value) {
    result = Math.imul(result ^ character.charCodeAt(0), 16777619);
  }
  return result >>> 0;
}

export default function MoreInsights({ currentTitle }: { currentTitle: string }) {
  // A page-specific shuffle keeps server/client output stable and excludes this article.
  const articles = previews
    .filter((article) => article.title !== currentTitle)
    .map((article) => ({ article, rank: hash(`${currentTitle}:${article.href}`) }))
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 2);

  return (
    <section className="bg-[#F8F7F5] py-10 lg:py-20" aria-labelledby="more-insights-heading">
      <div className="mx-auto w-[90%] lg:w-[80%]">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 id="more-insights-heading" className="text-2xl font-semibold lg:text-4xl">More insights</h2>
          <Link href="/insights" className="shrink-0 text-sm font-medium underline underline-offset-4">View all</Link>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {articles.map(({ article }) => (
            <ArticleCard key={article.id} article={{ ...article, categoryIcon: <CategoryIcon category={article.category} /> }} />
          ))}
        </div>
      </div>
    </section>
  );
}
