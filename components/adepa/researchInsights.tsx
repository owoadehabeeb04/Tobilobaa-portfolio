import React from "react";
import Image from "next/image";
import lightbulb from "../../public/assets/images/adepa/lightbulb.webp";

const challenges = [
  "The store is physically constrained, leading to congestion and a frustrating shopping experience",
  "Operations rely heavily on manual processes, reducing efficiency and increasing errors",
  "The business lacks a digital presence, limiting visibility and growth opportunities",
  "Supply chain and logistics challenges affect product availability and consistency",
  "Limited scalability makes it difficult for the business to expand and meet increasing demand"
];

const ResearchInsights = () => {
  return (
    <div className="pt-[60px] sm:pt-[90px] md:pt-[120px]">
      <div className="flex items-start justify-between gap-[24px]">
        <div className="flex-1">
          <h1 className="text-title font-tinyBrushy text-[32px] sm:text-[44px] md:text-[56px] font-normal leading-[normal]">
            Insights from all the research done
          </h1>
          <p className="pt-[16px] sm:pt-[20px] md:pt-[24px] text-body text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Our research revealed a set of critical challenges affecting
            both the customer experience and business operations at Adepa.
          </p>
        </div>
        <Image
          src={lightbulb}
          width={94}
          height={133}
          alt=""
          className="hidden sm:block w-[70px] md:w-[94px] h-auto shrink-0"
        />
      </div>

      <ol className="pt-[24px] sm:pt-[28px] md:pt-[32px] flex flex-col gap-[16px] list-decimal ms-[24px]">
        {challenges.map((challenge, index) => (
          <li
            key={index}
            className="text-body text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning"
          >
            {challenge}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ResearchInsights;
