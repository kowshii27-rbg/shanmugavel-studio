"use client";

import { useState } from "react";
import Image from "next/image";
import { clsx } from "clsx";
import Lightbox from "./Lightbox";
import type { PortfolioCategory } from "@/data/portfolio";

export default function PortfolioGallery({ categories }: { categories: PortfolioCategory[] }) {
  const [activeTab, setActiveTab] = useState(categories[0]?.id);
  const activeCategory = categories.find((c) => c.id === activeTab) ?? categories[0];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images = activeCategory?.images ?? [];

  const prev = () =>
    setActiveIndex((idx) => (idx === null ? idx : (idx - 1 + images.length) % images.length));
  const next = () => setActiveIndex((idx) => (idx === null ? idx : (idx + 1) % images.length));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={clsx(
              "rounded-full border px-4 py-2 text-sm transition",
              activeTab === category.id
                ? "border-[var(--accent)] bg-[var(--accent)] text-[#0b0b0d]"
                : "border-[var(--color-border)] bg-[var(--color-card)] text-foreground hover:border-[var(--accent)]"
            )}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, idx) => (
          <button
            key={image.id}
            onClick={() => setActiveIndex(idx)}
            className="group relative overflow-hidden rounded-xl bg-[var(--color-card)] focus-outline"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 transition group-hover:opacity-90" />
            <div className="absolute bottom-3 left-3 text-xs text-white">{image.alt}</div>
          </button>
        ))}
      </div>

      <Lightbox
        isOpen={activeIndex !== null}
        onClose={() => setActiveIndex(null)}
        onPrev={prev}
        onNext={next}
        image={activeIndex !== null ? images[activeIndex] : undefined}
      />
    </div>
  );
}
