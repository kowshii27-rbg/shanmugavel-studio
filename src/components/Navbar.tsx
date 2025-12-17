"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import { clsx } from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-40 w-full transition backdrop-blur",
        scrolled ? "bg-[#0b0b0d]/85 border-b border-[var(--color-border)]" : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[var(--color-card)]">
            <Image
              src="/svstudio-logo.png"
              alt="Shanmugavel Studio logo"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="font-[var(--font-heading)] text-base sm:text-lg">Shanmugavel Studio</div>
            <p className="text-xs text-[var(--color-muted)]">Chennai, India</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "transition hover:text-[var(--accent)]",
                  active && "text-[var(--accent)]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 sm:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            className="focus-outline rounded-full border border-[var(--color-border)] bg-[var(--color-card)] p-2"
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-[#0b0b0d]/95 sm:hidden">
          <Container>
            <div className="flex flex-col py-4 text-sm font-medium">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "py-3 transition hover:text-[var(--accent)]",
                      active && "text-[var(--accent)]"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
