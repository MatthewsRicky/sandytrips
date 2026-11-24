import Image from "next/image";
import Link from "next/link";
import type { HotelRegion } from "@/types/hotels";

type Props = { region: HotelRegion; hotelCount: number };

export function HotelRegionCard({ region, hotelCount }: Props) {
  return (
    <Link
      href={`/beach-hotels/${region.slug}`}
      className="group relative isolate block min-h-[19rem] overflow-hidden rounded-2xl bg-[#171C1F]"
    >
      <Image
        src={region.image}
        alt={`${region.name} beach hotels`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#00CFFF]">
          {region.eyebrow}
        </p>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="display-font text-3xl">{region.name}</h2>
            <p className="mt-1 text-sm text-white/75">
              {hotelCount} {hotelCount === 1 ? "hotel" : "hotels"}
            </p>
          </div>
          <span className="arrow-motion text-2xl" aria-hidden="true">↗</span>
        </div>
      </div>
    </Link>
  );
}
