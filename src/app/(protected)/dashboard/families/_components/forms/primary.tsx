"use client";
import React from "react";

import { useFamilyForm } from "./form-context";
import TextInput from "@/components/molecules/text-input";
import SelectField from "@/components/organisms/select-field";
import Heading from "@/components/atoms/heading";

const PrimaryContact = () => {
  const { form } = useFamilyForm();
  const {
    register,
    control,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-6">
      <Heading
        text="Primary Contact Information"
        className="text-xl font-medium text-gray-900"
      />

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectField
            name="contact1.relation"
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
          <div /> {/* Empty div for spacing */}
          <TextInput
            {...register("contact1.firstName")}
            label="First Name"
            placeholder="Enter first name"
            error={errors.contact1?.firstName?.message}
            required
          />
          <TextInput
            {...register("contact1.lastName")}
            label="Last Name"
            placeholder="Enter last name"
            error={errors.contact1?.lastName?.message}
            required
          />
          <TextInput
            {...register("contact1.phone")}
            label="Phone Number"
            placeholder="Enter phone number"
            type="tel"
            error={errors.contact1?.phone?.message}
            required
          />
          <TextInput
            {...register("contact1.email")}
            label="Email Address"
            placeholder="Enter email address"
            type="email"
            error={errors.contact1?.email?.message}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default PrimaryContact;
