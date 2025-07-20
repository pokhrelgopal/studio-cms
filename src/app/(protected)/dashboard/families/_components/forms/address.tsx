"use client";
import React from "react";

import { useFamilyForm } from "./form-context";
import TextInput from "@/components/molecules/text-input";
import SelectField from "@/components/organisms/select-field";
import Heading from "@/components/atoms/heading";

const Address = () => {
  const { form } = useFamilyForm();
  const {
    register,
    control,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-6">
      <Heading
        text="Address Information"
        className="text-xl font-medium text-gray-900"
      />

      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TextInput
            {...register("address.homeAddress")}
            label="Home Address"
            placeholder="Enter complete address"
            error={errors.address?.homeAddress?.message}
            required
          />

          <TextInput
            {...register("address.city")}
            label="City"
            placeholder="Enter city"
            error={errors.address?.city?.message}
            required
          />

          <SelectField
            name="address.state"
            control={control}
            label="State/Province"
            placeholder="Select state"
            options={[
              { value: "AL", label: "Alabama" },
              { value: "AK", label: "Alaska" },
              { value: "AZ", label: "Arizona" },
              { value: "AR", label: "Arkansas" },
              { value: "CA", label: "California" },
              { value: "CO", label: "Colorado" },
              { value: "CT", label: "Connecticut" },
              { value: "DE", label: "Delaware" },
              { value: "FL", label: "Florida" },
              { value: "GA", label: "Georgia" },
            ]}
            required
          />

          <TextInput
            {...register("address.zip")}
            label="ZIP/Postal Code"
            placeholder="Enter ZIP code"
            error={errors.address?.zip?.message}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
