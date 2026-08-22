import React from "react";

const AssetManagementDesignProcess = () => {
  return (
    <div className="pt-[60px] sm:pt-[80px] md:pt-[100px]">
      <h1 className="text-title font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
        Design Process
      </h1>

      <div className="pt-[24px] sm:pt-[28px] md:pt-[32px]">
        <h2 className="text-title font-tinyBrushy text-[18px] sm:text-[20px] md:text-[24px] font-normal leading-[normal]">
          Understanding The Problem
        </h2>
        <p className="text-body pt-[12px] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
          Before jumping into design, I needed to understand how assets were
          currently being managed across the organization and where the
          breakdown was happening.
        </p>
        <ul className="list-disc pl-4 flex gap-[12px] sm:gap-[15px] pt-[16px] flex-col">
          <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Spoke with admin staff responsible for managing company assets
          </li>
          <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Reviewed how assets were being tracked across different branches
          </li>
          <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Analyzed existing workflows for assigning, updating and replacing
            assets.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AssetManagementDesignProcess;
