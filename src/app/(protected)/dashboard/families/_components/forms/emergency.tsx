"use client";
import React from "react";

import { useFamilyForm } from "./form-context";
import TextInput from "@/components/molecules/text-input";
import Heading from "@/components/atoms/heading";

const Emergency = () => {
  const { form } = useFamilyForm();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-6">
      <Heading
        text="Emergency Contact Information"
        className="text-xl font-medium text-gray-900"
      />

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextInput
            {...register("emergencyContact.name")}
            label="Emergency Contact Name"
            placeholder="Enter full name"
            error={errors.emergencyContact?.name?.message}
            required
          />

          <TextInput
            {...register("emergencyContact.phone")}
            label="Phone Number"
            placeholder="Enter phone number"
            type="tel"
            error={errors.emergencyContact?.phone?.message}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Emergency;
