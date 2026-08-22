import React from "react";
import Image, { type StaticImageData } from "next/image";
import HomePageDashboard1 from "../../public/assets/images/hoem dashboard big .png";
import HomePageDashboard2 from "../../public/assets/images/home page dashbaord 2.png";
import HomePageDashboard3 from "../../public/assets/images/home page dashboard 3.png";
import otherscreenImage from "../../public/assets/images/other screens.png";

type ScreenBlockProps = {
  title: string;
  description?: string;
  image: StaticImageData;
  pullUp?: boolean;
};

const ScreenBlock = ({ title, description, image, pullUp }: ScreenBlockProps) => (
  <div className={`relative isolate ${pullUp ? "translate-y-[-1rem] sm:translate-y-[-1.5rem] md:translate-y-[-2rem]" : ""}`}>
    <div className="relative z-10">
      <h1 className="text-body text-center font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
        {title}
      </h1>
      {description && (
        <p className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal text-center font-Beginning leading-[normal] mt-2">
          {description}
        </p>
      )}
    </div>

    <div className="pt-[20px] sm:pt-[30px] md:pt-[40px] w-full relative z-0">
      <Image
        src={image}
        alt="home page dashboard"
        width={1513}
        height={919}
        className="w-full translate-y-[-1rem] sm:translate-y-[-2rem] md:translate-y-[-3rem] lg:translate-y-[-5rem] xl:translate-y-[-7rem] rounded-[10px] sm:rounded-[15px] md:rounded-[20px]"
      />
    </div>
  </div>
);

const SanlamHomepageDashboard = () => {
  return (
    <div className="pt-[30px] sm:pt-[40px] md:pt-[48px]">
      <ScreenBlock
        title="HomePage/Dashboard."
        description="The homepage screen for customers that have or have had AT LEAST 1 POLICY with us"
        image={HomePageDashboard1}
      />
      <ScreenBlock
        title="HomePage/Dashboard."
        description="The homepage screen for customers that have NO POLICY with us"
        image={HomePageDashboard2}
        pullUp
      />
      <ScreenBlock
        title="Policy Details Screens."
        description="The Policy details screen are displayed to show information on the policy in 2 parts:"
        image={HomePageDashboard3}
        pullUp
      />
      <div className="relative translate-y-[-1rem] sm:translate-y-[-1.5rem] md:translate-y-[-2rem] isolate">
        <div className="relative z-10">
          <h1 className="text-body text-center font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
            Other Screens.
          </h1>
        </div>

        <div className="pt-[20px] sm:pt-[30px] md:pt-[40px] w-full relative z-0">
          <Image
            src={otherscreenImage}
            alt="home page dashboard"
            width={1513}
            height={919}
            className="w-full rounded-[10px] sm:rounded-[15px] md:rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SanlamHomepageDashboard;
