import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="hero-mesh relative overflow-hidden border-b border-border/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            کلکسیون بهاره — نمونه نمایشی
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.15] sm:text-5xl lg:text-[3.25rem]">
            زیبایی روزانه،
            <span className="text-primary"> با ظرافت </span>
            و اطمینان از انتخاب
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            رزا بیوتی فضایی برای کشف رژ لب، آرایش صورت و مراقبت پوست است. محصولات
            این صفحه نمونه‌اند؛ پس از تأیید شما، عکس و قیمت واقعی جایگزین می‌شود.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/products">مشاهده محصولات</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/about">داستان ما</Link>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-xl">
            <div className="absolute inset-0 product-placeholder-face opacity-90" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.15),transparent_45%)]" />
            <div className="absolute inset-x-0 bottom-0 space-y-2 p-6 text-card-foreground">
              <p className="font-display text-2xl font-semibold">آرایش نرم، پوست سالم</p>
              <p className="text-sm text-foreground/80">
                ترکیب محصولات صورت و مراقبت — قابل سفارشی‌سازی برای برند شما
              </p>
            </div>
          </div>
          <div
            className="absolute -top-6 -start-6 hidden size-28 rounded-full bg-accent/40 blur-2xl lg:block"
            aria-hidden
          />
          <div
            className="absolute -bottom-8 -end-4 size-36 rounded-full bg-primary/25 blur-3xl"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
