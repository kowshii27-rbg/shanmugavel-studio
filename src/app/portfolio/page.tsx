import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import PortfolioGallery from "@/components/PortfolioGallery";
import { portfolioCategories } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Wedding, portrait, product, and event photography portfolio from Chennai studio.",
};

export default function PortfolioPage() {
  return (
    <Section>
      <div className="space-y-8">
        <PageHeader
          kicker="Portfolio"
          title="Stories across weddings, portraits, family, product, and events"
          description="Hover to explore. Click any image for a closer look. Replace with your final galleries when ready."
        />
        <PortfolioGallery categories={portfolioCategories} />
      </div>
    </Section>
  );
}
