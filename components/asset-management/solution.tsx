import React from "react";
import Image from "next/image";
import solutionIcon from "../../public/assets/images/asset-management/solution-icon.webp";

const AssetManagementSolution = () => {
  return (
    <div className="pt-[60px] sm:pt-[80px] md:pt-[100px] relative">
      <div className="hidden sm:block absolute top-0 right-0 w-[90px] md:w-[120px]">
        <Image
          src={solutionIcon}
          width={329}
          height={471}
          alt="Illustration of a happy administrator"
          className="w-full h-auto"
        />
      </div>

      <div className="max-w-[730px]">
        <h1 className="text-title font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
          The Solution
        </h1>
        <p className="text-body pt-[16px] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
          I designed a centralized asset management system that enables
          administrators to:
        </p>

        <div className="pt-[24px] sm:pt-[28px] md:pt-[32px]">
          <p className="text-body text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            As the company scaled, it became difficult to:
          </p>
          <ul className="list-disc pl-4 flex gap-[12px] sm:gap-[15px] pt-[16px] flex-col">
            <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
              Track and manage assets across all locations
            </li>
            <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
              Monitor asset status in real time
            </li>
            <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
              Easily assign, update, and replace devices
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AssetManagementSolution;
