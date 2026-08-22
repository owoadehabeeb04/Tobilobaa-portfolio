import React from "react";
import AdepaHero from "@/components/adepa/hero";
import AboutAdepa from "@/components/adepa/aboutAdepa";
import ProcessOverview from "@/components/adepa/processOverview";
import ResearchStoreVisiting from "@/components/adepa/researchStoreVisiting";
import ResearchQuestions from "@/components/adepa/researchQuestions";
import StakeholderMap from "@/components/adepa/stakeholderMap";
import Personas from "@/components/adepa/personas";
import CustomerJourneyMap from "@/components/adepa/customerJourneyMap";
import ServiceBlueprint from "@/components/adepa/serviceBlueprint";
import ResearchInsights from "@/components/adepa/researchInsights";

const AdepaCaseStudy = () => {
  return (
    <div className="pt-[6rem] sm:pt-[8rem] md:pt-[10rem]">
      {/* hero page of the adepa case study */}
      <div className="mx-auto px-[16px] sm:px-[24px] md:px-[48px] lg:px-[103px] max-w-[1311px]">
        <AdepaHero />
        <AboutAdepa />
        <ProcessOverview />
        <ResearchStoreVisiting />
        <ResearchQuestions />
        <StakeholderMap />
        <Personas />
        <CustomerJourneyMap />
        <ServiceBlueprint />
        <ResearchInsights />

        <div className="pt-[80px] sm:pt-[100px] md:pt-[143px] pb-[40px] sm:pb-[60px] md:pb-[80px]">
          <a href="/asset-management" className="block hover:opacity-80 transition-opacity">
            <p className="underline font-Beginning text-title text-[18px] sm:text-[24px] md:text-[32px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed text-left">
              View Next Project - Scaling Asset Management: Tracking 10,000+ Assets Across 20+ Locations
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdepaCaseStudy;
