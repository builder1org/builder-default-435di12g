export const dynamic = "force-dynamic";

import { BenefitsSection } from "@/components/sections/benefits-section";
import { CategoriesSection } from "@/components/sections/categories-section";
import { CtaSection } from "@/components/sections/cta-section";
import { DailyShowcaseSection } from "@/components/sections/daily-showcase-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DailyShowcaseSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <BenefitsSection />
      <CtaSection />
    </>
  );
}
