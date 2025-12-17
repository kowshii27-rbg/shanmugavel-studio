import Link from "next/link";
import Container from "./Container";
import { siteConfig } from "@/data/site";
import { Instagram, Facebook, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const socials = [
  { href: siteConfig.socials.instagram, label: "Instagram", icon: Instagram },
  { href: siteConfig.socials.facebook, label: "Facebook", icon: Facebook },
  { href: siteConfig.socials.whatsapp, label: "WhatsApp", icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[#0d0d10] py-10 text-sm text-[var(--color-muted)]">
      <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <div className="text-lg font-semibold text-foreground">{siteConfig.name}</div>
          <p className="text-[var(--color-muted)]">{siteConfig.description}</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-foreground">Visit</h3>
          <div className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5" />
            <p>{siteConfig.address}</p>
          </div>
          <p>{siteConfig.hours}</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-foreground">Contact</h3>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <Link href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</Link>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-foreground">Social</h3>
          <div className="flex items-center gap-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <Container className="mt-8 border-t border-[var(--color-border)] pt-6 text-xs flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Crafted in {siteConfig.city}.
        </p>
      </Container>
    </footer>
  );
}
