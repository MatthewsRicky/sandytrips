import Image from "next/image";

const fleetImages = [
  {
    src: "https://sandytrips.com/wp-content/uploads/2023/11/Sandytrips-fleet-2c.jpg",
    alt: "Vehicle from the Sandy Trips fleet",
    className: "aspect-[4/3]",
  },
  {
    src: "https://sandytrips.com/wp-content/uploads/2023/11/Sandytrips-fleet-1_c.jpg",
    alt: "Another vehicle from the Sandy Trips fleet",
    className: "aspect-[4/3]",
  },
];

export default function FleetGallery() {
  return (
    <section aria-label="Sandy Trips fleet photographs">
      <div className="grid gap-5 md:grid-cols-2 md:gap-7">
        {fleetImages.map((image, index) => (
          <figure
            key={image.src}
            className={`group relative overflow-hidden rounded-2xl bg-surface ${image.className}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </figure>
        ))}
      </div>
    </section>
  );
}
