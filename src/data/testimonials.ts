export type Testimonial = {
  id: string;
  name: string;
  shoot: string;
  quote: string;
  rating?: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ananya & Rohit",
    shoot: "Wedding",
    quote:
      "They captured every ritual with warmth and zero intrusion. The preview reel in 24 hours blew our families away!",
    rating: 5,
  },
  {
    id: "t2",
    name: "Karthik S.",
    shoot: "Portraits",
    quote:
      "Lighting direction was spot-on and the edits felt premium. Perfect headshots for my startup PR kit.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Little Vedika",
    shoot: "Kids & Family",
    quote:
      "Patient, playful, and so gentle with our newborn. We got both posed and candid memories in one relaxed session.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Ivy Naturals",
    shoot: "Product",
    quote:
      "They planned the lighting grid in advance and delivered consistent ecommerce-ready images plus lifestyle hero shots.",
    rating: 5,
  },
];
