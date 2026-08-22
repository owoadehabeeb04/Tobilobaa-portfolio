import React from "react";

const SanlamChallengeAndResearch = () => {
  return (
    <div className="py-[40px] sm:py-[50px] md:py-[64px] flex flex-col gap-[40px] sm:gap-[50px] md:gap-[64px]">
      {/* the challenge */}
      <div>
        <h1 className="text-body font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
          THE CHALLENGE
        </h1>
        <ul className="list-disc pl-4 flex gap-[15px] sm:gap-[20px] pt-[12px] flex-col">
          <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Customers couldn&apos;t easily find their past and present policies.
          </li>
          <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Renewing policy premiums was a lengthy and confusing process.
          </li>
          <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Reaching customer support required multiple steps, causing
            frustration.
          </li>
          <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Older users struggled with small text and complex navigation.
          </li>
        </ul>
      </div>

      {/* research and insights  */}
      <div>
        <h1 className="text-body font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
          RESEARCH & INSIGHTS
        </h1>
        <p className="text-title pt-[12px] font-Beginning text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
          To understand the user pain points, I conducted a thorough review
          of the existing app and analyzed customer feedback. Since the
          primary users were Sanlam customers, I leveraged insights from
          internal staff who interacted with them daily. Through this, I
          identified the core usability issues and formulated key design
          improvements:
        </p>
        <ul className="list-disc pl-4 flex gap-[15px] sm:gap-[20px] pt-[20px] flex-col">
          <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Simplify navigation to ensure policies are visible on the
            homepage.
          </li>
          <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Streamline the renewal process to be completed in just three
            clicks within five minutes.
          </li>
          <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Introduce a direct messaging feature for customer support.
          </li>
          <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Optimize the interface for older users with larger text and
            guided steps.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SanlamChallengeAndResearch;
