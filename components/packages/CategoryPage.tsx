import type { CategoryPageConfig } from "@/types/packages";

import { getPackagesByCategory } from "@/data/packages";

import CategoryHero from "@/components/packages/CategoryHero";
import CategoryIntroduction from "@/components/packages/CategoryIntroduction";
import PackageGrid from "@/components/packages/PackageGrid";
import PageCTA from "@/components/shared/PageCTA";

type CategoryPageProps = {
  config: CategoryPageConfig;
};

export default function CategoryPage({ config }: CategoryPageProps) {
  const packages = getPackagesByCategory(config.category);

  return (
    <>
      <CategoryHero config={config} />

      <CategoryIntroduction config={config} />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="mb-12">
            <span className="eyebrow">Explore our experiences</span>

            <h2 className="section-heading mt-5">
              {config.category === "excursion"
                ? "Find your next coastal adventure."
                : config.category === "safari"
                  ? "Discover the wild."
                  : "Find your perfect escape."}
            </h2>
          </div>

          <PackageGrid packages={packages} emptyState={config.emptyState} />
        </div>
      </section>

      <PageCTA
        title={config.cta.title}
        description={config.cta.description}
        buttonLabel={config.cta.buttonLabel}
      />
    </>
  );
}
