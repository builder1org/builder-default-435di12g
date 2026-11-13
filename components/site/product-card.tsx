import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Product, ProductCategory } from "@/lib/products";
import { categoryLabels } from "@/lib/products";
import { cn } from "@/lib/utils";

const placeholderClass: Record<ProductCategory, string> = {
  lip: "product-placeholder-lip",
  face: "product-placeholder-face",
  eyes: "product-placeholder-eyes",
  skincare: "product-placeholder-skincare",
  tools: "product-placeholder-tools",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-shadow hover:shadow-md">
      <div
        className={cn(
          "relative aspect-[4/5] w-full overflow-hidden",
          placeholderClass[product.category]
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
        <span className="absolute bottom-4 start-4 rounded-full bg-background/85 px-3 py-1 text-xs font-medium backdrop-blur-sm">
          {categoryLabels[product.category]}
        </span>
        {product.badge ? (
          <span className="absolute top-4 end-4 rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-semibold text-accent-foreground">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <h3 className="font-display text-lg font-semibold leading-snug">{product.name}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <p className="mt-auto pt-2 text-sm font-medium text-primary">{product.priceLabel}</p>
        <Link
          href="/contact"
          className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors group-hover:text-primary"
        >
          درخواست موجودی
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
