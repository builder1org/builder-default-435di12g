import type { Metadata } from "next";
import { Playfair_Display, Vazirmatn } from "next/font/google";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "رزا بیوتی | لوازم آرایشی و مراقبت پوست",
    template: "%s | رزا بیوتی",
  },
  description:
    "فروشگاه لوازم آرایشی و مراقبت پوست — محصولات منتخب با کیفیت. نام فروشگاه و اطلاع تماس قابل تنظیم.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${playfair.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
