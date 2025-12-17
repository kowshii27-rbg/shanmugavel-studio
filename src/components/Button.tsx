"use client";

import Link from "next/link";
import { forwardRef, ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

type Variant = "primary" | "ghost";
type Size = "sm" | "md" | "lg";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  href?: string;
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-[#0b0b0d] hover:brightness-110 shadow-[var(--shadow-strong)]",
  ghost:
    "border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus:outline-none focus-visible:ring focus-visible:ring-[var(--accent)]/60";

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, variant = "primary", size = "md", href, ...props }, ref) => {
    const classes = clsx(baseClasses, sizeClasses[size], variantClasses[variant], className);

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
