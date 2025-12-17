export type PortfolioCategory = {
  id: string;
  title: string;
  description: string;
  images: {
    id: string;
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: "weddings",
    title: "Weddings",
    description: "Cinematic wedding stories, from pheras to reception.",
    images: [
      {
        id: "wed-1",
        src: "/weddings/wedding-1.jpg",
        alt: "Bride and groom holding hands during ceremony",
        width: 1920,
        height: 1274,
      },
      {
        id: "wed-2",
        src: "/weddings/wedding-2.jpg",
        alt: "Bride in saree with jewelry holding mirror",
        width: 1365,
        height: 2048,
      },
      {
        id: "wed-3",
        src: "/weddings/wedding-3.jpg",
        alt: "Decorated wedding mandap with couple on stage",
        width: 1920,
        height: 1280,
      },
    ],
  },
  {
    id: "portraits",
    title: "Portraits",
    description: "Editorial portraits with cinematic light.",
    images: [
      {
        id: "por-1",
        src: "/portraits/portrait-1.png",
        alt: "Portrait of a woman",
        width: 572,
        height: 764,
      },
      {
        id: "por-2",
        src: "/portraits/portrait-2.jpg",
        alt: "Bride in saree with jewelry holding mirror",
        width: 3840,
        height: 5760,
      },
      {
        id: "por-3",
        src: "/portraits/portrait-3.jpg",
        alt: "Outdoor portrait",
        width: 1200,
        height: 1600,
      },
    ],
  },
  {
    id: "family",
    title: "Kids & Family",
    description: "Joyful, candid milestones for families.",
    images: [
      {
        id: "fam-1",
        src: "/family/family-1.jpg",
        alt: "Baby in a cradle",
        width: 3585,
        height: 5751,
      },
      {
        id: "fam-2",
        src: "/family/family-2.jpg",
        alt: "Father holding baby in cozy setting",
        width: 6000,
        height: 4000,
      },
      {
        id: "fam-3",
        src: "/family/family-3.jpg",
        alt: "Family portrait",
        width: 1200,
        height: 1500,
      },
    ],
  },
  {
    id: "product",
    title: "Product",
    description: "Crisp, high-conversion product visuals.",
    images: [
      {
        id: "prod-1",
        src: "/product/product-1.jpg",
        alt: "Skincare product bottle with minimal background",
        width: 2636,
        height: 3515,
      },
      {
        id: "prod-2",
        src: "/product/product-2.jpg",
        alt: "Makeup brushes and cosmetics arranged aesthetically",
        width: 4000,
        height: 6000,
      },
      {
        id: "prod-3",
        src: "/product/product-3.jpg",
        alt: "Lifestyle product",
        width: 1200,
        height: 1500,
      },
    ],
  },
  {
    id: "events",
    title: "Events",
    description: "Corporate and social event coverage.",
    images: [
      {
        id: "ev-1",
        src: "/events/event-1.jpg",
        alt: "Concert stage with lighting and crowd",
        width: 6000,
        height: 4000,
      },
      {
        id: "ev-2",
        src: "/events/event-2.jpg",
        alt: "Festival crowd at night with lights",
        width: 5322,
        height: 3553,
      },
      {
        id: "ev-3",
        src: "/events/events-3.jpg",
        alt: "Conference keynote",
        width: 1200,
        height: 1500,
      },
    ],
  },
];

export const featuredPortfolio = portfolioCategories.flatMap((cat) =>
  cat.images.slice(0, 2).map((image) => ({ ...image, category: cat.title }))
);
