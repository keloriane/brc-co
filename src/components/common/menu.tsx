"use client";

import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import fleurs from "@/../public/fleurs.png";
import crude from "@/../public/crude.png";

const menuItems = [
  { name: "Nos activités", link: "/activites" },
  { name: "A propos", link: "/a-propos" },
  { name: "Marques", link: "/marques" },
  { name: "Nos produits", hasMegaMenu: true },
];

const productItems = [
  { name: "Fleurs CBD", image: fleurs },
  { name: "Huiles CBD", image: crude },
  { name: "Cosmétiques", image: fleurs },
  { name: "Vape", image: crude },
  { name: "Edibles", image: fleurs },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(productItems[0].image);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than the viewport height (100vh)
      if (window.scrollY > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Call handleScroll immediately to set the initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={twMerge(
        "fixed z-50 top-0 w-full p-4 transition-colors duration-300",
        scrolled ? "bg-white" : "bg-transparent"
      )}
    >
      <div className="flex justify-between items-center h-[50px]">
        <Logo color={scrolled ? "#2C3E50" : "white"} />

        {/* Desktop Menu */}
        <ul
          className={twMerge(
            "hidden md:flex space-x-6 font-semibold text-[20px] transition-colors duration-300",
            scrolled ? "text-[#2C3E50]" : "text-white"
          )}
          role="navigation"
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group hover:text-gray-300 cursor-pointer text-[17px]"
              onMouseEnter={() => item.hasMegaMenu && setMegaMenuOpen(true)}
              onMouseLeave={() => item.hasMegaMenu && setMegaMenuOpen(false)}
            >
              {item.hasMegaMenu ? (
                <span>{item.name}</span>
              ) : (
                <a href={item.link} className="focus:outline-none">
                  {item.name}
                </a>
              )}

              {/* Mega Menu */}
              {item.hasMegaMenu && (
                <AnimatePresence>
                  {megaMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, display: "none" }}
                      animate={{ opacity: 1, y: 0, display: "flex" }}
                      exit={{
                        opacity: 0,
                        y: -10,
                        transitionEnd: { display: "none" },
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute rounded-md left-[-250%] top-full mt-3 bg-white p-6 w-[800px] flex justify-between shadow-lg"
                    >
                      {/* Items List */}
                      <ul className="flex flex-col space-y-2">
                        {productItems.map((product, i) => (
                          <li
                            key={i}
                            className="text-black hover:text-gray-300 cursor-pointer"
                            onMouseEnter={() => setHoveredImage(product.image)}
                          >
                            {product.name}
                          </li>
                        ))}
                      </ul>

                      {/* Image Preview */}
                      <div className="w-40 h-40 relative">
                        <Image
                          src={hoveredImage}
                          alt={`Image de ${
                            productItems.find(
                              (item) => item.image === hoveredImage
                            )?.name || "produit"
                          }`}
                          fill
                          style={{ objectFit: "cover" }}
                          className="transition-all duration-300"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Button (Tablet & Mobile) */}
        <button
          className={twMerge(
            "md:hidden focus:outline-none transition-colors duration-300",
            scrolled ? "text-[#2C3E50]" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu mobile"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Contact Button */}
        <div
          role="button"
          className={twMerge(
            "hidden md:block px-4 py-2 rounded-md transition-colors duration-300",
            scrolled ? "text-[#2C3E50]" : "text-white"
          )}
        >
          <a href="/contact">Nous contacter</a>
        </div>
      </div>

      {/* Mobile Menu (Framer Motion Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-16 left-0 w-full p-6 md:hidden"
          >
            <ul className="flex flex-col space-y-4 text-lg uppercase font-semibold">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-gray-300 cursor-pointer text-center"
                  onClick={() => setIsOpen(false)}
                >
                  <a href={item.link || "#"}>{item.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
