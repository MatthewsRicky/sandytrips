import type { Metadata } from "next";

import CategoryPage from "@/components/packages/CategoryPage";
import { holidaysPage } from "@/data/categories/holidays";

export const metadata: Metadata = {
  title: "Beach Holidays",
  description:
    "Explore beach holidays and coastal destinations in Kenya with Sandy Trips.",
};

export default function HolidaysPage() {
  return <CategoryPage config={holidaysPage} />;
}
