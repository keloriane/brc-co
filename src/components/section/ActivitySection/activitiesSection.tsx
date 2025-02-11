"use client";
import React, { useCallback, useRef, useState } from "react";
import Column from "@/components/common/Col/col";
import GridContainer from "@/components/common/Container/container";
import Paragraph from "@/components/common/Paragraph";
import Title from "@/components/common/title";

import productionIcon from "@/../public/productionIcon.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper"; // Import the Swiper type

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Activity from "./activity";

const activities = [
  {
    title: "Creation de marques",
    icon: productionIcon,
    heading: "import/ export de produits à base de CBD pour compte de tiers",
    description:
      "Notre objectif premier a toujours été de nous affranchir des fluctuations du marché. Pour ce faire, nous avons conclu des partenariats avec des fermiers situés en Suisse et en Italie, deux des marchés les plus aboutis en terme de production de chanvre séchée.",
    href: "/activity/production",
  },
  {
    title: "Vente en vrac",
    icon: productionIcon,
    heading: "Fleurs, hash, extraits concentrés, huiles…",
    description:
      "Notre objectif premier a toujours été de nous affranchir des fluctuations du marché. Pour ce faire, nous avons conclu des partenariats avec des fermiers situés en Suisse et en Italie, deux des marchés les plus aboutis en terme de production de chanvre séchée.",
    href: "/activity/production",
  },
  {
    title: "CBD HUB",
    icon: productionIcon,
    heading: "import/ export de produits à base de CBD pour compte de tiers",
    description:
      "Notre objectif premier a toujours été de nous affranchir des fluctuations du marché. Pour ce faire, nous avons conclu des partenariats avec des fermiers situés en Suisse et en Italie, deux des marchés les plus aboutis en terme de production de chanvre séchée.",
    href: "/activity/production",
  },
  {
    title: "Productions",
    icon: productionIcon,
    heading: "Marques tabac destinées à la grande distribution",
    description:
      "Notre objectif premier a toujours été de nous affranchir des fluctuations du marché. Pour ce faire, nous avons conclu des partenariats avec des fermiers situés en Suisse et en Italie, deux des marchés les plus aboutis en terme de production de chanvre séchée.",
    href: "/activity/production",
  },
];

const ActivitiesSection = () => {
  // Track the active slide index.
  const [activeIndex, setActiveIndex] = useState(0);
  // Create a ref to store the Swiper instance, with proper typing.
  const sliderRef = useRef<{ swiper: SwiperClass } | null>(null);

  // Handler to go to the previous slide.
  const handlePrev = useCallback(() => {
    if (sliderRef.current?.swiper) {
      sliderRef.current.swiper.slidePrev();
    }
  }, []);

  // Handler to go to the next slide.
  const handleNext = useCallback(() => {
    if (sliderRef.current?.swiper) {
      sliderRef.current.swiper.slideNext();
    }
  }, []);

  return (
    <section className="mt-[250px] mb-[150px] relative">
      <GridContainer columns={24}>
        <Column
          colStart={[2, 2, 2, 2, 2]}
          colEnd={[22, 22, 22, 7, 7]}
          className="flex items-center h-full justify-center"
        >
          <div>
            <Title title="Nos activités" />
            <Paragraph
              paragraph={`
    Grâce à notre position de leader sur le premier marché régulé du CBD au sein de l’U.E., nous avons développé des services pour tous types d’entreprises actives dans ce marché en pleine expansion.
    `}
            />
          </div>
        </Column>
        <Column
          colStart={[2, 2, 2, 8, 8]}
          colEnd={[27]}
          className="relative sm:p-0 p-5"
        >
          {/* Attach the ref to the Swiper component */}
          <Swiper
            speed={800}
            ref={sliderRef}
            slidesPerView={2.5}
            spaceBetween={30}
            loop
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              1: {
                // width: 576,
                slidesPerView: 1,
                centeredSlides: true,
              },
              576: {
                // width: 576,
                slidesPerView: 1,
                centeredSlides: true,
              },
              768: {
                // width: 768,
                slidesPerView: 1.5,
              },
              920: {
                // width: 768,
                slidesPerView: 2.5,
              },
            }}
          >
            {activities.map((activity, index) => (
              <SwiperSlide key={activity.title}>
                <Activity
                  title={activity.title}
                  heading={activity.heading}
                  icon={activity.icon}
                  description={activity.description}
                  active={activeIndex === index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation Buttons */}
          <div className="flex  gap-1 mt-6 ml-[19px]">
            <div className="cursor-pointer" onClick={handlePrev}>
              <svg
                width="54"
                height="51"
                viewBox="0 0 54 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="53.4051"
                  y="49.9769"
                  width="51.8629"
                  height="48.8629"
                  transform="rotate(-180 53.4051 49.9769)"
                  stroke="#2C3E50"
                  strokeWidth="1.13713"
                />
                <path
                  d="M16.1989 25.8616C15.7548 26.3056 15.7548 27.0256 16.1989 27.4697L23.4355 34.7064C23.8796 35.1505 24.5996 35.1505 25.0437 34.7064C25.4878 34.2623 25.4878 33.5423 25.0437 33.0982L18.6111 26.6656L25.0437 20.233C25.4878 19.789 25.4878 19.069 25.0437 18.6249C24.5996 18.1808 23.8796 18.1808 23.4355 18.6249L16.1989 25.8616ZM40.8828 25.5285L17.0029 25.5285L17.0029 27.8028L40.8828 27.8028L40.8828 25.5285Z"
                  fill="#797979"
                />
              </svg>
            </div>
            <div className="cursor-pointer" onClick={handleNext}>
              <svg
                width="54"
                height="51"
                viewBox="0 0 54 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.5422"
                  y="1.11402"
                  width="51.8629"
                  height="48.8629"
                  stroke="#2C3E50"
                  strokeWidth="1.13713"
                />
                <path
                  d="M38.7484 25.2294C39.1925 24.7853 39.1925 24.0653 38.7484 23.6212L31.5117 16.3845C31.0676 15.9404 30.3477 15.9404 29.9036 16.3845C29.4595 16.8286 29.4595 17.5486 29.9036 17.9927L36.3362 24.4253L29.9036 30.8579C29.4595 31.302 29.4595 32.022 29.9036 32.466C30.3477 32.9101 31.0676 32.9101 31.5117 32.466L38.7484 25.2294ZM14.0645 25.5624L37.9443 25.5624V23.2881L14.0645 23.2881V25.5624Z"
                  fill="#797979"
                />
              </svg>
            </div>
          </div>
        </Column>
      </GridContainer>
    </section>
  );
};

export default ActivitiesSection;
