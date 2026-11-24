import type { PackageCardItem } from "@/types/packages";


export type FeaturedPackage = PackageCardItem;

export type ExperienceCategory = {
  number: string;
  title: string;
  description: string;
  href: string;
  image: string;
};

export type HomeBenefit = {
  title: string;
  description: string;
};

export type Destination = {
  name: string;
  description: string;
  image: string;
  href: string;
};
