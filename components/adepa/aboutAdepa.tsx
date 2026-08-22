import React from "react";
import Image from "next/image";
import storefront from "../../public/assets/images/adepa/about-adepa-storefront.webp";

const AboutAdepa = () => {
  const facts = [
    "Family owned business located in Toronto, Canada",
    "Founded 8 years ago by a Ghanaian couple",
    "The store sells groceries & essential commodities"
  ];

  return (
    <div className="pt-[60px] sm:pt-[90px] md:pt-[120px] flex flex-col md:flex-row items-center gap-[40px] md:gap-[60px] lg:gap-[100px]">
      <div className="w-full md:max-w-[480px]">
        <h1 className="text-title font-tinyBrushy text-[32px] sm:text-[44px] md:text-[56px] font-normal leading-[normal]">
          About Adepa
        </h1>
        <ol className="pt-[24px] sm:pt-[28px] md:pt-[32px] flex flex-col gap-[16px] list-decimal ms-[24px]">
          {facts.map((fact, index) => (
            <li
              key={index}
              className="text-body text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning"
            >
              {fact}
            </li>
          ))}
        </ol>
      </div>
      <div className="w-full md:flex-1">
        <Image
          src={storefront}
          width={1024}
          height={730}
          alt="Adepa African Grocery storefront in Toronto"
          className="w-full h-auto rounded-[14px] object-cover"
        />
      </div>
    </div>
  );
};

export default AboutAdepa;
