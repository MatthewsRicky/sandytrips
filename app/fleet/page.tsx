import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import FleetGallery from "@/components/fleet/FleetGallery";

export const metadata: Metadata = {
  title: "Explore Our Fleet | Sandy Trips",
  description:
    "Explore the Sandy Trips fleet and get in touch with our team to discuss your next Kenyan coastal adventure.",
};

export default function FleetPage() {
  return (
    <main>
      {/* Page introduction */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow">Travel with Sandy Trips</p>

            <h1 className="section-heading">Explore Our Fleet</h1>

            <p className="section-description max-w-2xl">
              Discover the vehicles that help us bring your Kenyan coastal
              adventures to life. Explore our fleet and get in touch with our
              team to discuss the arrangements for your next trip.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet gallery */}
      <section className="section-padding">
        <div className="container">
          <FleetGallery />
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="section-padding bg-cyan-light">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="eyebrow">Your next journey starts here</p>

              <h2 className="display-font text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Ready to explore the Kenyan coast?
              </h2>

              <p className="mt-3 leading-7 text-muted">
                Talk to our team about your travel plans and let&apos;s help you
                get started.
              </p>
            </div>

            <Link
              href="/contact"
              className="button-primary inline-flex shrink-0 items-center gap-3"
            >
              Get in touch
              <ArrowUpRight size={18} className="arrow-motion" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
