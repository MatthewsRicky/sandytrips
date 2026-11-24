# Sandy Trips — Beach Hotels scaffold

## Included routes

- `/beach-hotels`
- `/beach-hotels/diani`
- `/beach-hotels/lamu`
- `/beach-hotels/malindi`
- `/beach-hotels/north-coast`
- `/beach-hotels/[region]/[hotelSlug]`

## Included structure

- `types/hotels/index.ts`
- `data/hotels/` — region data, region configuration and registry
- `components/hotels/` — region cards, hotel cards, detail, gallery and enquiry components
- `app/beach-hotels/` — route pages and metadata

## Install

Copy the folders into the root of the existing Next.js project and merge any existing files rather than overwriting them blindly.

The scaffold assumes:
- the project uses the `@/*` path alias;
- Tailwind CSS is configured;
- `next/image` remote patterns already allow `sandytrips.com`;
- the existing global CSS provides `.container`, `.section-padding`, `.eyebrow`, `.section-description`, `.display-font`, `.button-accent`, and `.arrow-motion`.

## Gallery URL resolution is intentionally incomplete

The supplied gallery catalogue contains filenames, not full image URLs. Each gallery entry therefore stores its exact supplied `filename` and leaves `src` unset until the complete WordPress URL has been verified.

`HotelGallery` only renders entries with a verified `src`; it does not invent extensions, upload folders, or duplicate cover images.

Forodhani House is included with the four verified WordPress URLs:
- `https://sandytrips.com/wp-content/uploads/2021/09/Explore_adjusted_maison_2_2.png`
- `https://sandytrips.com/wp-content/uploads/2021/09/Explore_adjusted_maison_4_2.png`
- `https://sandytrips.com/wp-content/uploads/2021/09/Explore_adjusted_maison_9_2.png`
- `https://sandytrips.com/wp-content/uploads/2021/09/Explore_adjusted_recadre_e_siteweb_mg_1513_edit_copie_2.png`

## Catalogue notes preserved

- Neptune Village and Neptune Palm Beach have no gallery images.
- Peponi Hotel has no confirmed gallery set. The repeated Kijani House list was not assigned to Peponi.
- Zubeida's `woocommerce-placeholder` was excluded.
- Lantana Galu's `VV` item was excluded because it is not an identifiable image filename.
- Duplicate filenames elsewhere are preserved as supplied for later review.
- Existing source slugs for the hotel catalogue are represented as stable local slugs; confirm any legacy redirects before replacing the old WordPress URLs.
- Enquiry links use `/contact?hotel=<hotel-slug>`. The contact form still needs to read this query parameter and preselect the hotel if that behaviour is required.
