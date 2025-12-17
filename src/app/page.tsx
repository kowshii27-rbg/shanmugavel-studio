import Button from "@/components/Button";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import Tagline from "@/components/Tagline";
import FeaturedGrid from "@/components/FeaturedGrid";
import { featuredPortfolio } from "@/data/portfolio";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";

const heroVideo = {
  src: "/herosection-video.mp4", // Place the video file in /public/herosection-video.mp4
  alt: "Studio hero reel",
};

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    address: siteConfig.address,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: 'https://shanmugavelstudio.photography',
    priceRange: '₹₹₹',
    image: heroVideo.src,
    areaServed: siteConfig.city,
    sameAs: Object.values(siteConfig.socials),
  };

  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <video
            src={heroVideo.src}
            aria-label={heroVideo.alt}
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0b0b0d]" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-center px-6 py-20 sm:px-8 lg:px-12">
          <Tagline>Chennai Photography Studio</Tagline>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl font-[var(--font-heading)]">
            Welcome to Shanmugavel Photography!
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-muted)]">
            Weddings, portraits, products, and events crafted with cinematic light, same-day previews, and meticulous retouching.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">Book a Session</Button>
            <Button href="/portfolio" variant="ghost" size="lg">View Portfolio</Button>
          </div>
          <p className="mt-8 text-sm text-[var(--color-muted)]">
            In-studio and on-location shoots across Chennai, South India. Same-day preview selects available.
          </p>
        </div>
      </section>

      <Section>
        <PageHeader
          kicker="Featured Work"
          title="Highlights across weddings, portraits, products, and events"
          description="A quick look at how we balance authentic emotion, clean composition, and purposeful lighting."
        />
        <div className="mt-8">
          <FeaturedGrid items={featuredPortfolio} />
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <PageHeader
            kicker="Services"
            title="Tailored sessions that respect timelines and budgets"
            description="Built for couples, founders, families, and brands needing reliable, refined visuals."
          />
          <div className="grid w-full gap-4 sm:grid-cols-2 lg:w-1/2">
            {services.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{service.summary}</p>
                <p className="mt-3 text-sm font-medium text-[var(--accent)]">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 shadow-lg lg:grid-cols-3">
          <PageHeader
            kicker="Why Work With Us"
            title="Studio advantages for decisive, beautiful deliverables"
            description="We plan light, logistics, and delivery so you can stay present."
          />
          <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
            {["In-studio & on-location options", "Same-day preview selects", "Professional retouching & color", "Shotlists with backup plans", "Private gallery delivery"].map((point) => (
              <div key={point} className="flex gap-3 rounded-xl bg-black/30 p-4">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                <p className="text-sm text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <PageHeader
            kicker="Kind Words"
            title="Clients who trusted us"
            description="Real notes from weddings, portraits, and brand shoots."
          >
            <Button href="/testimonials" variant="ghost">View all testimonials</Button>
          </PageHeader>
          <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.id} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5">
                <p className="text-sm text-[var(--color-muted)]">{t.shoot}</p>
                <p className="mt-2 text-base leading-relaxed">“{t.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-[var(--accent)]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-[var(--color-border)] bg-gradient-to-r from-[#111] to-[#0b0b0d] p-10 shadow-[var(--shadow-strong)]">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <Tagline>Ready when you are</Tagline>
              <h2 className="text-3xl font-bold font-[var(--font-heading)]">Book your session</h2>
              <p className="text-[var(--color-muted)]">Share your dates and vision—we’ll respond with availability and the best-fit package.</p>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact">Book a Session</Button>
                <Button href="/portfolio" variant="ghost">See portfolio</Button>
              </div>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-black/40 p-5 text-sm text-[var(--color-muted)]">
              <p>
                Call/WhatsApp: <a href={`tel:${siteConfig.phone}`} className="text-foreground">{siteConfig.phone}</a>
              </p>
              <p className="mt-2">Email: {siteConfig.email}</p>
              <p className="mt-2">Studio: {siteConfig.address}</p>
              <p className="mt-2">Hours: {siteConfig.hours}</p>
            </div>
          </div>
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </div>
  );
}
