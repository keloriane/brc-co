import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface ProductSlideProps {
  title: string;
  description: string;
  src: StaticImageData;
  alt: string;
}

const ProductSlide: React.FC<ProductSlideProps> = ({
  title,
  description,
  src,
  alt,
}) => {
  return (
    <div className="bg-[#fefefe] border border-[#D9D9D9] text-gray-800 grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-16 rounded-md">
      <div className="flex items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={315}
          height={245}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-xl md:text-2xl font-bold mb-4 font-black">
          {title}
        </h3>
        <p className="mb-4 text-base md:text-lg">{description}</p>
        <Link href="#">En savoir plus</Link>
      </div>
    </div>
  );
};

export default ProductSlide;
