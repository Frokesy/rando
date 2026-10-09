import type { ReactNode } from "react";
import RevealItem from "../RevealItem";

type CareerValueCardProps = {
  icon: ReactNode;
  number: number;
  text: string;
  delay?: number;
};

export default function CareerValueCard({ icon, number, text, delay = 0 }: CareerValueCardProps) {
  return (
    <RevealItem independent duration={0.45} delay={delay} className="h-full">
      <article className="flex h-full flex-col rounded-xl bg-white p-6">
        <div className="flex items-start justify-between gap-4">
          <span aria-hidden="true">{icon}</span>
          <span className="text-[14px] text-[#636363]">{String(number).padStart(2, "0")}</span>
        </div>
        <h3 className="mt-10 text-[20px] leading-relaxed">{text}</h3>
      </article>
    </RevealItem>
  );
}
