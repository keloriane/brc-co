"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import BrandItem from "./BrandItem";
import GridContainer from "@/components/common/Container/container";
import Column from "@/components/common/Col/col";
import { actualBrands } from "./brands";

// The complete list of brand items (without the trigger)

const BrandSection = () => {
  // State that controls whether extra brands are shown
  const [showAll, setShowAll] = useState(false);

  // Decide how many items to show initially
  const initialBrands = actualBrands.slice(0, 8);
  // The rest of the items to animate in once the trigger is clicked.
  const extraBrands = actualBrands.slice(8);

  return (
    <section>
      <GridContainer columns={20} className="w-full mt-[150px] gap-y-[100px]">
        <Column colStart={2} colEnd={14} className="max-w-[660px]">
          <h2 className="text-budBlue uppercase mb-6 font-black text-2xl md:text-3xl">
            Nos produits
          </h2>
          <h3 className="text-[24px] text-budDarkGreen font-[700]">
            Grâce à notre position de leader sur le premier marché régulé du CBD
            au sein de l’U.E.
          </h3>
        </Column>
        <Column colStart={5} colEnd={18} className="w-full p-5">
          <div className="flex flex-wrap justify-center gap-[24px] items-center w-full max-w-[1340px]">
            {/* Always render the initial brands */}
            {initialBrands.map((brand, i) => (
              <BrandItem
                key={i}
                src={brand.src}
                title={brand.title}
                description={brand.description}
                index={i}
              />
            ))}
            <AnimatePresence>
              {showAll &&
                extraBrands.map((brand, i) => (
                  <motion.div
                    key={brand.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: i * 0.025 }}
                  >
                    <BrandItem
                      src={brand.src}
                      title={brand.title}
                      description={brand.description}
                      index={i + initialBrands.length}
                    />
                  </motion.div>
                ))}
            </AnimatePresence>

            {!showAll && (
              <div
                className="cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setShowAll(true);
                }}
              >
                <BrandItem title="Toute les marques" description="" />
              </div>
            )}
          </div>
        </Column>
      </GridContainer>
    </section>
  );
};

export default BrandSection;
