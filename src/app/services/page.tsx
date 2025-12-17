import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import Accordion from "@/components/Accordion";
import Button from "@/components/Button";
import { services, faqs } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "Photography services for weddings, portraits, product, events, and family shoots in Chennai.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      <Section>
        <PageHeader
          kicker="Services"
          title="Clear packages with room to customize"
          description="Choose a base package and add films, reels, or extra hours as needed."
        >
          <Button href="/contact">Book a session</Button>
        </PageHeader>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex h-full flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-lg"
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">{service.idealFor}</p>
                <h2 className="text-xl font-semibold text-foreground">{service.title}</h2>
                <p className="text-sm text-[var(--color-muted)]">{service.summary}</p>
                <p className="text-sm font-semibold text-[var(--accent)]">{service.price}</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
                {service.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="space-y-6">
          <PageHeader
            kicker="FAQ"
            title="Practical answers before you book"
            description="Payment schedules, reschedules, deliveries, and travel policies."
          />
          <Accordion items={faqs} />
        </div>
      </Section>
    </div>
  );
}
