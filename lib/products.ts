export type ProductCategory =
  | "lip"
  | "face"
  | "eyes"
  | "skincare"
  | "tools";

export type Product = {
  id: string;
  name: string;
  description: string;
  priceLabel: string;
  category: ProductCategory;
  badge?: string;
};

export const categoryLabels: Record<ProductCategory, string> = {
  lip: "لب",
  face: "صورت",
  eyes: "چشم",
  skincare: "مراقبت پوست",
  tools: "ابزار",
};

export const products: Product[] = [
  {
    id: "velvet-rose-lip",
    name: "رژ لب مخملی رز",
    description: "بافت سبک، ماندگاری متوسط، مناسب استفاده روزانه.",
    priceLabel: "از ۴۹۰٬۰۰۰ تومان (نمونه)",
    category: "lip",
    badge: "پرطرفدار",
  },
  {
    id: "glow-foundation",
    name: "کرم پودر درخشان",
    description: "پوشش متوسط با فینیش طبیعی و مناسب انواع پوست.",
    priceLabel: "از ۱٬۲۹۰٬۰۰۰ تومان (نمونه)",
    category: "face",
  },
  {
    id: "soft-blush",
    name: "رژگونه پودری ملایم",
    description: "رنگ‌دهی قابل‌لایه‌بندی بدون برجستگی روی منافذ.",
    priceLabel: "از ۵۸۰٬۰۰۰ تومان (نمونه)",
    category: "face",
  },
  {
    id: "liner-precision",
    name: "خط چشم دقیق",
    description: "نوک نرم، ضد‌آب سبک، مناسب خط نازک و ضخیم.",
    priceLabel: "از ۳۲۰٬۰۰۰ تومان (نمونه)",
    category: "eyes",
  },
  {
    id: "lash-volume",
    name: "ریمل حجم‌دهنده",
    description: "فرمول بدون تکه‌تکه شدن؛ جدا کردن مژه‌ها.",
    priceLabel: "از ۴۱۰٬۰۰۰ تومان (نمونه)",
    category: "eyes",
    badge: "جدید",
  },
  {
    id: "hydrate-serum",
    name: "سرم آبرسان شبانه",
    description: "ملایم برای پوست حساس؛ قبل از مرطوب‌کننده.",
    priceLabel: "از ۸۹۰٬۰۰۰ تومان (نمونه)",
    category: "skincare",
  },
  {
    id: "cleanse-gel",
    name: "ژل شوینده ملایم",
    description: "پاک‌سازی آرایش سبک بدون خشکی.",
    priceLabel: "از ۵۲۰٬۰۰۰ تومان (نمونه)",
    category: "skincare",
  },
  {
    id: "brush-set",
    name: "ست براش مینی",
    description: "۵ قلم برای پایه، رژگونه و سایه.",
    priceLabel: "از ۷۶۰٬۰۰۰ تومان (نمونه)",
    category: "tools",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
