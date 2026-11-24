import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

import { siteConfig } from "@/data/site-config";

export default function SiteFooter() {
  return (
    <footer className="bg-sand-600/60 text-white">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" className="inline-block">
              <span className="font-serif text-4xl tracking-[-0.06em]">
                sandy<span className="text-orange">.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-8 text-white/60">
              Discover the beauty of Kenya through unforgettable excursions,
              safari adventures and coastal escapes.
            </p>

            <div className="mt-7 flex gap-3">
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex size-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
                >
                  <FaFacebook size={17} />
                </a>
              )}

              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex size-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
                >
                  <FaInstagram size={17} />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-[11px] font-bold uppercase tracking-[0.16em] text-sand">
              Explore
            </h3>

            <ul className="space-y-4 text-sm text-white/65">
              <li>
                <Link
                  className="transition-colors hover:text-white"
                  href="/excursions"
                >
                  Excursions
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-white"
                  href="/safaris"
                >
                  Safari packages
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-white"
                  href="/holidays"
                >
                  Beach holidays
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-white"
                  href="/about"
                >
                  About us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-[11px] font-bold uppercase tracking-[0.16em] text-sand">
              Information
            </h3>

            <ul className="space-y-4 text-sm text-white/65">
              <li>
                <Link
                  className="transition-colors hover:text-white"
                  href="/contact"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-white"
                  href="/contact"
                >
                  Plan your trip
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-[11px] font-bold uppercase tracking-[0.16em] text-sand">
              Get in touch
            </h3>

            <p className="text-sm leading-7 text-white/65">
              Have a destination in mind? Let's start planning your next
              experience.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sand transition-colors hover:text-white"
            >
              Make an enquiry
              <ArrowUpRight size={15} className="arrow-motion" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>

          <p>Discover more. Experience more.</p>
        </div>
      </div>
    </footer>
  );
}
