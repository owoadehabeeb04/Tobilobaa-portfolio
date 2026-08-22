import React from "react";
import Image from "next/image";
import arrow from "../../public/assets/images/caseStudyarrow.svg";

const SanlamUserFlowOverview = () => {
  return (
    <div className="py-[30px] sm:py-[38px] md:py-[46px]">
      <h1 className="text-body font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
        USER FLOW
      </h1>
      <p className="text-title pt-[12px] font-Beginning text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
        Different flows for different actions that can be done on the app
        will be shown so as not to overload and complicate things. The
        actions and flows that will be accounted for are:
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap pt-8 items-start sm:items-center gap-5">
        <div className="flex items-center gap-2">
          <Image src={arrow} alt="arrow" className="w-5 h-auto" />
          <h1 className="text-title font-Beginning text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
            Onboarding / Login / Sign up flow
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Image src={arrow} alt="arrow" className="w-5 h-auto" />
          <h1 className="text-title font-Beginning text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
            Make a Claim flow
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Image src={arrow} alt="arrow" className="w-5 h-auto" />
          <h1 className="text-title font-Beginning text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
            Make Payment flow
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Image src={arrow} alt="arrow" className="w-5 h-auto" />
          <h1 className="text-title font-Beginning text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
            Get Help flow
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SanlamUserFlowOverview;
