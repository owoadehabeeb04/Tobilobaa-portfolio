import React from "react";
import uiUx from "../../public/assets/images/Group 3.svg";
import productDesign from "../../public/assets/images/Component 8.svg";
import sanlamHero from "../../public/assets/images/sanlamherocasestudy.svg";
import Image from "next/image";
import sketches1 from "../../public/assets/images/SKETCHES1.svg";
import sketches2 from "../../public/assets/images/SKETCHES2.svg";
import sketches3 from "../../public/assets/images/SKETCHES3.svg";
import sketches4 from "../../public/assets/images/SKETCHES4.svg";
import InformationArchitecture from "../../public/assets/images/information architecture.svg";
import arrow from "../../public/assets/images/caseStudyarrow.svg";
import onboarding from "../../public/assets/images/onboarding.svg";
import claimFlow from "../../public/assets/images/Make a claim flow.svg";
import makePayment from "../../public/assets/images/make a payment.svg";
import getHelp from "../../public/assets/images/gethelp.svg";
import getHelp2 from "../../public/assets/images/secondhelpflow.svg";
import HomePageDashboard1 from "../../public/assets/images/hoem dashboard big .png";
import HomePageDashboard2 from "../../public/assets/images/home page dashbaord 2.png";
import HomePageDashboard3 from "../../public/assets/images/home page dashboard 3.png";
import otherscreenImage from "../../public/assets/images/other screens.png";
import makeAClaimDesign from "../../public/assets/images/make a claim design.png";
import makeAPaymentFlow from "../../public/assets/images/amke a payment flow.png";
import icon1 from "../../public/assets/images/allicons.png";

