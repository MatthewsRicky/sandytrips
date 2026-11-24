import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="relative overflow-hidden bg-cyan px-6 py-24">
      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/70">
          Your next adventure awaits
        </span>

        <h2 className="display-font mt-6 text-4xl leading-tight text-black sm:text-6xl">
          Let's make your next trip unforgettable.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-black/70">
          Tell us what you have in mind. We'll help you explore the
          possibilities and take the next step towards your trip.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="button-accent">
            Make an enquiry
            <ArrowUpRight size={17} className="arrow-motion" />
          </Link>

          <Link
            href="/excursions"
            className="inline-flex min-h-[52px] items-center gap-2 border border-black/40 px-6 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white"
          >
            <MessageCircle size={17} />
            Explore experiences
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full border-[40px] border-white/15" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full border-[50px] border-black/5" />
    </section>
  );
}
