import type { Metadata } from "next";
import { BeachHotelsPage } from "@/components/hotels/BeachHotelsPage";

export const metadata: Metadata = {
  title: "Beach Hotels in Kenya",
  description: "Explore beach hotels across Diani, Lamu, Malindi and Kenya's North Coast with Sandy Trips.",
};

export default function Page() {
  return <BeachHotelsPage />;
}
