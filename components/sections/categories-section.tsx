import Link from "next/link";
import type { ProductCategory } from "@/lib/products";
import { categoryLabels } from "@/lib/products";
import { cn } from "@/lib/utils";

const tiles: {
  category: ProductCategory;
  title: string;
  span: string;
  gradient: string;
}[] = [
  {
    category: "lip",
    title: "لب‌های جسورانه",
    span: "md:col-span-2 md:row-span-2",
    gradient: "product-placeholder-lip",
  },
  {
    category: "face",
    title: "پایه و رنگ‌گونه",
    span: "md:col-span-2",
    gradient: "product-placeholder-face",
  },
  {
    category: "eyes",
    title: "چشم‌نواز",
    span: "",
    gradient: "product-placeholder-eyes",
  },
  {
    category: "skincare",
    title: "مراقبت پوست",
    span: "",
    gradient: "product-placeholder-skincare",
  },
  {
    category: "tools",
    title: "ابزار حرفه‌ای",
    span: "md:col-span-2",
    gradient: "product-placeholder-tools",
  },
];

export function CategoriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">دسته‌بندی‌ها</h2>
          <p className="mt-2 max-w-lg text-muted-foreground">
            چیدمان bento برای کشف سریع — هر کارت به لیست فیلترشده محصولات می‌رود.
          </p>
        </div>
        <Link
          href="/products"
          className="text-sm font-medium text-primary hover:underline"
        >
          مشاهده همه
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
        {tiles.map((tile) => (
          <Link
            key={tile.category}
            href={`/products?category=${tile.category}`}
            className={cn(
              "group relative flex min-h-[140px] flex-col justify-end overflow-hidden rounded-2xl border border-border/50 p-4 transition-transform hover:-translate-y-0.5 md:min-h-[160px]",
              tile.span,
              tile.gradient
            )}
          >
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
            <span className="relative text-xs font-medium text-foreground/70">
              {categoryLabels[tile.category]}
            </span>
            <span className="relative font-display text-lg font-semibold text-foreground">
              {tile.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
