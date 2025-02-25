"use client";
import React, { useState } from "react";

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  href = "#",
  className = "",
}) => {
  // Whether the button is hovered (you can use this state for other effects)

  // The ripple state stores the circle's center (top, left) and its size in pixels
  const [ripple, setRipple] = useState<{
    top: number;
    left: number;
    size: string;
  }>({ top: 0, left: 0, size: "0px" });

  // When the mouse enters, calculate the ripple center and target size.
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Calculate a ripple size based on the maximum dimension of the button (times a factor)
    const rippleSize = Math.max(rect.width, rect.height) * 2.25;
    // Start with a zero-size circle at the mouse location
    setRipple({ top: y, left: x, size: "0px" });

    // Trigger the expansion on the next tick
    setTimeout(() => {
      setRipple({ top: y, left: x, size: `${rippleSize}px` });
    }, 0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple((prev) => ({ ...prev, top: y, left: x }));
  };

  // On mouse leave, reset the ripple to 0 size.
  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple((prev) => ({ ...prev, top: y, left: x, size: "0px" }));
  };

  return (
    <a
      href={href}
      className={`border border-budBlue px-6 py-2 relative inline-block text-[18px] overflow-hidden hover:text-white ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "color 0.4s ease-in-out, background-color 0.4s ease-in-out",
      }}
    >
      {children}
      <span
        className="absolute block rounded-full -translate-x-1/2 -translate-y-1/2 z-[-1] bg-budBlue"
        style={{
          top: ripple.top,
          left: ripple.left,
          width: ripple.size,
          height: ripple.size,
          transition: "width 0.4s ease-in-out, height 0.4s ease-in-out",
        }}
      />
    </a>
  );
};

export default AnimatedButton;
