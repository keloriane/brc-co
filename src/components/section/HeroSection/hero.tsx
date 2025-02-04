"use client";
import React from "react";
import Head from "next/head";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./styles.module.css";
import { twMerge } from "tailwind-merge";

const text = "Buddy Belgium The first CBD hub of Europe".split(" ");

const wordVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1, ease: [0.39, 0.24, 0.3, 1] },
  },
};

const Hero = () => {
  // Grab the vertical scroll progress
  const { scrollY } = useScroll();
  // Create a parallax effect: as scrollY goes from 0 to 500,
  // the video shifts from 0px to 350px on the y-axis.
  const y = useTransform(scrollY, [0, 1000], [0, 350]);

  return (
    <>
      {/* Metadata for SEO */}
      <Head>
        <title>Buddy Belgium - The First CBD Hub of Europe</title>
        <meta
          name="description"
          content="Buddy Belgium is Europe's leading CBD hub, offering premium CBD products and resources for enthusiasts and businesses."
        />
      </Head>

      <header className="relative md:h-screen h-[50vh] w-screen overflow-hidden">
        {/* Background Video with parallax and load animation */}
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
          <source src="/videoplayback.mp4" type="video/mp4" />
        </motion.video>

        {/* Content Overlay */}
        <div
          className={twMerge(
            "absolute inset-0 flex items-end",
            styles.gradient
          )}
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
        </div>
      </header>
    </>
  );
};

export default Hero;
