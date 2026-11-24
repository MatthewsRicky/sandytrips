import type { CategoryPageConfig } from "@/types/packages";

export const safarisPage: CategoryPageConfig = {
  category: "safari",

  eyebrow: "Explore beyond the coast",
  title: "Safari adventures in Kenya",
  description:
    "Discover Kenya's landscapes and wildlife through safari experiences designed to bring you closer to nature.",

  heroImage: "/images/categories/safaris-hero.jpg",
  heroImageAlt: "Kenyan wildlife and savannah landscape",

  introduction: {
    title: "Experience the wild side of Kenya.",
    description:
      "Explore opportunities to discover Kenya's diverse landscapes and wildlife. Get in touch to discuss the safari experience that suits your plans.",
  },

  emptyState: {
    title: "Safari experiences coming soon.",
    description:
      "We're preparing our safari listings. Contact us to enquire about available safari experiences.",
  },

  cta: {
    title: "Ready to explore Kenya?",
    description:
      "Let us know what kind of safari experience you're interested in and start planning your adventure.",
    buttonLabel: "Enquire about safaris",
  },
};
