import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { contactConfig } from "@/data/contact";

type WhatsAppButtonProps = {
  message?: string;
  label?: string;
  floating?: boolean;
  className?: string;
};

export default function WhatsAppButton({
  message = contactConfig.whatsappGreeting,
  label = "Chat on WhatsApp",
  floating = false,
  className = "",
}: WhatsAppButtonProps) {
  const number = contactConfig.whatsappNumber;

  if (!number) return null;

  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={
        floating
          ? "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
          : `button-secondary inline-flex items-center justify-center gap-2 ${className}`
      }
    >
      <MessageCircle size={floating ? 25 : 18} />
      {!floating && label}
    </Link>
  );
}
