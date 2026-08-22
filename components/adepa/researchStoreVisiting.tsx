import React from "react";
import Image, { type StaticImageData } from "next/image";
import visit1 from "../../public/assets/images/adepa/visit-01.webp";
import visit2 from "../../public/assets/images/adepa/visit-02.webp";
import visit3 from "../../public/assets/images/adepa/visit-03.webp";
import visit4 from "../../public/assets/images/adepa/visit-04.webp";
import visit5 from "../../public/assets/images/adepa/visit-05.webp";
import visit6 from "../../public/assets/images/adepa/visit-06.webp";
import visit7 from "../../public/assets/images/adepa/visit-07.webp";

const photos: { src: StaticImageData; alt: string }[] = [
  { src: visit1, alt: "Adepa African Grocery storefront signage" },
  { src: visit2, alt: "Shelves stocked with African grocery products" },
  { src: visit3, alt: "Refrigerated section and storage boxes inside Adepa" },
  { src: visit4, alt: "Aisle of packaged goods at Adepa" },
  { src: visit5, alt: "Team interviewing the store owner during a site visit" },
  { src: visit6, alt: "Team observing customers shopping inside the store" },
  { src: visit7, alt: "Wide view of a packed grocery aisle at Adepa" }
];

const ResearchStoreVisiting = () => {
  return (
    <div className="pt-[60px] sm:pt-[90px] md:pt-[120px]">
      <h1 className="text-title font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-normal leading-[normal]">
        Research & Store Visiting
      </h1>
      <p className="pt-[16px] sm:pt-[20px] md:pt-[24px] text-body text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
        My team and I began with multiple site visits where we interviewed
        the store owner and manager, Mr. Adepa and his family.
      </p>
      <div className="pt-[30px] sm:pt-[40px] md:pt-[48px] grid grid-cols-1 sm:grid-cols-2 gap-[16px] sm:gap-[24px]">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={
              index === photos.length - 1
                ? "sm:col-span-2 sm:max-w-[calc(50%-12px)] sm:mx-auto"
                : ""
            }
          >
            <Image
              src={photo.src}
              width={960}
              height={720}
              alt={photo.alt}
              className="w-full h-auto rounded-[10px] sm:rounded-[15px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchStoreVisiting;
