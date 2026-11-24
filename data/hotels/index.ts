import type { Hotel, HotelRegionSlug } from "@/types/hotels";
import { dianiHotels } from "./diani";
import { lamuHotels } from "./lamu";
import { malindiHotels } from "./malindi";
import { northCoastHotels } from "./north-coast";
import { hotelRegions } from "./regions";

export const allHotels: Hotel[] = [
  ...dianiHotels,
  ...lamuHotels,
  ...malindiHotels,
  ...northCoastHotels,
];

export function getHotelsByRegion(region: HotelRegionSlug): Hotel[] {
  return allHotels.filter(
    (hotel) => hotel.region === region && hotel.status === "published",
  );
}

export function getHotelBySlug(
  region: HotelRegionSlug,
  hotelSlug: string,
): Hotel | undefined {
  return allHotels.find(
    (hotel) =>
      hotel.region === region &&
      hotel.slug === hotelSlug &&
      hotel.status === "published",
  );
}

export function getHotelRegion(region: string) {
  return hotelRegions.find((item) => item.slug === region);
}

export function isHotelRegion(value: string): value is HotelRegionSlug {
  return hotelRegions.some((region) => region.slug === value);
}
