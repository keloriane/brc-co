import React from "react";
import zion from "@/../public/zion.png";
import haya from "@/../public/haya.png";
import soil from "@/../public/soil.png";
import spliff from "@/../public/spliff.png";
import buddha from "@/../public/buddha.png";
import gangster from "@/../public/og-gangster.png";
import haze from "@/../public/haze.png";
import kief from "@/../public/kief.png";
import BrandItem from "./BrandItem";

import GridContainer from "@/components/common/Container/container";
import Column from "@/components/common/Col/col";

const brands = [
  { src: zion.src, title: "Zion", description: `Rolling cannabis Bud Belgium` },
  { src: haya.src, title: "Haya", description: `Rolling cannabis Bud Belgium` },
  { src: soil.src, title: "soil", description: `Rolling cannabis Bud Belgium` },
  {
    src: gangster.src,
    title: "Gangster Paradise",
    description: `Rolling cannabis Bud Belgium`,
  },
  { src: haya.src, title: "Haya", description: `Rolling cannabis Bud Belgium` },
  {
    src: spliff.src,
    title: "spliff",
    description: `Rolling cannabis Bud Belgium`,
  },
  {
    src: buddha.src,
    title: "buddha",
    description: `Rolling cannabis Bud Belgium`,
  },
  {
    src: spliff.src,
    title: "spliff",
    description: `Rolling cannabis Bud Belgium`,
  },
  { src: soil.src, title: "soil", description: `Rolling cannabis Bud Belgium` },
  { src: kief.src, title: "kief", description: `Rolling cannabis Bud Belgium` },

  {
    src: gangster.src,
    title: "Green & CO",
    description: `Cigarettes au CBD`,
  },
  { src: haze.src, title: "haze", description: `Rolling cannabis Bud Belgium` },
];

const BrandSection = () => {
  return (
    <GridContainer columns={20} className="w-full mt-[150px] gap-y-[100px]">
      <Column colStart={2} colEnd={14} className="max-w-[660px]">
        <h2 className="text-budBlue uppercase mb-6 font-black text-2xl md:text-3xl">
          Nos produits
        </h2>
        <h3 className="text-[24px] text-budDarkGreen font-[700]">
          Grâce à notre position de leader sur le premier marché régulé du CBD
          au sein de l’U.E.{" "}
        </h3>
      </Column>
      <Column colStart={5} colEnd={18} className="w-full p-5 ">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3  justify-center items-center max-w-[1000px]">
          {brands.map((brand, i) => (
            <BrandItem
              src={brand.src}
              title={brand.title}
              description={brand.description}
              key={i}
              index={i}
            />
          ))}
        </div>
      </Column>
    </GridContainer>
  );
};

export default BrandSection;
