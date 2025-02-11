import React from "react";
import Column from "@/components/common/Col/col";
import GridContainer from "@/components/common/Container/container";

import Cta from "@/components/common/Cta/Cta";
import Image from "next/image";
import tract from "@/../public/tract.png";

const AboutSection = () => {
  return (
    <>
      <section className="mt-[278px] text-budDarkBlue">
        <GridContainer columns={24}>
          <Column colStart={6} colEnd={20}>
            <p className="text-[24px] leading-[50px]">
              Comme bon nombre de success stories des temps modernes, c’est dans
              un garage de banlieue que Buddy voit le jour un soir de juillet
              2018. Face à l’engouement autour du CBD en Europe et suite à
              l’ouverture successive d’un nombre impressionnant de magasins en
              Belgique, notre équipe de jeunes entrepreneurs bruxellois se
              réunit alors avec l’ambition de devenir l’un des acteurs
              incontournables du cannabis en Belgique.
            </p>
            <Cta href="/about" className="mt-[45px]">
              About us
            </Cta>
          </Column>
        </GridContainer>
      </section>
      <section className=" mt-[278px] text-budDarkBlue">
        <GridContainer columns={24}>
          <Column colStart={1} colEnd={12} className="h-[666.66px]">
            <Image src={tract} alt="" fill className=" object-cover" />
          </Column>
          <Column
            colStart={14}
            colEnd={24}
            className="flex h-full items-center justify-center flex-col gap-[38px]"
          >
            <h3 className="font-medium text-[36px]">
              Grâce à notre position de leader sur le premier marché régulé du
              CBD au sein de l’U.E.{" "}
            </h3>
            <p className="text-[24px] leading-[50px]">
              Comme bon nombre de success stories des temps modernes, c’est dans
              un garage de banlieue que Buddy voit le jour un soir de juillet
              2018. Face à l’engouement autour du CBD en Europe et suite à
              l’ouverture successive d’un nombre impressionnant de magasins en
              Belgique, notre équipe de jeunes entrepreneurs bruxellois se
              réunit alors avec l’ambition de devenir l’un des acteurs
              incontournables du cannabis en Belgique.
            </p>
          </Column>
        </GridContainer>
      </section>
    </>
  );
};

export default AboutSection;
