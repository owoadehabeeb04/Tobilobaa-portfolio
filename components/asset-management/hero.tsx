import React from "react";
import Image from "next/image";
import heroMockup from "../../public/assets/images/asset-management/hero-mockup.webp";

const AssetManagementHero = () => {
  return (
    <div className="px-4 sm:px-6 md:px-0">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-[24px] md:gap-[32px]">
        <h1 className="text-title font-tinyBrushy uppercase text-[44px] sm:text-[64px] md:text-[84px] lg:text-[108px] font-normal leading-[0.95]">
          Asset
          <br />
          Management
          <br />
          System Design
        </h1>
        <div className="w-full max-w-[360px] md:max-w-[420px] lg:max-w-[480px] shrink-0 mx-auto md:mx-0">
          <Image
            src={heroMockup}
            width={576}
            height={639}
            alt="Asset management dashboard and login screen mockups"
            className="w-full h-auto"
          />
        </div>
      </div>

      <p className="pt-[20px] md:pt-[28px] max-w-[820px] text-label text-[16px] sm:text-[20px] md:text-[24px] font-normal leading-[1.4] font-Beginning">
        Designing a Scalable Asset Management System:{" "}
        <br className="hidden sm:block" />
        Managing 10,000+ Assets Across 20+ Locations with Real-Time
        Visibility
      </p>
    </div>
  );
};

export default AssetManagementHero;
