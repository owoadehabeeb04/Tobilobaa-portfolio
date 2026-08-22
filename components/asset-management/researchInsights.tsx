import React from "react";
import Image, { type StaticImageData } from "next/image";
import badge1 from "../../public/assets/images/asset-management/badge-1-green.webp";
import badge2 from "../../public/assets/images/asset-management/badge-2-blue.webp";
import badge3 from "../../public/assets/images/asset-management/badge-3-yellow.webp";
import badge4 from "../../public/assets/images/asset-management/badge-4-red.webp";

type InsightCardProps = {
  badge: StaticImageData;
  title: string;
  description: string;
};

/*
 * Figma draws these cards with a fixed dusty-pink background and near-black
 * text in both color modes (not the site's light/dark tokens) — same
 * exception as the always-dark CTA pill in app/globals.css. The literal
 * colors are the content here, not the app theme.
 */
const InsightCard = ({ badge, title, description }: InsightCardProps) => (
  <div className="flex flex-col gap-[22px] rounded-[20px] bg-[#e6c9c9] px-[20px] py-[32px]">
    <Image src={badge} width={48} height={48} alt="" aria-hidden="true" />
    <div className="flex flex-col gap-[8px]">
      <h3 className="text-black font-tinyBrushy uppercase text-[20px] sm:text-[22px] md:text-[24px] font-normal leading-[1.2]">
        {title}
      </h3>
      <p className="text-[#5a5a5a] text-[14px] font-normal leading-[1.4] font-Beginning">
        {description}
      </p>
    </div>
  </div>
);

const AssetManagementResearchInsights = () => {
  const insights: InsightCardProps[] = [
    {
      badge: badge1,
      title: "Fragmented Tracking System",
      description:
        "Assets were managed across multiple sources with no central system"
    },
    {
      badge: badge2,
      title: "Poor Asset Visibility",
      description: "Admins struggled to track ownership and asset status"
    },
    {
      badge: badge3,
      title: "Inefficient Replacement Process",
      description:
        "Faulty assets were not easily identified or replaced quickly"
    },
    {
      badge: badge4,
      title: "Data Inconsistency",
      description: "Manual entry led to errors and outdated records"
    }
  ];

  return (
    <div className="pt-[60px] sm:pt-[80px] md:pt-[100px]">
      <h1 className="text-title font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
        How Did I Understand The Problem?
      </h1>

      <div className="pt-[24px] sm:pt-[28px] md:pt-[32px]">
        <h2 className="text-title font-tinyBrushy text-[16px] sm:text-[18px] font-normal leading-[normal]">
          Physical User Interviews
        </h2>
        <ul className="list-disc pl-4 flex gap-[12px] sm:gap-[15px] pt-[16px] flex-col max-w-[880px]">
          <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Spoke with administrative staff to understand daily workflows and
            challenges
          </li>
          <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Made sure I spoke with at least one administrative staff in each
            branch, to understand if they all had the same problem or not
          </li>
          <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Observed how assets were tracked across branches and how records
            were maintained
          </li>
          <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Mapped existing processes for asset assignment, tracking &amp;
            replacement.
          </li>
        </ul>
      </div>

      <div className="pt-[40px] sm:pt-[48px] md:pt-[56px]">
        <h2 className="text-title font-tinyBrushy text-[16px] sm:text-[18px] font-normal leading-[normal] pb-[20px] sm:pb-[24px]">
          Key Insights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-[20px]">
          {insights.map((insight, index) => (
            <InsightCard key={index} {...insight} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssetManagementResearchInsights;
