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
    { label: "Safaris", href: "/safaris" },
    { label: "Beach Holidays", href: "/holidays" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
