import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experienceCategories } from "@/data/home/experiences";
import SectionHeading from "@/components/home/shared/SectionHeading";

export default function ExperienceCategories() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Find your experience"
          title="A different way to discover Kenya."
          description="Whether you're looking for a coastal adventure, a wildlife experience or time to unwind, start exploring."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {experienceCategories.map((category) => (
            <Link key={category.number} href={category.href} className="group">
              <div className="image-hover relative aspect-[4/5] overflow-hidden bg-sand-100">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="image-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <span className="absolute left-6 top-6 text-sm font-semibold text-white/80">
                  {category.number}
                </span>

                <div className="absolute inset-x-6 bottom-7">
                  <h3 className="display-font text-3xl text-white">
                    {category.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/80">
                    {category.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan">
                    Explore
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
