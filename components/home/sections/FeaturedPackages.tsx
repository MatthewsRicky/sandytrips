import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredPackages } from "@/data/home/featured-packages";
import PackageCard from "@/components/packages/PackageCard";
import SectionHeading from "@/components/home/shared/SectionHeading";

export default function FeaturedPackages() {
  return (
    <section className="section-padding bg-sand-50">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Handpicked experiences"
            title="Places to go. Memories to make."
            description="Explore a selection of experiences to inspire your next Kenyan adventure."
          />

          <Link
            href="/excursions"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:text-orange"
          >
            View all experiences
            <ArrowRight size={16} className="arrow-motion" />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPackages.map((item) => (
            <PackageCard key={item.slug} packageItem={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
