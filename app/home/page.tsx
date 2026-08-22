import type { Metadata } from "next";
import AboutMeIntro from "@/components/about-me/aboutMeIntro";
import FeaturedWork from "@/components/homePageComponent/featuredWork";
import HeroPage from "@/components/homePageComponent/heroPage";

export const metadata: Metadata = {
  title: "Home | Tobiloba's Portfolio",
  description: "Explore Tobiloba Owoade's product design portfolio and featured work."
};

export default function HomePage() {
  return (
    <main>
      <HeroPage />
      <AboutMeIntro showCta />
      <FeaturedWork />
    </main>
  );
}
