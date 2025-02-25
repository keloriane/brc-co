import React from "react";
import { GutenbergBlock } from "@/types/GuttenBergBlock";
import AnimatedButton from "./common/Burron";
import Hero from "./section/HeroSection/hero";
import { Heading } from "@/components/common/Heading";
import ProductsSection from "./section/ProductsSection/ProductSection";
import Image from "next/image";

interface BlockRendererProps {
  blocks: GutenbergBlock[];
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks }) => {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  console.log(blocks);

  return (
    <>
      {blocks.map((block, index) => {
        const { name, attributes, innerBlocks, id } = block;

        // Handle special cases with specific logic
        switch (name) {
          case "core/cover":
            return (
              <Hero key={id} blocks={innerBlocks} attributes={attributes}>
                <BlockRenderer
                  blocks={innerBlocks}
                  key={block.id || `block-${index}`}
                />
              </Hero>
            );

          case "core/columns": {
            const columnsClass =
              attributes?.className || "grid grid-cols-2 gap-6";
            return columnsClass === "product-slider" ? (
              <React.Suspense
                key={block.id || `block-${index}`}
                fallback={<div>Loading...</div>}
              >
                <div className="flex flex-col">
                  <BlockRenderer
                    blocks={innerBlocks}
                    key={block.id || `block-${index}`}
                  />
                </div>
              </React.Suspense>
            ) : (
              <div></div>
            );
          }
          case "core/column":
            return (
              <div className="flex flex-col">
                <BlockRenderer
                  blocks={innerBlocks}
                  key={block.id || `block-${index}`}
                />
              </div>
            );
          case "core/group": {
            const columnsClass =
              attributes?.className || "grid grid-cols-2 gap-6";
            return columnsClass === "product-slider" ? (
              <React.Suspense
                key={block.id || `block-${index}`}
                fallback={<div>Loading...</div>}
              >
                <ProductsSection key={id} block={block} />
              </React.Suspense>
            ) : (
              <div></div>
            );
          }
          case "core/paragraph":
            return <p key={id}>{attributes?.content || ""}</p>;

          case "core/heading":
            return (
              <Heading
                key={id}
                textAlign={attributes?.textAlign}
                level={attributes?.level}
                content={attributes?.content}
                textColor={
                  "#000" // Default color
                }
              />
            );

          case "core/buttons":
            return (
              <div key={id} className="flex gap-4 z-20">
                {innerBlocks?.map((innerBlock) => (
                  <BlockRenderer key={innerBlock.id} blocks={[innerBlock]} />
                ))}
              </div>
            );

          case "core/image":
            return (
              <Image
                key={id}
                src={attributes?.url || ""}
                alt={attributes?.alt || ""}
                style={{ maxWidth: "100%" }}
              />
            );

          case "core/button":
            return (
              <AnimatedButton href={attributes?.url} key={id}>
                {attributes?.content}
              </AnimatedButton>
            );
        }
      })}
    </>
  );
};
