import Image from "next/image";
import type { PackageImage } from "@/types/packages";

type PackageGalleryProps = {
  images: PackageImage[];
};

export default function PackageGallery({ images }: PackageGalleryProps) {
  if (!images.length) return null;

  return (
    <section className="section-padding">
      <div className="container">
        <div className="mb-10">
          <span className="eyebrow">A closer look</span>
          <h2 className="section-heading mt-5">Experience the journey.</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative aspect-[4/3] overflow-hidden bg-sand-100"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
