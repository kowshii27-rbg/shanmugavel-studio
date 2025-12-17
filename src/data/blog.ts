export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  thumbnail: string;
  content: string[];
};

// Blog feature removed – keeping an empty array so any leftover imports stay type-safe.
export const blogPosts: BlogPost[] = [];
