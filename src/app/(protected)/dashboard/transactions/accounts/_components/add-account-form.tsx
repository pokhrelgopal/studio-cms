"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import TextInput from "@/components/molecules/text-input";
import SelectField from "@/components/organisms/select-field";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import {
  addAccountSchema,
  AddAccountSchemaType,
  statusOptions,
} from "@/schema/transactions/add-account";

const accountTypeOptions = [
  { label: "Cash", value: "cash" },
  { label: "Bank Account", value: "bank" },
  { label: "Petty Cash", value: "petty-cash" },
  { label: "Credit Card", value: "credit-card" },
  { label: "Savings Account", value: "savings" },
];

const AddAccountForm = () => {
  const form = useForm<AddAccountSchemaType>({
    mode: "onChange",
    resolver: zodResolver(addAccountSchema),
    defaultValues: {
      name: "",
      type: "",
      openingBalance: 0,
      isDefault: false,
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

  const handleFormSubmit = async (data: AddAccountSchemaType) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Account data:", data);

      toast.success("Account added successfully!");
      reset();
    } catch (error) {
      console.error("Error adding account:", error);
      toast.error("Failed to add account. Please try again.");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="space-y-4">
        <TextInput
          {...register("name")}
          label="Account Name"
          placeholder="Enter account name"
          error={errors.name?.message}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField
            name="type"
            control={control}
            label="Account Type"
            placeholder="Select account type"
            options={accountTypeOptions}
            required
          />

          <TextInput
            {...register("openingBalance", { valueAsNumber: true })}
            label="Opening Balance"
            placeholder="0.00"
            type="number"
            step="0.01"
            min="0"
            error={errors.openingBalance?.message}
            required
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

        <div className="flex items-center space-x-2">
          <Controller
            name="isDefault"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="isDefault"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
          />
          <Label htmlFor="isDefault" className="text-base font-medium">
            Set as default account
          </Label>
        </div>
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
          {isSubmitting ? "Adding..." : "Add Account"}
        </Button>
      </div>
    </form>
  );
};

export default AddAccountForm;
