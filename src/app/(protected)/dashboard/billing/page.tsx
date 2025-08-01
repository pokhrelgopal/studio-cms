import Heading from "@/components/atoms/heading";
import React from "react";
import BillingPageComponent from "./_components/billing-page";

const BillingPage = () => {
  return (
    <div>
      <Heading text="Billing" className="mb-6" />
      <BillingPageComponent />
    </div>
  );
};

export default BillingPage;
