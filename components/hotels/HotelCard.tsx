import Image from "next/image";
import Link from "next/link";
import type { Hotel } from "@/types/hotels";

export function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <Link
      href={`/beach-hotels/${hotel.region}/${hotel.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#E8FAFF]">
        <Image
          src={hotel.coverImage.src}
          alt={hotel.coverImage.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-full bg-white text-xl text-[#171C1F] shadow-sm transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[#171C1F] transition-colors group-hover:text-[#009FC4]">
        {hotel.name}
      </h3>
    </Link>
  );
}
