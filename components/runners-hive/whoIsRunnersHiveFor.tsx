import React from "react";
import runnersHive1 from "../../public/assets/images/runner1.svg";
import runnersHive2 from "../../public/assets/images/runner2.svg";
import runnersHive3 from "../../public/assets/images/runner3.svg";
import runnersHive4 from "../../public/assets/images/runner4.svg";
import Image from "next/image";
import percentage from "../../public/assets/images/percentagee.svg";

const WhoIsRunnersHiveFor = () => {
  const casualIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <circle cx="8" cy="8.5" r="8" fill="#FAC738" />
      <circle cx="8" cy="8.5" r="4" fill="#090909" />
    </svg>
  );
  return (
    <>
      <div className="py-[60px] sm:py-[80px] md:py-[113px]">
        <h1 className="text-[#C9CFD9] font-tinyBrushy text-[32px] sm:text-[40px] md:text-[48px] font-normal leading-[normal]">
          Who is Runners Hive for{" "}
        </h1>
        <p className="pt-[16px] sm:pt-[24px] md:pt-[32px] text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] ">
          Before designing Runners Hive, I needed to understand who would
          benefit most from it. I conducted research to define our key user
          groups, ensuring that our design decisions aligned with their needs
          and motivations.
        </p>

        <main className="mt-[40px] sm:mt-[60px] md:mt-[83px]">
          <div
            className="rounded-[0px] whoRunner sm:rounded-[36px] md:rounded-[48px] p-[0px] sm:p-[30px] md:pl-[40px] md:pr-[100px] md:py-[41px] flex  flex-row items-start gap-[16px] border-0 sm:border border-solid border-[#667085]"
            
          >
            <div className="pt-2 ">{casualIcon}</div>
            <div className="w-full">
              <p className="text-[#fff] text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal] font-tinyBrushy ">
                Casual & Dedicated Runners, Fitness Enthusiasts & Social and
                Competitive Runners
              </p>

              <div className="pt-[30px] sm:pt-[40px] md:pt-[61px] grid grid-cols-1 sm:grid-cols-2 gap-[20px] sm:gap-[30px]">
                <div className="relative">
                  <Image
                    src={runnersHive1}
                    width={487}
                    height={325}
                    alt="runner hive image 1"
                    className="w-full h-auto rounded-[8px] sm:rounded-none"
                  />
                  {/* Overlay with gradient for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-[8px] sm:rounded-none"></div>

                  <div className="absolute bottom-[16px] sm:bottom-[24px] md:bottom-[32px] left-[16px] sm:left-[24px] md:left-[32px]">
                    <ul className="pl-4 text-[#fff] text-[14px] sm:text-[15px] md:text-base leading-[normal] font-normal font-Beginning list-disc">
                      <li>Want to track their runs and progress.</li>
                      <li>Motivated by rewards and achievements.</li>
                      <li>Motivated by rewards and achievements.</li>
                    </ul>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src={runnersHive2}
                    width={487}
                    height={325}
                    alt="runner hive image 2"
                    className="w-full h-auto rounded-[8px] sm:rounded-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-[8px] sm:rounded-none"></div>

                  <div className="absolute bottom-[16px] sm:bottom-[24px] md:bottom-[32px] left-[16px] sm:left-[24px] md:left-[32px]">
                    <ul className="pl-4 text-[#fff] text-[14px] sm:text-[15px] md:text-base leading-[normal] font-normal font-Beginning list-disc">
                      <li>Already lead an active lifestyle.</li>
                      <li>Enjoy exploring new fitness tools.</li>
                      <li>Value goal setting and tracking.</li>
                    </ul>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src={runnersHive3}
                    width={487}
                    height={325}
                    alt="runner hive image 3"
                    className="w-full h-auto rounded-[8px] sm:rounded-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-[8px] sm:rounded-none"></div>

                  <div className="absolute bottom-[16px] sm:bottom-[24px] md:bottom-[32px] left-[16px] sm:left-[24px] md:left-[32px]">
                    <ul className="pl-4 text-[#fff] text-[14px] sm:text-[15px] md:text-base leading-[normal] font-normal font-Beginning list-disc">
                      <li>More engaged when there&apos;s an incentive.</li>
                      <li>Likely to share their achievements with friends</li>
                      <li>Need motivation to be consistent.</li>
                    </ul>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src={runnersHive4}
                    width={487}
                    height={325}
                    alt="runner hive image 4"
                    className="w-full h-auto rounded-[8px] sm:rounded-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-[8px] sm:rounded-none"></div>

                  <div className="absolute bottom-[16px] sm:bottom-[24px] md:bottom-[32px] left-[16px] sm:left-[24px] md:left-[32px]">
                    <ul className="pl-4 text-[#fff] text-[14px] sm:text-[15px] md:text-base leading-[normal] font-normal font-Beginning list-disc">
                      <li>Engage more with leaderboards & challenges.</li>
                      <li>Seek social interaction through the app.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div>
        <h1 className="text-[#C9CFD9] font-tinyBrushy text-[32px] sm:text-[40px] md:text-[48px] font-normal leading-[normal]">
          Percentage of the key user groups?{" "}
        </h1>
        <p className="pt-[16px] sm:pt-[24px] md:pt-[32px] text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] ">
          A survey was sent out, and people that dont like fitness were filtered
          out. Amongst the interested ones, these are the results I found:
        </p>
        <div className="flex flex-row mt-[20px] sm:mt-[30px] md:mt-[40px] items-center gap-[24px] sm:gap-[60px] md:gap-[100px]">
  <Image
    src={percentage}
    width={278.48114013671875}
    height={264}
    alt="percentage"
    className="w-[220px] sm:w-[250px] md:w-[278px] h-auto"
  />
  <div className="flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px] w-full">
    <div className="flex flex-row items-center gap-[12px] sm:gap-[16px] md:gap-[20px]">
      <div className="h-[20px] w-[20px] sm:h-[28px] sm:w-[28px] md:h-[32px] md:w-[32px] bg-[#B1E0EA] flex-shrink-0"></div>
      <p className="font-tinyBrushy text-[14px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] text-[#fff]">
        Casual & Dedicated Runners
      </p>
    </div>
    <div className="flex flex-row items-center gap-[12px] sm:gap-[16px] md:gap-[20px]">
      <div className="h-[20px] w-[20px] sm:h-[28px] sm:w-[28px] md:h-[32px] md:w-[32px] bg-[#0A9EC2] flex-shrink-0"></div>
      <p className="font-tinyBrushy text-[14px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] text-[#fff]">
        Social & Competitive Runners
      </p>
    </div>
    <div className="flex flex-row items-center gap-[12px] sm:gap-[16px] md:gap-[20px]">
      <div className="h-[20px] w-[20px] sm:h-[28px] sm:w-[28px] md:h-[32px] md:w-[32px] bg-[#4BCEE1] flex-shrink-0"></div>
      <p className="font-tinyBrushy text-[14px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] text-[#fff]">
        Others
      </p>
    </div>
  </div>
</div>
      </div>

      <p className="text-[#fff] pt-[30px] sm:pt-[40px] md:pt-[52px] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
        {" "}
        This means that more of the people run casually and run because that&apos;s
        their lifestyle, some people like to share their progress & compete with
        other people. Others don&apos;t care, they just want to run.
      </p>
      
      <div className="pt-[60px] sm:pt-[90px] md:pt-[123px]">
        <h1 className="text-[#C9CFD9] font-tinyBrushy text-[32px] sm:text-[40px] md:text-[48px] font-normal leading-[normal] ">
          Understanding the audience helped me shape Runners Hive&apos;s key
          features:{" "}
        </h1>
        <div className="pt-[20px] sm:pt-[30px] md:pt-[40px] flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px]">
          <div className="flex items-start sm:items-center gap-[16px] sm:gap-[20px] md:gap-[30px]">
            <div className="mt-1 sm:mt-0">{casualIcon}</div>
            <p className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
              A point based reward system for motivation
            </p>
          </div>
          <div className="flex items-start sm:items-center gap-[16px] sm:gap-[20px] md:gap-[30px]">
            <div className="mt-1 sm:mt-0">{casualIcon}</div>
            <p className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
              A marketplace to use the points gained to purchase items{" "}
            </p>
          </div>
          <div className="flex items-start sm:items-center gap-[16px] sm:gap-[20px] md:gap-[30px]">
            <div className="mt-1 sm:mt-0">{casualIcon}</div>
            <p className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
              An opportunity to build a community of runners{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoIsRunnersHiveFor;