"use client";

import { useState } from "react";
import AccordionItem from "./AccordionItem";

type AccordionProps = {
  items: { id: number | string; title: string; subText: string }[];
};

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<number | string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.subText}
          isOpen={openId === item.id}
          onToggle={() => setOpenId((current) => current === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}
