import React from "react";
import Image from "next/image";
import InformationArchitecture from "../../public/assets/images/information architecture.svg";

const SanlamInformationArchitecture = () => {
  return (
    <div className="py-[30px] sm:py-[38px] md:py-[46px]">
      <h1 className="text-body font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
        INFORMATION ARCHITECTURE
      </h1>
      <p className="text-title pt-[12px] font-Beginning text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
        Ensuring the application is well-organized stands out as a crucial
        factor, significantly streamlining the design and development
        processes. Such organization becomes paramount given the continual
        integration of new features into the platform over time. A notable
        instance of this is the app&apos;s functionality enabling customers to
        purchase policies directly.
      </p>

      <div className="pt-[30px] sm:pt-[50px] md:pt-[74px] flex justify-center items-center">
        <Image
          src={InformationArchitecture}
          alt="information architecture"
          width={1184}
          height={1468}
          className="w-full md:max-w-[1184px]"
        />
      </div>
    </div>
  );
};

export default SanlamInformationArchitecture;
