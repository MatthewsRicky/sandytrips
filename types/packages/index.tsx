export type PackageCategory = "excursion" | "safari" | "holiday";

export type PackageStatus = "draft" | "published";

export type ContentVerificationStatus = "needs-verification" | "verified";

export type PackageCurrency = "KES" | "USD" | "EUR";

export type PackageDuration = {
  value: number;
  unit: "hours" | "days" | "nights";
};

export type PackagePrice = {
  amount: number;
  currency: PackageCurrency;
  priceType: "per-person" | "per-group" | "fixed";
  label?: string;
  notes?: string;
};

export type PackageImage = {
  src: string;
  alt: string;
};

export type PackageItineraryItem = {
  day?: number;
  title: string;
  description: string;
};

export type TravelPackage = {
  id: string;
  slug: string;
  title: string;
  category: PackageCategory;

  shortDescription: string;
  description?: string;

  destination: string;
  region?: string;
  duration?: PackageDuration;

  coverImage?: PackageImage;
  gallery?: PackageImage[];

  highlights?: string[];
  itinerary?: PackageItineraryItem[];
  inclusions?: string[];
  exclusions?: string[];

  prices?: Partial<Record<PackageCurrency, PackagePrice>>;

  featured: boolean;
  status: PackageStatus;
  verificationStatus: ContentVerificationStatus;

  seo?: {
    title?: string;
    description?: string;
  };
};
export type CategoryPageConfig = {
  category: PackageCategory;

  title: string;
  eyebrow: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;

  introduction: {
    title: string;
    description: string;
  };

  emptyState: {
    title: string;
    description: string;
  };

  cta: {
    title: string;
    description: string;
    buttonLabel: string;
  };
};