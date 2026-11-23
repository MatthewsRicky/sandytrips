import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-sand-50">
      <div className="container grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div className="relative z-10 max-w-xl">
          <span className="eyebrow">Discover Kenya with Sandy Trips</span>

          <h1 className="display-font mt-6 text-5xl leading-[1.08] text-black sm:text-6xl lg:text-7xl">
            Your next
            <span className="block text-cyan-dark">great escape</span>
            starts here.
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-muted">
            From coastal excursions to safari adventures, discover experiences
            that bring you closer to the beauty of Kenya.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/excursions" className="button-primary">
              Explore experiences
              <ArrowRight size={17} />
            </Link>

            <Link href="/contact" className="button-secondary">
              <MessageCircle size={17} />
              Plan your trip
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <span className="h-px w-12 bg-orange" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Explore. Experience. Remember.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[5/4] overflow-hidden rounded-sm bg-sand-200">
            <Image
              src="/images/home/hero-coast.jpg"
              alt="Kenyan coastline and turquoise Indian Ocean"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="image-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-5 hidden h-32 w-32 border-b-4 border-l-4 border-orange lg:block" />
          <div className="absolute -right-4 -top-4 hidden size-24 bg-cyan lg:block" />
        </div>
      </div>
    </section>
  );
}
