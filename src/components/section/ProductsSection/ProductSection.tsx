"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import fleurs from "@/../public/fleurs.png";
import crude from "@/../public/Crude.png";
import resine from "@/../public/gelatokushpolm.webp";
import ProductSlide from "./ProductSlide";
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.scss";
import { Swiper as SwiperType } from "swiper";

const products = [
  {
    title: "Fleurs de chanvre",
    src: fleurs,
    description: `
      Grâce à notre position de leader sur le premier marché régulé du CBD au sein de l’U.E., nous avons développé des services pour tous types d’entreprises actives dans ce marché en pleine expansion. 
      Grâce à notre position de leader sur le premier marché régulé du CBD au sein de l’U.E., nous avons développé des services pour tous types d’entreprises actives dans ce marché en pleine expansion.
    `,
  },
  {
    title: "Huiles de CBD",
    src: crude,
    description: `
      Grâce à notre position de leader sur le premier marché régulé du CBD au sein de l’U.E., nous avons développé des services pour tous types d’entreprises actives dans ce marché en pleine expansion. 
      Grâce à notre position de leader sur le premier marché régulé du CBD au sein de l’U.E., nous avons développé des services pour tous types d’entreprises actives dans ce marché en pleine expansion.
    `,
  },
  {
    title: "Résines et Hash",
    src: resine,
    description: `
      Grâce à notre position de leader sur le premier marché régulé du CBD au sein de l’U.E., nous avons développé des services pour tous types d’entreprises actives dans ce marché en pleine expansion. 
      Grâce à notre position de leader sur le premier marché régulé du CBD au sein de l’U.E., nous avons développé des services pour tous types d’entreprises actives dans ce marché en pleine expansion.
    `,
  },
  {
    title: "Extrait concentré",
    src: fleurs,
    description: `
      Grâce à notre position de leader sur le premier marché régulé du CBD au sein de l’U.E., nous avons développé des services pour tous types d’entreprises actives dans ce marché en pleine expansion. 
      Grâce à notre position de leader sur le premier marché régulé du CBD au sein de l’U.E., nous avons développé des services pour tous types d’entreprises actives dans ce marché en pleine expansion.
    `,
  },
];

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const swiperRef = useRef<SwiperType | null>(null);

  // Change slide when a tab is clicked
  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <section
      className={twMerge(
        "products-list text-white px-4 mt-12 md:mt-20 lg:mt-32",
        styles.sectionContainer
      )}
    >
      <h2 className="text-[#3A7498] uppercase text-center mb-6 font-black text-2xl md:text-3xl">
        Nos produits
      </h2>

      {/* Tabs Navigation */}
      <div className="relative w-full flex justify-center mb-8">
        <nav className="w-[90%] sm:w-[80%] lg:w-[48%] p-2  rounded-full flex justify-center">
          <ul className="flex w-full max-w-xl">
            {products.map((product, index) => (
              <li
                key={index}
                onClick={() => handleTabClick(index)}
                className={`relative z-10 flex-1 cursor-pointer px-4 py-2 text-center flex items-center justify-center text-sm md:text-base ${
                  activeTab === index
                    ? "text-[#E8EDD4] font-semibold"
                    : "text-gray-800"
                }`}
              >
                {product.title}
                {/* Animate Background on Active Tab */}
                {activeTab === index && (
                  <motion.div
                    layoutId="tabHighlight"
                    className="absolute inset-0 bg-[#3A7498] rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Swiper Slider */}
      <div className="mt-8">
        <Swiper
          modules={[Navigation, Pagination, EffectCreative]}
          centeredSlides={true}
          spaceBetween={20}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
          breakpoints={{
            480: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            840: { slidesPerView: 1.3 },
            1024: { slidesPerView: 1.5 },
            1280: { slidesPerView: 1.5 },
          }}
          className="w-full"
        >
          {products.map((product, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <div
                className={twMerge(
                  "slide-inner transition-transform duration-300 ease-out",
                  i === activeTab && "translate-up"
                )}
              >
                <ProductSlide
                  title={product.title}
                  src={product.src}
                  alt={product.title}
                  description={product.description}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductsSection;
