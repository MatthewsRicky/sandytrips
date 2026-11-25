import { NextResponse } from "next/server";
import { Resend } from "resend";

import { enquirySchema } from "@/lib/validation/enquiry";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    const parsed = enquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the form fields.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const enquiry = parsed.data;

    // Honeypot: silently accept bot submissions.
    if (enquiry.website) {
      return NextResponse.json({
        success: true,
        message: "Your enquiry has been received.",
      });
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    const from = process.env.RESEND_FROM_EMAIL?.trim();
    const to = process.env.CONTACT_TO_EMAIL?.trim();

    if (!apiKey || !from || !to) {
      console.error("Enquiry email environment variables are missing.");

      return NextResponse.json(
        {
          success: false,
          message:
            "Our enquiry service is temporarily unavailable. Please contact us on WhatsApp.",
        },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);

    const subjectItem = enquiry.itemName ? ` — ${enquiry.itemName}` : "";

    const subject = `New ${enquiry.enquiryType} enquiry${subjectItem}`;

    const text = `
New Sandy Trips enquiry

Enquiry type: ${enquiry.enquiryType}
Name: ${enquiry.fullName}
Email: ${enquiry.email}
Phone / WhatsApp: ${enquiry.phone || "Not provided"}

Package / Hotel: ${enquiry.itemName || "Not specified"}
Reference: ${enquiry.itemSlug || "N/A"}

Preferred travel date: ${enquiry.travelDate || "Flexible"}
Travellers: ${enquiry.travellers || "Not specified"}

Message:
${enquiry.message}
    `.trim();

    const html = `
      <h2>New Sandy Trips enquiry</h2>

      <p><strong>Enquiry type:</strong> ${escapeHtml(enquiry.enquiryType)}</p>
      <p><strong>Name:</strong> ${escapeHtml(enquiry.fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(enquiry.email)}</p>
      <p><strong>Phone / WhatsApp:</strong> ${escapeHtml(enquiry.phone || "Not provided")}</p>

      <hr />

      <p><strong>Package / Hotel:</strong> ${escapeHtml(enquiry.itemName || "Not specified")}</p>
      <p><strong>Reference:</strong> ${escapeHtml(enquiry.itemSlug || "N/A")}</p>
      <p><strong>Preferred travel date:</strong> ${escapeHtml(enquiry.travelDate || "Flexible")}</p>
      <p><strong>Travellers:</strong> ${escapeHtml(enquiry.travellers || "Not specified")}</p>

      <hr />

      <p><strong>Message:</strong></p>
      <p>${escapeHtml(enquiry.message).replace(/\n/g, "<br />")}</p>
    `;

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: enquiry.email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("Resend enquiry error:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            "We could not send your enquiry. Please try WhatsApp instead.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your enquiry has been sent. Our team will get back to you.",
    });
  } catch (error) {
    console.error("Enquiry API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }
}
