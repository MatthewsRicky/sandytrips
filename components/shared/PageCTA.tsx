import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type PageCTAProps = {
  title: string;
  description: string;
  buttonLabel: string;
  href?: string;
};

export default function PageCTA({
  title,
  description,
  buttonLabel,
  href = "/contact",
}: PageCTAProps) {
  return (
    <section className="relative overflow-hidden bg-cyan px-6 py-24">
      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/70">
          Let's plan your next experience
        </span>

        <h2 className="display-font mt-6 text-4xl leading-tight text-black sm:text-6xl">
          {title}
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-black/70">
          {description}
        </p>

        <Link href={href} className="button-accent mt-9">
          {buttonLabel}
          <ArrowUpRight size={17} />
        </Link>
      </div>

      <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full border-[40px] border-white/15" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full border-[50px] border-black/5" />
    </section>
  );
}
