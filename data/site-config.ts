export const siteConfig = {
  name: "Sandy Trips",
  legalName: "Sandy Trips",
  description:
    "Discover unforgettable coastal excursions, safari adventures and beach holidays in Kenya.",

  url: "https://sandytrips.com",

  contact: {
    email: "",
    phone: "",
    whatsapp: "",
    address: "",
  },

  social: {
    facebook: "",
    instagram: "",
    tiktok: "",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Beach Holidays", href: "/beach-hotels" },
    { label: "About Us", href: "/about" },
    {
      label: "Our Fleet",
      href: "/fleet",
    },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
