import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { destinations } from "@/data/home/destinations";
import SectionHeading from "@/components/home/shared/SectionHeading";

export default function DestinationHighlights() {
  return (
    <section className="section-padding bg-sand-100">
      <div className="container">
        <SectionHeading
          eyebrow="Explore the coast"
          title="Discover somewhere wonderful."
          description="Get inspired by some of the destinations that make Kenya's coastline so special."
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {destinations.map((destination) => (
            <Link
              href={destination.href}
              key={destination.name}
              className="group relative"
            >
              <div className="image-hover relative aspect-[4/5] overflow-hidden bg-sand-200">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="image-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <div className="absolute inset-x-6 bottom-6 text-white">
                  <h3 className="display-font text-3xl">{destination.name}</h3>

                  <p className="mt-2 text-sm text-white/80">
                    {destination.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan">
                    Discover
                    <ArrowUpRight size={16} className="arrow-motion" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
