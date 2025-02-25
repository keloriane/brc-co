"use client";
import React, { ReactNode } from "react";
import Head from "next/head";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./styles.module.css";
import { twMerge } from "tailwind-merge";
import { GutenbergBlock } from "@/types";

const wordVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1, ease: [0.39, 0.24, 0.3, 1] },
  },
};

const Hero = ({
  children,
  blocks,
  attributes,
}: {
  children: ReactNode;
  blocks: GutenbergBlock[];
  attributes: { url: string };
}) => {
  const text =
    `${blocks[0].attributes.content} ${blocks[1].attributes.content}`.split(
      " "
    );
  // Grab the vertical scroll progress
  const { scrollY } = useScroll();
  // Create a parallax effect: as scrollY goes from 0 to 500,
  // the video shifts from 0px to 350px on the y-axis.
  const y = useTransform(scrollY, [0, 1000], [0, 350]);

  return (
    <header className="relative md:h-screen h-[50vh] w-screen overflow-hidden">
      <motion.video
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <source src={attributes.url} type="video/mp4" />
      </motion.video>

      {/* Content Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={twMerge("absolute inset-0 flex items-end", styles.gradient)}
      >
        <div className="mb-[100px] px-4 max-w-[900px] md:ml-[40px] ">
          {/* Animated Title */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="text-white lg:text-[87px] md:text-[47px] text-[32px] leading-[120%] font-black text-left uppercase"
          >
            {text.map((word, i) => (
              <motion.span key={i} className="inline-block overflow-hidden">
                <motion.span variants={wordVariants} className="inline-block">
                  {word}&nbsp;
                </motion.span>
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;
