import React from "react";

const AssetManagementOutcomeImpact = () => {
  return (
    <>
      <div className="pt-[80px] sm:pt-[100px] md:pt-[140px]">
        <h1 className="text-title font-tinyBrushy text-[20px] sm:text-[24px] md:text-[32px] font-normal leading-[normal]">
          Outcome &amp; Impact
        </h1>
        <ul className="list-disc pl-4 flex gap-[12px] sm:gap-[15px] md:gap-[20px] pt-[16px] flex-col">
          <li className="text-title text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed font-Beginning">
            Increased asset tracking speed by 85%
          </li>
          <li className="text-title text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed font-Beginning">
            Reduced errors by 80%
          </li>
          <li className="text-title text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed font-Beginning">
            Made asset replacement 80% faster
          </li>
          <li className="text-title text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed font-Beginning">
            Improved admin efficiency by 50%
          </li>
        </ul>
        <p className="text-body pt-[20px] sm:pt-[24px] max-w-[880px] text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed font-Beginning">
          The system transformed how assets are managed across the
          organization, giving administrators better visibility, reducing
          manual effort, and improving overall operational efficiency.
        </p>
      </div>

      <div className="pt-[40px] sm:pt-[50px] md:pt-[64px]">
        <h1 className="text-title font-tinyBrushy text-[20px] sm:text-[24px] md:text-[32px] font-normal leading-[normal]">
          What I Learned
        </h1>
        <ul className="list-disc pl-4 flex gap-[12px] sm:gap-[15px] md:gap-[20px] pt-[16px] flex-col">
          <li className="text-title text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed font-Beginning">
            Designing for internal tools requires balancing detail with
            simplicity
          </li>
          <li className="text-title text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed font-Beginning">
            Structuring data properly is just as important as designing the
            interface
          </li>
          <li className="text-title text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed font-Beginning">
            Small workflow improvements can have a big impact on efficiency
          </li>
          <li className="text-title text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed font-Beginning">
            Building for scale requires thinking beyond just the current use
            case
          </li>
        </ul>
      </div>
    </>
  );
};

export default AssetManagementOutcomeImpact;
