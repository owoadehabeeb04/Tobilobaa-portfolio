import React from "react";
import Image, { type StaticImageData } from "next/image";
import journeyCustomer from "../../public/assets/images/adepa/journey-customer.webp";
import journeyAttendant from "../../public/assets/images/adepa/journey-attendant.webp";
import journeyManager from "../../public/assets/images/adepa/journey-manager.webp";

type JourneySlide = {
  label: string;
  image: StaticImageData;
  alt: string;
  width: number;
  height: number;
};

const slides: JourneySlide[] = [
  {
    label: "Customer — Kenny",
    image: journeyCustomer,
    alt: "Customer journey map for Kenny, covering stage, actions, thoughts and emotions from planning and arrival through checkout",
    width: 1256,
    height: 1004
  },
  {
    label: "Store Attendant — Akosua Addo",
    image: journeyAttendant,
    alt: "Journey map for store attendant Akosua Addo, covering stage, actions, thoughts and emotions across a work shift",
    width: 1260,
    height: 996
  },
  {
    label: "Store Manager — Mr. Adepa",
    image: journeyManager,
    alt: "Journey map for store owner and manager Mr. Adepa, covering stage, actions, thoughts and emotions across a work day",
    width: 1262,
    height: 1011
  }
];

const CustomerJourneyMap = () => {
  return (
    <div className="pt-[60px] sm:pt-[90px] md:pt-[120px]">
      <h1 className="text-title font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-normal leading-[normal]">
        Customer Journey Map
      </h1>
      <p className="pt-[16px] sm:pt-[20px] md:pt-[24px] text-body text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
        To better understand the end-to-end experience, we created journey
        maps for key stakeholders, capturing their actions, thoughts,
        emotions, and pain points at each stage of the service.
      </p>

      <div className="pt-[30px] sm:pt-[40px] md:pt-[56px] flex flex-col gap-[48px] sm:gap-[56px] md:gap-[64px]">
        {slides.map((slide, index) => (
          <div key={index} className="flex flex-col gap-[16px]">
            <h2 className="text-title font-tinyBrushy text-[18px] sm:text-[20px] md:text-[22px] font-normal leading-[normal]">
              {slide.label}
            </h2>
            <Image
              src={slide.image}
              width={slide.width}
              height={slide.height}
              alt={slide.alt}
              className="w-full h-auto rounded-[10px] sm:rounded-[15px] bg-surface p-[8px] sm:p-[12px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerJourneyMap;
