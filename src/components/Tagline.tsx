import { clsx } from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Tagline({ children, className }: Props) {
  return (
    <span
      className={clsx(
        "inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-muted)]",
        className
      )}
    >
      {children}
    </span>
  );
}
