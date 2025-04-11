import React from "react";
import backgroundSvg from "../../public/assets/images/backgriundImage.svg";
import backgroundSvg2 from "../../public/assets/images/backgroundImage2.svg";
import Image from "next/image";

const UserTesting = () => {
  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 12C2.25 6.615 6.615 2.25 12 2.25C17.385 2.25 21.75 6.615 21.75 12C21.75 17.385 17.385 21.75 12 21.75C6.615 21.75 2.25 17.385 2.25 12ZM15.61 10.186C15.67 10.1061 15.7134 10.0149 15.7377 9.91795C15.762 9.82098 15.7666 9.72014 15.7514 9.62135C15.7361 9.52257 15.7012 9.42782 15.6489 9.3427C15.5965 9.25757 15.5276 9.18378 15.4463 9.12565C15.3649 9.06753 15.2728 9.02624 15.1753 9.00423C15.0778 8.98221 14.9769 8.97991 14.8785 8.99746C14.7801 9.01501 14.6862 9.05205 14.6023 9.10641C14.5184 9.16077 14.4462 9.23135 14.39 9.314L11.154 13.844L9.53 12.22C9.38783 12.0875 9.19978 12.0154 9.00548 12.0188C8.81118 12.0223 8.62579 12.101 8.48838 12.2384C8.35097 12.3758 8.27225 12.5612 8.26882 12.7555C8.2654 12.9498 8.33752 13.1378 8.47 13.28L10.72 15.53C10.797 15.6069 10.8898 15.6662 10.992 15.7036C11.0942 15.7411 11.2033 15.7559 11.3118 15.7469C11.4202 15.738 11.5255 15.7055 11.6201 15.6519C11.7148 15.5982 11.7967 15.5245 11.86 15.436L15.61 10.186Z"
        fill="#FAC738"
      />
    </svg>
  );
  const columns = [
    {
      title1: "Group A",
      backgroundImage: backgroundSvg,
      items1: ["2 testers", "No idea what they were testing for"],
      title2: "Insight",
      items2: [
        "Was able to understand the app & navigate through it",
        "Sometimes I may not know if i'm suppose to just run or get a shoe first.",
        "I would like to set an automatic action of purchasing something after i get a particular points"
      ]
    },
    {
      title1: "Group B",
      backgroundImage: backgroundSvg2,
      items1: ["2 testers", "Had clear objectives on what to do."],
      title2: "Insight",
      items2: [
        "No problem navigating the app",
        "Wanted suggested route runs other people have made"
      ]
    }
  ];
  return (
    <div className="pt-[80px] sm:pt-[100px] md:pt-[150px]">
      <h1 className="text-[#C9CFD9] font-tinyBrushy text-[32px] sm:text-[40px] md:text-[48px] font-normal leading-[normal]">
        {" "}
        User Testing{" "}
      </h1>
      <p className="pt-[16px] sm:pt-[24px] md:pt-[32px] font-Beginning text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
        I tested the product with users with keen expectation on how to navigate
        through the app easily & carry out the most important tasks to them
        based on fitness.. I gave 4 people the prototype to go test, divided
        into 2 groups.
      </p>
      <div className="pt-[32px] sm:pt-[48px] md:pt-[64px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[166px]">
        {columns.map((column, index) => (
          <div
            key={index}
            style={{
              background:
                "linear-gradient(100deg, rgba(102, 112, 133, 0.10) 2.31%, rgba(152, 162, 179, 0.10) 52.72%, rgba(71, 84, 103, 0.10) 86.04%)"
            }}
            className="rounded-[40px] sm:rounded-[70px] md:rounded-[100px] h-auto min-h-[500px] sm:min-h-[600px] md:h-[740px] border border-solid border-[#667085] p-6 sm:p-[40px] md:p-[64px] relative overflow-hidden mb-8 md:mb-0"
          >
            <div className="relative z-10">
              <h1 className="text-[#C9CFD9] text-[22px] sm:text-[24px] md:text-[28px] font-tinyBrushy font-normal leading-[normal]">
                {column.title1}
              </h1>
              <div className="pt-[16px] sm:pt-[20px] md:pt-[24px] flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px]">
                {column.items1.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex flex-row gap-[8px] items-start sm:items-center"
                  >
                    <div className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] mt-1 sm:mt-0 flex-shrink-0">
                      {arrow}
                    </div>
                    <span className="text-[#ffff] text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.4] md:leading-[normal] font-Beginning">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* second1 */}
              <h1 className="text-[#C9CFD9] pt-[40px] sm:pt-[56px] md:pt-[72px] text-[22px] sm:text-[24px] md:text-[28px] font-tinyBrushy font-normal leading-[normal]">
                {column.title2}
              </h1>
              <div className="pt-[16px] sm:pt-[20px] md:pt-[24px] flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px]">
                {column.items2.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex flex-row gap-[8px] items-start sm:items-center"
                  >
                    <div className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] mt-1 sm:mt-0 flex-shrink-0">
                      {arrow}
                    </div>
                    <span className="text-[#ffff] text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.4] md:leading-[normal] font-Beginning">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Background SVG positioned in bottom right */}
            <div className="absolute bottom-0 right-0 opacity-30">
              <Image
                src={column.backgroundImage}
                alt={`background pattern ${index + 1}`}
                width={156}
                height={190}
                className="w-[110px] h-auto sm:w-[120px] md:w-[156px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTesting;