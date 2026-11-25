import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const images = {
  team: {
    src: "https://sandytrips.com/wp-content/uploads/2023/10/Mombasa-Customer-serivce-sandytrips-ltd3.jpg",
    alt: "Sandy Trips customer service team in Mombasa",
  },
  heritage: {
    src: "https://sandytrips.com/wp-content/uploads/2023/10/Mombasa-Tusk-sandytrips-ltd.jpg",
    alt: "The iconic Mombasa elephant tusks",
  },
  fishing: {
    src: "https://sandytrips.com/wp-content/uploads/2023/09/sandytrips-fishing-excursions3.jpg",
    alt: "Fishing excursion along the Kenyan coast",
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface">
        <div className="container grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow">Discover Sandy Trips</p>

            <h1 className="display-font text-balance text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              Your gateway to coastal adventures.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted">
              We are Sandy Trips Limited, a Mombasa-based tour company creating
              unforgettable beach safaris and coastal experiences along the
              Kenyan coast.
            </p>

            <Link
              href="/excursions"
              className="button-primary mt-8 inline-flex items-center gap-3"
            >
              Explore our experiences
              <ArrowUpRight className="arrow-motion" size={18} />
            </Link>
          </div>

          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl">
            <Image
              src={images.team.src}
              alt={images.team.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="image-cover"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="section-heading">We are Sandy Trips Limited.</h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-muted">
            <p>
              Nestled in the breathtaking coastal region of Mombasa, Sandy Trips
              Limited is a tour company dedicated to curating unforgettable
              beach safaris. Our expertise lies in combining the allure of
              pristine beaches with a variety of exciting activities and
              experiences.
            </p>

            <p>
              From the exhilaration of skydiving to fishing and exploring the
              underwater world through snorkelling, we offer coastal activities
              that cater to different interests and travel styles.
            </p>

            <p>
              The sun-soaked shores of the Kenyan coast are our playground. We
              invite you to discover their beauty, culture and extraordinary
              experiences with us.
            </p>
          </div>
        </div>
      </section>

      {/* Coastal knowledge */}
      <section className="section-padding bg-surface">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src={images.heritage.src}
              alt={images.heritage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="image-cover"
            />
          </div>

          <div>
            <p className="eyebrow">Rooted in the coast</p>
            <h2 className="section-heading">
              Local knowledge. Authentic experiences.
            </h2>

            <div className="section-description space-y-5">
              <p>
                What sets Sandy Trips apart is our connection to the coastal
                regions of Kenya, from the North Coast to the South Coast.
              </p>

              <p>
                Our association with founder and General Manager Azba Mangal
                gives our work a connection to the local culture and heritage.
                We aim to make every journey more meaningful by sharing the
                stories, places and experiences that make this coastline
                distinctive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section className="section-padding">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">A heritage of exploration</p>
            <h2 className="section-heading">
              A longstanding partnership with Explore Safaris.
            </h2>

            <div className="section-description space-y-5">
              <p>
                Sandy Trips Limited proudly shares a longstanding partnership
                with Explore Safaris, a venture founded by Azba Mangal.
              </p>

              <p>
                The Mangal family's history on the Kenyan coast dates back to
                1900. This heritage is part of a wider story of connection,
                exploration and a passion for the region's tourism experiences.
              </p>

              <p>
                Our commitment is to honour that spirit of discovery while
                helping visitors experience the Kenyan coast in memorable ways.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src={images.fishing.src}
              alt={images.fishing.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="image-cover"
            />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding bg-cyan-light">
        <div className="container text-center">
          <p className="eyebrow">Your adventure begins here</p>

          <h2 className="display-font mx-auto max-w-3xl text-balance text-3xl leading-tight text-ink sm:text-5xl">
            Discover the Kenyan coast like never before.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted">
            Unveil the extraordinary, embrace the culture and explore the
            coastal haven with Sandy Trips.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/excursions" className="button-primary">
              Explore excursions
              <ArrowUpRight className="arrow-motion" size={18} />
            </Link>

            <Link href="/contact" className="button-secondary">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
