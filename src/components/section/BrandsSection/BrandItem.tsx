"use client";
import Image from "next/image";

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
  initial: { scaleX: 0, scaleY: 0 },
  hover: {
    scaleX: 1,
    scaleY: 1,

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
      delayChildren: 0.13, // Wait for the overlay to scale in (0.3s duration)
      staggerChildren: 0.15,
    },
  },
};

// Variant for each text item (title and description).
const textItemVariants = {
  initial: { y: 50 },
  hover: {
    y: 0,

    transition: { duration: 0.3 },
  },
};

type BrandItemProps = {
  src?: string;
  title: string;
  description: string;
  index?: number;
};

const BrandItem = ({ src, title, description }: BrandItemProps) => {
  // Create a motion version of Next.js's Link.
  // const MotionLink = motion.create(Link);

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
      className="relative flex items-center justify-center sm:w-[175px] sm:h-[175px]"
      style={{
        // border: index % 2 === 0 ? "1.5px solid #DCE7C8" : "1.5px solid #8DAEC3",
        border: "1px solid black",
        borderRadius: "5px",
      }}
    >
      {/* Image content */}
      <div className="flex flex-col m-auto w-[126px] items-center justify-center text-center gap-[10px]">
        <div className="h-[110px] flex items-center">
          {src ? (
            <div className="relative w-[105px] h-[85px]">
              <Image alt={title} src={src} fill className="object-contain" />
            </div>
          ) : (
            <h3 className="font-black text-budBlue uppercase">
              Plus de marques ?
            </h3>
          )}
        </div>
      </div>

      {/* Animated overlay using MotionLink */}
      <motion.div
        variants={linkVariants}
        // href="#"
        className="font-black pl-3 left-2 bottom-2 absolute w-full h-full overflow-hidden flex flex-col items-end justify-center bg-white z-30"
        style={{
          backgroundColor: src ? "#2C3E50" : "#DCE7C8",
          borderRadius: "5px",
          // transformOrigin: index % 2 === 1 ? "left bottom" : "right top ",
          transformOrigin: "left bottom",
        }}
        // Use transformTemplate to output a scale3d transform.
        transformTemplate={({ scaleX, scaleY }) =>
          `scale3d(${scaleX}, ${scaleY}, 1)`
        }
      >
        {/* SVG Icon (remains unchanged) */}
        <div className="left-[100%] p-2">
          <svg
            width="15"
            height="15"
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.2079 5.25024C18.138 5.45394 18.1 5.67249 18.1 5.8999V8.95024H4.25023V26.3H21.6V12.8998H25.1C25.1675 12.8998 25.2342 12.8965 25.3 12.8899V28C25.3 29.1046 24.4046 30 23.3 30H2.55023C1.44566 30 0.550232 29.1046 0.550232 28V7.25025C0.550232 6.14568 1.44566 5.25024 2.55023 5.25024H18.2079Z"
              fill={src ? "#DCE7C8" : "#2C3E50"}
            />
            <path
              d="M30.5 2.00006C30.5 1.17163 29.8284 0.500054 29 0.500052L15.5 0.500023C14.6716 0.500021 14 1.17159 14 2.00002C14 2.82845 14.6716 3.50002 15.5 3.50002L27.5 3.50005L27.5 15.5C27.5 16.3285 28.1715 17.0001 29 17.0001C29.8284 17.0001 30.5 16.3285 30.5 15.5001L30.5 2.00006ZM16.0607 17.0607L30.0607 3.06071L27.9394 0.93939L13.9393 14.9393L16.0607 17.0607Z"
              fill={src ? "#DCE7C8" : "#2C3E50"}
            />
          </svg>
        </div>

        {/* Text content container */}

        <motion.div
          variants={textContainerVariants}
          className="w-[175px] h-[175px] m-auto p-4"
        >
          <div className=" overflow-hidden ">
            <motion.h4
              variants={textItemVariants}
              className="sm:text-[12px] md:text-[20px] font-black text-white uppercase"
              style={{ color: src ? "#DCE7C8" : "#2C3E50" }}
            >
              {title}
            </motion.h4>
          </div>
          <div className="overflow-hidden">
            <motion.p
              variants={textItemVariants}
              className="sm:text-[10px] md:text-[16px] text-white font-medium"
            >
              {description}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BrandItem;
