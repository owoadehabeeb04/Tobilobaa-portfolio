import React from "react";
import Image from "next/image";
import serviceBlueprint from "../../public/assets/images/adepa/service-blueprint.webp";

const keyInsights = [
  "No digital inventory system → leads to missing or spoiled goods",
  "Manual processes → slow operations and errors",
  "Limited checkout capacity → long queues",
  "Poor layout → difficult navigation"
];

const ServiceBlueprint = () => {
  return (
    <div className="pt-[60px] sm:pt-[90px] md:pt-[120px]">
      <p className="text-body text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
        The journey map showed us where people were struggling, but it
        didn&apos;t show why. So we created a service blueprint to see what
        was happening behind the scenes that was causing those problems.
      </p>

      <div className="pt-[30px] sm:pt-[40px] md:pt-[56px]">
        <Image
          src={serviceBlueprint}
          width={1277}
          height={755}
          alt="Adepa African Store service blueprint mapping journey phases, customer actions, front stage and back stage actions, supporting systems, pain points and opportunities"
          className="w-full h-auto rounded-[10px] sm:rounded-[15px]"
        />
      </div>

      <p className="pt-[30px] sm:pt-[40px] md:pt-[48px] text-body text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
        The service blueprint maps customer actions alongside frontstage and
        backstage operations, revealing how internal processes and systems
        contribute to the overall experience.
      </p>

      <div className="pt-[50px] sm:pt-[70px] md:pt-[90px]">
        <h2 className="text-title font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
          Key Insights
        </h2>
        <ol className="pt-[20px] sm:pt-[24px] md:pt-[28px] flex flex-col gap-[16px] list-decimal ms-[24px]">
          {keyInsights.map((insight, index) => (
            <li
              key={index}
              className="text-body text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning"
            >
              {insight}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ServiceBlueprint;
