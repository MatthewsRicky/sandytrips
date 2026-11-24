import Image from "next/image";
import Link from "next/link";
import type { Hotel } from "@/types/hotels";
import { HotelGallery } from "./HotelGallery";
import { HotelEnquiryCTA } from "./HotelEnquiryCTA";

export function HotelDetail({ hotel }: { hotel: Hotel }) {
  return (
    <main>
      <section className="container section-padding">
        <Link
          href={`/beach-hotels/${hotel.region}`}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#737D82] transition-colors hover:text-[#009FC4]"
        >
          <span aria-hidden="true">←</span> Back to {hotel.region.replace("-", " ")}
        </Link>
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Beach hotels</p>
            <h1 className="display-font mt-3 text-4xl leading-tight text-[#171C1F] sm:text-5xl">
              {hotel.name}
            </h1>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#E8FAFF]">
            <Image
              src={hotel.coverImage.src}
              alt={hotel.coverImage.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-12">
          <HotelGallery hotelName={hotel.name} images={hotel.gallery} />
        </div>
        <div className="mt-12">
          <HotelEnquiryCTA hotelName={hotel.name} hotelSlug={hotel.slug} />
        </div>
      </section>
    </main>
  );
}
