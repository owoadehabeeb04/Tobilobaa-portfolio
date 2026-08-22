import React from "react";

const AssetManagementRoleStats = () => {
  return (
    <div className="pt-[40px] sm:pt-[50px] md:pt-[64px]">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-[20px] sm:gap-[30px]">
        <div className="flex flex-col gap-[15px] sm:gap-[28px]">
          <h1 className="text-label font-normal leading-[normal] font-Beginning text-[14px] sm:text-base">
            Role
          </h1>
          <p className="text-title font-tinyBrushy text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
            Product Designer
          </p>
        </div>

        <div className="flex flex-col gap-[15px] sm:gap-[28px]">
          <h1 className="text-label font-normal leading-[normal] font-Beginning text-[14px] sm:text-base">
            Duration
          </h1>
          <p className="text-title font-tinyBrushy text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
            2 Months
          </p>
        </div>

        <div className="flex flex-col gap-[15px] sm:gap-[28px]">
          <h1 className="text-label font-normal leading-[normal] font-Beginning text-[14px] sm:text-base">
            Tools
          </h1>
          <div className="flex flex-col gap-2">
            <p className="text-title font-tinyBrushy text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
              Figma
            </p>
            <p className="text-title font-tinyBrushy text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
              Google Doc
            </p>
            <p className="text-title font-tinyBrushy text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
              Canva
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetManagementRoleStats;
