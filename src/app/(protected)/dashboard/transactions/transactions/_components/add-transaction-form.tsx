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
  addTransactionSchema,
  AddTransactionSchemaType,
  accountOptions,
  categoryOptions,
  statusOptions,
} from "@/schema/transactions/add-transaction";

type Props = {
  onSuccess?: () => void;
};

const transactionTypeOptions = [
  { label: "Income", value: "income" },
  { label: "Expense", value: "expense" },
];

const AddTransactionForm = ({ onSuccess }: Props) => {
  const form = useForm<AddTransactionSchemaType>({
    mode: "onChange",
    resolver: zodResolver(addTransactionSchema),
    defaultValues: {
      amount: "",
      category: "",
      transaction_type: "",
      account: "",
      description: "",
      reference: "",
      date: new Date(),
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

  const handleFormSubmit = async (data: AddTransactionSchemaType) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Transaction data:", data);

      toast.success("Transaction added successfully!");
      reset();
      onSuccess?.();
    } catch (error) {
      console.error("Error adding transaction:", error);
      toast.error("Failed to add transaction. Please try again.");
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
            name="transaction_type"
            control={control}
            label="Transaction Type"
            placeholder="Select type"
            options={transactionTypeOptions}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField
            name="category"
            control={control}
            label="Category"
            placeholder="Select category"
            options={categoryOptions}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="date" className="text-base font-medium">
              Transaction Date
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

          <SelectField
            name="status"
            control={control}
            label="Status"
            placeholder="Select status"
            options={statusOptions}
            required
          />
        </div>

        <TextInput
          {...register("reference")}
          label="Reference (Optional)"
          placeholder="Transaction reference number"
          error={errors.reference?.message}
        />

        <div>
          <Label htmlFor="description" className="text-base font-medium">
            Description (Optional)
          </Label>
          <Textarea
            {...register("description")}
            placeholder="Enter transaction description"
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
          {isSubmitting ? "Adding..." : "Add Transaction"}
        </Button>
      </div>
    </form>
  );
};

export default AddTransactionForm;
