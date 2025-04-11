import React from "react";
import runnerhiveMockUp1 from "../../public/assets/images/runnerhiverMockUp1.svg";
import runnerhiveMockUp2 from "../../public/assets/images/runnnerHiveMockup2.svg";
import runnerhiveMockUp3 from "../../public/assets/images/runnerhiveMockUp3.svg";
import runnerhiveMockUp4 from "../../public/assets/images/runnerhiveMockUp4.svg";
import runnerhiveMockUp5 from "../../public/assets/images/runnerhiveMockUp5.svg";
import runnerhiveMockUp6 from "../../public/assets/images/runnerhivemockup66.svg";
import runnerhiveMockUp7 from "../../public/assets/images/runnerhivemockup7.svg";
import runnerhiveMockUp8 from "../../public/assets/images/runnerhiveMockup8.svg";
import marketPlace1 from "../../public/assets/images/marketPlaceMockup1.svg";
import marketPlace2 from "../../public/assets/images/marketPlace2.svg";
import marketPlace3 from "../../public/assets/images/MarketPlaceMockup3.svg";
import marketPlace4 from "../../public/assets/images/MarketPlaceMockUp4.svg";
import marketPlace5 from "../../public/assets/images/marketplace5.svg";
import marketPlace6 from "../../public/assets/images/marketplace6.svg";
import community1 from "../../public/assets/images/community1.svg";
import community2 from "../../public/assets/images/community22.svg";
import community3 from "../../public/assets/images/community333.svg";
import community4 from "../../public/assets/images/community4.svg";
import community5 from "../../public/assets/images/community5.svg";
import community6 from "../../public/assets/images/community6.svg";
import community7 from "../../public/assets/images/community7.svg";
import community8 from "../../public/assets/images/community8.svg";
import Image from "next/image";

