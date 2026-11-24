import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PackageDetail from "@/components/packages/detail/PackageDetail";
import { excursionDetails } from "@/data/packages/excursion-details";
import { getPackageBySlug, getPublishedPackages } from "@/data/packages";

type PackagePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getPublishedPackages().map((packageItem) => ({
    slug: packageItem.slug,
  }));
}

export async function generateMetadata({
  params,
}: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const packageItem = getPackageBySlug(slug);

  if (!packageItem) {
    return {
      title: "Package Not Found | Sandy Trips",
    };
  }

  const detail = excursionDetails[slug];

  return {
    title: packageItem.seo?.title ?? `${packageItem.title} | Sandy Trips`,
    description:
      packageItem.seo?.description ??
      detail?.description ??
      packageItem.shortDescription,
  };
}

export default async function PackagePage({ params }: PackagePageProps) {
  const { slug } = await params;

  const packageItem = getPackageBySlug(slug);

  if (!packageItem) {
    notFound();
  }

  const detail = excursionDetails[slug];

  return (
    <main>
      <PackageDetail packageItem={packageItem} detail={detail} />
    </main>
  );
}
