"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import type { PortfolioCategory } from "@/data/portfolio";

export default function FeaturedGrid({ items }: { items: (PortfolioCategory["images"][number] & { category: string })[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = (idx: number) => setActiveIndex(idx);
  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((idx) => (idx === null ? idx : (idx - 1 + items.length) % items.length));
  const next = () => setActiveIndex((idx) => (idx === null ? idx : (idx + 1) % items.length));

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {items.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => open(idx)}
            className="group relative overflow-hidden rounded-xl bg-[var(--color-card)] focus-outline"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 transition group-hover:opacity-90" />
            <div className="absolute bottom-3 left-3 text-left text-xs uppercase tracking-wide text-white">
              <span className="rounded-full bg-black/50 px-3 py-1 backdrop-blur">{item.category}</span>
            </div>
          </button>
        ))}
      </div>
      <Lightbox
        isOpen={activeIndex !== null}
        onClose={close}
        onPrev={prev}
        onNext={next}
        image={activeIndex !== null ? items[activeIndex] : undefined}
      />
    </>
  );
}
