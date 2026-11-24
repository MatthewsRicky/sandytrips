import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type PackageEnquiryCTAProps = {
  slug: string;
  title: string;
};

export default function PackageEnquiryCTA({
  slug,
  title,
}: PackageEnquiryCTAProps) {
  return (
    <section id="enquiry" className="scroll-mt-28 bg-[#00CFFF]">
      <div className="container py-16 sm:py-20">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-black/70">
              Start planning
            </span>

            <h2 className="display-font mt-4 text-4xl leading-tight text-black sm:text-5xl">
              Ready to experience {title}?
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-black/75">
              Get in touch with Sandy Trips to discuss your experience and make
              an enquiry.
            </p>
          </div>

          <Link
            href={`/contact?package=${encodeURIComponent(slug)}`}
            className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 bg-black px-7 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
          >
            Make an enquiry
            <ArrowUpRight size={18} className="arrow-motion" />
          </Link>
        </div>
      </div>
    </section>
  );
}
