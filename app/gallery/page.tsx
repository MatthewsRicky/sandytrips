import type { Metadata } from "next";

import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Sandy Trips",
  description:
    "Explore photographs of Sandy Trips experiences, including fishing, coastal adventures, cultural excursions and nature walks around Kenya.",
};

export default function GalleryPage() {
  return (
    <main>
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow">Moments worth remembering</p>

            <h1 className="section-heading">Sandy Trips Gallery</h1>

            <p className="section-description">
              A glimpse into the experiences, places and adventures that make
              exploring the Kenyan coast memorable.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>
    </main>
  );
}
