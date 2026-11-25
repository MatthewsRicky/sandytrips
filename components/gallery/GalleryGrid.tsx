"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

import { galleryImages } from "@/data/gallery";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const categories = [
    "All",
    ...Array.from(new Set(galleryImages.map((image) => image.category))),
  ];

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  function navigateImage(direction: number) {
    if (activeIndex === null) return;

    setActiveIndex(
      (activeIndex + direction + filteredImages.length) % filteredImages.length,
    );
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (activeIndex === null) return;

      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        navigateImage(1);
      }

      if (event.key === "ArrowLeft") {
        navigateImage(-1);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, filteredImages.length]);

  return (
    <>
      <div className="mb-9 flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setActiveIndex(null);
              }}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-cyan text-ink"
                  : "border border-border bg-white text-muted hover:border-cyan hover:text-ink"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
        {filteredImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`View image: ${image.alt}`}
            className={`group relative overflow-hidden rounded-xl bg-surface text-left ${
              index % 7 === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="absolute bottom-3 left-3 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.category}
              </span>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && filteredImages[activeIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close gallery"
            className="absolute right-5 top-5 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              navigateImage(-1);
            }}
            aria-label="Previous image"
            className="absolute left-3 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
          >
            <ArrowLeft size={22} />
          </button>

          <div
            className="flex max-h-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={filteredImages[activeIndex].src}
              alt={filteredImages[activeIndex].alt}
              width={300}
              height={200}
              priority
              className="max-h-[75vh] w-auto rounded-lg object-contain"
            />

            <div className="mt-5 text-center text-white">
              <p className="text-sm font-medium">
                {filteredImages[activeIndex].alt}
              </p>

              <p className="mt-2 text-xs text-white/60">
                {activeIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              navigateImage(1);
            }}
            aria-label="Next image"
            className="absolute right-3 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
          >
            <ArrowRight size={22} />
          </button>
        </div>
      )}
    </>
  );
}
