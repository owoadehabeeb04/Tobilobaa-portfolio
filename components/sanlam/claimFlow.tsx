import React from "react";
import claimFlow from "../../public/assets/images/Make a claim flow.svg";
import makeAClaimDesign from "../../public/assets/images/make a claim design.png";
import FlowShowcase from "./flowShowcase";

const SanlamClaimFlow = () => {
  return (
    <>
      <FlowShowcase
        title="Make a Claim Flow"
        description="A solution was made to make customers make claims successfully on the app without having to call customer care or go the office physically."
        image={claimFlow}
        alt="Claim flow"
      />
      <FlowShowcase title="Make a Claim Design" image={makeAClaimDesign} alt="Make a claim design" />
    </>
  );
};

export default SanlamClaimFlow;
