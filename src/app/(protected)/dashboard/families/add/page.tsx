import Heading from "@/components/atoms/heading";
import PageLoader from "@/components/molecules/page-loader";
import React, { Suspense } from "react";
import MultiStepForm from "../_components/multi-step-form";

const AddFamilyPage = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="flex items-center justify-between">
        <Heading className="mb-2" text="Quick Registration" />
      </div>
      <div className="py-4 flex items-center justify-center">
        <MultiStepForm />
      </div>
    </Suspense>
  );
};

export default AddFamilyPage;
