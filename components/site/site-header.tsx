import Link from "next/link";
import { MobileNav } from "@/components/site/mobile-nav";
import { SiteLogo } from "@/components/site/site-logo";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "خانه" },
  { href: "/products", label: "محصولات" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <SiteLogo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="ناوبری اصلی">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex rounded-full px-5 shadow-sm">
            <Link href="/contact">مشاوره خرید</Link>
          </Button>
          <MobileNav links={links} />
        </div>
      </div>
    </header>
  );
}
