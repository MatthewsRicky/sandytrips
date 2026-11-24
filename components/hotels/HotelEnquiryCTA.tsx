import Link from "next/link";

export function HotelEnquiryCTA({ hotelName, hotelSlug }: {
  hotelName: string;
  hotelSlug: string;
}) {
  return (
    <section className="rounded-2xl bg-[#171C1F] px-6 py-10 text-white sm:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00CFFF]">
        Plan your stay
      </p>
      <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="display-font text-3xl sm:text-4xl">
            Enquire about {hotelName}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
            Get in touch with Sandy Trips to enquire about this hotel.
          </p>
        </div>
        <Link
          href={`/contact?hotel=${encodeURIComponent(hotelSlug)}`}
          className="button-accent inline-flex shrink-0 items-center justify-center gap-3"
        >
          Make an enquiry <span className="arrow-motion">↗</span>
        </Link>
      </div>
    </section>
  );
}
