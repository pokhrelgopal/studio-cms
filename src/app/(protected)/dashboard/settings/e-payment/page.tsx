"use client";

import React from "react";

import Heading from "@/components/atoms/heading";
import { EPaymentPage } from "./_components/e-payment-page";

const EPaymentSettingsPage = () => {
  return (
    <div>
      <Heading text="E-payment Settings" className="mb-4" />
      <EPaymentPage />
    </div>
  );
};

export default EPaymentSettingsPage;
