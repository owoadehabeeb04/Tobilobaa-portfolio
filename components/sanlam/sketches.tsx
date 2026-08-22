import React from "react";
import Image from "next/image";
import sketches1 from "../../public/assets/images/SKETCHES1.svg";
import sketches2 from "../../public/assets/images/SKETCHES2.svg";
import sketches3 from "../../public/assets/images/SKETCHES3.svg";
import sketches4 from "../../public/assets/images/SKETCHES4.svg";

const SanlamSketches = () => {
  return (
    <div className="py-[40px] sm:py-[50px] md:py-[64px]">
      <h1 className="text-body font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
        SKETCHES
      </h1>
      <p className="text-title pt-[12px] font-Beginning text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
        Designing this app was something I hadn&apos;t done before so it came
        with a lot of confusion and sketching my ideas helped a lot. The
        onboarding screens gave me a lot of issues because I was confused on
        how to design a PROJECT for the OLDER people & in a very proper
        corporate environment.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 pt-[30px] sm:pt-[45px] md:pt-[64px] gap-[20px] sm:gap-[30px] md:gap-[51px]">
        <div className="w-full aspect-[205/320]">
          <Image
            src={sketches1}
            width={205}
            height={320}
            alt="sketches1"
            className="w-full h-full rounded-[20px] sm:rounded-[30px] md:rounded-[45px] object-cover"
          />
        </div>
        <div className="w-full aspect-[205/320]">
          <Image
            src={sketches2}
            width={205}
            height={320}
            alt="sketches2"
            className="w-full h-full rounded-[20px] sm:rounded-[30px] md:rounded-[45px] object-cover"
          />
        </div>
        <div className="w-full aspect-[205/320]">
          <Image
            src={sketches3}
            width={205}
            height={320}
            alt="sketches3"
            className="w-full h-full rounded-[20px] sm:rounded-[30px] md:rounded-[45px] object-cover"
          />
        </div>
        <div className="w-full aspect-[205/320]">
          <Image
            src={sketches4}
            width={205}
            height={320}
            alt="sketches4"
            className="w-full h-full rounded-[20px] sm:rounded-[30px] md:rounded-[45px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SanlamSketches;
