import type { PackageDetailContent, TravelPackage } from "@/types/packages";

import PackageDetailHero from "./PackageDetailHero";
import PackageContentSections from "./PackageContentSections";
import PackageItinerary from "./PackageItinerary";
import PackageGallery from "./PackageGallery";
import PackageEnquiryCTA from "./PackageEnquiryCTA";

type PackageDetailProps = {
  packageItem: TravelPackage;
  detail?: PackageDetailContent;
};

export default function PackageDetail({
  packageItem,
  detail,
}: PackageDetailProps) {
  const sections = detail?.contentSections ?? [];
  const itinerary = detail?.itinerary ?? [];
  const gallery = detail?.gallery ?? [];
  const highlights = detail?.highlights ?? [];

  const completePackage: TravelPackage = {
    ...packageItem,
    description: detail?.description ?? packageItem.description,
  };

  return (
    <>
      <PackageDetailHero packageItem={completePackage} />

      {highlights.length > 0 && (
        <section className="border-b border-border">
          <div className="container grid gap-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight) => (
              <div key={highlight} className="border-l-2 border-cyan pl-4">
                <p className="text-sm font-semibold text-ink">{highlight}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <PackageContentSections sections={sections} />

      <PackageItinerary itinerary={itinerary} />

      <PackageGallery images={gallery} />

      <PackageEnquiryCTA slug={packageItem.slug} title={packageItem.title} />
    </>
  );
}
