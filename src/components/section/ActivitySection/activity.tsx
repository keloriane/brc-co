import Image, { StaticImageData } from "next/image";
import React from "react";

const Activity = ({
  icon,
  title,
  heading,
  description,
}: {
  icon: StaticImageData;
  title: string;
  heading: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center ">
        <Image src={icon} alt="" width={30} height={30} />
        <h3 className="text-[16px] text-budBlue font-semibold">{title}</h3>
      </div>
      <div>
        <h4 className="text-[36px] leading-[130%] text-[#2C3E50] font-medium">
          {heading}
        </h4>
      </div>
      <div style={{ borderLeft: "1px solid #C3D6A1" }} className="pl-3 ml-4">
        <p className="text-[16px] leading-[120%]">{description}</p>
      </div>
    </div>
  );
};

export default Activity;
