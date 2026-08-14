import AboutMeIntro from "@/components/about-me/aboutMeIntro";
import OtherInterests from "@/components/about-me/otherInterests";
import MusicPlaylist from "@/components/about-me/musicPlaylist";
import ArticlesWritten from "@/components/about-me/articlesWritten";

const About = () => {
  return (
    <main className="pt-[60px] md:pt-[80px]">
      <AboutMeIntro />
      <OtherInterests />
      <MusicPlaylist />
      <ArticlesWritten />
    </main>
  );
};

export default About;
