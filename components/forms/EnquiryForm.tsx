"use client";

import { useState, type FormEvent } from "react";
import { enquirySchema, type EnquiryInput } from "@/lib/validation/enquiry";
import { excursionPackages } from "@/data/packages/excursions";

type EnquiryType = "general" | "package" | "hotel" | "custom";

type EnquiryFormProps = {
  enquiryType?: EnquiryType;
  itemName?: string;
  itemSlug?: string;
};

type FormErrors = Partial<Record<keyof EnquiryInput, string[]>>;

const fieldClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-cyan focus:ring-2 focus:ring-cyan/15";

const labelClass = "mb-2 block text-sm font-semibold text-ink";

export default function EnquiryForm({
  enquiryType = "general",
  itemName = "",
  itemSlug = "",
}: EnquiryFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelDate: "",
    travellers: "",
    message: "",
    website: "",
    enquiryType,
    itemName,
    itemSlug,
  });

  function updateField(field: keyof typeof formData, value: string) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  }

  function handleEnquiryTypeChange(value: EnquiryType) {
    setFormData((current) => ({
      ...current,
      enquiryType: value,
      itemName: "",
      itemSlug: "",
    }));
  }

  function handleExcursionChange(slug: string) {
    const excursion = excursionPackages.find((item) => item.slug === slug);

    setFormData((current) => ({
      ...current,
      itemSlug: slug,
      itemName: excursion?.title ?? "",
    }));

    setErrors((current) => ({
      ...current,
      itemName: undefined,
      itemSlug: undefined,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("");
    setSuccess(false);
    setErrors({});

    const parsed = enquirySchema.safeParse(formData);

    if (!parsed.success) {
      setErrors(parsed.error.flatten().fieldErrors);
      setMessage("Please correct the highlighted fields.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setErrors(result.errors ?? {});
        setMessage(result.message || "Unable to send your enquiry.");
        return;
      }

      setSuccess(true);
      setMessage(result.message);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        travelDate: "",
        travellers: "",
        message: "",
        website: "",
        enquiryType: "general",
        itemName: "",
        itemSlug: "",
      });
    } catch {
      setMessage(
        "We could not connect to our server. Please try again or contact us on WhatsApp.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  function fieldError(field: keyof EnquiryInput) {
    return errors[field]?.[0];
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div>
        <label htmlFor="enquiryType" className={labelClass}>
          What are you enquiring about? *
        </label>

        <select
          id="enquiryType"
          name="enquiryType"
          value={formData.enquiryType}
          onChange={(event) =>
            handleEnquiryTypeChange(event.target.value as EnquiryType)
          }
          className={fieldClass}
          required
        >
          <option value="general">General enquiry</option>
          <option value="package">Excursion or safari</option>
          <option value="hotel">Beach hotel</option>
          <option value="custom">Custom travel arrangement</option>
        </select>
      </div>

      {formData.enquiryType === "package" && (
        <div>
          <label htmlFor="itemSlug" className={labelClass}>
            Select an excursion *
          </label>

          <select
            id="itemSlug"
            name="itemSlug"
            value={formData.itemSlug}
            onChange={(event) => handleExcursionChange(event.target.value)}
            className={fieldClass}
            required
          >
            <option value="">Choose an experience</option>

            {excursionPackages.map((excursion) => (
              <option key={excursion.slug} value={excursion.slug}>
                {excursion.title}
              </option>
            ))}
          </select>

          {fieldError("itemSlug") && (
            <p className="mt-1 text-sm text-red-600">
              {fieldError("itemSlug")}
            </p>
          )}
        </div>
      )}

      {(formData.enquiryType === "hotel" ||
        formData.enquiryType === "custom") && (
        <div>
          <label htmlFor="itemName" className={labelClass}>
            {formData.enquiryType === "hotel"
              ? "Hotel name (if known)"
              : "What do you have in mind?"}
          </label>

          <input
            id="itemName"
            name="itemName"
            value={formData.itemName}
            onChange={(event) => updateField("itemName", event.target.value)}
            maxLength={150}
            className={fieldClass}
            placeholder={
              formData.enquiryType === "hotel"
                ? "Enter a hotel name"
                : "Describe your travel plans"
            }
          />
        </div>
      )}

      {formData.itemName && (
        <div className="rounded-xl border border-cyan/20 bg-cyan-light p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-dark">
            Your enquiry
          </p>
          <p className="mt-1 font-semibold text-ink">{formData.itemName}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full name *
          </label>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            maxLength={100}
            required
            value={formData.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            className={fieldClass}
            placeholder="Your full name"
            aria-invalid={!!fieldError("fullName")}
          />
          {fieldError("fullName") && (
            <p className="mt-1 text-sm text-red-600">
              {fieldError("fullName")}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={150}
            required
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={fieldClass}
            placeholder="you@example.com"
            aria-invalid={!!fieldError("email")}
          />
          {fieldError("email") && (
            <p className="mt-1 text-sm text-red-600">{fieldError("email")}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            value={formData.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={fieldClass}
            placeholder="+254..."
          />
        </div>

        <div>
          <label htmlFor="travelDate" className={labelClass}>
            Preferred travel date
          </label>
          <input
            id="travelDate"
            name="travelDate"
            type="date"
            value={formData.travelDate}
            onChange={(event) => updateField("travelDate", event.target.value)}
            className={fieldClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="travellers" className={labelClass}>
            Number of travellers
          </label>
          <input
            id="travellers"
            name="travellers"
            type="number"
            min="1"
            max="100"
            value={formData.travellers}
            onChange={(event) => updateField("travellers", event.target.value)}
            className={fieldClass}
            placeholder="e.g. 2"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          How can we help? *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={2000}
          required
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
          className={fieldClass}
          placeholder="Tell us a little about the trip or stay you have in mind..."
          aria-invalid={!!fieldError("message")}
        />
        {fieldError("message") && (
          <p className="mt-1 text-sm text-red-600">{fieldError("message")}</p>
        )}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>

      {message && (
        <div
          role="status"
          aria-live="polite"
          className={`rounded-xl p-4 text-sm ${
            success
              ? "bg-cyan-light text-cyan-dark"
              : "bg-orange-light text-ink"
          }`}
        >
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting ? "Sending enquiry..." : "Send enquiry"}
      </button>

      <p className="text-xs leading-relaxed text-muted">
        Your details will only be used to respond to your enquiry.
      </p>
    </form>
  );
}
