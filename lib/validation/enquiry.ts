import { z } from "zod";

export const enquirySchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, "Please enter your full name.")
      .max(100, "Your name is too long."),

    email: z
      .string()
      .trim()
      .email("Please enter a valid email address.")
      .max(150, "Email address is too long."),

    phone: z
      .string()
      .trim()
      .max(40, "Phone number is too long.")
      .optional()
      .or(z.literal("")),

    enquiryType: z.enum(["general", "package", "hotel", "custom"], {
      message: "Please select an enquiry type.",
    }),

    itemName: z.string().trim().max(150).optional().or(z.literal("")),

    itemSlug: z.string().trim().max(150).optional().or(z.literal("")),

    travelDate: z.string().max(30).optional().or(z.literal("")),

    travellers: z.string().max(20).optional().or(z.literal("")),

    message: z
      .string()
      .trim()
      .min(10, "Please provide a little more detail.")
      .max(2000, "Your message is too long."),

    website: z.string().max(0).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.enquiryType === "package" && !data.itemSlug) {
      ctx.addIssue({
        code: "custom",
        path: ["itemSlug"],
        message: "Please select an excursion or safari.",
      });
    }
  });

export type EnquiryInput = z.infer<typeof enquirySchema>;
