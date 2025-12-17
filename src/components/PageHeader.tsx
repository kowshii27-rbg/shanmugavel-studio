import { clsx } from "clsx";
import Tagline from "./Tagline";
import type { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  kicker?: ReactNode;
  align?: "left" | "center";
  children?: ReactNode;
};

export default function PageHeader({ title, description, kicker, align = "left", children }: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={clsx("flex flex-col gap-4", alignment, align === "center" && "max-w-3xl")}>
      {kicker && (typeof kicker === "string" ? <Tagline>{kicker}</Tagline> : kicker)}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] leading-tight">
        {title}
      </h1>
      {description && <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed">{description}</p>}
      {children}
    </div>
  );
}
