import React from "react";

const ProcessOverview = () => {
  const steps = [
    "Research and Store visiting",
    "Defining the Problem",
    "Creating Solutions",
    "Feedback & Testing"
  ];

  return (
    <div className="pt-[60px] sm:pt-[90px] md:pt-[120px]">
      <h1 className="text-title font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-normal leading-[normal]">
        Before we could design a solution, we needed to understand the real
        problem, so we broke it down into four clear steps.
      </h1>
      <ol className="pt-[24px] sm:pt-[28px] md:pt-[32px] flex flex-col gap-[16px] list-decimal ms-[24px]">
        {steps.map((step, index) => (
          <li
            key={index}
            className="text-body text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning"
          >
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ProcessOverview;
