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
import { GutenbergBlock } from "@/types";
import parse from "html-react-parser";

const ProductsSection = ({ block }: { block: GutenbergBlock }) => {
  const [activeTab, setActiveTab] = useState(0);

  const products = block.innerBlocks;

  const swiperRef = useRef<SwiperType | null>(null);

  console.log(products[0].attributes.data);

  // Change slide when a tab is clicked
  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index); // Use slideToLoop for proper index navigation
    }
  };

  return (
    <section
      className={twMerge(
        "products-list text-white px-4 mt-2 md:mt-2 lg:mt-2",
        styles.sectionContainer
      )}
    >
      {/* <h2 className="text-[#3A7498] uppercase text-center mb-6 font-black text-2xl md:text-3xl">
        Nos produits
      </h2> */}

      <div className="relative w-full sm:flex hidden justify-center mb-8">
        <nav className="border border-budDarkBlue p-2 rounded-full flex justify-center">
          <ul className="flex w-full max-w-xl">
            {products.map((product, index) => (
              <li
                key={index}
                onClick={() => handleTabClick(index)}
                className={`relative font-semibold z-10 flex-1 cursor-pointer px-4 py-2 text-center flex items-center justify-center text-sm md:text-base ${
                  activeTab === index ? "text-budGreen " : "text-budDarkGreen"
                }`}
              >
                {product.attributes.data.title}

                {activeTab === index && (
                  <motion.div
                    layoutId="tabHighlight"
                    className="absolute inset-0 bg-[#353921] rounded-full z-[-1]"
                    transition={{ stiffness: 300, damping: 25 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-8">
        <Swiper
          modules={[Navigation, Pagination, EffectCreative]}
          centeredSlides={true}
          spaceBetween={20}
          pagination={{ clickable: true }}
          loop // Enable loop mode
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveTab(swiper.realIndex)} // Use realIndex here
          breakpoints={{
            40: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            840: { slidesPerView: 1.5 },
            1024: { slidesPerView: 1.6 },
            1280: { slidesPerView: 1.8 },
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
                  title={product.attributes.data.title}
                  src={"/#"}
                  alt={product.attributes.data.title}
                  description={parse(product.attributes.data.description)}
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
