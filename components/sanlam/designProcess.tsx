import React from "react";

const SanlamDesignProcess = () => {
  return (
    <div className="py-[40px] sm:py-[50px] md:py-[64px]">
      <div>
        <h1 className="text-body font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal]">
          DESIGN PROCESS
        </h1>
        <ul className="list-disc pl-4 flex gap-[15px] sm:gap-[20px] pt-[12px] flex-col">
          <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Wireframing & Ideation – Created low-fidelity wireframes to map
            out user flows and optimize key interactions.
          </li>
          <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Iterative Prototyping – Designed high-fidelity mockups based on
            feedback from internal staff acting as test users.
          </li>
          <li className="text-title text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            Usability Testing – Conducted usability tests with staff members
            who were also Sanlam customers. Their feedback guided further
            refinements.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SanlamDesignProcess;
