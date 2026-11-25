"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-sand-300/95 text-sand-900 backdrop-blur-md">
      <div className="container">
        <div className="flex h-[80px] items-center justify-between">
          <Link
            href="/"
            className="group flex leading-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Sandy Trips home"
          >
            <Image src="/images/branding/SandyTrips-Logo3-2.png"
            alt="logo"
            width={100}
            height={100}
            />
            {/* <span className="font-serif text-[30px] tracking-[-0.06em] text-ocean">
              sandy<span className="text-teal">.</span>
            </span>
            <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.25em] text-muted">
              Trips & Experiences
            </span> */}
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            {siteConfig.navigation
              .filter((item) => item.label !== "Home")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[11px] font-semibold tracking-[0.04em] text-ink/80 transition-colors hover:text-teal"
                >
                  {item.label}
                </Link>
              ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/contact" className="button-primary">
              Plan Your Trip
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex size-11 items-center justify-center text-ocean lg:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-border bg-cream px-6 py-5 lg:hidden"
        >
          <div className="mx-auto flex max-w-[1280px] flex-col">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border py-4 text-sm font-medium text-ocean transition-colors hover:text-teal"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="button-primary mt-5 w-full"
            >
              Plan Your Trip
              <ArrowUpRight size={15} className="arrow-motion" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
