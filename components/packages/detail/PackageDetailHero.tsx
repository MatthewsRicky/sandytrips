import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import type { TravelPackage } from "@/types/packages";

type PackageDetailHeroProps = {
  packageItem: TravelPackage;
};

export default function PackageDetailHero({
  packageItem,
}: PackageDetailHeroProps) {
  const categoryHref =
    packageItem.category === "excursion"
      ? "/excursions"
      : packageItem.category === "safari"
        ? "/safaris"
        : "/holidays";
  return (
    <section className="bg-sand-50">
      <div className="container py-8">
        <Link
          href={categoryHref}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted transition-colors hover:text-orange"
        >
          <ArrowLeft size={15} />
          Back to experiences
        </Link>

        <div className="grid gap-10 pb-14 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:py-16">
          <div>
            <span className="eyebrow">Explore Kenya</span>

            <h1 className="display-font mt-5 text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              {packageItem.title}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted">
              {packageItem.description ?? packageItem.shortDescription}
            </p>

            <div className="mt-7 flex items-center gap-2 text-sm font-medium text-ink">
              <MapPin size={17} className="text-orange" />
              {packageItem.destination}
            </div>

            <a href="#enquiry" className="button-primary mt-9">
              Enquire about this experience
            </a>
          </div>

          {packageItem.coverImage && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-sand-200">
              <Image
                src={packageItem.coverImage.src}
                alt={packageItem.coverImage.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
