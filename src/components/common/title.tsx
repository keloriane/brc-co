"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Stagger each word by 0.1s
    },
  },
};

const wordVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Title = ({ title, className }: { title: string; className?: string }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  // useScroll tracks the scroll progress for the component (using the ref)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  useEffect(() => {
    // When the scroll progress is above a threshold (0.1 in this example), trigger the animation.
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.1) {
        controls.start("visible");
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, controls]);

  // Split the title into individual words
  const words = title.split(" ");

  return (
    <motion.div ref={ref}>
      <motion.h2
        className={`text-[#3A7498] uppercase mb-6 font-black text-2xl md:text-3xl overflow-hidden ${className}`}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            style={{ display: "inline-block", marginRight: "0.5rem" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>
    </motion.div>
  );
};

export default Title;
