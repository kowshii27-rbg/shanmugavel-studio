import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return {
    title: "Blog Post",
    description: "Photography studio blog post",
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  void params;
  notFound();
}
