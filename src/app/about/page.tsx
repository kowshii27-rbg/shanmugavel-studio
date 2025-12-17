import Image from "next/image";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import Tagline from "@/components/Tagline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Shanmugavel Studio, our story, style, and milestones in Chennai photography.",
};

const portraitImage = {
  src: "/M C Prasath.jpeg",
  alt: "Lead photographer portrait placeholder", // TODO: replace with real portrait
};

const milestones = [
  { label: "Years documenting stories", value: "25+" },
  { label: "Weddings & sessions delivered", value: "850+" },
  { label: "Cities covered", value: "10+" },
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <PageHeader
            kicker="About"
            title="Shanmugavel Studio"
            description="Shanmugavel Studio is a Chennai-based photography studio with over 25 years of experience in capturing life’s most cherished moments. We specialize in wedding photography, event coverage, birthday celebrations, and engagement shoots, delivering timeless images with creativity and precision. Our commitment to quality and storytelling ensures every memory is preserved beautifully."
          >
            <Tagline>Chennai, India</Tagline>
          </PageHeader>
          <div className="relative h-80 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]">
            <Image
              src={portraitImage.src}
              alt={portraitImage.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6">
            <h2 className="text-2xl font-bold font-[var(--font-heading)]">Our Story</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Shanmugavel Studio began as a small portrait outfit in Chennai. A decade later, we run a full-service studio that blends clean lighting, empathetic direction, and disciplined delivery pipelines.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              We’re equally comfortable guiding nervous couples, collaborating with creative directors, or handling rapid-fire event coverage with backup gear and workflows.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6">
            <h2 className="text-2xl font-bold font-[var(--font-heading)]">Our Style</h2>
            <ul className="space-y-3 text-[var(--color-muted)]">
              {[
                "Candid storytelling with minimal intrusion",
                "Cinematic portraits with precise light shaping",
                "Editorial color grading and retouching",
                "Detail-driven product composition",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6">
          <h2 className="text-2xl font-bold font-[var(--font-heading)]">Behind the Studio</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {milestones.map((item) => (
              <div key={item.label} className="rounded-xl bg-black/30 p-4 text-center">
                <div className="text-3xl font-semibold text-foreground">{item.value}</div>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
