import React from "react";
import Image from "next/image";
import problemIcon from "../../public/assets/images/asset-management/problem-icon.webp";

const AssetManagementProblem = () => {
  return (
    <div className="pt-[60px] sm:pt-[80px] md:pt-[100px] relative">
      <div className="hidden sm:block absolute top-0 right-0 w-[100px] md:w-[140px]">
        <Image
          src={problemIcon}
          width={336}
          height={382}
          alt="Illustration of a frustrated administrator"
          className="w-full h-auto"
        />
      </div>

      <div className="max-w-[730px]">
        <h1 className="text-title font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
          The Problem
        </h1>
        <p className="text-body pt-[16px] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
          Sanlam Insurance relied on physical assets across multiple
          branches, but tracking them was fragmented and inefficient.
        </p>

        <div className="pt-[24px] sm:pt-[28px] md:pt-[32px]">
          <p className="text-body text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            As the company scaled, it became difficult to:
          </p>
          <ul className="list-disc pl-4 flex gap-[12px] sm:gap-[15px] pt-[16px] flex-col">
            <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
              Track which employee had which device
            </li>
            <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
              Identify faulty or outdated assets
            </li>
            <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
              Manage asset allocation across branches
            </li>
            <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
              Maintain accurate and up-to-date records
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AssetManagementProblem;
