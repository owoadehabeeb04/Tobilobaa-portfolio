import React from "react";

const AdepaHero = () => {
  return (
    <div className="px-4 sm:px-6 md:px-0">
      <h1 className="text-title font-tinyBrushy text-[36px] sm:text-[52px] md:text-[72px] lg:text-[88px] font-normal leading-[normal]">
        Improving the in-store experience and digital presence of a
        community-driven African grocery store.
      </h1>
      <div className="pt-[32px] sm:pt-[40px] md:pt-[48px] flex flex-row gap-[16px] sm:gap-[24px]">
        <div className="w-[8px] shrink-0 rounded-[8px] bg-label" />
        <p className="text-body text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
          A service design project focused on reducing congestion, improving
          navigation, and helping Adepa grow beyond word-of-mouth.
        </p>
      </div>
    </div>
  );
};

export default AdepaHero;