const DesignSolution = () => {
  const casualIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <circle cx="8" cy="8.5" r="8" fill="#FAC738" />
      <circle cx="8" cy="8.5" r="4" fill="#090909" />
    </svg>
  );

  const mockups = [
    {
      image: runnerhiveMockUp1,
      title:
        "Start Run Screen / Plan a run Screen / Pick a virtual shoe screen."
    },
    { image: runnerhiveMockUp2, title: " Run Screen" },
    { image: runnerhiveMockUp3, title: "Add an emergency contact" },
    { image: runnerhiveMockUp4, title: "Run recorded & the path recorded." },
    { image: runnerhiveMockUp5, title: "Schedule a run for a later date" },
    { image: runnerhiveMockUp6, title: "Add a Shoe." },
    { image: runnerhiveMockUp7, title: "Choose an avatar for shoe" },
    { image: runnerhiveMockUp8, title: "Schedule a run for a later date" }
  ];

  const mockups2 = [
    {
      image: marketPlace1,
      title:
        "Marketplace without any product yet."
    },
    { image: marketPlace2, title: " Marketplace with products live here." },
    { image: marketPlace3, title: "Product Information" },
    { image: marketPlace4, title: "Run recorded & the path recorded." },
    { image: marketPlace5, title: "Schedule a run for a later date" },
    { image: marketPlace6, title: "Add a Shoe." },
  
  ];

  const mockups3 = [
    {
      image: community1,
      title:
        "Community page showing general leadrboard & groups joined."
    },
    { image: community2, title: " Full General leaderboard page." },
    { image: community3, title: "Add a group. (details, name & photo)" },
    { image: community4, title: "Community page with groups added and joined." },
    { image: community5, title: "Joining a group created by another person." },
    { image: community6, title: "Group chat where you're not the group admin." },
    { image: community7, title: "Group chat where you created the group." },
    { image: community8, title: "Activity page that summarizes the runs of the individuals." },
  
  ];
  
  return (
    <div className="pt-[80px] sm:pt-[100px] md:pt-[141px]">
      <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-normal leading-[normal] font-tinyBrushy text-[#C9CFD9]">
        The Design Solution
      </h1>

      {/* Run Tracking Section */}
      <div className="flex pt-[24px] sm:pt-[28px] md:pt-[32px] flex-col sm:flex-row items-start gap-[8px] mb-[40px] sm:mb-[50px] md:mb-[64px]">
        <div className="hidden sm:block">
          <div className="pt-2">{casualIcon}</div>
        </div>
        <div className="w-full">
          <div className="flex sm:hidden items-center gap-[8px] mb-[12px]">
            <div>{casualIcon}</div>
            <h1 className="text-[#fff] font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
              Run Tracking & Activity Recording
            </h1>
          </div>
          
          <h1 className="hidden sm:block text-[#fff] font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
            Run Tracking & Activity Recording
          </h1>
          
          <div className="pl-[0] sm:pl-[28px] pt-[16px] sm:pt-[20px]">
            <h1 className="text-[#C9CFD9] text-[20px] sm:text-[22px] md:text-[24px] font-normal leading-[normal] font-tinyBrushy">
              Problem
            </h1>
            <p className="pt-[8px] pb-[16px] text-[#fff] text-[14px] sm:text-[15px] md:text-base leading-[normal] font-normal font-Beginning">
              Users needed an intuitive way to track their runs, measure their
              distance, and earn points based on performance.
            </p>

            <h1 className="text-[#C9CFD9] text-[20px] sm:text-[22px] md:text-[24px] font-normal leading-[normal] font-tinyBrushy">
              Solution
            </h1>
            <p className="pt-[8px] pb-[16px] text-[#fff] text-[14px] sm:text-[15px] md:text-base leading-[normal] font-normal font-Beginning">
              Designed a GPS-based run tracker that calculates distance covered,
              route mapping, and real-time stats like pace, calories burned, and
              coins earned.
            </p>
          </div>
        </div>
      </div>

      {/* Run Tracking Mockups Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-5 md:gap-x-6 gap-y-8 sm:gap-y-10 md:gap-y-12 mt-8 sm:mt-10 md:mt-12">
        {mockups.map((mockup, index) => (
          <div key={index} className="flex flex-col">
            <div className="h-[60px] sm:h-[50px] md:h-[40px] flex items-start justify-center mb-[12px] sm:mb-[14px] md:mb-[16px]">
              <p className="text-[#FFF] text-center font-Beginning text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-normal">
                {mockup.title}
              </p>
            </div>
            <div className="w-full flex justify-center items-center h-auto relative rounded-[12px] overflow-hidden">
              <Image
                src={mockup.image}
                alt={mockup.title}
                height={535}
                width={258}
                className="rounded-[12px] w-auto h-auto max-h-[450px] sm:max-h-[500px] md:max-h-[535px]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Marketplace Section */}
      <div className="flex pt-[40px] sm:pt-[36px] md:pt-[32px] flex-col sm:flex-row items-start gap-[8px] mb-[40px] sm:mb-[50px] md:mb-[64px] mt-[40px] sm:mt-[50px] md:mt-[64px]">
        <div className="hidden sm:block">
          <div className="pt-2">{casualIcon}</div>
        </div>
        <div className="w-full">
          <div className="flex sm:hidden items-center gap-[8px] mb-[12px]">
            <div>{casualIcon}</div>
            <h1 className="text-[#fff] font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
              Marketplace & Rewards System
            </h1>
          </div>
          
          <h1 className="hidden sm:block text-[#fff] font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
            Marketplace & Rewards System
          </h1>
          
          <div className="pl-[0] sm:pl-[28px] pt-[16px] sm:pt-[20px]">
            <h1 className="text-[#C9CFD9] text-[20px] sm:text-[22px] md:text-[24px] font-normal leading-[normal] font-tinyBrushy">
              Problem
            </h1>
            <p className="pt-[8px] pb-[16px] text-[#fff] text-[14px] sm:text-[15px] md:text-base leading-[normal] font-normal font-Beginning">
              Users needed motivation to run, and an incentive system was required.
            </p>

            <h1 className="text-[#C9CFD9] text-[20px] sm:text-[22px] md:text-[24px] font-normal leading-[normal] font-tinyBrushy">
              Solution
            </h1>
            <p className="pt-[8px] pb-[16px] text-[#fff] text-[14px] sm:text-[15px] md:text-base leading-[normal] font-normal font-Beginning">
              Created a marketplace where users can exchange points earned from running for real-world products.
            </p>
          </div>
        </div>
      </div>

      {/* Marketplace Mockups Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-5 md:gap-x-6 gap-y-8 sm:gap-y-10 md:gap-y-12 mt-8 sm:mt-10 md:mt-12">
        {mockups2.map((mockup, index) => (
          <div key={index} className="flex flex-col">
            <div className="h-[60px] sm:h-[50px] md:h-[40px] flex items-start justify-center mb-[12px] sm:mb-[14px] md:mb-[16px]">
              <p className="text-[#FFF] text-center font-Beginning text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-normal">
                {mockup.title}
              </p>
            </div>
            <div className="w-full flex justify-center items-center h-auto relative rounded-[12px] overflow-hidden">
              <Image
                src={mockup.image}
                alt={mockup.title}
                height={535}
                width={258}
                className="rounded-[12px] w-auto h-auto max-h-[450px] sm:max-h-[500px] md:max-h-[535px]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Community Section */}
      <div className="flex pt-[40px] sm:pt-[36px] md:pt-[32px] flex-col sm:flex-row items-start gap-[8px] mb-[40px] sm:mb-[50px] md:mb-[64px] mt-[40px] sm:mt-[50px] md:mt-[64px]">
        <div className="hidden sm:block">
          <div className="pt-2">{casualIcon}</div>
        </div>
        <div className="w-full">
          <div className="flex sm:hidden items-center gap-[8px] mb-[12px]">
            <div>{casualIcon}</div>
            <h1 className="text-[#fff] font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
              Community & Activity Tracking
            </h1>
          </div>
          
          <h1 className="hidden sm:block text-[#fff] font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
            Community & Activity Tracking
          </h1>
          
          <div className="pl-[0] sm:pl-[28px] pt-[16px] sm:pt-[20px]">
            <h1 className="text-[#C9CFD9] text-[20px] sm:text-[22px] md:text-[24px] font-normal leading-[normal] font-tinyBrushy">
              Problem
            </h1>
            <p className="pt-[8px] pb-[16px] text-[#fff] text-[14px] sm:text-[15px] md:text-base leading-[normal] font-normal font-Beginning">
              Users wanted to connect, compete, and stay accountable
            </p>

            <h1 className="text-[#C9CFD9] text-[20px] sm:text-[22px] md:text-[24px] font-normal leading-[normal] font-tinyBrushy">
              Solution
            </h1>
            <p className="pt-[8px] pb-[16px] text-[#fff] text-[14px] sm:text-[15px] md:text-base leading-[normal] font-normal font-Beginning">
              Designed a feature where users can see a leaderboard, create groups & have private leaderboards while they track leaderboard stats.
            </p>
          </div>
        </div>
      </div>

      {/* Community Mockups Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-5 md:gap-x-6 gap-y-8 sm:gap-y-10 md:gap-y-12 mt-8 sm:mt-10 md:mt-12">
        {mockups3.map((mockup, index) => (
          <div key={index} className="flex flex-col">
            <div className="h-[60px] sm:h-[50px] md:h-[40px] flex items-start justify-center mb-[12px] sm:mb-[14px] md:mb-[16px]">
              <p className="text-[#FFF] text-center font-Beginning text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-normal">
                {mockup.title}
              </p>
            </div>
            <div className="w-full flex justify-center items-center h-auto relative rounded-[12px] overflow-hidden">
              <Image
                src={mockup.image}
                alt={mockup.title}
                height={535}
                width={258}
                className="rounded-[12px] w-auto h-auto max-h-[450px] sm:max-h-[500px] md:max-h-[535px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignSolution;