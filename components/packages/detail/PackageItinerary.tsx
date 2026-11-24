import type { PackageItineraryItem } from "@/types/packages";

type PackageItineraryProps = {
  itinerary: PackageItineraryItem[];
};

export default function PackageItinerary({ itinerary }: PackageItineraryProps) {
  if (!itinerary.length) return null;

  return (
    <section className="section-padding bg-sand-50">
      <div className="container">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">Your journey</span>

          <h2 className="section-heading mt-5">Explore the itinerary.</h2>

          <p className="section-description mt-5">
            Discover what each day of your experience has in store.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-sand-300 md:left-[27px]" />

          <div className="space-y-10">
            {itinerary.map((item, index) => (
              <article
                key={`${item.day ?? index}-${item.title}`}
                className="relative grid gap-5 pl-14 md:grid-cols-[180px_1fr] md:gap-12 md:pl-20"
              >
                <span className="absolute left-0 top-1 flex size-10 items-center justify-center rounded-full border border-cyan bg-white text-sm font-bold text-ink md:size-14">
                  {String(item.day ?? index + 1).padStart(2, "0")}
                </span>

                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange">
                    Day {item.day ?? index + 1}
                  </span>

                  <h3 className="display-font mt-2 text-2xl text-ink">
                    {item.title}
                  </h3>
                </div>

                <div>
                  <p className="whitespace-pre-line text-sm leading-8 text-muted">
                    {item.description}
                  </p>

                  {item.sections?.map((section) => (
                    <div key={section.title} className="mt-6">
                      <h4 className="font-semibold text-ink">
                        {section.title}
                      </h4>

                      <p className="mt-2 text-sm leading-8 text-muted">
                        {section.description}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
