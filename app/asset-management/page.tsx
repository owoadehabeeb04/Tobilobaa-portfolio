import React from "react";
import AssetManagementHero from "@/components/asset-management/hero";
import AssetManagementProblem from "@/components/asset-management/problem";
import AssetManagementSolution from "@/components/asset-management/solution";
import AssetManagementDesignProcess from "@/components/asset-management/designProcess";
import AssetManagementResearchInsights from "@/components/asset-management/researchInsights";
import AssetManagementDesignApproach from "@/components/asset-management/designApproach";
import AssetManagementLoginFlow from "@/components/asset-management/loginFlow";
import AssetManagementAddAssetFlow from "@/components/asset-management/addAssetFlow";
import AssetManagementAssetInfoPages from "@/components/asset-management/assetInfoPages";
import AssetManagementOutcomeImpact from "@/components/asset-management/outcomeImpact";
import AssetManagementRoleStats from "@/components/asset-management/roleStats";

const AssetManagementCaseStudy = () => {
  return (
    <div className="pt-[6rem] sm:pt-[6.5rem] md:pt-[7rem]">
      <div className="mx-auto px-[16px] sm:px-[24px] md:px-[48px] lg:px-[103px] max-w-[1311px]">
        <AssetManagementHero />
        <AssetManagementProblem />
        <AssetManagementSolution />
        <AssetManagementDesignProcess />
        <AssetManagementResearchInsights />
        <AssetManagementDesignApproach />
        <AssetManagementLoginFlow />
        <AssetManagementAddAssetFlow />
        <AssetManagementAssetInfoPages />
        <AssetManagementOutcomeImpact />
        <AssetManagementRoleStats />

        <div className="pt-[80px] sm:pt-[100px] md:pt-[143px] pb-[40px] sm:pb-[60px] md:pb-[80px]">
          <a href="/sanlam" className="block hover:opacity-80 transition-opacity">
            <p className="underline font-Beginning text-title text-[18px] sm:text-[24px] md:text-[32px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed text-left">
              View Next Project - Changing the Experience of Over 500,000 Sanlam Customers
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AssetManagementCaseStudy;
