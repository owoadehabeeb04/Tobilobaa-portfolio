import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import React from "react";

type PillLinkProps = {
  href: string;
  children: React.ReactNode;
  /** Renders a plain <a> with target=_blank instead of a next/link. */
  external?: boolean;
  size?: "sm" | "md";
  className?: string;
};

/**
 * The solid CTA pill used across the site ("Contact me ↗", "View Project ↗").
 * Dark fill with accent text in both colour modes, per the Figma design.
 */
const PillLink = ({
  href,
  children,
  external = false,
  size = "md",
  className = ""
}: PillLinkProps) => {
  const sizing =
    size === "sm"
      ? "gap-1 px-3 py-2 text-fig-10"
      : "gap-1 px-4 py-[12.5px] text-fig-16 md:text-fig-20";

  const classes = `inline-flex w-fit items-center rounded-[100px] bg-btn text-accent hover:opacity-90 ${sizing} ${className}`;
  const icon = (
    <ArrowUpRight
      aria-hidden="true"
      className={size === "sm" ? "size-4 shrink-0" : "size-5 shrink-0 md:size-6"}
    />
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        <span>{children}</span>
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      <span>{children}</span>
      {icon}
    </Link>
  );
};

export default PillLink;
