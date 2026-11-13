import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "داستان و ارزش‌های نمونه فروشگاه لوازم آرایشی — قابل جایگزینی با محتوای واقعی.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="space-y-6">
          <h1 className="font-display text-4xl font-semibold">درباره رزا بیوتی</h1>
          <p className="leading-relaxed text-muted-foreground">
            این صفحه قالب متنی برای معرفی فروشگاه شماست. می‌توانید داستان تأسیس،
            معیار انتخاب برندها و رویکردتان به مشاوره آرایشی را اینجا بنویسید — بدون
            نیاز به ادعاهای تأییدنشده درباره تجربه یا جوایز.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            پیشنهاد: یک پاراگراف درباره مخاطب هدف (مثلاً آرایش روزانه یا مراقبت
            پوست حساس) و یک پاراگراف درباره نحوه سفارش و پشتیبانی واقعی فروشگاه.
          </p>
          <Button asChild className="rounded-full">
            <Link href="/contact">هماهنگی با تیم</Link>
          </Button>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="font-display text-xl font-semibold">ارزش ۱ — شفافیت</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              توضیح روشن خواص و کاربرد محصولات بدون وعده درمانی.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="font-display text-xl font-semibold">ارزش ۲ — همراهی</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              تماس انسانی قبل از خرید برای انتخاب رنگ و بافت مناسب.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-secondary/50 p-6">
            <h2 className="font-display text-xl font-semibold">جایگزینی محتوا</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              نام legal فروشگاه: [نام فروشگاه] — این متن را با بیوگرافی واقعی عوض
              کنید.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
