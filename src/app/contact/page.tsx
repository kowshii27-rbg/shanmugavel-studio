import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Tagline from "@/components/Tagline";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description: "Book Shanmugavel Studio for weddings, portraits, products, and events in Chennai.",
};

export default function ContactPage() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <PageHeader
            kicker="Contact"
            title="Book your shoot"
            description="Tell us about your event, timeline, and deliverables. We respond within one business day."
          />
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 text-sm text-[var(--color-muted)]">
            <p className="flex items-center gap-2">
              <span className="text-[var(--accent)]">•</span> Call/WhatsApp: <a href={`tel:${siteConfig.phone}`} className="text-foreground">{siteConfig.phone}</a>
            </p>
            <p className="mt-2">Email: {siteConfig.email}</p>
            <p className="mt-2">Studio: {siteConfig.address}</p>
            <p className="mt-2">Hours: {siteConfig.hours}</p>
            <div className="mt-4 overflow-hidden rounded-xl border border-[var(--color-border)] bg-black/30">
  <div className="relative h-64 w-full">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1484908349207!2d80.2172379758577!3d13.02621441367695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526781d1324ac9%3A0x8e66f1017b18932d!2sShanmugavel%20Digital%20Studio!5e0!3m2!1sen!2sin!4v1765884061548!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>
          </div>
        </div>
        <div className="space-y-3">
          <Tagline>Booking Form</Tagline>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
