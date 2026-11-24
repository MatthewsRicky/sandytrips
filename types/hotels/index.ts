export type HotelRegion = "diani" | "lamu" | "malindi" | "north-coast";

export type Hotel = {
  id: string;
  slug: string;
  name: string;
  region: HotelRegion;

  coverImage: {
    src: string;
    alt: string;
  };

  gallery: [
    { src: string; alt: string },
    { src: string; alt: string },
    { src: string; alt: string },
    { src: string; alt: string },
  ];

  status: "draft" | "published";
};
