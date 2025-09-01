"use client";

import React from "react";
import { TuitionDiscountForm } from "./_components/tution-discount-form";
import SplitFormContainer from "@/components/molecules/split-form-container";

const TuitionDiscountPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Tuition & Discount</h1>
      <SplitFormContainer title="Tution & Discount" className="my-5">
        <TuitionDiscountForm />
      </SplitFormContainer>
    </div>
  );
};

export default TuitionDiscountPage;
