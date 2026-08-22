import React from "react";
import Image, { type StaticImageData } from "next/image";
import badge1 from "../../public/assets/images/asset-management/badge-1-green.webp";
import badge2 from "../../public/assets/images/asset-management/badge-2-blue.webp";
import badge3 from "../../public/assets/images/asset-management/badge-3-yellow.webp";
import badge4 from "../../public/assets/images/asset-management/badge-4-red.webp";
import badge5 from "../../public/assets/images/asset-management/badge-5-purple.webp";

type ApproachCardProps = {
  badge: StaticImageData;
  title: string;
  description: string;
  bgClass: string;
  className?: string;
};

/*
 * Figma draws each card in its own fixed pastel color with near-black text
 * in both color modes (not the site's light/dark tokens) — same exception as
 * the always-dark CTA pill in app/globals.css. The literal colors are the
 * content here, not the app theme.
 */
const ApproachCard = ({ badge, title, description, bgClass, className = "" }: ApproachCardProps) => (
  <div className={`flex flex-col gap-[16px] rounded-[20px] px-[20px] py-[20px] sm:py-[24px] ${bgClass} ${className}`}>
    <div className="flex items-center justify-between">
      <span className="block w-[36px] h-[3px] bg-[#06090f]" />
      <Image src={badge} width={36} height={36} alt="" aria-hidden="true" />
    </div>
    <div className="flex flex-col gap-[8px]">
      <h3 className="text-[#06090f] font-tinyBrushy uppercase text-[22px] sm:text-[26px] md:text-[32px] font-normal leading-[1.15]">
        {title}
      </h3>
      <p className="text-[#06090f] text-[15px] sm:text-[18px] md:text-[20px] font-normal leading-[1.4] font-Beginning">
        {description}
      </p>
    </div>
  </div>
);

const AssetManagementDesignApproach = () => {
  const approaches: ApproachCardProps[] = [
    {
      badge: badge1,
      title: "One place for all assets",
      description:
        "I must put everything in one system so admins don’t have to check multiple sources.",
      bgClass: "bg-[#fac955]"
    },
    {
      badge: badge2,
      title: "Step-by-step asset creation",
      description:
        "Split the process into 3 steps to make it easier and reduce mistakes.",
      bgClass: "bg-[#c1c9f0]"
    },
    {
      badge: badge3,
      title: "Clear dashboard overview",
      description:
        "I should show key numbers like total, faulty, active, and returned assets at a glance.",
      bgClass: "bg-[#e6c9c9]"
    },
    {
      badge: badge4,
      title: "Easy updates and reassignment",
      description:
        "Allow admins to quickly edit or reassign assets when things change.",
      bgClass: "bg-[#b3e697]"
    }
  ];

  return (
    <div className="pt-[60px] sm:pt-[80px] md:pt-[100px]">
      <h1 className="text-title font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
        Design Approach
      </h1>
      <p className="text-body pt-[16px] max-w-[880px] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
        Based on the research insights, I focused on designing a system that
        improves visibility, reduces errors, and simplifies asset management
        workflows.
      </p>
      <p className="text-body pt-[16px] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
        Particularly I made this key design decisions:
      </p>

      <div className="pt-[24px] sm:pt-[28px] md:pt-[32px] grid grid-cols-1 sm:grid-cols-2 gap-[16px] sm:gap-[20px]">
        {approaches.map((approach) => (
          <ApproachCard key={approach.title} {...approach} />
        ))}
        <ApproachCard
          badge={badge5}
          title="Must be designed to handle multiple branches"
          description="Made sure the system works smoothly across different locations."
          bgClass="bg-[#d3d2d2]"
          className="sm:col-span-2 sm:max-w-[calc(50%-10px)] sm:mx-auto"
        />
      </div>
    </div>
  );
};

export default AssetManagementDesignApproach;
