import React from "react";
import Image from "next/image";
import stakeholderMap from "../../public/assets/images/adepa/stakeholder-map.webp";

const StakeholderMap = () => {
  return (
    <div className="pt-[60px] sm:pt-[90px] md:pt-[120px]">
      <h1 className="text-title font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-normal leading-[normal]">
        After visiting the store, we needed to understand the whole system.
      </h1>
      <div className="pt-[16px] sm:pt-[20px] md:pt-[24px] flex flex-col gap-[16px]">
        <p className="text-body text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
          Before proposing solutions, we needed to understand the full
          ecosystem around Adepa — not just the customers, but everyone
          involved in delivering the experience.
        </p>
        <p className="text-body text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
          To do this, we created a stakeholder map to identify key players
          and how they interact across the business.
        </p>
      </div>

      <div className="pt-[30px] sm:pt-[40px] md:pt-[56px] flex justify-center">
        <Image
          src={stakeholderMap}
          width={1189}
          height={626}
          alt="Adepa stakeholder map showing customers, store owner, workers, suppliers and their relationships, grouped by core, internal and external proximity"
          className="w-full max-w-[1189px] h-auto rounded-[10px] sm:rounded-[15px] md:rounded-[20px] bg-surface p-[16px] sm:p-[24px]"
        />
      </div>

      <p className="pt-[30px] sm:pt-[40px] md:pt-[48px] text-body text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
        This stakeholder map illustrates all key players involved in
        Adepa&apos;s ecosystem, grouped by their proximity to the customer. It
        helped us understand how value flows across the business and
        identify gaps in operations, communication, and digital presence.
      </p>
    </div>
  );
};

export default StakeholderMap;
