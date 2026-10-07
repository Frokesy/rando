"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState, useSyncExternalStore } from "react";
import Drawer from "./Drawer";
import { HamburgerIcon } from "../icons";
import NavItem from "./NavItem";

const links = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
];

function subscribeToLocation(callback: () => void) {
  window.addEventListener("hashchange", callback);
  window.addEventListener("popstate", callback);
  return () => {
    window.removeEventListener("hashchange", callback);
    window.removeEventListener("popstate", callback);
  };
}

type TopNavProps = { theme?: "light" | "dark" };

const TopNav = ({ theme = "light" }: TopNavProps) => {
  const dark = theme === "dark";
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHref, setSelectedHref] = useState<string | null>(null);
  const pathname = usePathname();
  const hash = useSyncExternalStore(
    subscribeToLocation,
    () => window.location.hash,
    () => "",
  );
  const drawerId = useId();
  const activeHref = selectedHref ?? `${pathname}${hash}`;

  useEffect(() => {
    const resetSelection = () => setSelectedHref(null);
    window.addEventListener("hashchange", resetSelection);
    window.addEventListener("popstate", resetSelection);
    return () => {
      window.removeEventListener("hashchange", resetSelection);
      window.removeEventListener("popstate", resetSelection);
    };
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 64rem)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const selectLink = (href: string) => {
    setSelectedHref(href);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center lg:w-[80%] w-[90%] mx-auto my-6">
        <Image
          src={dark ? "/logo-black.svg" : "/logo-white.svg"}
          width={100}
          height={100}
          alt="Ark Capital Logo"
        />
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex space-x-8">
            {links.map(({ label, href }) => (
              <li key={href}>
                <NavItem
                  href={href}
                  label={label}
                  active={activeHref === href}
                  variant="desktop"
                  theme={theme}
                  onSelect={() => selectLink(href)}
                />
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/#contact"
          className={`px-6 py-2 lg:block hidden rounded-full text-[14px] transition-colors ${dark ? "bg-black text-white hover:bg-neutral-800" : "bg-white text-black hover:bg-gray-200"}`}
          onClick={() => selectLink("/#contact")}
        >
          Contact Us
        </Link>
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center p-2"
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          aria-controls={drawerId}
          aria-haspopup="dialog"
          onClick={() => setIsOpen(true)}
        >
          <HamburgerIcon color={dark ? "black" : "white"} />
        </button>
      </div>
      <Drawer
        id={drawerId}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        label="Navigation menu"
        header={
          <Image
            src="/logo-black.svg"
            width={132}
            height={20}
            alt="Ark Capital"
          />
        }
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col gap-6">
            {links.map(({ label, href }) => (
              <li key={href}>
                <NavItem
                  href={href}
                  label={label}
                  active={activeHref === href}
                  variant="mobile"
                  onSelect={() => selectLink(href)}
                />
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className="mt-4 block w-full rounded-full bg-black px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                aria-current={
                  activeHref === "/#contact" ? "location" : undefined
                }
                onClick={() => selectLink("/#contact")}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </Drawer>
    </div>
  );
};

export default TopNav;
