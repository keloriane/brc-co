import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ActivityProps {
  icon: StaticImageData;
  title: string;
  heading: string;
  description: string;
  active: boolean;
}

const Activity = ({
  icon,
  title,
  heading,
  description,
  active,
}: ActivityProps) => {
  return (
    <div
      style={{ padding: "55px 27px", borderRadius: "5px" }}
      className={`flex flex-col gap-[18px] transition-all duration-300 min-h-[475px] p-4 max-w-[450px] m-auto ${
        active
          ? "bg-[#2C3E50] text-white"
          : "bg-[rgba(195,214,161,0.1)] text-[#3A7498]"
      }`}
    >
      <div className="flex flex-col gap-[18px]">
        {/* Wrapping the Image with a div that applies a filter */}
        <div
          className={`transition-all duration-300 ${
            active ? "filter brightness-0 invert" : ""
          }`}
        >
          <Image src={icon} alt="" width={50} height={50} />
        </div>
        <h3 className="text-[24px] uppercase font-black">{title}</h3>
      </div>
      <div>
        <h4 className="text-[22px] leading-[130%] font-medium">{heading}</h4>
      </div>
      <div className="pl-6 border-l border-lime-200">
        <p className="text-[16px] leading-[120%]">{description}</p>
      </div>
      <div>
        <Link href="#" className="font-black text-budGreen text-sm">
          {" "}
          En savoir plus
        </Link>
      </div>
    </div>
  );
};

export default Activity;
