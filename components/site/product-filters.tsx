"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { ProductCategory } from "@/lib/products";
import { categoryLabels, products } from "@/lib/products";
import { cn } from "@/lib/utils";
import { ProductCard } from "@/components/site/product-card";

const allCategories = Object.keys(categoryLabels) as ProductCategory[];

export function ProductFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const active = searchParams.get("category") as ProductCategory | null;
  const validActive =
    active && allCategories.includes(active) ? active : null;

  const filtered = validActive
    ? products.filter((p) => p.category === validActive)
    : products;

  function setCategory(category: ProductCategory | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    const query = params.toString();
    router.push(query ? `/products?${query}` : "/products", { scroll: false });
  }

  return (
    <div className="space-y-10">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="فیلتر دسته محصول"
      >
        <FilterChip
          active={!validActive}
          onClick={() => setCategory(null)}
        >
          همه
        </FilterChip>
        {allCategories.map((cat) => (
          <FilterChip
            key={cat}
            active={validActive === cat}
            onClick={() => setCategory(cat)}
          >
            {categoryLabels[cat]}
          </FilterChip>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        {filtered.length} محصول نمایشی
        {validActive ? ` در دسته «${categoryLabels[validActive]}»` : ""}
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function FilterChip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-sm"
          : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}