const SanlamCaseStudy = () => {
  return (
    <div className="pt-[6rem] sm:pt-[8rem] md:pt-[10rem]">
      {/* hero page of the sanlam case study  */}
      <div className="flex px-[16px] sm:px-[24px] md:px-[48px] max-w-[1311px] flex-col gap-[30px] sm:gap-[40px] md:gap-[57px] justify-center items-center mx-auto">
        <h1 className="text-[#fff] max-w-[978px] text-center font-tinyBrushy text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-normal leading-[normal]">
          Changing the experience of over 500,000 customers on how to manage
          their insurance products & make payments.
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start w-full justify-between gap-[12px]">
          <div className="hidden md:block">
            <Image
              src={productDesign}
              width={137}
              height={123}
              alt="product design"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              width={704}
              height={571}
              className="max-w-full md:max-w-[704px] md:max-h-[571px] rounded-[20px]"
              src={sanlamHero}
              alt="sanlam hero image"
            />
          </div>
          <div className="hidden md:block">
            <Image src={uiUx} width={137} height={123} alt="" />
          </div>
        </div>
      </div>

      {/* special details */}
      <div className="px-[16px] max-w-[1311px] mx-auto sm:px-[40px] md:px-[80px] lg:px-[163px] pt-[4rem] sm:pt-[6rem] md:pt-[8rem]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] sm:gap-[30px]">
          <div className="flex flex-col gap-[15px] sm:gap-[28px]">
            <h1 className="text-[#C9CFD9] font-normal leading-[normal] font-tinyBrushy text-[14px] sm:text-base">
              Duration
            </h1>
            <p className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
              3 months
            </p>
          </div>

          <div className="flex flex-col gap-[15px] sm:gap-[28px]">
            <h1 className="text-[#C9CFD9] font-normal leading-[normal] font-tinyBrushy text-[14px] sm:text-base">
              TEAM MEMBERS
            </h1>
            <p className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
              Owoade Tobiloba
            </p>
          </div>

          <div className="flex flex-col gap-[15px] sm:gap-[28px]">
            <h1 className="text-[#C9CFD9] font-normal leading-[normal] font-tinyBrushy text-[14px] sm:text-base">
              ROLE
            </h1>
            <div className="flex flex-col gap-2">
              <p className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
                UI Designer
              </p>
              <p className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
                UX Designer
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[15px] sm:gap-[28px]">
            <h1 className="text-[#C9CFD9] font-normal leading-[normal] font-tinyBrushy text-[14px] sm:text-base">
              TOOLS
            </h1>
            <div className="flex flex-col gap-2">
              <p className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
                Figma
              </p>
              <p className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
                Canva
              </p>
            </div>
          </div>
        </div>

        <div className="py-[40px] sm:py-[50px] md:py-[64px] flex flex-col gap-[40px] sm:gap-[50px] md:gap-[64px]">
          {/* the challenge */}
          <div>
            <h1 className="text-[#C9CFD9] font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
              THE CHALLENGE
            </h1>
            <ul className="list-disc pl-4 flex gap-[15px] sm:gap-[20px] pt-[12px] flex-col">
              <li className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
                Customers couldn&apos;t easily find their past and present policies.
              </li>
              <li className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
                Renewing policy premiums was a lengthy and confusing process.
              </li>
              <li className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
                Reaching customer support required multiple steps, causing
                frustration.
              </li>
              <li className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
                Older users struggled with small text and complex navigation.
              </li>
            </ul>
          </div>

          {/* research and insights  */}
          <div>
            <h1 className="text-[#C9CFD9] font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
              RESEARCH & INSIGHTS
            </h1>
            <p className="text-[#fff] pt-[12px] font-Beginning text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
              To understand the user pain points, I conducted a thorough review
              of the existing app and analyzed customer feedback. Since the
              primary users were Sanlam customers, I leveraged insights from
              internal staff who interacted with them daily. Through this, I
              identified the core usability issues and formulated key design
              improvements:
            </p>
            <ul className="list-disc pl-4 flex gap-[15px] sm:gap-[20px] pt-[20px] flex-col">
              <li className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
                Simplify navigation to ensure policies are visible on the
                homepage.
              </li>
              <li className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
                Streamline the renewal process to be completed in just three
                clicks within five minutes.
              </li>
              <li className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
                Introduce a direct messaging feature for customer support.
              </li>
              <li className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
                Optimize the interface for older users with larger text and
                guided steps.
              </li>
            </ul>
          </div>
        </div>

        <div className="py-[40px] sm:py-[50px] md:py-[64px]">
          <div>
            <h1 className="text-[#C9CFD9] font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
              DESIGN PROCESS
            </h1>
            <ul className="list-disc pl-4 flex gap-[15px] sm:gap-[20px] pt-[12px] flex-col">
              <li className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
                Wireframing & Ideation – Created low-fidelity wireframes to map
                out user flows and optimize key interactions.
              </li>
              <li className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
                Iterative Prototyping – Designed high-fidelity mockups based on
                feedback from internal staff acting as test users.
              </li>
              <li className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
                Usability Testing – Conducted usability tests with staff members
                who were also Sanlam customers. Their feedback guided further
                refinements.
              </li>
            </ul>
          </div>
        </div>

        <div className="py-[40px] sm:py-[50px] md:py-[64px]">
          <h1 className="text-[#C9CFD9] font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
            SKETCHES
          </h1>
          <p className="text-[#fff] pt-[12px] font-Beginning text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
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

        <div className="py-[30px] sm:py-[38px] md:py-[46px]">
          <h1 className="text-[#C9CFD9] font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
            INFORMATION ARCHITECTURE
          </h1>
          <p className="text-[#fff] pt-[12px] font-Beginning text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
            Ensuring the application is well-organized stands out as a crucial
            factor, significantly streamlining the design and development
            processes. Such organization becomes paramount given the continual
            integration of new features into the platform over time. A notable
            instance of this is the app&apos;s functionality enabling customers to
            purchase policies directly.
          </p>

          <div className="pt-[30px] sm:pt-[50px] md:pt-[74px] flex justify-center items-center">
            <Image
              src={InformationArchitecture}
              alt="information architecture"
              width={1184}
              height={1468}
              className="w-full md:max-w-[1184px]"
            />
          </div>
        </div>

        {/* User Flow Section */}
        <div className="py-[30px] sm:py-[38px] md:py-[46px]">
          <h1 className="text-[#C9CFD9] font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
            USER FLOW
          </h1>
          <p className="text-[#fff] pt-[12px] font-Beginning text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
            Different flows for different actions that can be done on the app
            will be shown so as not to overload and complicate things. The
            actions and flows that will be accounted for are:
          </p>

          {/* Modified for mobile responsiveness */}
          <div className="flex flex-col sm:flex-row flex-wrap pt-8 items-start sm:items-center gap-5">
            <div className="flex items-center gap-2">
              <Image src={arrow} alt="arrow" className="w-5 h-auto" />
              <h1 className="text-[#fff] font-Beginning text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
                Onboarding / Login / Sign up flow
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Image src={arrow} alt="arrow" className="w-5 h-auto" />
              <h1 className="text-[#fff] font-Beginning text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
                Make a Claim flow
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Image src={arrow} alt="arrow" className="w-5 h-auto" />
              <h1 className="text-[#fff] font-Beginning text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
                Make Payment flow
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Image src={arrow} alt="arrow" className="w-5 h-auto" />
              <h1 className="text-[#fff] font-Beginning text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
                Get Help flow
              </h1>
            </div>
          </div>
        </div>

        {/* onboarding flow */}
        <div className="py-[30px] sm:py-[40px] md:py-[48px]">
          <h1 className="text-[#C9CFD9] text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal] font-tinyBrushy">
            Onboarding / Login / Sign up flow
          </h1>
          <p className="text-[#fff] pt-[12px] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Easy onboarding and login is very necessary to not drive the
            customers away. So, use of Phone number became the choice.
          </p>

          <div className="pt-[30px] sm:pt-[40px] md:pt-[56px]">
            <Image
              src={onboarding}
              width={1313}
              height={730}
              alt="Onboarding flow"
              className="w-full rounded-[10px] sm:rounded-[15px] md:rounded-[20px]"
            />
          </div>
        </div>

        {/* claim flow */}
        <div className="pt-[30px] sm:pt-[40px] md:pt-[48px]">
          <h1 className="text-[#C9CFD9] text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal] font-tinyBrushy">
            Make a Claim Flow
          </h1>
          <p className="text-[#fff] pt-[12px] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            A solution was made to make customers make claims successfully on
            the app without having to call customer care or go the office
            physically.
          </p>

          <div className="pt-[30px] sm:pt-[40px] md:pt-[56px]">
            <Image
              src={claimFlow}
              width={1313}
              height={730}
              alt="Claim flow"
              className="w-full rounded-[10px] sm:rounded-[15px] md:rounded-[20px]"
            />
          </div>
        </div>

        {/* make a claim design flow */}
        <div className="pt-[30px] sm:pt-[40px] md:pt-[48px]">
          <h1 className="text-[#C9CFD9] text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal] font-tinyBrushy">
            Make a Claim Design
          </h1>

          <div className="pt-[30px] sm:pt-[40px] md:pt-[56px]">
            <Image
              src={makeAClaimDesign}
              width={1313}
              height={730}
              alt="Make a claim design"
              className="w-full rounded-[10px] sm:rounded-[15px] md:rounded-[20px]"
            />
          </div>
        </div>

        {/* make a payment flow */}
        <div className="pt-[30px] sm:pt-[40px] md:pt-[48px]">
          <h1 className="text-[#C9CFD9] text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal] font-tinyBrushy">
            Make a Payment Flow
          </h1>

          <p className="text-[#fff] pt-[12px] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            To pay premium on policies used to be very traditional, they either
            used to go to the bank or call the agent to do it, but now,
            customers can go on the app and click any policy they want to make a
            payment for.
          </p>

          <div className="pt-[30px] sm:pt-[40px] md:pt-[56px]">
            <Image
              src={makeAPaymentFlow}
              width={1313}
              height={730}
              alt="Make a payment flow"
              className="w-full rounded-[10px] sm:rounded-[15px] md:rounded-[20px]"
            />
          </div>
        </div>

        {/* make a payment */}
        <div className="pt-[30px] sm:pt-[40px] md:pt-[48px]">
          <h1 className="text-[#C9CFD9] text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal] font-tinyBrushy">
            Make a Payment
          </h1>

          <div className="pt-[30px] sm:pt-[40px] md:pt-[56px]">
            <Image
              src={makePayment}
              width={1313}
              height={730}
              alt="Make payment"
              className="w-full rounded-[10px] sm:rounded-[15px] md:rounded-[20px]"
            />
          </div>
        </div>

        {/* GET a HELP */}
        <div className="pt-[30px] sm:pt-[40px] md:pt-[48px]">
          <h1 className="text-[#C9CFD9] text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal] font-tinyBrushy">
            Get Help Flow
          </h1>

          <p className="text-[#fff] pt-[12px] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Getting to customer care is very essential for a company that has
            over 500,000 customer base. So, instead of having to go to social
            media or going physically to the office, there is a solution that
            sends message directly to the customer care.
          </p>

          <div className="pt-[30px] sm:pt-[40px] md:pt-[56px]">
            <Image
              src={getHelp}
              width={1313}
              height={730}
              alt="Get help flow"
              className="w-full rounded-[10px] sm:rounded-[15px] md:rounded-[20px]"
            />
          </div>
        </div>

        {/* Get a help */}
        <div className="pt-[30px] sm:pt-[40px] md:pt-[48px]">
          <h1 className="text-[#C9CFD9] text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal] font-tinyBrushy">
            Get Help Flow
          </h1>

          <div className="pt-[30px] sm:pt-[40px] md:pt-[56px]">
            <Image
              src={getHelp2}
              width={1313}
              height={730}
              alt="Get help flow 2"
              className="w-full rounded-[10px] sm:rounded-[15px] md:rounded-[20px]"
            />
          </div>
        </div>

        {/* home page and dashboard */}
        <div className="pt-[30px] sm:pt-[40px] md:pt-[48px]">
          <div className="relative isolate">
            <div className="relative z-10">
              <h1 className="text-[#C9CFD9] text-center font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
                HomePage/Dashboard.
              </h1>

              <p className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal text-center font-Beginning leading-[normal] mt-2">
                The homepage screen for customers that have or have had AT LEAST
                1 POLICY with us
              </p>
            </div>

            <div className="pt-[20px] sm:pt-[30px] md:pt-[40px] w-full relative z-0">
              <Image
                src={HomePageDashboard1}
                alt="home page dashboard"
                width={1513}
                height={919}
                className="w-full translate-y-[-1rem] sm:translate-y-[-2rem] md:translate-y-[-3rem] lg:translate-y-[-5rem] xl:translate-y-[-7rem] rounded-[10px] sm:rounded-[15px] md:rounded-[20px]"
              />
            </div>
          </div>

          <div className="relative translate-y-[-1rem] sm:translate-y-[-1.5rem] md:translate-y-[-2rem] isolate">
            <div className="relative z-10">
              <h1 className="text-[#C9CFD9] text-center font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
                HomePage/Dashboard.
              </h1>

              <p className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal text-center font-Beginning leading-[normal] mt-2">
                The homepage screen for customers that have NO POLICY with us
              </p>
            </div>

            <div className="pt-[20px] sm:pt-[30px] md:pt-[40px] w-full relative z-0">
              <Image
                src={HomePageDashboard2}
                alt="home page dashboard"
                width={1513}
                height={919}
                className="w-full translate-y-[-1rem] sm:translate-y-[-2rem] md:translate-y-[-3rem] lg:translate-y-[-5rem] xl:translate-y-[-7rem] rounded-[10px] sm:rounded-[15px] md:rounded-[20px]"
              />
            </div>
          </div>

          <div className="relative translate-y-[-1rem] sm:translate-y-[-1.5rem] md:translate-y-[-2rem] isolate">
            <div className="relative z-10">
              <h1 className="text-[#C9CFD9] text-center font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
                Policy Details Screens.
              </h1>

              <p className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal text-center font-Beginning leading-[normal] mt-2">
                The Policy details screen are displayed to show information on
                the policy in 2 parts:
              </p>
            </div>

            <div className="pt-[20px] sm:pt-[30px] md:pt-[40px] w-full relative z-0">
              <Image
                src={HomePageDashboard3}
                alt="home page dashboard"
                width={1513}
                height={919}
                className="w-full translate-y-[-1rem] sm:translate-y-[-2rem] md:translate-y-[-3rem] lg:translate-y-[-5rem] xl:translate-y-[-7rem] rounded-[10px] sm:rounded-[15px] md:rounded-[20px]"
              />
            </div>
          </div>

          <div className="relative translate-y-[-1rem] sm:translate-y-[-1.5rem] md:translate-y-[-2rem] isolate">
            <div className="relative z-10">
              <h1 className="text-[#C9CFD9] text-center font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
                Other Screens.
              </h1>
            </div>

            <div className="pt-[20px] sm:pt-[30px] md:pt-[40px] w-full relative z-0">
              <Image
                src={otherscreenImage}
                alt="home page dashboard"
                width={1513}
                height={919}
                className="w-full rounded-[10px] sm:rounded-[15px] md:rounded-[20px]"
              />
            </div>
          </div>
        </div>

        {/* Design System */}
        <div className="pt-[30px] sm:pt-[35px] md:pt-[39px]">
          <h1 className="text-[#C9CFD9] text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal] font-tinyBrushy">
            Design System
          </h1>
          <p className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning pt-[12px]">
            Design system serves as a single source of truth which groups all
            the elements that will allow the teams to design, realize, and
            develop a product. For this product I will show the color palettes,
            typography, icons used. This is known as the style guide and it was
            consistent throughout the product.
          </p>
        </div>

        {/* Color Palette */}
        <div className="pt-[40px] sm:pt-[60px] md:pt-[83px]">
          <h1 className="text-[#C9CFD9] text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal] font-tinyBrushy">
            Color Palatte
          </h1>
          <div className="flex pt-[25px] sm:pt-[35px] md:pt-[49px] flex-col gap-[30px] sm:gap-[35px] md:gap-[40px]">
            {/* Neutral Colors */}
            <div>
              <div>
                <p className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
                  Neutral Colors
                </p>
              </div>

              <div className="grid grid-cols-2 pt-[20px] sm:pt-[25px] md:pt-[32px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[20px] sm:gap-[25px] md:gap-[32px]">
                {[
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
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-full max-w-[160px] rounded-[12px] overflow-hidden shadow-lg bg-white"
                    style={{
                      boxShadow:
                        "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)"
                    }}
                  >
                    <div
                      className="h-[60px]"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div className="p-2">
                      <p className="text-[#101828] text-base sm:text-lg font-medium leading-7 font-Inter">
                        {item.weight}
                      </p>
                      <p className="text-[#475467] text-sm sm:text-base font-normal leading-6 font-Inter">
                        {item.color}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Colors */}
            <div>
              <div>
                <p className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
                  Primary Colors
                </p>
              </div>

              <div className="grid grid-cols-2 pt-[20px] sm:pt-[25px] md:pt-[32px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[20px] sm:gap-[25px] md:gap-[32px]">
                {[
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
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-full max-w-[160px] rounded-[12px] overflow-hidden shadow-lg bg-white"
                    style={{
                      boxShadow:
                        "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)"
                    }}
                  >
                    <div
                      className="h-[60px]"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div className="p-2">
                      <p className="text-[#101828] text-base sm:text-lg font-medium leading-7 font-Inter">
                        {item.weight}
                      </p>
                      <p className="text-[#475467] text-sm sm:text-base font-normal leading-6 font-Inter">
                        {item.color}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Colors */}
            <div>
              <div>
                <p className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
                  Other Colors
                </p>
              </div>

              <div className="grid grid-cols-2 pt-[20px] sm:pt-[25px] md:pt-[32px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[20px] sm:gap-[25px] md:gap-[32px]">
                {[
                  { weight: "100", color: "#ECFDF3" },
                  { weight: "100", color: "#067647" },
                  { weight: "100", color: "#E6F1FA" },
                  { weight: "100", color: "#7A5AF8" },
                  { weight: "100", color: "#EF6820" },
                  { weight: "100", color: "#FFE7E0" },
                  { weight: "100", color: "#D92D20" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-full max-w-[160px] rounded-[12px] overflow-hidden shadow-lg bg-white"
                    style={{
                      boxShadow:
                        "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)"
                    }}
                  >
                    <div
                      className="h-[60px]"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div className="p-2">
                      <p className="text-[#101828] text-base sm:text-lg font-medium leading-7 font-Inter">
                        {item.weight}
                      </p>
                      <p className="text-[#475467] text-sm sm:text-base font-normal leading-6 font-Inter">
                        {item.color}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Icons */}
        <div className="pt-[40px] sm:pt-[60px] md:pt-[75px]">
          <div>
            <h1 className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
              Icons
            </h1>
            <div className="gap-6 pt-[20px] sm:pt-[25px] md:pt-[32px]">
              <div className=" sm:p-6 rounded-lg flex items-center justify-center">
                <Image src={icon1} alt="Icon 1" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[80px] sm:pt-[120px] md:pt-[161px]">
          <h1 className="text-[#C9CFD9] text-[20px] sm:text-[24px] md:text-[32px] font-normal leading-[normal] font-tinyBrushy">
            KEY SOLUTIONS & IMPACT
          </h1>
          <ul className="list-disc pl-4 flex gap-[12px] sm:gap-[15px] md:gap-[20px] pt-[10px] sm:pt-[12px] flex-col">
            <li className="text-[#fff] text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed font-Beginning">
              Policy Management Simplification: Customers can now see their
              active and past policies directly from the homepage, improving
              accessibility and reducing confusion.
            </li>
            <li className="text-[#fff] text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed font-Beginning">
              Seamless Premium Renewal: The process was redesigned to be
              completed in three simple steps, reducing the time required to
              renew policies from over 10 minutes to just five minutes.
            </li>
            <li className="text-[#fff] text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed font-Beginning">
              Customer Support Integration: A direct messaging feature was
              added, allowing users to contact support without navigating
              through multiple screens.
            </li>
            <li className="text-[#fff] text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed font-Beginning">
              Enhanced Accessibility for Older Users: The UI was optimized with
              larger text and guided steps, ensuring a more inclusive experience
            </li>
          </ul>
        </div>

        <div className="pt-[40px] sm:pt-[50px] md:pt-[64px]">
          <h1 className="text-[#C9CFD9] text-[20px] sm:text-[24px] md:text-[32px] font-normal leading-[normal] font-tinyBrushy">
            RESULTS & LEARNINGS
          </h1>
          <ul className="list-disc pl-4 flex gap-[12px] sm:gap-[15px] md:gap-[20px] pt-[10px] sm:pt-[12px] flex-col">
            <li className="text-[#fff] text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed font-Beginning">
              Observational research and internal feedback can be valuable even
              in the absence of formal user studies.
            </li>
            <li className="text-[#fff] text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed font-Beginning">
              Streamlining essential processes like policy renewal can greatly
              enhance user experience.
            </li>
            <li className="text-[#fff] text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed font-Beginning">
              Designing for accessibility benefits all users, not just a
              specific demographic.
            </li>
          </ul>
        </div>

        <div className="pt-[80px] sm:pt-[100px] md:pt-[143px] pb-[40px] sm:pb-[60px] md:pb-[80px]">
          <a href="/runners-hive" className="block hover:opacity-80 transition-opacity">
            <p className="underline font-Beginning text-[#fff] text-[18px] sm:text-[24px] md:text-[32px] font-normal leading-[normal] sm:leading-relaxed md:leading-relaxed  text-left">
              View Next Project - Earn More, Move More: Turning Kilometers into Rewards
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SanlamCaseStudy;
