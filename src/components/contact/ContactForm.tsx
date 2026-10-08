"use client";

import { useId, useState, type ReactNode } from "react";
import ConfiguredLink from "../ConfiguredLink";
import { externalLinks } from "@/config/external-links";

type Category = { id: number; icon: ReactNode; title: string; subText: string };

export default function ContactForm({ categories, initialCategory }: { categories: Category[]; initialCategory?: number }) {
  const id = useId();
  const [selected, setSelected] = useState<number | null>(initialCategory ?? null);
  const [status, setStatus] = useState("");
  const inputClass = "mt-2 w-full rounded-lg border border-neutral-300 bg-white p-3 outline-none focus:border-black focus:ring-1 focus:ring-black";

  return (
    <form className="space-y-6" onSubmit={(event) => {
      event.preventDefault();
      setStatus("Message delivery is currently unavailable. Please try again later.");
    }}>
      <fieldset>
        <legend className="mb-4">What would you like to discuss? (required)</legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {categories.map((category) => (
            <label key={category.id} className={`relative cursor-pointer rounded-xl border p-4 transition-colors focus-within:ring-2 focus-within:ring-black ${selected === category.id ? "border-[#1A1A1A] bg-[#F8F7F5]" : "border-neutral-200 hover:border-neutral-400"}`}>
              <input type="radio" name="category" value={category.title} required checked={selected === category.id} onChange={() => setSelected(category.id)} className="absolute right-4 top-4 h-4 w-4 accent-black" />
              <span className="mb-3 block pr-6" aria-hidden="true">{category.icon}</span>
              <span className="block font-semibold">{category.title}</span>
              <span className="mt-2 block text-sm leading-relaxed text-[#636363]">{category.subText}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="text-sm" htmlFor={`${id}-name`}>Full name (required)
          <input id={`${id}-name`} name="fullName" autoComplete="name" required className={inputClass} />
        </label>
        <label className="text-sm" htmlFor={`${id}-email`}>Email address (required)
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" required className={inputClass} />
        </label>
      </div>
      <label className="block text-sm" htmlFor={`${id}-organisation`}>Organisation
        <input id={`${id}-organisation`} name="organisation" autoComplete="organization" className={inputClass} />
      </label>
      <div>
        <label className="block text-sm" htmlFor={`${id}-message`}>Message (required)
          <textarea id={`${id}-message`} name="message" rows={6} required aria-describedby={`${id}-hint`} className={`${inputClass} resize-y`} />
        </label>
        <p id={`${id}-hint`} className="mt-2 text-sm text-[#636363]">Tell us briefly about your company partnership or enquiry.</p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[#636363]">By submitting this form you agree to our <ConfiguredLink href={externalLinks.privacyPolicy} className="underline underline-offset-2">privacy policy</ConfiguredLink>.</p>
        <button type="submit" className="shrink-0 rounded-full bg-black px-6 py-3 text-sm text-white transition-colors hover:bg-neutral-800">Send a message</button>
      </div>
      <p role="status" className="text-sm text-[#636363]">{status}</p>
    </form>
  );
}
