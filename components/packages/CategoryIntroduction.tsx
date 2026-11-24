import type { CategoryPageConfig } from "@/types/packages";

import SectionHeading from "@/components/home/shared/SectionHeading";

type CategoryIntroductionProps = {
  config: CategoryPageConfig;
};

export default function CategoryIntroduction({
  config,
}: CategoryIntroductionProps) {
  return (
    <section className="section-padding bg-sand-50">
      <div className="container">
        <SectionHeading
          eyebrow={config.eyebrow}
          title={config.introduction.title}
          description={config.introduction.description}
        />
      </div>
    </section>
  );
}
