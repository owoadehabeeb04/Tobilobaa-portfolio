"use client";
import Link from "next/link";
import React from "react";
import { navItems } from "@/constants";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  // "/" would prefix-match every route, so it has to be an exact comparison.
  const isActive = (path: string) =>
    path === "/"
      ? pathname === "/" || pathname === "/ask-ai"
      : pathname.startsWith(path);

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <nav className="mx-auto flex max-w-screen-xl flex-row items-center justify-between px-5 py-5 md:px-[2rem]">
        <Link href="/home" aria-label="Home" className="flex font-display text-fig-40 leading-none md:text-fig-48">
          <span className="text-title">T</span>
          <span className="-ml-[9px] text-accent">0</span>
        </Link>

        {/* Centred on desktop; the pill docks to the bottom of the viewport on mobile. */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:absolute sm:bottom-auto sm:top-[19.5px]">
          <div className="flex flex-row items-center justify-center gap-2 rounded-[300px] border border-solid border-nav bg-nav-glass p-2 backdrop-blur-[10px] sm:gap-4">
            {navItems.map((navs) => (
              <Link
                href={navs.path}
                key={navs.path}
                aria-current={isActive(navs.path) ? "page" : undefined}
                className={`${
                  isActive(navs.path)
                    ? "bg-nav-active-bg text-nav-active-fg"
                    : "text-nav-fg"
                } whitespace-nowrap rounded-[100px] px-4 py-[10px] text-fig-14 sm:px-5 sm:py-[12.5px] sm:text-fig-16`}
              >
                {navs.text}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
