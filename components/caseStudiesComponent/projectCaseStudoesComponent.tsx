import { caseStudies } from "@/constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
const ProjectsCaseStudy = () => {
  return (
    <div className="py-[48px] md:py-[80px] gap-[52px] flex flex-col items-center justify-center  max-w-screen-xl  px-[0rem]  ">
      {caseStudies.map((caseStudies, index) => (
        <div
          key={index}
          className={`rounded-[40px] border w-full border-solid border-[#667085] grid grid-cols-1 md:grid-cols-2 gap-[25px] md:gap-[48px] md:place-items-center md:place-content-center p-[20px]`}
        >
          <div
            className={`${
              index % 2 === 0 ? "md:order-1 w-full" : "md:order-2 w-full"
            }`}
          >
            <Image
              className="h-full object-contain w-full "
              src={caseStudies?.image}
              width={542}
              height={380}
              alt={caseStudies?.title}
            />
          </div>
          <div
            className={`${
              index % 2 === 0 ? "md:order-2" : "md:order-1"
            } flex flex-col  md:justify-start items-start md:px-[32px]  gap-[72px]`}
          >
            <div>
              <h1 className="text-[#fff] font-tinyBrushy md:text-[28px] text-[24px] lg:text-[40px] font-normal leading-[normal]">
                {caseStudies?.title}
              </h1>

              <p className="text-[#C9CFD9] md:text-base text-[14px] lg:text-[18px] font-normal leading-[normal] pt-[6px] md:pt-[12px] font-Beginning">
                {caseStudies?.description}
              </p>
              <div className="flex flex-row flex-wrap pt-[14px] md:pt-[24px] gap-4 items-center ">
                {caseStudies?.skills?.map((skills, index) => (
                  <p
                    key={index}
                    className="text-[#98A2B3] text-center font-tinyBrushy text-[12px] lg:text-[14px] font-normal leadin-[normal]"
                  >
                    {skills}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-row  gap-0 flex-wrap  ">
              {caseStudies?.links?.map((link, index) => (
                <div key={index} className=" ">
                  <Link href={link?.theLink} className="">
                    <div
                      className={`${
                        link?.type === "caseStudy"
                          ? "text-[#FFA17A] rounded-[100px] backdrop-blur-[7.5px] bg-[#FFFFFF1A] p-2 md:p-4"
                          : "text-[#FFF] bg-[#06090F] p-2 md:p-4 backdrop-blur-[7.5px] "
                      }  text-[14px] md:text-[16px] flex flex-row gap-1 items-center   font-Beginning leading-[normal] font-normal text-center   `}
                    >
                      {link?.text}
                      {index === 0 && <FaExternalLinkAlt />}
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

export default ProjectsCaseStudy;
