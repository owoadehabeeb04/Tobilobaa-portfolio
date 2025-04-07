import React from "react";
import sanlam1 from "../../public/assets/images/sanlam1.svg";
import sanlam2 from "../../public/assets/images/sanlam2.svg";
import Image from "next/image";
import runnershive1n from "../../public/assets/images/runnershive1.svg";
import runnershive2 from "../../public/assets/images/runnershive2.svg";

const RelevantExperience = () => {
  return (
    <div className="py-[20px] px-[16px] sm:px-[24px] md:px-[48px] md:py-[64px] max-w-[1311px] mx-auto">
      <div>
        <h1 className="text-[#fff] font-tinyBrushy text-[28px] sm:text-[36px] md:text-[48px] font-normal leading-[normal]">
          RELEVANT EXPERIENCE.
        </h1>
        <main className="flex flex-col gap-[40px] md:gap-[64px] mt-6 md:mt-10">
          {/* runners hive */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            <div className="max-w-full md:max-w-[599px] flex flex-col gap-4">
              <h1 className="text-[#fff] font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
                Product Designer at Runners hive
              </h1>
              <p className="text-[#fff] font-tinyBrushy text-sm sm:text-base leading-[normal] font-normal">
                Aug 2024 - Feb 2025
              </p>
              <div>
                <ul className="list-disc flex pl-4 flex-col gap-3 md:gap-4">
                  <li className="text-[#C9CFD9] font-Beginning text-sm sm:text-base font-normal leading-[normal]">
                    Designed an interactive fitness tracking experience that
                    motivates users to run by tracking distances, mapping
                    routes, and awarding coins based on performance.
                  </li>
                  <li className="text-[#C9CFD9] font-Beginning text-sm sm:text-base font-normal leading-[normal]">
                    Developed a marketplace feature using mockups & competitive
                    analysis to guide the design where users redeem earned coins
                    for exclusive products, incorporating discount codes and
                    external product links.
                  </li>
                  <li className="text-[#C9CFD9] font-Beginning text-sm sm:text-base font-normal leading-[normal]">
                    Designed the admin feature for the Runners Hive app,
                    allowing administrators to easily manage user accounts,
                    monitor earned points, and oversee the product marketplace.
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full sm:w-fit py-[16px] sm:py-[24px] md:py-[32px] px-[20px] sm:px-[30px] md:px-[44px] rounded-[20px] sm:rounded-[29.761px] bg-[#FEF1CD] flex flex-row gap-[15px] sm:gap-[29px] overflow-auto">
              <Image
                src={runnershive1n}
                width={200}
                height={200}
                alt="runnershive1"
                className="w-[150px] h-auto sm:w-[180px] md:w-[200px]"
              />
              <Image
                src={runnershive2}
                width={200}
                height={200}
                alt="runnershive2"
                className="w-[150px] h-auto sm:w-[180px] md:w-[200px]"
              />
            </div>
          </div>

          {/* Sanlam App */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-4">
            <div className="max-w-full md:max-w-[599px] flex flex-col gap-4">
              <h1 className="text-[#fff] font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
                UX/UI Designer at Sanlam Nigeria
              </h1>
              <p className="text-[#fff] font-tinyBrushy text-sm sm:text-base leading-[normal] font-normal">
                Dec 2022- Dec 2024{" "}
              </p>
              <div>
                <ul className="list-disc flex pl-4 flex-col gap-3 md:gap-4">
                  <li className="text-[#C9CFD9] font-Beginning text-sm sm:text-base font-normal leading-[normal]">
                    Implemented the &apos;Sanlam Nigeria mobile app&apos; that helps about
                    500,000+ customers track their Insurance policies, make
                    payments on their policies, set up e-mandate (direct debit)
                    and reach customer care. The application has over 20,200
                    downloads on
                  </li>
                  <li className="text-[#C9CFD9] font-Beginning text-sm sm:text-base font-normal leading-[normal]">
                    Implemented the design of a sales website tailored for life
                    insurance products, effectively simplifying the process of
                    purchasing life insurance policies for customers.
                  </li>
                  <li className="text-[#C9CFD9] font-Beginning text-sm sm:text-base font-normal leading-[normal]">
                    Created the design of a robust asset management system for
                    the company, enabling seamless documentation and tracking of
                    about 2000 assets from laptops, desktops, printers and so
                    on.
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full sm:w-fit py-[16px] sm:py-[24px] md:py-[32px] px-[20px] sm:px-[30px] md:px-[44px] rounded-[20px] sm:rounded-[29.761px] bg-[#CCEBFF] flex flex-row gap-[15px] sm:gap-[29px] overflow-auto">
              <Image
                src={sanlam1}
                width={200}
                height={200}
                alt="sanlam1"
                className="w-[150px] h-auto sm:w-[180px] md:w-[200px]"
              />
              <Image
                src={sanlam2}
                width={200}
                height={200}
                alt="sanlam2"
                className="w-[150px] h-auto sm:w-[180px] md:w-[200px]"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RelevantExperience;