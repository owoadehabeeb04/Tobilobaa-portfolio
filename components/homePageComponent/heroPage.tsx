import React from "react";
import uiUx from "../../public/assets/images/Group 3.svg";
import productDesign from "../../public/assets/images/Component 8.svg";
import dot from "../../public/assets/images/dot.svg";
import Image from "next/image";
const HeroPage = () => {
  return (
    <>
      {" "}
      <div className="md:h-screen h-[60vh] relative">
        {/* <Image className='' src={mainPicture} alt="main picture" width={391} height={379} /> */}

        <div className=" bg-[url('/images/Main picture.png')] bg-[length:75%] md:bg-[length:50%] lg:bg-[length:26%] bg-no-repeat bg-bottom sm:bg-[position:50%_35%] background flex  md:absolute md:translate-x-[-50%] md:translate-y-[-50%] md:top-[50%] md:left-[50%] h-full  justify-center items-center w-full mx-auto">
          <h1 className="text-[#fff] font-tinyBrushy font-normal md:mr-[4rem] mt-[15rem] md:mt-[8rem] leading-[normal] text-[48px] md:text-[90px]">
            HELLO, I’M <br /> <span className="ml-[5rem]">TOBILOBA</span> <br />{" "}
            <span className="ml-[10rem]">OWOADE</span>
          </h1>
        </div>
        <div>
          {/* <div className='bg-[##98A2B3] rounded-[100%] w-[4px] h-[4px] p-4 absolute left-[13%] top-[50%]'></div> */}
          <Image
            className="absolute left-[2%] md:left-[17%]  top-[70%] md:top-[48%] "
            src={dot}
            width={4}
            height={4}
            alt=""
          />
          <Image
            className="absolute max-[768px]:right-[10%] md:left-[34.5%] top-[25%] md:top-[39%] "
            src={dot}
            width={4}
            height={4}
            alt=""
          />

          <Image
            className="absolute left-[13%] bottom-[-10%] md:bottom-[14%] "
            src={dot}
            width={4}
            height={4}
            alt=""
          />

          <Image
            className="absolute max-[768px]:hidden right-[7%] bottom-[38%] "
            src={dot}
            width={4}
            height={4}
            alt=""
          />
          <Image
            className="absolute right-[24.5%] max-[768px]:hidden top-[39%] "
            src={dot}
            width={4}
            height={4}
            alt=""
          />

          <Image
            className="absolute right-[34%] max-[768px]:hidden bottom-[26%] "
            src={dot}
            width={4}
            height={4}
            alt=""
          />
        </div>
        <Image
          className="absolute left-[13%] top-[20%] max-[768px]:w-[15%] md:top-[50%] "
          src={productDesign}
          width={137}
          height={123}
          alt=""
        />
        <Image
          className="absolute right-[13%] top-[110%] max-[768px]:w-[15%] md:top-[50%] "
          src={uiUx}
          width={137}
          height={123}
          alt=""
      />
      </div>
      <div className="description  md:mt-0 mt-32 flex items-center md:translate-y-[-4rem] pb-[0rem]">
        <ul className="flex text-center  text-base md:text-2xl lg:text-[32px] leading-[normal] gap-1 text-[#999] font-normal  font-tinyBrushy  flex-row description-slide items-center">
          <li>A UI/UX Designer based in Toronto, Canada, </li>
          <Image className=" " src={dot} width={8} height={8} alt="" />

          <li>A UI/UX Designer based in Toronto, Canada</li>
          <Image className=" " src={dot} width={8} height={8} alt="" />

          <li>A UI/UX Designer based in Toronto, Canada</li>
          <Image className=" " src={dot} width={8} height={8} alt="" />
        </ul>
        <ul className="flex text-center  text-base md:text-2xl lg:text-[32px] leading-[normal] gap-1 text-[#999] font-normal  font-tinyBrushy  flex-row description-slide items-center">
          <li>A UI/UX Designer based in Toronto, Canada</li>
          <Image className=" " src={dot} width={8} height={8} alt="" />

          <li>A UI/UX Designer based in Toronto, Canada</li>
          <Image className=" " src={dot} width={8} height={8} alt="" />

          <li>A UI/UX Designer based in Toronto, Canada</li>
          <Image className=" " src={dot} width={8} height={8} alt="" />
        </ul>
        <ul className="flex text-center  text-base md:text-2xl lg:text-[32px] leading-[normal] gap-1 text-[#999] font-normal  font-tinyBrushy  flex-row description-slide items-center">
          <li>A UI/UX Designer based in Toronto, Canada</li>
          <Image className=" " src={dot} width={8} height={8} alt="" />

          <li>A UI/UX Designer based in Toronto, Canada</li>
          <Image className=" " src={dot} width={8} height={8} alt="" />

          <li>A UI/UX Designer based in Toronto, Canada</li>
          <Image className=" " src={dot} width={8} height={8} alt="" />
        </ul>
      </div>
    </>
  );
};

export default HeroPage;
