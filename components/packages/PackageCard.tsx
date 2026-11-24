import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { TravelPackage } from "@/types/packages";

type PackageCardProps = {
  packageItem: TravelPackage;
};

export default function PackageCard({ packageItem }: PackageCardProps) {
  const packageHref = `/packages/${packageItem.slug}`;

  return (
    <article className="group">
      <Link href={packageHref} className="block">
        <div className="image-hover relative aspect-[4/5] overflow-hidden bg-sand-100">
          {packageItem.coverImage ? (
            <Image
              src={packageItem.coverImage.src}
              alt={packageItem.coverImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex size-full items-center justify-center bg-sand-200">
              <span className="display-font text-2xl text-sand-700">
                {packageItem.destination}
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

          <span className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.15em] text-white">
            {packageItem.destination}
          </span>
        </div>

        <div className="flex items-start justify-between gap-4 py-5">
          <div>
            <h3 className="display-font text-2xl text-ink transition-colors group-hover:text-cyan-dark">
              {packageItem.title}
            </h3>

            <p className="mt-2 text-sm leading-7 text-muted">
              {packageItem.shortDescription}
            </p>
          </div>

          <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors group-hover:border-cyan group-hover:bg-cyan">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </Link>

      <Link
        href={`${packageHref}#enquiry`}
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:text-orange"
      >
        Enquire about this trip
        <ArrowUpRight size={15} />
      </Link>
    </article>
  );
}
