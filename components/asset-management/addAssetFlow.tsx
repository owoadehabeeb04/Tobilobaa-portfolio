import React from "react";
import Image, { type StaticImageData } from "next/image";
import dashboardScreen from "../../public/assets/images/asset-management/addasset-dashboard.webp";
import emptyListScreen from "../../public/assets/images/asset-management/addasset-emptylist.webp";
import step1Screen from "../../public/assets/images/asset-management/addasset-step1.webp";
import step2Screen from "../../public/assets/images/asset-management/addasset-step2.webp";
import step3Screen from "../../public/assets/images/asset-management/addasset-step3.webp";

type StepShotProps = {
  label: string;
  image: StaticImageData;
  alt: string;
};

const StepShot = ({ label, image, alt }: StepShotProps) => (
  <div className="flex flex-col items-center gap-[16px] sm:gap-[20px] w-full">
    <span className="rounded-full bg-surface-2 border border-base text-title font-tinyBrushy uppercase text-[14px] sm:text-[16px] px-[20px] py-[8px]">
      {label}
    </span>
    <div className="w-full rounded-[10px] overflow-hidden border border-base">
      <Image
        src={image}
        width={543}
        height={329}
        alt={alt}
        className="w-full h-auto"
      />
    </div>
  </div>
);

const AssetManagementAddAssetFlow = () => {
  return (
    <div className="pt-[60px] sm:pt-[80px] md:pt-[100px]">
      <h2 className="text-title font-tinyBrushy text-[18px] sm:text-[20px] md:text-[24px] font-normal leading-[normal]">
        Flow 2: Adding A New Asset
      </h2>
      <p className="text-body pt-[16px] max-w-[880px] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
        After logging in, administrators land on the dashboard where they can
        quickly access and manage assets. From there, they can navigate to
        the asset page and add a new asset.
      </p>

      <p className="text-label pt-[24px] text-center text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[normal] font-Beginning">
        Dashboard → Asset Page → Add Asset → Step 1 → Step 2 → Step 3 → Asset
        Created
      </p>

      <div className="pt-[32px] sm:pt-[40px] md:pt-[48px] flex flex-col md:flex-row items-center gap-[24px] md:gap-[32px]">
        <div className="w-full max-w-[600px] rounded-[10px] overflow-hidden border border-base">
          <Image
            src={dashboardScreen}
            width={543}
            height={329}
            alt="Asset management dashboard"
            className="w-full h-auto"
          />
        </div>

        <div className="shrink-0 rounded-[12px] bg-surface-2 border border-base px-[20px] py-[16px] max-w-[220px] text-center">
          <p className="text-title text-[14px] sm:text-[16px] font-normal leading-[1.4] font-Beginning">
            Users move to the asset page to see the asset list and ultimately
            add asset
          </p>
        </div>

        <div className="w-full max-w-[600px] rounded-[10px] overflow-hidden border border-base">
          <Image
            src={emptyListScreen}
            width={543}
            height={329}
            alt="Empty assets list before adding an asset"
            className="w-full h-auto"
          />
        </div>
      </div>

      <p className="text-body pt-[40px] sm:pt-[48px] md:pt-[56px] max-w-[900px] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
        There are 3 steps to adding an asset, from the research done, it was
        discovered that knowing about the particular asset can give more
        clarity on whatever asset is with any staff
      </p>

      <div className="pt-[32px] sm:pt-[40px] md:pt-[48px] grid grid-cols-1 md:grid-cols-3 gap-[32px] md:gap-[24px]">
        <StepShot
          label="Step 1"
          image={step1Screen}
          alt="Add asset step 1: asset info"
        />
        <StepShot
          label="Step 2"
          image={step2Screen}
          alt="Add asset step 2: purchase info"
        />
        <StepShot
          label="Step 3"
          image={step3Screen}
          alt="Add asset step 3: user assignment"
        />
      </div>

      <p className="text-body pt-[32px] sm:pt-[40px] md:pt-[48px] text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[normal] font-Beginning">
        These 3 steps show that the information of every asset is well
        documented, and will be shown on every asset details page.
      </p>
    </div>
  );
};

export default AssetManagementAddAssetFlow;
