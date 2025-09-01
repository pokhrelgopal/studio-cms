"use client";
import React from "react";

import { useFamilyForm } from "./form-context";
import TextInput from "@/components/molecules/text-input";
import SelectField from "@/components/organisms/select-field";
import Heading from "@/components/atoms/heading";

const SecondaryContact = () => {
  const { form } = useFamilyForm();
  const {
    register,
    control,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-6">
      <Heading
        text="Secondary Contact Information"
        className="text-xl font-medium text-gray-900"
      />

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectField
            name="contact2.relation"
            control={control}
            label="Relationship"
            placeholder="Select relationship"
            options={[
              { value: "father", label: "Father" },
              { value: "mother", label: "Mother" },
              { value: "guardian", label: "Guardian" },
              { value: "stepfather", label: "Step Father" },
              { value: "stepmother", label: "Step Mother" },
              { value: "grandparent", label: "Grandparent" },
              { value: "other", label: "Other" },
            ]}
            required
          />
          <div />
          <TextInput
            {...register("contact2.firstName")}
            label="First Name"
            placeholder="Enter first name"
            error={errors.contact2?.firstName?.message}
            required
          />
          <TextInput
            {...register("contact2.lastName")}
            label="Last Name"
            placeholder="Enter last name"
            error={errors.contact2?.lastName?.message}
            required
          />
          <TextInput
            {...register("contact2.phone")}
            label="Phone Number"
            placeholder="Enter phone number"
            type="tel"
            error={errors.contact2?.phone?.message}
            required
          />
          <TextInput
            {...register("contact2.email")}
            label="Email Address"
            placeholder="Enter email address"
            type="email"
            error={errors.contact2?.email?.message}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContact;
