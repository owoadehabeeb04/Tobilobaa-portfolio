import React from "react";

/*
 * These hexes are content being displayed (a design-system swatch reference),
 * not theme — same rule as components/runners-hive/styleGuide.tsx. They stay
 * literal in both light and dark mode.
 */
const neutralColors = [
  { weight: "25", color: "#FCFCFD" },
  { weight: "50", color: "#F9FAFB" },
  { weight: "100", color: "#F2F4F7" },
  { weight: "200", color: "#EAECF0" },
  { weight: "300", color: "#D0D5DD" },
  { weight: "400", color: "#98A2B3" },
  { weight: "500", color: "#667085" },
  { weight: "600", color: "#475467" },
  { weight: "700", color: "#344054" },
  { weight: "800", color: "#1D2939" },
  { weight: "900", color: "#101828" },
  { weight: "950", color: "#0C111D" }
];

const primaryColors = [
  { weight: "100", color: "#E6F1FA" },
  { weight: "200", color: "#D9EAF7" },
  { weight: "300", color: "#B0D4EE" },
  { weight: "400", color: "#0075C9" },
  { weight: "500", color: "#0069B5" },
  { weight: "600", color: "#005EA1" },
  { weight: "700", color: "#005897" },
  { weight: "800", color: "#004679" },
  { weight: "900", color: "#00355A" },
  { weight: "1000", color: "#002946" }
];

const otherColors = [
  { weight: "100", color: "#ECFDF3" },
  { weight: "100", color: "#067647" },
  { weight: "100", color: "#E6F1FA" },
  { weight: "100", color: "#7A5AF8" },
  { weight: "100", color: "#EF6820" },
  { weight: "100", color: "#FFE7E0" },
  { weight: "100", color: "#D92D20" }
];

const ColorSwatch = ({ item }: { item: { weight: string; color: string } }) => (
  <div
    className="flex flex-col w-full max-w-[160px] rounded-[12px] overflow-hidden shadow-lg bg-white"
    style={{
      boxShadow: "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)"
    }}
  >
    <div className="h-[60px]" style={{ backgroundColor: item.color }}></div>
    <div className="p-2">
      <p className="text-[#101828] text-base sm:text-lg font-medium leading-7 font-Inter">{item.weight}</p>
      <p className="text-[#475467] text-sm sm:text-base font-normal leading-6 font-Inter">{item.color}</p>
    </div>
  </div>
);

const SanlamColorPalette = () => {
  return (
    <div className="pt-[40px] sm:pt-[60px] md:pt-[83px]">
      <h1 className="text-body text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal] font-tinyBrushy">
        Color Palatte
      </h1>
      <div className="flex pt-[25px] sm:pt-[35px] md:pt-[49px] flex-col gap-[30px] sm:gap-[35px] md:gap-[40px]">
        <div>
          <p className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Neutral Colors
          </p>
          <div className="grid grid-cols-2 pt-[20px] sm:pt-[25px] md:pt-[32px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[20px] sm:gap-[25px] md:gap-[32px]">
            {neutralColors.map((item, index) => (
              <ColorSwatch key={index} item={item} />
            ))}
          </div>
        </div>

        <div>
          <p className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Primary Colors
          </p>
          <div className="grid grid-cols-2 pt-[20px] sm:pt-[25px] md:pt-[32px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[20px] sm:gap-[25px] md:gap-[32px]">
            {primaryColors.map((item, index) => (
              <ColorSwatch key={index} item={item} />
            ))}
          </div>
        </div>

        <div>
          <p className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Other Colors
          </p>
          <div className="grid grid-cols-2 pt-[20px] sm:pt-[25px] md:pt-[32px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[20px] sm:gap-[25px] md:gap-[32px]">
            {otherColors.map((item, index) => (
              <ColorSwatch key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SanlamColorPalette;
