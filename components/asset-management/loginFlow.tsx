import React from "react";
import Image from "next/image";
import loginScreen from "../../public/assets/images/asset-management/login-screen.webp";
import loginDashboard from "../../public/assets/images/asset-management/login-dashboard.webp";

const AssetManagementLoginFlow = () => {
  return (
    <div className="pt-[60px] sm:pt-[80px] md:pt-[100px]">
      <h1 className="text-title font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
        User Flow
      </h1>
      <p className="text-body pt-[16px] max-w-[880px] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
        For every design I have done, I have always prioritized having a
        userflow because that&apos;s the backbone of how i am going to start
        my ideation phase, it usually helps me to understand how I am going
        to design from point A to point B.
      </p>

      <div className="pt-[40px] sm:pt-[48px] md:pt-[56px]">
        <h2 className="text-title font-tinyBrushy text-[18px] sm:text-[20px] md:text-[24px] font-normal leading-[normal]">
          Flow 1: Login
        </h2>
        <p className="text-body pt-[12px] max-w-[880px] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
          The system is designed for internal use within the organization,
          so user accounts are created and managed by administrators.
        </p>

        <div className="pt-[20px]">
          <p className="text-body text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Because of this:
          </p>
          <ul className="list-disc pl-4 flex gap-[12px] sm:gap-[15px] pt-[16px] flex-col">
            <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
              Users log in using their assigned email &amp; password
            </li>
            <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
              There is no sign up flow
            </li>
            <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
              Password management is handled internally
            </li>
          </ul>
        </div>

        <div className="pt-[32px] sm:pt-[40px] md:pt-[48px] flex flex-col md:flex-row items-center gap-[24px] md:gap-[32px]">
          <div className="w-full max-w-[420px] rounded-[10px] overflow-hidden border border-base">
            <Image
              src={loginScreen}
              width={272}
              height={329}
              alt="Login screen for the asset management tool"
              className="w-full h-auto"
            />
          </div>

          <div className="shrink-0 rounded-[12px] bg-surface-2 border border-base px-[20px] py-[16px] max-w-[220px] text-center">
            <p className="text-title text-[14px] sm:text-[16px] font-normal leading-[1.4] font-Beginning">
              Users move from the login screen to the dashboard after login
            </p>
          </div>

          <div className="w-full max-w-[420px] rounded-[10px] overflow-hidden border border-base">
            <Image
              src={loginDashboard}
              width={272}
              height={329}
              alt="Asset management dashboard after login"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetManagementLoginFlow;
