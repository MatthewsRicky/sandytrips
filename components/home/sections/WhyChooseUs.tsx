import { Compass, Heart, MapPin, type LucideIcon } from "lucide-react";

import { homeBenefits } from "@/data/home/benefits";
import SectionHeading from "@/components/home/shared/SectionHeading";

const icons: LucideIcon[] = [Compass, Heart, MapPin];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-sand-300 text-sand-900">
      <div className="container">
        <SectionHeading
          eyebrow="The Sandy Trips difference"
          title="Make the journey part of the story."
          description="Start with an idea, discover an experience and get in touch to plan your next trip."
          light
        />

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {homeBenefits.map((benefit, index) => {
            const Icon = icons[index];

            return (
              <article
                key={benefit.title}
                className="border-t border-white/20 pt-7"
              >
                <Icon size={30} strokeWidth={1.4} className="text-cyan" />

                <h3 className="display-font mt-6 text-2xl">{benefit.title}</h3>

                <p className="mt-4 text-sm leading-7 text-sand-900/65">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
