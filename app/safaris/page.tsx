import type { Metadata } from "next";

import CategoryPage from "@/components/packages/CategoryPage";
import { safarisPage } from "@/data/categories/safaris";

export const metadata: Metadata = {
  title: "Safari Adventures",
  description:
    "Discover Kenya's wildlife and landscapes with safari experiences from Sandy Trips.",
};

export default function SafarisPage() {
  return <CategoryPage config={safarisPage} />;
}
