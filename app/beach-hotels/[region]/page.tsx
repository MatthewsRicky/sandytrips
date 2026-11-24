import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HotelRegionPage } from "@/components/hotels/HotelRegionPage";
import { getHotelsByRegion, getHotelRegion, isHotelRegion } from "@/data/hotels";

type Props = {
  params: Promise<{ region: string }>;
};

export function generateStaticParams() {
  return [
    { region: "diani" },
    { region: "lamu" },
    { region: "malindi" },
    { region: "north-coast" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region: regionSlug } = await params;
  if (!isHotelRegion(regionSlug)) return { title: "Beach Hotels" };

  const region = getHotelRegion(regionSlug);
  return {
    title: region ? `Beach Hotels in ${region.name}` : "Beach Hotels",
    description: region?.description,
  };
}

export default async function Page({ params }: Props) {
  const { region: regionSlug } = await params;
  if (!isHotelRegion(regionSlug)) notFound();

  const region = getHotelRegion(regionSlug);
  if (!region) notFound();

  return (
    <HotelRegionPage
      region={region}
      hotels={getHotelsByRegion(region.slug)}
    />
  );
}
