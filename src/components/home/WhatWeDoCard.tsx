import Image from "next/image";
import RevealItem from "../RevealItem";

type WhatWeDoCardProps={
  title: string;
  icon: string;
  description: string;
  delay?: number;
};

export default function WhatWeDoCard({ title,icon,description,delay=0 }: WhatWeDoCardProps) {
  return (
    <RevealItem independent delay={delay} className="h-full">
      <article className="flex h-full flex-col rounded-xl bg-white p-6 lg:p-8">
        <Image src={icon} width={48} height={48} alt="" className="h-12 w-12 object-contain" />
        <h3 className="mt-8 text-xl font-semibold lg:text-2xl">{title}</h3>
        <p className="mt-4 text-base leading-relaxed text-[#636363]">{description}</p>
      </article>
    </RevealItem>
  );
}
