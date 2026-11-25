import EnquiryForm from "@/components/forms/EnquiryForm";
import { Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
  {
    label: "Call us",
    value: "+254 798 171 333",
    href: "tel:+254798171333",
    icon: Phone,
  },
  {
    label: "Head office",
    value:
      "The Diani Beach Shopping Centre, Office No. UXY, 1st Floor, Diani Beach Road, Mombasa, Kenya",
    href: undefined,
    icon: MapPin,
  },
  {
    label: "Email",
    value: "info@sandtrips.com",
    href: "mailto:info@sandtrips.com",
    icon: Mail,
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow">Get in touch</p>

            <h1 className="section-heading">
              Let&apos;s plan your next adventure.
            </h1>

            <p className="section-description">
              Whether you have a destination in mind or need a little
              inspiration, our team is ready to help you plan your next
              experience along the Kenyan coast.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <aside>
              <div className="mb-8">
                <h2 className="display-font text-2xl font-semibold text-ink">
                  We&apos;d love to hear from you.
                </h2>

                <p className="mt-3 leading-7 text-muted">
                  Reach out to us directly or send an enquiry using the form.
                  Share a few details about your plans and we&apos;ll help you
                  take the next step.
                </p>
              </div>

              <div className="space-y-6">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;

                  return (
                    <div key={detail.label} className="flex gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-cyan-light text-cyan-dark">
                        <Icon size={21} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-ink">
                          {detail.label}
                        </h3>

                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="mt-1 block leading-7 text-muted transition-colors hover:text-cyan-dark"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="mt-1 leading-7 text-muted">
                            {detail.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </aside>

            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-7">
                <p className="eyebrow">Send an enquiry</p>

                <h2 className="display-font text-2xl font-semibold text-ink">
                  How can we help?
                </h2>

                <p className="mt-2 text-sm leading-6 text-muted">
                  Complete the form below and tell us a little about the
                  experience you&apos;re interested in.
                </p>
              </div>

              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
