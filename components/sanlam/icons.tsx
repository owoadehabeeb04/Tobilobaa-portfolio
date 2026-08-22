import React from "react";
import Image from "next/image";
import icon1 from "../../public/assets/images/allicons.png";

const SanlamIcons = () => {
  return (
    <div className="pt-[40px] sm:pt-[60px] md:pt-[75px]">
      <h1 className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
        Icons
      </h1>
      <div className="gap-6 pt-[20px] sm:pt-[25px] md:pt-[32px]">
        <div className="sm:p-6 rounded-lg flex items-center justify-center">
          <Image src={icon1} alt="Icon 1" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default SanlamIcons;
