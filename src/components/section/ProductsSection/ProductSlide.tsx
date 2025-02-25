import React, { ReactNode } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Element } from "html-react-parser";

interface ProductSlideProps {
  title: string;
  description: ReactNode;
  src: StaticImageData | string;
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
        <h3 className="text-xl md:text-2xl mb-4 font-black">{title}</h3>

        {description}
        <Link href="#">En savoir plus</Link>
      </div>
    </div>
  );
};

export default ProductSlide;
