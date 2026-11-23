import type { Metadata } from "next";

import HomeHero from "@/components/home/sections/HomeHero";
import ExperienceCategories from "@/components/home/sections/ExperienceCategories";
import FeaturedPackages from "@/components/home/sections/FeaturedPackages";
import AboutPreview from "@/components/home/sections/AboutPreview";
import WhyChooseUs from "@/components/home/sections/WhyChooseUs";
import DestinationHighlights from "@/components/home/sections/DestinationHighlights";
import HomeCTA from "@/components/home/sections/HomeCTA";

export const metadata: Metadata = {
  title: "Discover Kenya | Sandy Trips",
  description:
    "Explore coastal excursions, safari adventures and beach holidays with Sandy Trips. Start planning your next Kenyan experience.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ExperienceCategories />
      <FeaturedPackages />
      <AboutPreview />
      <WhyChooseUs />
      <DestinationHighlights />
      <HomeCTA />
    </>
  );
}
