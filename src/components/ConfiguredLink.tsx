import Link from "next/link";
import type { ReactNode } from "react";

type ConfiguredLinkProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  label?: string;
};

export default function ConfiguredLink({ href, children, className, label }: ConfiguredLinkProps) {
  if (!href) {
    return <span className={className} aria-disabled="true" aria-label={label} title="Link unavailable">{children}</span>;
  }
  if (href.startsWith("/") || href.startsWith("#")) {
    return <Link href={href} className={className} aria-label={label}>{children}</Link>;
  }
  const newTab = /^https?:\/\//.test(href);
  return <a href={href} className={className} aria-label={label} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener noreferrer" : undefined}>{children}</a>;
}
