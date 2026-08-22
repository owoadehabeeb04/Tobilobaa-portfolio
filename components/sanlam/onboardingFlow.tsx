import React from "react";
import onboarding from "../../public/assets/images/onboarding.svg";
import FlowShowcase from "./flowShowcase";

const SanlamOnboardingFlow = () => {
  return (
    <FlowShowcase
      title="Onboarding / Login / Sign up flow"
      description="Easy onboarding and login is very necessary to not drive the customers away. So, use of Phone number became the choice."
      image={onboarding}
      alt="Onboarding flow"
    />
  );
};

export default SanlamOnboardingFlow;
