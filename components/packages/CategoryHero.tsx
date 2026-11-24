import Image from "next/image";

import type { CategoryPageConfig } from "@/types/packages";

type CategoryHeroProps = {
  config: CategoryPageConfig;
};

export default function CategoryHero({ config }: CategoryHeroProps) {
  return (
    <section className="relative isolate flex min-h-[480px] items-center overflow-hidden bg-black md:min-h-[560px]">
      <Image
        src={config.heroImage}
        alt={config.heroImageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

      <div className="container relative z-10 py-24">
        <div className="max-w-3xl">
          <span className="eyebrow text-orange">{config.eyebrow}</span>

          <h1 className="display-font mt-6 text-5xl leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            {config.title}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            {config.description}
          </p>
        </div>
      </div>
    </section>
  );
}
