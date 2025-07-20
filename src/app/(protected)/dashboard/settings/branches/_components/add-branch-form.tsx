"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import TextInput from "@/components/molecules/text-input";
import SelectField from "@/components/organisms/select-field";

import {
  addBranchSchema,
  AddBranchSchemaType,
  statusOptions,
} from "@/schema/settings/add-branch";
import { stateOptions } from "@/schema/settings/organization";

type Props = {
  onSuccess?: () => void;
};

const AddBranchForm = ({ onSuccess }: Props) => {
  const form = useForm<AddBranchSchemaType>({
    mode: "onChange",
    resolver: zodResolver(addBranchSchema),
    defaultValues: {
      name: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      email: "",
      status: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = form;

  const handleFormSubmit = async (data: AddBranchSchemaType) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Branch data:", data);

      toast.success("Branch added successfully!");
      reset();
      onSuccess?.();
    } catch (error) {
      console.error("Error adding branch:", error);
      toast.error("Failed to add branch. Please try again.");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="space-y-4">
        <TextInput
          {...register("name")}
          label="Branch Name"
          placeholder="Enter branch name"
          error={errors.name?.message}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            {...register("addressLine1")}
            label="Address Line 1"
            placeholder="Enter address line 1"
            error={errors.addressLine1?.message}
            required
          />

          <TextInput
            {...register("addressLine2")}
            label="Address Line 2 (Optional)"
            placeholder="Enter address line 2"
            error={errors.addressLine2?.message}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TextInput
            {...register("city")}
            label="City"
            placeholder="Enter city"
            error={errors.city?.message}
            required
          />

          <SelectField
            name="state"
            control={control}
            label="State"
            placeholder="Select state"
            options={stateOptions}
            required
          />

          <TextInput
            {...register("zip")}
            label="ZIP Code"
            placeholder="Enter ZIP code"
            error={errors.zip?.message}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            {...register("phone")}
            label="Phone Number"
            placeholder="Enter phone number"
            error={errors.phone?.message}
            required
          />

          <TextInput
            {...register("email")}
            label="Email (Optional)"
            placeholder="Enter email address"
            type="email"
            error={errors.email?.message}
          />
        </div>

        <SelectField
          name="status"
          control={control}
          label="Status"
          placeholder="Select status"
          options={statusOptions}
          required
        />
      </div>

      <div className="flex items-center justify-end space-x-4 pt-4">
        <Button
          type="button"
          variant="outline"
          className="rounded-full"
          onClick={() => reset()}
        >
          Reset
        </Button>
        <Button type="submit" className="rounded-full" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Branch"}
        </Button>
      </div>
    </form>
  );
};

export default AddBranchForm;
