import Image from "next/image";
import type { PackageContentSection } from "@/types/packages";

type PackageContentSectionsProps = {
  sections: PackageContentSection[];
};

export default function PackageContentSections({
  sections,
}: PackageContentSectionsProps) {
  if (!sections.length) return null;

  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid gap-12">
          {sections.map((section, index) => (
            <article
              key={`${section.title}-${index}`}
              className="grid gap-7 border-b border-border pb-12 last:border-0 last:pb-0 md:grid-cols-[100px_1fr] lg:grid-cols-[140px_1fr]"
            >
              <span className="display-font text-4xl text-cyan-dark">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div
                className={
                  section.image
                    ? "grid gap-7 md:grid-cols-[1fr_0.8fr] md:items-center"
                    : "max-w-3xl"
                }
              >
                <div>
                  <h2 className="display-font text-3xl text-ink sm:text-4xl">
                    {section.title}
                  </h2>

                  <p className="mt-4 whitespace-pre-line text-sm leading-8 text-muted">
                    {section.description}
                  </p>
                </div>

                {section.image && (
                  <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
