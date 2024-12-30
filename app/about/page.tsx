import Image from "next/image";
// import firstBaoutPicture from "../../public/assets/images/0N4A9202 2.png";
// import firstImage from "../../public/assets/images/0N4A9209 1.svg";
// import secondImage from "../../public/assets/images/0N4A9233 1.svg";
// import thirdImage from "../../public/assets/images/0N4A9243 1.svg";
// import fourthImage from "../../public/assets/images/0N4A9246 1.svg";
// import secondAboutPicture from "../../public/assets/images/0N4A9233 1.png";
import aboutMeEmogi from "../../public/assets/images/aboutMeEmogi.svg";
// import { sanlamExperience } from "@/constants";
import WebflowUxLayout from "@/components/about me/aboutMeGridPicture";
import MusicPlaylist from "@/components/about me/musicPlaylist";
import ArticlesWritten from "@/components/about me/articlesWritten";
const About = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-5 md:px-[2rem]  relative sm:pt-0 pt-[96px] sm:py-[96px] md:py-[9rem]">
        <h1 className="sm:text-center text-start flex  gap-[14px] mx-auto sm:justify-center   text-[#fff] font-tinyBrushy  text-[32px]  sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal leading-[normal] lg:leading-[74px] uppercase">
          About Me{" "}
          <Image
            src={aboutMeEmogi}
            alt="second about picture"
            width={43.162}
            height={31}
          />
        </h1>
        <div className="md:pt-[24px] pt-[20px] lg:pt-[32px] mx-auto max-w-[1512px] justify-center   w-full flex items-center gap-[32px] ">
          <div>
            <p className="text-start sm:text-center font-Beginning text-[#C9CFD9]  text-base md:text-[20px] lg:text-2xl  font-normal leading-[normal]">
              I’m Owoade Tobiloba, a UX designer & Webflow Developer based in
              Toronto, Canada, with 3 years of experience in the field.
              Throughout my career, I ’ve had the opportunity to work on several
              projects, spanning industries like finance, admin, lifestyle,
              e-commerce and many more...I have a deep understanding of user
              needs and a passion for creating intuitive, impactful designs. My
              goal is always to deliver digital products that not only resonate
              with users but also meet business objectives.
            </p>
          </div>
        </div>
        </div>

        <div className="mt-4 ">
          <WebflowUxLayout />
        </div>
      <div className="mt-4 sm:mt-16 max-w-screen-xl flex flex-col gap-6 mx-auto px-5 md:px-[2rem] relative]">
        <h1 className="font-tinyBrushy text-[#fff] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[normal] uppercase">
          OTHER INTERESTS .
        </h1>
        <div className="flex flex-col gap-6">
          <p className="text-[#C9CFD9] font-Beginning text-base sm:text-[1.15rem]  md:text-xl  lg:text-2xl font-normal leading-[normal]">
            Outside of work, I&apos;m an avid gamer, with a particular love for FIFA.
            Podcasts are my go-to while working, providing a great balance
            between focus and entertainment. When I unwind, I often find myself
            watching movies, especially Bollywood films, though I also enjoy
            very good Nollywood productions.
          </p>
          <p className="text-[#C9CFD9] font-Beginning text-base sm:text-[1.15rem]  md:text-xl  lg:text-2xl font-normal leading-[normal]">            Outside of work, I&apos;m an avid gamer, with a particular love for FIFA.
            Podcasts are my go-to while working, providing a great balance
            between focus and entertainment. When I unwind, I often find myself
            watching movies, especially Bollywood films, though I also enjoy
            very good Nollywood productions. Music is another passion of mine,
            especially Afrobeats. Some of my favorite artists include BNXN,
            SIMI, AYO MAFF, MUIS, LLONA, ASAKE, and YOUNG JONN, among others.
          </p>
          <p className="text-[#C9CFD9] font-Beginning text-base sm:text-[1.15rem]  md:text-xl  lg:text-2xl font-normal leading-[normal]">            I also have a strong affinity for writing. Over the years, I&apos;ve
            penned about 8 articles on Medium, covering a range of topics from
            random musings to UI/UX content and reflections on how I&apos;m feeling
            at the time
          </p>
        </div>
      </div>
      <MusicPlaylist />
      <ArticlesWritten />
    </div>
  );
};

export default About;

// <div className="max-w-screen-xl mx-auto px-[2rem]  relative py-[9rem]">
// <h1 className="text-[#fff] font-normal leading-[normal] uppercase text-[48px] pb-[40px] font-tinyBrushy">
//   MY EXPERIENCE.
// </h1>

// <p className="text-[#C9CFD9] font-Beginning text-[32px] pb-[20px] font-normal leading-[32px]">
//   SANLAM NIGERIA / UI/UX Designer
// </p>
// <ul className="pt-[]">
//   {sanlamExperience.map((experience, index) => (
//     <li
//       key={index}
//       className="text-[#C9CFD9] gap-[32px] flex items-center  text-[32px] font-Beginning leading-[normal] font-normal"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="8"
//         height="9"
//         viewBox="0 0 8 9"
//         fill="none"
//       >
//         <circle cx="4" cy="4.5" r="4" fill="#C9CFD9" />
//       </svg>{" "}
//       {experience}
//     </li>
//   ))}
// </ul>
// </div>
