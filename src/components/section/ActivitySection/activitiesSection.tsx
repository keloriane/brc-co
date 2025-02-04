"use client";
import Column from "@/components/common/Col/col";
import GridContainer from "@/components/common/Container/container";
import Paragraph from "@/components/common/Paragraph";
import Title from "@/components/common/title";

import React from "react";
import productionIcon from "@/../public/productionIcon.svg";

import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

import Activity from "./activity";

const activities = [
  {
    title: "production",
    icon: productionIcon,
    heading: "Marques tabac destinées à la grande distribution",
    description:
      "Notre objectif premier a toujours été de nous affranchir des fluctuations du marché. Pour ce faire, nous avons conclu des partenariats avec des fermiers situés en Suisse et en Italie, deux des marchés les plus aboutis en terme de production de chanvre séchée.",
    href: "/activity/production",
  },
  {
    title: "White Labelling",
    icon: productionIcon,
    heading: "Marques tabac destinées à la grande distribution",
    description:
      "Notre objectif premier a toujours été de nous affranchir des fluctuations du marché. Pour ce faire, nous avons conclu des partenariats avec des fermiers situés en Suisse et en Italie, deux des marchés les plus aboutis en terme de production de chanvre séchée.",
    href: "/activity/production",
  },
  {
    title: "Marque Blanche",
    icon: productionIcon,
    heading: "Marques tabac destinées à la grande distribution",
    description:
      "Notre objectif premier a toujours été de nous affranchir des fluctuations du marché. Pour ce faire, nous avons conclu des partenariats avec des fermiers situés en Suisse et en Italie, deux des marchés les plus aboutis en terme de production de chanvre séchée.",
    href: "/activity/production",
  },
  {
    title: "Import/Export",
    icon: productionIcon,
    heading: "Marques tabac destinées à la grande distribution",
    description:
      "Notre objectif premier a toujours été de nous affranchir des fluctuations du marché. Pour ce faire, nous avons conclu des partenariats avec des fermiers situés en Suisse et en Italie, deux des marchés les plus aboutis en terme de production de chanvre séchée.",
    href: "/activity/production",
  },
];

const ActivitiesSection = () => {
  return (
    <section className="mt-[150px] mb-[150px]">
      <GridContainer columns={24}>
        <Column
          colStart={2}
          colEnd={7}
          className="flex items-center h-full justify-center"
        >
          <div>
            <Title title="Nos activités" />
            <Paragraph
              paragraph={`
    Grâce à notre position de leader sur le premier marché régulé du CBD au sein de l’U.E., nous avons développé des services pour tous types d’entreprises actives dans ce marché en pleine expansion.
    `}
            ></Paragraph>
          </div>
        </Column>
        <Column colStart={8} colEnd={24}>
          <Swiper slidesPerView={2.5} spaceBetween={30}>
            {activities.map((activity) => (
              <SwiperSlide key={activity.title} className="mySwiper">
                <Activity
                  title={activity.title}
                  heading={activity.heading}
                  icon={activity.icon}
                  description={activity.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Column>
      </GridContainer>
    </section>
  );
};

export default ActivitiesSection;
