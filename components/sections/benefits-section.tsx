import { Droplets, Leaf, ShieldCheck, Truck } from "lucide-react";

const items = [
  {
    icon: Leaf,
    title: "انتخاب آگاهانه",
    text: "دسته‌بندی شفاف و توضیح کاربرد هر محصول نمونه (بدون ادعای پزشکی).",
  },
  {
    icon: Droplets,
    title: "بافت و فینیش",
    text: "تمرکز روی حس محصول در توضیحات — قابل هماهنگی با برند واقعی شما.",
  },
  {
    icon: ShieldCheck,
    title: "خرید مطمئن",
    text: "فرآیند تماس و مشاوره قبل از ثبت سفارش نهایی.",
  },
  {
    icon: Truck,
    title: "ارسال",
    text: "جزئیات ارسال پس از تنظیم با [نام فروشگاه] درج می‌شود.",
  },
] as const;

export function BenefitsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <h2 className="font-display text-center text-3xl font-semibold sm:text-4xl">
        چرا از اینجا شروع کنید؟
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
        این بخش‌ها قابل ویرایش‌اند تا با سیاست واقعی فروشگاه شما یکی شود.
      </p>
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm"
          >
            <item.icon className="size-8 text-primary" aria-hidden />
            <h3 className="mt-4 font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
