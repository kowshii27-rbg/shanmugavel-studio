import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import Tagline from "@/components/Tagline";
import { testimonials } from "@/data/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Client testimonials for Shanmugavel Studio weddings, portraits, product, and events.",
};

export default function TestimonialsPage() {
  return (
    <Section>
      <div className="space-y-10">
        <PageHeader
          kicker="Testimonials"
          title="Trusted by couples, brands, and families"
          description="Real notes from shoots across Chennai and beyond."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.id} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-lg">
              <Tagline className="text-[10px]">{t.shoot}</Tagline>
              <p className="mt-3 text-base leading-relaxed">“{t.quote}”</p>
              <div className="mt-4 text-sm font-semibold text-[var(--accent)]">{t.name}</div>
              {t.rating && <div className="mt-2 text-xs text-[var(--color-muted)]">{"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}</div>}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
