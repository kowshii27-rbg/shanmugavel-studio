"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { clsx } from "clsx";

type LightboxImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  image?: LightboxImage;
  onPrev?: () => void;
  onNext?: () => void;
};

export default function Lightbox({ isOpen, onClose, image, onPrev, onNext }: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur"
      role="dialog"
      aria-modal="true"
    >
      <button
        className="absolute right-4 top-4 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] p-2 text-foreground transition hover:border-[var(--accent)]"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={18} />
      </button>
      <div className="relative w-full max-w-4xl">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="h-auto w-full rounded-2xl object-contain shadow-2xl"
          sizes="100vw"
        />
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 text-sm text-[var(--color-muted)]">
          <button
            onClick={onPrev}
            className={clsx(
              "rounded-full bg-black/50 px-3 py-2 backdrop-blur transition",
              !onPrev && "opacity-50"
            )}
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            onClick={onNext}
            className={clsx(
              "rounded-full bg-black/50 px-3 py-2 backdrop-blur transition",
              !onNext && "opacity-50"
            )}
            aria-label="Next image"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
