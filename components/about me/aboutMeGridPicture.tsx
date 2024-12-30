import React from "react";
import Image from "next/image";
import secondImage from "../../public/assets/images/0N4A9209 1.svg";
import firstImage from "../../public/assets/images/0N4A9233 1.svg";
import thirdImage from "../../public/assets/images/0N4A9243 1.svg";
import fourthImage from "../../public/assets/images/0N4A9246 1.svg";

const WebflowUxLayout: React.FC = () => {
  const dots = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 7" fill="none">
      <circle cx="3.66699" cy="3.5" r="3.5" fill="black" />
    </svg>
  );

  return (
    <>
      <div className="mx-auto  md:mt-24 max-w-full flex justify-center h-[322px] items-center gap-5">
        <div className="flex flex-row sm:gap-3 gap-1 md:gap-4 lg:gap-5 w-full justify-center items-center">
        <div className="h-full aspect-[253/322]">
      <Image
        width={253}
        height={322}
        className="w-full h-full object-cover"
        src={firstImage}
        alt="first image"
      />
    </div>

          <div className="grid grid-cols-1  lg:gap-5 md:gap-4 gap-1 sm:gap-3 ">
            <div className="flex   w-full lg:gap-5 md:gap-4 gap-1 sm:gap-3 h-[100%] items-center">
              <div className="w-full rounded-[4px] border-[4px] border-[#FFF] bg-[#FFA17A] h-full ">
                <div className="flex flex-row gap-2 justify-center h-full items-center">
                  <div className="sm:w-[8px] sm:h-[7px] w-[4px] h-[3.5px]">
                    {dots}
                  </div>
                  <p className="font-IndieFlower text-center text-[#000] md:text-xl sm:text-base text-[8px] lg:text-2xl font-normal leading-[normal]">
                    Webflow Developer
                  </p>
                  <div className="sm:w-[8px] sm:h-[7px] w-[4px] h-[3.5px]">
                    {dots}
                  </div>
                </div>
              </div>
              <div>
                <Image
                  width={125}
                  height={187}
                  src={thirdImage}
                  alt="first image"
                />
              </div>
            </div>

            <div className="aspect-[6/5] sm:aspect-[6/2.5]">
            <div className="w-full rounded-[4px] h-full border-[4px] border-[#FFA17A] bg-[#fff] flex flex-row gap-2 justify-center items-center">
                <div className="sm:w-[8px] sm:h-[7px] w-[4px] h-[3.5px]">
                  {dots}
                </div>
                <p className="font-IndieFlower text-center text-[#000] md:text-xl sm:text-base text-[8px] lg:text-2xl font-normal leading-[normal]">
                  UI/UX Designer
                </p>
                <div className="sm:w-[8px] sm:h-[7px] w-[4px] h-[3.5px]">
                  {dots}
                </div>
              </div>
            </div>
            {/* <div className="h-[100%] bg-[red]">
              <div className="w-full rounded-[4px] h-full border-[4px] border-[#FFA17A] bg-[#fff] flex flex-row gap-2 justify-center items-center">
                <div className="sm:w-[8px] sm:h-[7px] w-[4px] h-[3.5px]">
                  {dots}
                </div>
                <p className="font-IndieFlower text-center text-[#000] md:text-xl sm:text-base text-[8px] lg:text-2xl font-normal leading-[normal]">
                  UI/UX Designer
                </p>
                <div className="sm:w-[8px] sm:h-[7px] w-[4px] h-[3.5px]">
                  {dots}
                </div>
              </div>
            </div> */}
          </div>

          <div className="h-full aspect-[138/319]">
      <Image
        width={138}
        height={319}
        className="w-full h-full object-cover"
        src={fourthImage}
        alt="first image"
      />
    </div>
    <div className="h-full aspect-[215/322]">
      <Image
        width={215}
        height={322}
        className="w-full h-full object-cover"
        src={secondImage}
        alt="first image"
      />
    </div>
        </div>
      </div>
    </>
  );
};

export default WebflowUxLayout;
