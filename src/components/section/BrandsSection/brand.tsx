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
    title: "Gangster",
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
    title: "Gangster",
    description: `Rolling cannabis Bud Belgium`,
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
      <Column colStart={4} colEnd={18} className="w-full ">
        <div className="grid grid-cols-4 gap-5 grid-rows-3 justify-center">
          {brands.map((brand, i) => (
            <BrandItem
              src={brand.src}
              title={brand.title}
              key={brand.title}
              description={brand.description}
              index={i}
            />
          ))}
        </div>
      </Column>
    </GridContainer>
  );
};

export default BrandSection;
