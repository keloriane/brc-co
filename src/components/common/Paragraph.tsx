"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Stagger each line by 0.2 seconds
    },
  },
};

const lineVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Paragraph = ({ paragraph }: { paragraph: string }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  // Monitor the scroll progress for this component
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  useEffect(() => {
    // When the component is nearly in view (scroll progress > 0.1), start the animation.
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > 0.1) {
        controls.start("visible");
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, controls]);

  // Split the paragraph by newline characters. Filtering out any empty lines.
  const lines = paragraph.split(/\r?\n/).filter((line) => line.trim() !== "");

  return (
    <motion.div ref={ref} style={{ overflow: "hidden" }}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {lines.map((line, index) => (
          <motion.div
            key={index}
            variants={lineVariants}
            style={{ marginBottom: "1rem" }}
          >
            {line}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Paragraph;
