"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Brain, PortfolioIconTwo, WalletIcon } from "../icons";
import ArticleCard, { type Article } from "./ArticleCard";
import ArticleFilters from "./ArticleFilters";

const shortcuts = [
  { label: "All" },
  { label: "Venture building", icon: <PortfolioIconTwo color="#3F4044" /> },
  { label: "Financial Technology", icon: <WalletIcon /> },
  { label: "Artificial Intelligence", icon: <Brain /> },
];

export default function ArticleBrowser({ articles }: { articles: Article[] }) {
  const [selected, setSelected] = useState("All");
  const [query, setQuery] = useState("");
  const reducedMotion = useReducedMotion();
  const categories = Array.from(
    new Set([
      ...articles.map((article) => article.category),
      ...shortcuts
        .filter((item) => item.label !== "All")
        .map((item) => item.label),
    ]),
  );
  const filtered = articles.filter(
    (article) =>
      (selected === "All" ||
        article.category.toLowerCase() === selected.toLowerCase()) &&
      `${article.title} ${article.category}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );

  return (
    <section className="mt-10 lg:mt-20" aria-label="Browse articles">
      <ArticleFilters
        categories={categories}
        shortcuts={shortcuts}
        selected={selected}
        query={query}
        onCategoryChange={setSelected}
        onQueryChange={setQuery}
      />
      <p className="sr-only" role="status">
        {filtered.length} {filtered.length === 1 ? "article" : "articles"} found
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((article, index) => (
            <motion.div
              key={article.id}
              layout={!reducedMotion}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reducedMotion ? 0 : -8 }}
              transition={{
                duration: reducedMotion ? 0 : 0.25,
                delay: reducedMotion ? 0 : index * 0.04,
              }}
            >
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {filtered.length === 0 && (
        <div className="py-16 text-center text-[#636363]">
          <p>No articles match your search and category.</p>
          <button
            type="button"
            className="mt-4 rounded-full bg-black px-6 py-2 text-sm text-white"
            onClick={() => {
              setSelected("All");
              setQuery("");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
