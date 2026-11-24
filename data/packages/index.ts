import type { PackageCategory, TravelPackage } from "@/types/packages";

import { excursionPackages } from "./excursions";
import { safariPackages } from "./safaris";
import { holidayPackages } from "./holidays";

export const allPackages: TravelPackage[] = [
  ...excursionPackages,
  ...safariPackages,
  ...holidayPackages,
];

// Return all published packages.
export function getPublishedPackages(): TravelPackage[] {
  return allPackages.filter(
    (packageItem) => packageItem.status === "published",
  );
}

// Return packages belonging to a specific category.
export function getPackagesByCategory(
  category: PackageCategory,
  includeDrafts = false,
): TravelPackage[] {
  return allPackages.filter(
    (packageItem) =>
      packageItem.category === category &&
      (includeDrafts || packageItem.status === "published"),
  );
}

// Retrieve a package using its slug.
export function getPackageBySlug(
  slug: string,
  includeDrafts = false,
): TravelPackage | undefined {
  return allPackages.find(
    (packageItem) =>
      packageItem.slug === slug &&
      (includeDrafts || packageItem.status === "published"),
  );
}

// Retrieve published packages marked as featured.
export function getFeaturedPackages(): TravelPackage[] {
  return getPublishedPackages().filter((packageItem) => packageItem.featured);
}
