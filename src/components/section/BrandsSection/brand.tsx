import React from "react";
import zion from "@/../public/brand/Zion.svg";
import elfbar from "@/../public/brand/Elfbar.svg";
import vova from "@/../public/brand/Vova.svg";
import buddha from "@/../public/brand/Buddha.svg";
import spliff from "@/../public/brand/Spliff.svg";
import oyl from "@/../public/brand/OYL.svg";
import kief from "@/../public/brand/Kief.svg";
import haze from "@/../public/brand/Haze.svg";
import BrandItem from "./BrandItem";

import GridContainer from "@/components/common/Container/container";
import Column from "@/components/common/Col/col";

const brands = [
  { src: zion, title: "Zion", description: `Rolling cannabis Bud Belgium` },
  { src: elfbar, title: "Elfbar", description: `Rolling cannabis Bud Belgium` },
  { src: vova, title: "Vova", description: `Rolling cannabis Bud Belgium` },
  { src: buddha, title: "Buddha", description: `Rolling cannabis Bud Belgium` },
  { src: spliff, title: "Spliff", description: `Rolling cannabis Bud Belgium` },
  { src: oyl, title: "Oyl", description: `Rolling cannabis Bud Belgium` },
  { src: kief, title: "Kief", description: `Rolling cannabis Bud Belgium` },
  { src: haze, title: "Haze", description: `Rolling cannabis Bud Belgium` },
  { title: "Toute les marques", description: `` },
];

const BrandSection = () => {
  return (
    <section>
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
          <div className="flex flex-wrap justify-center gap-[24px] items-center w-full max-w-[1240px]">
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
    </section>
  );
};

export default BrandSection;
