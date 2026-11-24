import type { CategoryPageConfig } from "@/types/packages";

export const excursionsPage: CategoryPageConfig = {
  category: "excursion",

  eyebrow: "Discover the Kenyan coast",
  title: "Explore. Experience. Escape.",
  description:
    "We redefine beach escapades by offering an array of specialized activities that cater to every adventurer's dream.",

  heroImage: "/images/categories/excursions-hero.jpg",
  heroImageAlt: "Coastal scenery along the Kenyan coast",

  introduction: {
    title: "Find your next coastal adventure.",
    description:
      "From historic coastal towns and beautiful islands to unforgettable ocean experiences and wildlife adventures, explore the many ways to experience Kenya.",
  },

  emptyState: {
    title: "New experiences are coming.",
    description: "Contact us to discuss the experiences currently available.",
  },

  cta: {
    title: "Your next adventure starts here.",
    description:
      "Tell us what you'd like to experience and let Sandy Trips help you plan your next coastal adventure.",
    buttonLabel: "Plan your experience",
  },
};
