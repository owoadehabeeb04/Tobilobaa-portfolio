import React from "react";
import getHelp from "../../public/assets/images/gethelp.svg";
import getHelp2 from "../../public/assets/images/secondhelpflow.webp";
import FlowShowcase from "./flowShowcase";

const SanlamGetHelpFlow = () => {
  return (
    <>
      <FlowShowcase
        title="Get Help Flow"
        description="Getting to customer care is very essential for a company that has over 500,000 customer base. So, instead of having to go to social media or going physically to the office, there is a solution that sends message directly to the customer care."
        image={getHelp}
        alt="Get help flow"
      />
      <FlowShowcase title="Get Help Flow" image={getHelp2} alt="Get help flow 2" />
    </>
  );
};

export default SanlamGetHelpFlow;
