import AdminSection from "@/components/runners-hive/adminSection";
import DesignSolution from "@/components/runners-hive/designSolution";
import RunnersHiveHero from "@/components/runners-hive/hero";
import ProjectScope from "@/components/runners-hive/projectScope";
import RoleRunnersHive from "@/components/runners-hive/roleRunnersHive";
import StyleGuide from "@/components/runners-hive/styleGuide";
import UserTesting from "@/components/runners-hive/userTesting";
import WhatYouLearnt from "@/components/runners-hive/whatYouLearnt";
import WhoIsRunnersHiveFor from "@/components/runners-hive/whoIsRunnersHiveFor";
import React from "react";

const RunnersHive = () => {
  return (
    <div className="pt-[6rem] sm:pt-[8rem] md:pt-[10rem]">
      {/* hero page of the runners hive  */}
      <div className=" mx-auto px-[16px] sm:px-[24px] md:px-[48px] lg:px-[103px]  max-w-[1311px]">
        <RunnersHiveHero />
        <RoleRunnersHive />
        <ProjectScope />
        <WhoIsRunnersHiveFor />
        <DesignSolution />
        <UserTesting />
      </div>
      <AdminSection />
      <div className=" mx-auto px-[16px] sm:px-[24px] md:px-[48px] lg:px-[103px]  max-w-[1311px]">
        <StyleGuide />
        <WhatYouLearnt />
      </div>
      <div className="pt-[80px] max-w-[1311px] px-[16px] sm:px-[24px] md:px-[48px] mx-auto sm:pt-[100px] md:pt-[143px] pb-[40px] sm:pb-[60px] md:pb-[80px]">
  <a href="#" className="block hover:opacity-80 transition-opacity">
    <p className="underline font-Beginning text-[#fff] text-[18px] sm:text-[24px] md:text-[32px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed text-left">
      View Next Project - REDESIGN OF A RESTAURANT&apos;S MOBILE APP (MR SUB)
    </p>
  </a>
</div>
    </div>
  );
};

export default RunnersHive;
