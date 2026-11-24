import Link from "next/link";
import type { Hotel, HotelRegion } from "@/types/hotels";
import { HotelCard } from "./HotelCard";

export function HotelRegionPage({
  region,
  hotels,
}: {
  region: HotelRegion;
  hotels: Hotel[];
}) {
  return (
    <main>
      <section className="container section-padding">
        <Link
          href="/beach-hotels"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#737D82] transition-colors hover:text-[#009FC4]"
        >
          <span aria-hidden="true">←</span> All beach hotel regions
        </Link>
        <header className="max-w-3xl">
          <p className="eyebrow">{region.eyebrow}</p>
          <h1 className="display-font mt-3 text-4xl text-[#171C1F] sm:text-6xl">
            Beach hotels in {region.name}
          </h1>
          <p className="section-description mt-5">{region.description}</p>
        </header>
        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </section>
    </main>
  );
}
