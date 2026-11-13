import type { Metadata } from "next";
import { ContactForm } from "@/components/site/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "تماس",
  description: "فرم تماس و اطلاعات ارتباطی placeholder فروشگاه لوازم آرایشی.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-8">
          <div>
            <h1 className="font-display text-4xl font-semibold">تماس با ما</h1>
            <p className="mt-3 max-w-md text-muted-foreground leading-relaxed">
              برای مشاوره رنگ، موجودی یا سفارش عمده، فرم را پر کنید یا از اطلاعات
              زیر — پس از جایگزینی با داده واقعی — استفاده کنید.
            </p>
          </div>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
              <span>
                <span className="font-medium">تلفن</span>
                <br />
                <span className="text-muted-foreground" dir="ltr">
                  [شماره تماس]
                </span>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
              <span>
                <span className="font-medium">ایمیل</span>
                <br />
                <span className="text-muted-foreground">[ایمیل فروشگاه]</span>
              </span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
              <span>
                <span className="font-medium">آدرس</span>
                <br />
                <span className="text-muted-foreground">[آدرس فروشگاه]</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
