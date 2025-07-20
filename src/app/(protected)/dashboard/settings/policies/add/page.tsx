"use client";

import dynamic from "next/dynamic";

import Heading from "@/components/atoms/heading";
import SplitFormContainer from "@/components/molecules/split-form-container";

const AddPolicyForm = dynamic(() => import("../_components/add-policy-form"), {
  ssr: false,
});

export default function AddPolicyPage() {
  return (
    <>
      <Heading text="Add Policy" className="mb-6" />
      <SplitFormContainer title="Policy Details">
        <AddPolicyForm />
      </SplitFormContainer>
    </>
  );
}
