export type HotelRegionSlug = "diani" | "lamu" | "malindi" | "north-coast";

export type HotelImage = {
  /**
   * The exact WordPress filename supplied in the source catalogue.
   * `src` is populated only when its complete image URL has been verified.
   */
  filename: string;
  alt: string;
  src?: string;
};

export type Hotel = {
  id: string;
  slug: string;
  name: string;
  region: HotelRegionSlug;
  coverImage: {
    src: string;
    alt: string;
  };
  gallery: HotelImage[];
  status: "published" | "draft";
};

export type HotelRegion = {
  slug: HotelRegionSlug;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
};
