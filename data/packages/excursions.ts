import type { TravelPackage } from "@/types/packages";

export const excursionPackages: TravelPackage[] = [
  {
    id: "historic-mombasa",
    slug: "historic-mombasa",
    title: "Historic Mombasa",
    category: "excursion",
    shortDescription: "Explore the historic side of Mombasa.",
    destination: "Mombasa",
    featured: true,
    status: "draft",
    verificationStatus: "needs-verification",
  },
  {
    id: "wasini-island",
    slug: "wasini-island",
    title: "Wasini Island",
    category: "excursion",
    shortDescription: "Discover the Wasini Island experience.",
    destination: "Wasini Island",
    featured: true,
    status: "draft",
    verificationStatus: "needs-verification",
  },
  {
    id: "shimba-hills",
    slug: "shimba-hills",
    title: "Shimba Hills",
    category: "excursion",
    shortDescription: "Explore the Shimba Hills area.",
    destination: "Shimba Hills",
    featured: true,
    status: "draft",
    verificationStatus: "needs-verification",
  },
];
