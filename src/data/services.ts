export type Service = {
  id: string;
  title: string;
  summary: string;
  idealFor: string;
  price: string;
  inclusions: string[];
};

export type Faq = {
  question: string;
  answer: string;
};

export const services: Service[] = [
  {
    id: "wedding",
    title: "Wedding Collections",
    summary: "Full-day coverage with cinematic storytelling and luxury albums.",
    idealFor: "Traditional + candid coverage across all wedding events",
    price: "Starts at ₹25,000 - ₹50,000",
    inclusions: [
      "Up to 10 hours of coverage",
      "2 photographers + 1 cinematographer",
      "Same-day preview set"
    ],
  },
  {
    id: "portrait",
    title: "Portrait Sessions",
    summary: "Studio or outdoor editorial portraits with custom styling.",
    idealFor: "Individuals, founders, artists, graduates",
    price: "Starts at ₹8,500",
    inclusions: [
      "90-minute session",
      "2-3 looks, light direction",
      "12 retouched portraits",
      "Online gallery delivery",
    ],
  },
  {
    id: "family",
    title: "Kids & Family",
    summary: "Candid, heartfelt milestones for newborns and families.",
    idealFor: "Newborns, maternity, birthdays, family days",
    price: "Starts at ₹12,000",
    inclusions: [
      "Up to 3-hour session",
      "Studio props & wardrobe guidance",
      "20 edited images",
      "Photo-film add-on available",
    ],
  },
  {
    id: "product",
    title: "Product & Brand",
    summary: "Conversion-focused visuals for ecommerce and campaigns.",
    idealFor: "D2C, marketplaces, catalog, hero creatives",
    price: "Starts at ₹18,000",
    inclusions: [
      "Shot list + lighting plan",
      "Up to 30 SKUs / day",
      "Retouching + cutouts",
      "Video snippets on request",
    ],
  },
  {
    id: "events",
    title: "Events & Corporate",
    summary: "Sharp documentation of conferences and launches.",
    idealFor: "Corporate events, summits, launches, social gatherings",
    price: "Starts at ₹15,000",
    inclusions: [
      "Multi-cam coverage",
      "Same-day social selects",
      "Private download gallery"
    ],
  },
];

export const faqs: Faq[] = [
  {
    question: "How do I book and confirm a date?",
    answer:
      "Share your shoot details via the form or WhatsApp. A 30% retainer confirms the date; balance is due on delivery.",
  },
  {
    question: "Can we reschedule if plans change?",
    answer:
      "One reschedule is allowed with 72 hours notice, subject to availability. Retainers are transferable to the new date.",
  },
  {
    question: "What is the usual turnaround time?",
    answer:
      "Portraits: 5-7 working days. Weddings/events: preview in 48 hours, full delivery in 3-5 weeks depending on scope.",
  },
  {
    question: "How will I receive the photos?",
    answer:
      "You’ll get an online gallery with download links. Albums and prints can be ordered as add-ons.",
  },
  {
    question: "Do you travel outside Chennai?",
    answer:
      "Yes. Travel and stay are billed at actuals. We often cover weddings across South India.",
  },
  {
    question: "Do you offer video or reels?",
    answer:
      "We partner with a trusted cinematography team. Social-first reels and teasers can be added to any package.",
  },
];
