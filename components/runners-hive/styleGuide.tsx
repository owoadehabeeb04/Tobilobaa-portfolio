import React from "react";

const StyleGuide = () => {
  const primaryColors = [
    { hex: "#FFF9EB", name: "Primary 50" },
    { hex: "#FEF7E1", name: "Primary 100" },
    { hex: "#FDEEC1", name: "Primary 200" },
    { hex: "#FAC738", name: "Primary 500" },
    { hex: "#E1B332", name: "Primary 600" },
    { hex: "#C89F2D", name: "Primary 700" },
    { hex: "#BC952A", name: "Primary 800" },
    { hex: "#967722", name: "Primary 900" },
    { hex: "#705A19", name: "Primary 950" },
    { hex: "#584614", name: "Primary 1000" }
  ];

  // Grey color shades
  const greyColors = [
    { hex: "#FCFCFD", name: "Grey 50" },
    { hex: "#F9FAFB", name: "Grey 100" },
    { hex: "#F2F4F7", name: "Grey 200" },
    { hex: "#EAECF0", name: "Grey 300" },
    { hex: "#D0D5DD", name: "Grey 400" },
    { hex: "#98A2B3", name: "Grey 500" },
    { hex: "#667085", name: "Grey 600" },
    { hex: "#475467", name: "Grey 700" },
    { hex: "#344054", name: "Grey 800" },
    { hex: "#1D2939", name: "Grey 900" },
    { hex: "#101828", name: "Grey 950" }
  ];

  const ColorBlock = ({ color }: { color: { hex: string; name: string } }) => (
    <div className="flex flex-col items-center">
      <div
        className="w-full h-[80px] sm:h-[95px] md:h-[109px]"
        style={{
          backgroundColor: color.hex,
          boxShadow: "0px 4px 24px 0px rgba(9, 44, 76, 0.40)"
        }}
      ></div>
      <p className="text-[#fff] text-center pt-[8px] sm:pt-[10px] md:pt-[12px] font-Beginning text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.4]">
        <span
          className="block text-center font-Beginning text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.4] bg-clip-text text-transparent"
          style={{
            background:
              "linear-gradient(180deg, #667085 0%, #98A2B3 50%, #475467 83%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          {color.hex}
        </span>
      </p>
    </div>
  );
  
  return (
    <div className="pt-[60px] sm:pt-[90px] md:pt-[138px] px-[16px] sm:px-[24px] md:px-0">
      <div>
        <h1 className="text-[#C9CFD9] font-tinyBrushy text-[32px] sm:text-[40px] md:text-[48px] font-normal leading-[normal]">
          Style Guide
        </h1>
      </div>
      
      {/* Brand Color Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-[24px] sm:pt-[28px] md:pt-[32px]">
        <div className="w-fit mb-[24px] sm:mb-0">
          <h1 className="text-[#fff] font-Beginning leading-[normal] font-normal text-[24px] sm:text-[28px] md:text-[32px]">
            Brand color
          </h1>
        </div>
        <div className="flex flex-row items-center gap-[32px] sm:gap-[40px] md:gap-[48px] w-full sm:w-auto">
          <div className="w-full sm:w-auto">
            <div
              className="w-full sm:w-[240px] md:w-[304px] h-[200px] sm:h-[250px] md:h-[307px] rounded-[8px] sm:rounded-[10px] bg-[#FAC738]"
              style={{ boxShadow: "0px 4px 24px 0px rgba(9, 44, 76, 0.40)" }}
            ></div>
            <h1 className="text-[#fff] text-center pt-[12px] sm:pt-[14px] md:pt-[16px] font-beginning text-[14px] sm:text-[15px] md:text-base leading-[1.4] sm:leading-[22px] font-normal">
              Primary
              <span
                className="text-[14px] sm:text-[15px] md:text-base pl-[8px] sm:pl-[12px] md:pl-[16px] font-normal leading-[1.4] sm:leading-[22px] font-Beginning bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(180deg, #667085 0%, #98A2B3 50%, #475467 83%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                #FAC738
              </span>
            </h1>
          </div>
          <div className="w-full sm:w-auto">
            <div
              className="w-full sm:w-[240px] md:w-[304px] h-[200px] sm:h-[250px] md:h-[307px] rounded-[8px] sm:rounded-[10px] bg-[#C89F2D]"
              style={{ boxShadow: "0px 4px 24px 0px rgba(9, 44, 76, 0.40)" }}
            ></div>
            <h1 className="text-[#fff] text-center pt-[12px] sm:pt-[14px] md:pt-[16px] font-beginning text-[14px] sm:text-[15px] md:text-base leading-[1.4] sm:leading-[22px] font-normal">
              Complementary
              <span
                className="text-[14px] sm:text-[15px] md:text-base pl-[8px] sm:pl-[12px] md:pl-[16px] font-normal leading-[1.4] sm:leading-[22px] font-Beginning bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(180deg, #667085 0%, #98A2B3 50%, #475467 83%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                #C89F2D
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Primary Color Section */}
      <div className="pt-[40px] sm:pt-[50px] md:pt-[64px] flex flex-col md:flex-row md:justify-between md:items-center">
        <h2 className="text-[#fff] font-Beginning leading-[normal] font-normal text-[24px] sm:text-[28px] md:text-[32px] mb-[24px] md:mb-0">
          Shades of <br className="hidden md:block" />
          Primary color{" "}
        </h2>
        <div className="grid w-full md:max-w-[728px] grid-cols-4 gap-x-[16px] sm:gap-x-[32px] md:gap-x-[64px] gap-y-[16px] sm:gap-y-[24px] md:gap-y-[30px]">
          {primaryColors.map((color, index) => (
            <ColorBlock key={index} color={color} />
          ))}
        </div>
      </div>

      {/* Grey Color Section */}
      <div className="pt-[40px] sm:pt-[50px] md:pt-[64px] flex flex-col md:flex-row md:justify-between md:items-center mb-[40px] sm:mb-[60px] md:mb-[80px]">
        <h2 className="text-[#fff] font-Beginning leading-[normal] font-normal text-[24px] sm:text-[28px] md:text-[32px] mb-[24px] md:mb-0">
          Grey Colors
        </h2>
        <div className="grid w-full md:max-w-[728px] grid-cols-4 gap-x-[16px] sm:gap-x-[32px] md:gap-x-[64px] gap-y-[16px] sm:gap-y-[24px] md:gap-y-[30px]">
          {greyColors.map((color, index) => (
            <ColorBlock key={index} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;