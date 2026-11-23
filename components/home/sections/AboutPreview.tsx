import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[5/4] overflow-hidden bg-sand-100">
            <Image
              src="/images/home/about-experience.jpg"
              alt="A travel experience along the Kenyan coast"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="image-cover"
            />
          </div>

          <div className="absolute -bottom-5 -right-5 hidden size-32 bg-orange lg:block" />
        </div>

        <div className="relative z-10">
          <span className="eyebrow">A little about us</span>

          <h2 className="section-heading mt-5">
            More than a destination. It's the experience.
          </h2>

          <p className="section-description mt-6">
            Sandy Trips brings together opportunities to explore Kenya's coast,
            discover its landscapes and enjoy memorable travel experiences.
          </p>

          <p className="section-description mt-4">
            Whether you already know where you want to go or need a little
            inspiration, we're here to help you take the next step.
          </p>

          <Link href="/about" className="button-primary mt-8">
            Discover Sandy Trips
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
