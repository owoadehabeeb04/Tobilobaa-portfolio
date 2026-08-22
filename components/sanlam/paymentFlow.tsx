import React from "react";
import makeAPaymentFlow from "../../public/assets/images/amke a payment flow.png";
import makePayment from "../../public/assets/images/make a payment.webp";
import FlowShowcase from "./flowShowcase";

const SanlamPaymentFlow = () => {
  return (
    <>
      <FlowShowcase
        title="Make a Payment Flow"
        description="To pay premium on policies used to be very traditional, they either used to go to the bank or call the agent to do it, but now, customers can go on the app and click any policy they want to make a payment for."
        image={makeAPaymentFlow}
        alt="Make a payment flow"
      />
      <FlowShowcase title="Make a Payment" image={makePayment} alt="Make payment" />
    </>
  );
};

export default SanlamPaymentFlow;
