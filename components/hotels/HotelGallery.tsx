import Image from "next/image";
import type { HotelImage } from "@/types/hotels";

export function HotelGallery({
  hotelName,
  images,
}: {
  hotelName: string;
  images: HotelImage[];
}) {
  const resolvedImages = images.filter((image) => image.src);

  if (resolvedImages.length === 0) {
    return (
      <section aria-label={`${hotelName} photo gallery`} className="py-10">
        <p className="text-sm text-[#737D82]">
          Gallery photographs are being prepared for this hotel.
        </p>
      </section>
    );
  }

  return (
    <section aria-label={`${hotelName} photo gallery`} className="grid gap-3 sm:grid-cols-2">
      {resolvedImages.map((image, index) => (
        <div
          key={`${image.filename}-${index}`}
          className={`relative overflow-hidden rounded-xl bg-[#E8FAFF] ${
            index === 0 ? "sm:row-span-2 sm:min-h-[32rem]" : "min-h-64"
          }`}
        >
          <Image
            src={image.src!}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}
    </section>
  );
}
