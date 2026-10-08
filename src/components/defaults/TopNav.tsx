"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState, useSyncExternalStore } from "react";
import Drawer from "./Drawer";
import FixedNavLayer from "./FixedNavLayer";
import { HamburgerIcon } from "../icons";
import NavItem from "./NavItem";

const links = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
];

function subscribeToScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => {
    window.removeEventListener("scroll", callback);
  };
}

type TopNavProps = { theme?: "light" | "dark" };

const TopNav = ({ theme = "light" }: TopNavProps) => {
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 24,
    () => false,
  );
  const dark = scrolled || theme === "dark";
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const drawerId = useId();
  const activeHref = pathname;

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 64rem)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const selectLink = () => {
    setIsOpen(false);
  };

  return (
    <div className="h-20 lg:h-24">
      <FixedNavLayer>
      <header
        className={`fixed inset-x-0 top-0 z-[2147483647] transition-[background-color,box-shadow] ease-in-out motion-reduce:transition-none ${scrolled ? "duration-500" : "duration-800"} ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}
      >
        <div className="flex h-20 lg:h-24 justify-between items-center lg:w-[80%] w-[90%] mx-auto">
          <Link href="/" aria-label="Ark Capital home">
            <Image
              src={dark ? "/logo-black.svg" : "/logo-white.svg"}
              width={132}
              height={20}
              className="h-auto w-25"
              alt="Ark Capital Logo"
            />
          </Link>
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex space-x-8">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <NavItem
                    href={href}
                    label={label}
                    active={
                      activeHref === href ||
                      (href !== "/" && activeHref.startsWith(`${href}/`))
                    }
                    variant="desktop"
                    theme={dark ? "dark" : "light"}
                    onSelect={() => selectLink()}
                  />
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="/contact"
            className={`px-6 py-2 lg:block hidden rounded-full text-[14px] transition-colors ${dark ? "bg-black text-white hover:bg-neutral-800" : "bg-white text-black hover:bg-gray-200"}`}
            onClick={() => selectLink()}
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
      </header>
      </FixedNavLayer>
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
                  active={
                    activeHref === href ||
                    (href !== "/" && activeHref.startsWith(`${href}/`))
                  }
                  variant="mobile"
                  onSelect={() => selectLink()}
                />
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="mt-4 block w-full rounded-full bg-black px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                aria-current={
                  activeHref === "/contact" ? "location" : undefined
                }
                onClick={() => selectLink()}
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
