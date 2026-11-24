import type { TravelPackage } from "@/types/packages";

import PackageCard from "@/components/packages/PackageCard";

type PackageGridProps = {
  packages: TravelPackage[];
  emptyState: {
    title: string;
    description: string;
  };
};

export default function PackageGrid({
  packages,
  emptyState,
}: PackageGridProps) {
  if (packages.length === 0) {
    return (
      <div className="border border-sand-200 bg-sand-50 px-6 py-16 text-center md:px-12">
        <span className="eyebrow">Stay tuned</span>

        <h3 className="display-font mt-5 text-3xl text-ink">
          {emptyState.title}
        </h3>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
          {emptyState.description}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {packages.map((packageItem) => (
        <PackageCard key={packageItem.id} packageItem={packageItem} />
      ))}
    </div>
  );
}
