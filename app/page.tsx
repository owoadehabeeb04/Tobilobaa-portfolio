import CaseStudies from "@/components/homePageComponent/caseStudies";
import HeroPage from "@/components/homePageComponent/heroPage";
import OtherProjectAndWebsites from "@/components/homePageComponent/OtherProjectAndWebsites";
import RelevantExperience from "@/components/homePageComponent/relevantExperience";

export default function Home() {
  return (
    <div>
      <HeroPage />
      <CaseStudies />
      <OtherProjectAndWebsites />
      <RelevantExperience />
    </div>
  );
}
