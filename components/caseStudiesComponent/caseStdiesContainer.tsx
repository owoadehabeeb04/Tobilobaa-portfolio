import { caseStudies } from "@/constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const CaseStudiesCompoenent = () => {
  return (
    <div className="py-[20px] px-[16px] sm:px-[24px] md:px-[48px] md:py-[64px] max-w-[1311px] gap-[32px] md:gap-[64px] flex flex-col items-center justify-center mx-auto">
      {caseStudies.map((caseStudies, index) => (
        <div
          key={index}
          className={`rounded-[20px] md:rounded-[40px] border w-full border-solid border-[#667085] grid grid-cols-1 md:grid-cols-2 gap-[16px] sm:gap-[25px] md:gap-[48px] md:place-items-center md:place-content-center p-[12px] sm:p-[20px]`}
        >
          <div
            className={`${
              index % 2 === 0 ? "md:order-1 w-full" : "md:order-2 w-full"
            }`}
          >
            <Image
              className="h-full object-contain w-full rounded-[10px] md:rounded-none"
              src={caseStudies?.image}
              width={542}
              height={380}
              alt={caseStudies?.skills[0]}
            />
          </div>
          <div
            className={`${
              index % 2 === 0 ? "md:order-2" : "md:order-1"
            } flex flex-col md:justify-start items-start px-[8px] sm:px-[16px] md:px-[32px] gap-[24px] md:gap-[72px]`}
          >
            <div>
              <h1 className="text-[#fff] font-tinyBrushy text-[20px] sm:text-[24px] md:text-[28px] lg:text-[40px] font-normal leading-[normal]">
                {caseStudies?.title}
              </h1>

              <div className="flex flex-row flex-wrap pt-[10px] sm:pt-[14px] md:pt-[24px] gap-2 sm:gap-4 items-center">
                {caseStudies?.skills?.map((skills, index) => (
                  <p
                    key={index}
                    className="text-[#98A2B3] text-center font-tinyBrushy text-[10px] sm:text-[12px] lg:text-[14px] font-normal leading-[normal]"
                  >
                    {skills}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-row gap-2 sm:gap-0 flex-wrap w-full">
              {caseStudies?.links?.map((link, index) => (
                <div key={index} className="mt-2 sm:mt-0">
                  <Link href={link?.theLink} className="">
                    <div
                      className={`${
                        link?.type === "caseStudy"
                          ? "text-[#FFA17A] rounded-[100px] backdrop-blur-[7.5px] bg-[#FFFFFF1A] p-2 md:p-4"
                          : "text-[#FFF] bg-[#06090F] p-2 md:p-4 backdrop-blur-[7.5px]"
                      } text-[12px] sm:text-[14px] md:text-[16px] flex flex-row gap-1 items-center font-Beginning leading-[normal] font-normal text-center`}
                    >
                      {link?.text}
                      {index === 0 && !link?.text?.includes("Coming soon") && <ArrowUpRight size={16} />}
                      </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudiesCompoenent;