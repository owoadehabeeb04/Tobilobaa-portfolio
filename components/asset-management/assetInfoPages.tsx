import React from "react";
import Image, { type StaticImageData } from "next/image";
import assetList from "../../public/assets/images/asset-management/assetinfo-list.webp";
import generalInfo from "../../public/assets/images/asset-management/assetinfo-general.webp";
import purchaseInfo from "../../public/assets/images/asset-management/assetinfo-purchase.webp";
import serviceInfo from "../../public/assets/images/asset-management/assetinfo-service.webp";
import historyInfo from "../../public/assets/images/asset-management/assetinfo-history.webp";

type InfoScreenProps = {
  label: string;
  image: StaticImageData;
  alt: string;
};

const InfoScreen = ({ label, image, alt }: InfoScreenProps) => (
  <div className="flex flex-col gap-[16px] sm:gap-[20px]">
    <span className="self-start rounded-full bg-surface-2 border border-base text-title font-tinyBrushy uppercase text-[14px] sm:text-[16px] px-[20px] py-[8px]">
      {label}
    </span>
    <div className="w-full rounded-[10px] overflow-hidden border border-base">
      <Image
        src={image}
        width={837}
        height={507}
        alt={alt}
        className="w-full h-auto"
      />
    </div>
  </div>
);

const AssetManagementAssetInfoPages = () => {
  return (
    <div className="pt-[60px] sm:pt-[80px] md:pt-[100px]">
      <h1 className="text-title font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
        Asset Info Pages
      </h1>
      <p className="text-body pt-[16px] max-w-[880px] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
        After designing the added asset pages, it is important to show how
        the assets are displayed &amp; how each information is displayed
      </p>

      <div className="pt-[32px] sm:pt-[40px] md:pt-[48px] flex flex-col gap-[40px] sm:gap-[48px] md:gap-[56px]">
        <InfoScreen
          label="Asset page"
          image={assetList}
          alt="Assets list page"
        />
        <InfoScreen
          label="General info"
          image={generalInfo}
          alt="Asset general info page"
        />
        <InfoScreen
          label="Purchase details"
          image={purchaseInfo}
          alt="Asset purchase details page"
        />
        <InfoScreen
          label="Service details"
          image={serviceInfo}
          alt="Asset service and maintenance history page"
        />
        <InfoScreen
          label="User History"
          image={historyInfo}
          alt="Asset user assignment history page"
        />
      </div>
    </div>
  );
};

export default AssetManagementAssetInfoPages;
