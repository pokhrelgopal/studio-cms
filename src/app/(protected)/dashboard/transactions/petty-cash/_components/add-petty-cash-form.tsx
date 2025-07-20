"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import TextInput from "@/components/molecules/text-input";
import SelectField from "@/components/organisms/select-field";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { DatePicker } from "@/components/organisms/date-picker";
import FormErrorMessage from "@/components/atoms/form-error-message";

import {
  addPettyCashSchema,
  AddPettyCashSchemaType,
  accountOptions,
} from "@/schema/transactions/add-petty-cash";

type Props = {
  onSuccess?: () => void;
};

const AddPettyCashForm = ({ onSuccess }: Props) => {
  const form = useForm<AddPettyCashSchemaType>({
    mode: "onChange",
    resolver: zodResolver(addPettyCashSchema),
    defaultValues: {
      amount: "",
      account: "",
      description: "",
      date: new Date(),
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = form;

  const handleFormSubmit = async (data: AddPettyCashSchemaType) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Petty cash data:", data);

      toast.success("Petty cash entry added successfully!");
      reset();
      onSuccess?.();
    } catch (error) {
      console.error("Error adding petty cash entry:", error);
      toast.error("Failed to add petty cash entry. Please try again.");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            {...register("amount")}
            label="Amount"
            placeholder="0.00"
            type="number"
            step="0.01"
            error={errors.amount?.message}
            required
          />

          <SelectField
            name="account"
            control={control}
            label="Account"
            placeholder="Select account"
            options={accountOptions}
            required
          />
        </div>

        <div>
          <Label htmlFor="date" className="text-base font-medium">
            Date
          </Label>
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <DatePicker
                value={field.value}
                onChange={field.onChange}
                placeholder="Select date"
                className="h-12 text-b2 w-full"
                disablePastDates={false}
              />
            )}
          />
          <FormErrorMessage message={errors.date?.message} />
        </div>

        <div>
          <Label htmlFor="description" className="text-base font-medium">
            Description (Optional)
          </Label>
          <Textarea
            {...register("description")}
            placeholder="Enter petty cash description"
            className="h-24 mt-1"
          />
          <FormErrorMessage message={errors.description?.message} />
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
          {isSubmitting ? "Adding..." : "Add Petty Cash"}
        </Button>
      </div>
    </form>
  );
};

export default AddPettyCashForm;
