import { hotelRegions } from "@/data/hotels/regions";
import { getHotelsByRegion } from "@/data/hotels";
import { HotelRegionCard } from "./HotelRegionCard";

export function BeachHotelsPage() {
  return (
    <main>
      <section className="container section-padding">
        <header className="max-w-3xl">
          <p className="eyebrow">Explore the Kenyan coast</p>
          <h1 className="display-font mt-3 text-5xl leading-tight text-[#171C1F] sm:text-6xl">
            Find your place by the sea.
          </h1>
          <p className="section-description mt-5">
            Explore Sandy Trips' collection of beach hotels across Kenya's coast.
          </p>
        </header>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {hotelRegions.map((region) => (
            <HotelRegionCard
              key={region.slug}
              region={region}
              hotelCount={getHotelsByRegion(region.slug).length}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
