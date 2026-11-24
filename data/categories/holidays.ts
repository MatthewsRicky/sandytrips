import type { CategoryPageConfig } from "@/types/packages";

export const holidaysPage: CategoryPageConfig = {
  category: "holiday",

  eyebrow: "Find your coastal escape",
  title: "Beach holidays in Kenya",
  description:
    "Discover Kenya's beautiful coastline and find inspiration for your next beach holiday.",

  heroImage: "/images/categories/holidays-hero.jpg",
  heroImageAlt: "Tropical beach along the Kenyan coast",

  introduction: {
    title: "Slow down. Explore. Unwind.",
    description:
      "From the shores of Diani to the coastline around Watamu and Malindi, explore possibilities for your next coastal getaway.",
  },

  emptyState: {
    title: "Your next beach escape awaits.",
    description:
      "We're preparing our holiday listings. Contact us to discuss available destinations and holiday options.",
  },

  cta: {
    title: "Let's plan your coastal getaway.",
    description:
      "Share your preferred destination and travel plans with us. We'll help you explore the available options.",
    buttonLabel: "Plan a beach holiday",
  },
};
