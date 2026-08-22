import React from "react";
import Image from "next/image";
import uiUx from "../../public/assets/images/Group 3.svg";
import productDesign from "../../public/assets/images/Component 8.svg";
import sanlamHero from "../../public/assets/images/sanlamherocasestudy.webp";

const SanlamHero = () => {
  return (
    <div className="flex px-[16px] sm:px-[24px] md:px-[48px] max-w-[1311px] flex-col gap-[30px] sm:gap-[40px] md:gap-[57px] justify-center items-center mx-auto">
      <h1 className="text-title max-w-[978px] text-center font-tinyBrushy text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-normal leading-[normal]">
        Changing the experience of over 500,000 customers on how to manage
        their insurance products & make payments.
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start w-full justify-between gap-[12px]">
        <div className="hidden md:block">
          <Image src={productDesign} width={137} height={123} alt="product design" />
        </div>
        <div className="flex justify-center items-center">
          <Image
            width={704}
            height={571}
            className="max-w-full md:max-w-[704px] md:max-h-[571px] rounded-[20px]"
            src={sanlamHero}
            alt="sanlam hero image"
          />
        </div>
        <div className="hidden md:block">
          <Image src={uiUx} width={137} height={123} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SanlamHero;
