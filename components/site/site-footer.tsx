import Link from "next/link";
import { SiteLogo } from "@/components/site/site-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <SiteLogo />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            مجموعه‌ای از لوازم آرایشی و مراقبت پوست با تمرکز بر کیفیت و تجربه خرید
            آرام. اطلاعات تماس را با داده‌های واقعی فروشگاه خود جایگزین کنید.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">دسترسی سریع</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/products" className="hover:text-foreground">
                همه محصولات
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-foreground">
                درباره ما
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-foreground">
                تماس و پشتیبانی
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">تماس</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>تلفن: [شماره تماس]</li>
            <li>ایمیل: [ایمیل فروشگاه]</li>
            <li>ساعات پاسخ‌گویی: [ساعات کاری]</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/80 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} [نام فروشگاه] — قیمت‌های نمایشی نمونه هستند.
      </div>
    </footer>
  );
}
