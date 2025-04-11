import React from "react";
import uiUx from "../../public/assets/images/Group 3.svg";
import heroImage from "../../public/assets/images/Home.svg";
import productDesign from "../../public/assets/images/Component 8.svg";
import arrow from "../../public/assets/images/detailArrow.svg";
import Image from "next/image";

const RunnersHiveHero = () => {
  const details = [
    "Activity Tracking – Logs users' running distances and routes. ",
    "Rewards System – Earn coins based on kilometers run.",
    " Marketplace – Use earned points to buy exclusive products."
  ];

  return (
    <div className="px-4 sm:px-6 md:px-0">
      <div className="relative">
        <div className="absolute sm:block hidden top-[-1.5rem] left-0 md:left-auto">
          <Image
            src={productDesign}
            width={104}
            height={93}
            alt="product design"
          />
        </div>
        <main className="flex flex-col md:flex-row md:gap-[130px] items-center grid-cols-2">
          <div className="w-full md:max-w-[690px]">
            <h1 className="text-[#fff] font-tinyBrushy text-[40px] sm:text-[50px] md:text-[64px] font-normal leading-[normal]">
              Earn More, Move More: <br className="hidden sm:block" />
              Turning Kilometers into Rewards
            </h1>
            <div className="pt-[32px] flex flex-col gap-[16px]">
              {details.map((det, index) => (
                <div className="flex flex-row gap-[16px] md:gap-[32px]" key={index}>
                  <Image src={arrow} width={24} height={24} alt="arrow" />
                  <p className="text-[#C9CFD9] text-[18px] sm:text-[20px] md:text-[24px] font-normal leading-[normal] font-Beginning">
                    {" "}
                    {det}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <Image
              className="block md:hidden w-[180px] h-auto mx-auto"
              src={heroImage}
              width={180}
              height={253}
              alt="hero image"
            />
            <Image
              className="hidden md:hidden lg:block"
              src={heroImage}
              width={265}
              height={373}
              alt="hero image"
            />
          </div>
        </main>
        <div className="absolute right-0 md:right-[-2rem] lg:right-[-4rem] bottom-[4rem] md:bottom-[6rem] lg:bottom-[8.5rem] hidden sm:block">
          <Image src={uiUx} width={104} height={93} alt="product design" />
        </div>{" "}
      </div>

      <div className="bg-[#06090F] w-full max-w-[1512px] h-[120px] md:h-[150px] lg:h-[182px] translate-y-[-5rem] md:translate-y-[-5.5rem] lg:translate-y-[-6.5rem] z-100"></div>
    </div>
  );
};

export default RunnersHiveHero;