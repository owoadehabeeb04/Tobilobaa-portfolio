import AboutMeIntro from "@/components/about-me/aboutMeIntro";
import FeaturedWork from "@/components/homePageComponent/featuredWork";
import HeroPage from "@/components/homePageComponent/heroPage";

export default function Home() {
  return (
    <main>
      <HeroPage />
      <AboutMeIntro showCta />
      <FeaturedWork />
    </main>
  );
}
