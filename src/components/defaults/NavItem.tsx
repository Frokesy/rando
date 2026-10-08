"use client";

import Link from "next/link";
import { RightArrowIcon } from "../icons";

type NavItemProps = {
  href: string;
  label: string;
  active: boolean;
  variant: "mobile" | "desktop";
  onSelect: () => void;
  theme?: "light" | "dark";
};

export default function NavItem({
  href,
  label,
  active,
  variant,
  onSelect,
  theme = "light",
}: NavItemProps) {
  const mobile = variant === "mobile";
  return (
    <Link
      href={href}
      aria-current={
        active ? (href.includes("#") ? "location" : "page") : undefined
      }
      onClick={onSelect}
      className={
        mobile
          ? `flex items-center justify-between gap-3 py-2 text-2xl font-medium transition-colors duration-200 motion-reduce:transition-none hover:text-neutral-500 focus-visible:text-neutral-500 text-black`
          : `relative inline-block py-1 ${theme === "dark" ? "text-black" : "text-white"} after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:bg-current after:transition-transform after:duration-300 after:ease-out motion-reduce:after:transition-none hover:after:scale-x-100 focus-visible:after:scale-x-100 ${active ? "after:scale-x-100" : "after:scale-x-0"}`
      }
    >
      <span
        className={
          mobile && active
            ? "bg-linear-to-b font-semibold from-blue-600 to-black bg-clip-text text-transparent"
            : undefined
        }
      >
        {label}
      </span>
      {mobile && (
        <RightArrowIcon className="h-6 w-6 shrink-0 text-neutral-400" />
      )}
    </Link>
  );
}
