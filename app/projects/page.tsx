"use client";
import React from "react";

import productdesign from "../../public/assets/images/Component 8.svg";
import uiUx from "../../public/assets/images/Group 3.svg";
import Image from "next/image";
import ProjectsCaseStudy from "@/components/caseStudiesComponent/projectCaseStudoesComponent";
import dot from "../../public/assets/images/dot.svg";
import OtherProjectAndWebsites from "@/components/homePageComponent/OtherProjectAndWebsites";
const Projects = () => {
  const tab = "design-projects";
  return (
    <div className="max-w-screen-xl mx-auto px-[2rem] relative py-[4rem]">
      <div className="flex flex-row items-center gap-[23px] pt-[24px] md:pt-[88px]">
        <h1 className="text-[#fff] font-tinyBrushy md:text-[40px] sm:text-[36px] text-[32px]  lg:text-[48px] font-normal uppercase ">
          MY PROJECTS
        </h1>
        <Image
          src={productdesign}
          width={62.412}
          height={56.396}
          alt="productdesign"
          className="max-[768px]:w-[10%] "
        />
        <Image
          src={uiUx}
          // className="sm:w-fit w-[10%] "
          width={62.412}
          height={56.396}
          alt="productdesign"
          className="max-[768px]:w-[10%] "
        />
      </div>
      <Image
        className="absolute top-[9%] sm:block hidden left-[12%]"
        src={dot}
        alt="dot"
        width={4}
        height={4}
      />
      <p className="text-[#C9CFD9] font-Beginning text-base  md:text-[18px] lg:text-[20px] font-normal leading-[32px] ">
        I have worked on different projects since I started UX design in 2021
        and I have a few here to show. Some of them are live on Appstore &
        Playstore while some are live and being used already on websites. Some
        are also personal projects done by me.{" "}
      </p>

      <div>
        <h1 className="text-[#fff] pt-[45px]  lg:pt-[90px] text-center  font-tinyBrushy  text-[24px] md:text-[28px] lg:text-[32px] font-normal uppercase leading-[normal] ">
          CASE STUDIES.
        </h1>
        {/* <div className="flex  p-2 mx-auto  mt-5 rounded-[300px] border border-solid border-[#fff] backdrop-blur-[10px] bg-[#29222240] w-fit  justify-center items-center gap-4 ">
          <div
            onClick={() => setTab("design-projects")}
            className={`cursor-pointer ${
              tab === "design-projects"
                ? "text-[#FFA17A] rounded-[100px] bg-[#202328]  md:bg-[#fff] py-2  px-5"
                : "text-[#C9CFD9]"
            } py-2  px-5  text-[12px] md:text-base font-normal font-Beginning leading-[normal]`}
          >
            Design Projects
          </div>
          <div
            onClick={() => setTab("webflow-projects")}
            className={`cursor-pointer ${
              tab === "webflow-projects"
                ? "text-[#FFA17A] rounded-[100px] bg-[#fff] py-2  px-5"
                : "text-[#C9CFD9]"
            }  py-2  px-5 text-[12px] md:text-base font-normal font-Beginning leading-[normal]`}
          >
            Webflow Projects
          </div>
        </div> */}
        {tab === "design-projects" && <ProjectsCaseStudy />}{" "}
        {/* {tab === "webflow-projects" && <TobiProjects />}{" "x} */}
      </div>

      {tab === "design-projects" && (
        <div>
          <OtherProjectAndWebsites />{" "}
        </div>
      )}
    </div>
  );
};

export default Projects;
