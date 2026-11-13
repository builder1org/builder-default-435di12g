import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductFilters } from "@/components/site/product-filters";

export const metadata: Metadata = {
  title: "محصولات",
  description: "مشاهده دسته‌بندی و محصولات نمونه لوازم آرایشی و مراقبت پوست.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <header className="mb-10 max-w-2xl">
        <h1 className="font-display text-4xl font-semibold">محصولات</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          کاتالوگ نمونه با قیمت‌های غیرقطعی. برای استعلام موجودی، از دکمه تماس در
          هر کارت یا صفحه تماس استفاده کنید.
        </p>
      </header>
      <Suspense
        fallback={
          <p className="text-sm text-muted-foreground" aria-live="polite">
            در حال بارگذاری فیلترها…
          </p>
        }
      >
        <ProductFilters />
      </Suspense>
    </div>
  );
}
