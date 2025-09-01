"use client";
import React from "react";

import { useFamilyForm } from "./form-context";
import TextInput from "@/components/molecules/text-input";
import SelectField from "@/components/organisms/select-field";
import Heading from "@/components/atoms/heading";

const PersonalInformation = () => {
  const { form } = useFamilyForm();
  const {
    register,
    control,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-6">
      <Heading
        text="Family Information"
        className="text-xl font-medium text-gray-900"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput
          {...register("familyName")}
          label="Family Name"
          placeholder="Enter family surname"
          error={errors.familyName?.message}
          required
        />

        <SelectField
          name="branch"
          control={control}
          label="Studio Branch"
          placeholder="Select branch"
          options={[
            { value: "main-campus", label: "Main Campus" },
            { value: "north-branch", label: "North Branch" },
            { value: "south-branch", label: "South Branch" },
            { value: "east-branch", label: "East Branch" },
          ]}
          required
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
