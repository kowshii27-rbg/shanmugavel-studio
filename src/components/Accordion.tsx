"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";

type Item = {
  question: string;
  answer: string;
};

type Props = {
  items: Item[];
};

export default function Accordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[var(--color-border)] border border-[var(--color-border)] rounded-xl bg-[var(--color-card)]">
      {items.map((item, idx) => {
        const open = openIndex === idx;
        return (
          <button
            key={item.question}
            onClick={() => setOpenIndex(open ? null : idx)}
            className="w-full text-left"
            aria-expanded={open}
          >
            <div className="flex items-center justify-between px-4 py-4 sm:px-6">
              <div className="space-y-1">
                <p className="font-medium text-foreground">{item.question}</p>
                {open && <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.answer}</p>}
              </div>
              <ChevronDown
                size={18}
                className={clsx(
                  "transition",
                  open && "rotate-180",
                  "text-[var(--color-muted)]"
                )}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}
