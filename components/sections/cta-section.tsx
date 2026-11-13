import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-primary px-6 py-12 text-primary-foreground sm:px-12 sm:py-14">
        <div
          className="pointer-events-none absolute -end-20 -top-20 size-64 rounded-full bg-white/10 blur-3xl"
          aria-hidden
        />
        <div className="relative max-w-xl space-y-4">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            آماده شخصی‌سازی برای فروشگاه شما
          </h2>
          <p className="text-primary-foreground/90 leading-relaxed">
            نام برند، عکس محصول، درگاه پرداخت و شبکه‌های اجتماعی را بفرستید تا این
            قالب به فروشگاه زنده شما تبدیل شود.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full bg-background text-foreground hover:bg-background/90"
          >
            <Link href="/contact">تماس با ما</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
