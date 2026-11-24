import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HotelDetail } from "@/components/hotels/HotelDetail";
import { allHotels, getHotelBySlug, isHotelRegion } from "@/data/hotels";

type Props = {
  params: Promise<{ region: string; hotelSlug: string }>;
};

export function generateStaticParams() {
  return allHotels
    .filter((hotel) => hotel.status === "published")
    .map((hotel) => ({
      region: hotel.region,
      hotelSlug: hotel.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region, hotelSlug } = await params;
  if (!isHotelRegion(region)) return { title: "Beach Hotel" };

  const hotel = getHotelBySlug(region, hotelSlug);
  return {
    title: hotel ? `${hotel.name} | Sandy Trips` : "Beach Hotel",
    description: hotel
      ? `View photos of ${hotel.name} and enquire with Sandy Trips.`
      : undefined,
  };
}

export default async function Page({ params }: Props) {
  const { region, hotelSlug } = await params;
  if (!isHotelRegion(region)) notFound();

  const hotel = getHotelBySlug(region, hotelSlug);
  if (!hotel) notFound();

  return <HotelDetail hotel={hotel} />;
}
