import React from "react";
import Image, { type StaticImageData } from "next/image";

type FlowShowcaseProps = {
  title: string;
  description?: string;
  image: StaticImageData;
  alt: string;
};

const FlowShowcase = ({ title, description, image, alt }: FlowShowcaseProps) => {
  return (
    <div className="pt-[30px] sm:pt-[40px] md:pt-[48px]">
      <h1 className="text-body text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal] font-tinyBrushy">
        {title}
      </h1>

      {description && (
        <p className="text-title pt-[12px] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
          {description}
        </p>
      )}

      <div className="pt-[30px] sm:pt-[40px] md:pt-[56px]">
        <Image
          src={image}
          width={1313}
          height={730}
          alt={alt}
          className="w-full rounded-[10px] sm:rounded-[15px] md:rounded-[20px]"
        />
      </div>
    </div>
  );
};

export default FlowShowcase;
