"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import React, { ReactNode, useState } from "react";

const Cta = ({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 100, damping: 10 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 10 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - left - width / 2);
    y.set(e.clientY - top - height / 2);
  };

  return (
    <div
      className={`relative p-[10px] border border-black inline-block overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute inset-0 bg-black"
        style={{
          borderRadius: hovered ? "0px" : "50%",
          opacity: hovered ? 1 : 0,
          width: hovered ? "100%" : 10,
          height: hovered ? "100%" : 10,
          x: smoothX,
          y: smoothY,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
      <Link
        href={href}
        className="relative text-[18px] uppercase font-semibold text-white z-10"
      >
        {children}
      </Link>
    </div>
  );
};

export default Cta;
