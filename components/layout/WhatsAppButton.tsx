import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function WhatsAppButton() {
  const number = siteConfig.contact.whatsapp.replace(/\D/g, "");

  if (!number) return null;

  const message = encodeURIComponent(
    "Hello Sandy Trips! I'd like to enquire about your travel experiences.",
  );

  const whatsappUrl = `https://wa.me/${number}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sandy Trips on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle size={26} strokeWidth={2} />
    </a>
  );
}
