import Link from "next/link";
import { ProductCard } from "@/components/site/product-card";
import { products } from "@/lib/products";

export function FeaturedProductsSection() {
  const featured = products.slice(0, 4);

  return (
    <section className="border-y border-border/60 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mb-10 text-center md:text-start">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">منتخب ویترین</h2>
          <p className="mt-2 text-muted-foreground">
            چهار پیشنهاد نمونه — آماده جایگزینی با کاتالوگ واقعی شما.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 flex justify-center md:justify-start">
          <Link
            href="/products"
            className="rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-secondary"
          >
            همه محصولات
          </Link>
        </div>
      </div>
    </section>
  );
}
