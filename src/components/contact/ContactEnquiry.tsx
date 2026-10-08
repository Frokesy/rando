"use client";

import { useSearchParams } from "next/navigation";
import type { ReactNode } from "react";
import ContactForm from "./ContactForm";

type Category = { id: number; icon: ReactNode; title: string; subText: string };

export default function ContactEnquiry({ categories }: { categories: Category[] }) {
  const category = useSearchParams().get("category") ?? "";
  const match = categories.find((item) => item.title.toLowerCase().replace(/\s+/g, "-") === category.toLowerCase());
  return <ContactForm key={category} categories={categories} initialCategory={match?.id} />;
}
