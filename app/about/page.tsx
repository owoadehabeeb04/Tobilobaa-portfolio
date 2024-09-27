import Image from "next/image"
import firstBaoutPicture from "../../public/assets/images/0N4A9202 2.png"
import secondAboutPicture from "../../public/assets/images/0N4A9233 1.png"
import aboutMeEmogi from "../../public/assets/images/aboutMeEmogi.svg"
import { sanlamExperience } from "@/constants"
const About = () => {
  return (
    <div>
      <div className='max-w-screen-xl mx-auto px-[2rem]  relative py-[9rem]'>


        <h1 className='text-cente flex  gap-[14px] mx-auto justify-center   text-[#fff] font-tinyBrushy text-[48px] font-normal leading-[74px] uppercase'>About Me         <Image src={aboutMeEmogi} alt="second about picture" width={43.162} height={31} />
        </h1>
        <div className='pt-[32px] mx-auto max-w-[1512px] justify-center   w-full flex items-center gap-[32px] '>
          <Image src={secondAboutPicture} alt="second about picture" width={273} height={409} />
          <div>


            <p className="text-center font-Beginning text-[#C9CFD9] text-[28px] font-normal leading-[normal]">I’m Owoade Tobiloba, a product designer and webflow developer based in Lagos, Nigeria, with 3 years of experience in the field. Throughout my career, I’ve had the opportunity to work on several projects, spanning industries like finance, admin, lifestyle, e-commerce and many more...</p>
            <p className="text-center font-Beginning text-[#C9CFD9] text-[28px] font-normal leading-[normal] pt-[12px]">I have a deep understanding of user needs and a passion for creating intuitive, impactful designs. My goal is always to deliver digital products that not only resonate with users but also meet business objectives.</p>
          </div>
          <Image src={firstBaoutPicture} alt="second about picture" width={273} height={409} />

        </div>

      </div>
      <div className='max-w-screen-xl mx-auto px-[2rem]  relative py-[9rem]'>

        <h1 className="text-[#fff] font-normal leading-[normal] uppercase text-[48px] pb-[40px] font-tinyBrushy">MY EXPERIENCE.</h1>

        <p className="text-[#C9CFD9] font-Beginning text-[32px] pb-[20px] font-normal leading-[32px]">SANLAM NIGERIA / UI/UX Designer</p>
        <ul className="pt-[]">
          {sanlamExperience.map((experience, index) => (

            <li key={index} className="text-[#C9CFD9] gap-[32px] flex items-center  text-[32px] font-Beginning leading-[normal] font-normal"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
              <circle cx="4" cy="4.5" r="4" fill="#C9CFD9" />
            </svg> {experience}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default About
