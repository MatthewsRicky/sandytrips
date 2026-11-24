import type { CategoryPageConfig } from "@/types/packages";

export const excursionsPage: CategoryPageConfig = {
  category: "excursion",

  eyebrow: "Discover the Kenyan coast",
  title: "Coastal excursions & experiences",
  description:
    "Explore the beauty, culture and experiences of Kenya's coastline through memorable excursions and day trips.",

  heroImage: "/images/categories/excursions-hero.jpg",
  heroImageAlt: "Kenyan coastline and Indian Ocean scenery",

  introduction: {
    title: "Make more of your time on the coast.",
    description:
      "From historic coastal towns to beautiful islands and natural landscapes, discover experiences that let you explore more of Kenya's coast.",
  },

  emptyState: {
    title: "New experiences are coming.",
    description:
      "We're preparing our excursion listings. Contact us to discuss the experiences currently available.",
  },

  cta: {
    title: "Have an excursion in mind?",
    description:
      "Tell us what you'd like to explore and get in touch with Sandy Trips to discuss your plans.",
    buttonLabel: "Plan an excursion",
  },
};
