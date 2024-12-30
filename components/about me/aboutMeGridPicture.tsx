import React from "react";
import Image from "next/image";
import secondImage from "../../public/assets/images/0N4A9209 1.svg";
import firstImage from "../../public/assets/images/0N4A9233 1.svg";
import thirdImage from "../../public/assets/images/0N4A9243 1.svg";
import fourthImage from "../../public/assets/images/0N4A9246 1.svg";

const WebflowUxLayout: React.FC = () => {
  const dots = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="7"
      viewBox="0 0 8 7"
      fill="none"
    >
      <circle cx="3.66699" cy="3.5" r="3.5" fill="black" />
    </svg>
  );
  return (
    <>
    <div className="mx-auto mt-24 max-w-full flex justify-center items-center gap-5">
      <div className="flex flex-row gap-5 items-center ">
        <div>
          <Image width={253} height={322} src={firstImage} alt="first image" />
        </div>
        <div className="flex flex-col  h-full gap-5">
          <div className="flex items-center gap-5">
            <div className="w-full  rounded-[4px] border-[4px] border-[#FFF] bg-[#FFA17A] h-[157px] flex flex-row gap-2 justify-center items-center">
              <div>{dots}</div>
              <p className="font-IndieFlower  text-[#000] text-2xl font-normal leading-[normal] ">
                Webflow Developer
            </p>
              <div>{dots}</div>
            </div>
            <Image
              width={125}
              height={157}
              className="h-[157px] object-cover" 
              src={thirdImage}
              alt="first image"
            />
          </div>
          <div>
            <div className="w-full rounded-[4px] border-[4px] border-[#FFA17A] bg-[#fff] h-[142px] flex flex-row gap-2 justify-center items-center">
              <div>{dots}</div>
              <p className="font-IndieFlower  text-[#000] text-2xl font-normal leading-[normal] ">
                UI/UX Designer
              </p>
              <div>{dots}</div>
            </div>
          </div>
        </div>

        <Image width={138} height={319} src={fourthImage} alt="first image" />
        <Image width={215} height={322} src={secondImage} alt="first image" />
      </div>
      </div>
    </>
  );
};

export default WebflowUxLayout;
