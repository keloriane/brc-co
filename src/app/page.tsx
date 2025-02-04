import React from "react";

import Hero from "@/components/section/HeroSection/hero";
import Menu from "@/components/common/menu";
import ProductsSection from "@/components/section/ProductsSection/ProductSection";
import BrandSection from "@/components/section/BrandsSection/brand";
import ActivitiesSection from "@/components/section/ActivitySection/activitiesSection";

export default function Home() {
  return (
    <>
      <main className="relative">
        <Menu />
        <Hero />
        <ProductsSection />
        <BrandSection />
        <ActivitiesSection />
      </main>
    </>
  );
}
