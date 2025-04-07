import { tobiProjects } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OtherProjectAndWebsites = () => {
  return (
    <div className="py-[20px] px-[16px] sm:px-[24px] md:px-[48px] md:py-[64px] max-w-[1311px] mx-auto">
      <h1 className="text-[#fff] pt-3 md:pt-6 font-tinyBrushy text-[24px] sm:text-[32px] md:text-[36px] font-normal leading-[normal] text-start">
        OTHER PROJECTS AND WEBSITES.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] md:gap-x-[98px] mt-6 md:mt-[4rem] gap-y-[32px] md:gap-y-[64px]">
        {tobiProjects.map((project, index) => (
          <div
            key={index}
            className={`flex w-full max-w-[527px] rounded-[12px] md:rounded-[20px] border border-solid border-[#667085] py-3 sm:py-4 md:py-[32px] px-3 sm:px-4 md:px-[34px] flex-col gap-[24px] md:gap-[48px]`}
          >
            <Image 
              src={project?.image} 
              width={527} 
              height={415} 
              alt={project?.title}
              className="w-full h-auto"
            />
            <div className="flex flex-col gap-[16px] md:gap-[24px]">
              <h1 className="flex-grow text-[#fff] font-tinyBrushy leading-[normal] text-[20px] sm:text-[28px] md:text-[36px] font-normal uppercase">
                {project?.title}
              </h1>

              <Link href={project?.theLink || ""}>
                <div
                  className={`text-[#FFA17A] rounded-[100px] backdrop-blur-[7.5px] bg-[#FFFFFF1A] px-3 sm:px-4 py-[10px] sm:py-[14px] w-fit text-[12px] sm:text-[14px] md:text-[16px] flex flex-row gap-1 items-center font-Beginning leading-[normal] font-normal text-center`}
                >
                  {project?.type.toLowerCase() === "behance"
                    ? "View On Behance"
                    : "View Live Website"}
                  <ArrowUpRight size={16} />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProjectAndWebsites;