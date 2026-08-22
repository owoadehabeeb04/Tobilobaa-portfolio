import React from "react";
import SanlamHero from "@/components/sanlam/hero";
import SanlamStatGrid from "@/components/sanlam/statGrid";
import SanlamChallengeAndResearch from "@/components/sanlam/challengeAndResearch";
import SanlamDesignProcess from "@/components/sanlam/designProcess";
import SanlamSketches from "@/components/sanlam/sketches";
import SanlamInformationArchitecture from "@/components/sanlam/informationArchitecture";
import SanlamUserFlowOverview from "@/components/sanlam/userFlowOverview";
import SanlamOnboardingFlow from "@/components/sanlam/onboardingFlow";
import SanlamClaimFlow from "@/components/sanlam/claimFlow";
import SanlamPaymentFlow from "@/components/sanlam/paymentFlow";
import SanlamGetHelpFlow from "@/components/sanlam/getHelpFlow";
import SanlamHomepageDashboard from "@/components/sanlam/homepageDashboard";
import SanlamDesignSystem from "@/components/sanlam/designSystem";
import SanlamColorPalette from "@/components/sanlam/colorPalette";
import SanlamIcons from "@/components/sanlam/icons";
import SanlamKeySolutionsAndResults from "@/components/sanlam/keySolutionsAndResults";

const SanlamCaseStudy = () => {
  return (
    <div className="pt-[6rem] sm:pt-[8rem] md:pt-[10rem]">
      {/* hero page of the sanlam case study  */}
      <SanlamHero />

      {/* special details */}
      <div className="px-[16px] max-w-[1311px] mx-auto sm:px-[40px] md:px-[80px] lg:px-[163px] pt-[4rem] sm:pt-[6rem] md:pt-[8rem]">
        <SanlamStatGrid />
        <SanlamChallengeAndResearch />
        <SanlamDesignProcess />
        <SanlamSketches />
        <SanlamInformationArchitecture />
        <SanlamUserFlowOverview />
        <SanlamOnboardingFlow />
        <SanlamClaimFlow />
        <SanlamPaymentFlow />
        <SanlamGetHelpFlow />
        <SanlamHomepageDashboard />
        <SanlamDesignSystem />
        <SanlamColorPalette />
        <SanlamIcons />
        <SanlamKeySolutionsAndResults />

        <div className="pt-[80px] sm:pt-[100px] md:pt-[143px] pb-[40px] sm:pb-[60px] md:pb-[80px]">
          <a href="/runners-hive" className="block hover:opacity-80 transition-opacity">
            <p className="underline font-Beginning text-title text-[18px] sm:text-[24px] md:text-[32px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed  text-left">
              View Next Project - Earn More, Move More: Turning Kilometers into Rewards
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SanlamCaseStudy;
