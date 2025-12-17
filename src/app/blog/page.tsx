import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Blog",
  description: "Photography tips, Chennai wedding guides, and studio updates from Shanmugavel Studio.",
};

export default function BlogPage() {
  notFound();
}
