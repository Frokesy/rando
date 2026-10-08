"use client";

import type { ReactNode } from "react";
import { FilterIcon, SearchIcon } from "../icons";

type ArticleFiltersProps = {
  categories: string[];
  shortcuts: { label: string; icon?: ReactNode }[];
  selected: string;
  query: string;
  onCategoryChange: (category: string) => void;
  onQueryChange: (query: string) => void;
};

export default function ArticleFilters({ categories, shortcuts, selected, query, onCategoryChange, onQueryChange }: ArticleFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3" role="group" aria-label="Article categories">
        {shortcuts.map(({ label, icon }) => {
          const active = label.toLowerCase() === selected.toLowerCase();
          return (
            <button
              key={label}
              type="button"
              aria-pressed={active}
              onClick={() => onCategoryChange(label)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] transition-[background-color,color,transform] duration-200 motion-reduce:transition-none hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 ${active ? "bg-black text-white" : "bg-[#F8F7F5] text-[#3F4044] hover:bg-neutral-200"}`}
            >
              {icon && <span aria-hidden="true" className={`shrink-0 ${active ? "[&_path]:stroke-white" : "[&_path]:stroke-[#3F4044]"}`}>{icon}</span>}
              {label}
            </button>
          );
        })}
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="flex min-w-0 flex-1 items-center gap-3 rounded-xl bg-[#F8F7F5] p-3 focus-within:ring-2 focus-within:ring-[#0E2859]">
          <span className="shrink-0" aria-hidden="true"><SearchIcon /></span>
          <span className="sr-only">Search articles</span>
          <input type="search" value={query} onChange={(event) => onQueryChange(event.target.value)} className="w-full min-w-0 bg-transparent text-sm outline-none" placeholder="Search articles" />
        </label>
        <label className="flex items-center gap-3 rounded-xl bg-[#F8F7F5] px-4 py-3 focus-within:ring-2 focus-within:ring-[#0E2859]">
          <span aria-hidden="true"><FilterIcon /></span>
          <span className="sr-only">Filter by category</span>
          <select value={selected} onChange={(event) => onCategoryChange(event.target.value)} className="min-w-0 w-full bg-transparent text-[13px] text-[#3F4044] outline-none sm:w-auto">
            <option value="All">All Categories</option>
            {categories.map((category) => <option key={category} value={category}>{category}</option>)}
          </select>
        </label>
      </div>
    </div>
  );
}
