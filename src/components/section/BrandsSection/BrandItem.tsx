"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// Dummy container variants so children can inherit the "hover" state.
const containerVariants = {
  initial: {},
  hover: {},
};

// Variant for the overlay using a 3D scale effect.
// It scales from 0 to 1 along both X and Y axes.
const linkVariants = {
  initial: { scaleX: 0, scaleY: 0, opacity: 0 },
  hover: {
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

// Variant for the text container.
// We delay the children's animations until after the overlay scaling completes,
// and stagger each child's animation.
const textContainerVariants = {
  initial: {},
  hover: {
    transition: {
      delayChildren: 0.12, // Wait for the overlay to scale in (0.3s duration)
      staggerChildren: 0.15,
    },
  },
};

// Variant for each text item (title and description).
const textItemVariants = {
  initial: { y: 20, opacity: 0 },
  hover: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

type BrandItemProps = {
  src: string;
  title: string;
  description: string;
  index: number;
};

const BrandItem = ({ src, title, description, index }: BrandItemProps) => {
  // Create a motion version of Next.js's Link.
  const MotionLink = motion(Link);

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
      className="relative flex items-center justify-center w-[240px] h-[240px]"
      style={{
        border: index % 2 === 0 ? "1.5px solid #DCE7C8" : "1.5px solid #8DAEC3",
      }}
    >
      {/* Image content */}
      <div className="flex flex-col m-auto w-[136px] items-center justify-center text-center gap-[10px]">
        <div className="h-[200px] flex items-center">
          <Image alt={title} src={src} width={166} height={105} />
        </div>
      </div>

      {/* Animated overlay using MotionLink */}
      <MotionLink
        variants={linkVariants}
        href="#"
        className="text-[24px] font-black p-5 absolute left-3 bottom-3 w-full h-full overflow-hidden flex flex-col items-end justify-center"
        style={{
          backgroundColor: index % 2 === 0 ? "#262B1E" : "#2C3E50",
          transformOrigin: "left bottom",
        }}
        // Use transformTemplate to output a scale3d transform.
        transformTemplate={({ scaleX, scaleY }) =>
          `scale3d(${scaleX}, ${scaleY}, 1)`
        }
      >
        {/* SVG Icon (remains unchanged) */}
        <div className="absolute top-5 left-[80%] z-30">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5 2C18.5 1.17157 17.8284 0.5 17 0.5H3.5C2.67157 0.5 2 1.17157 2 2C2 2.82843 2.67157 3.5 3.5 3.5H15.5V15.5C15.5 16.3284 16.1716 17 17 17C17.8284 17 18.5 16.3284 18.5 15.5V2ZM3.06066 18.0607L18.0607 3.06066L15.9393 0.93934L0.93934 15.9393L3.06066 18.0607Z"
              fill="#DCE7C8"
            />
          </svg>
        </div>

        {/* Text content container */}

        <motion.div variants={textContainerVariants} className="w-[190px]">
          <motion.h4
            variants={textItemVariants}
            className="text-[24px] font-black text-white uppercase"
          >
            {title}
          </motion.h4>
          <motion.p
            variants={textItemVariants}
            className="text-[16px] text-white font-medium"
          >
            {description}
          </motion.p>
        </motion.div>
      </MotionLink>
    </motion.div>
  );
};

export default BrandItem;
