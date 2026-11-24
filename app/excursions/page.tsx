import type { Metadata } from "next";

import CategoryPage from "@/components/packages/CategoryPage";
import { excursionsPage } from "@/data/categories/excursions";

export const metadata: Metadata = {
  title: "Coastal Excursions",
  description:
    "Explore coastal excursions and memorable experiences along the Kenyan coast with Sandy Trips.",
};

export default function ExcursionsPage() {
  return <CategoryPage config={excursionsPage} />;
}
