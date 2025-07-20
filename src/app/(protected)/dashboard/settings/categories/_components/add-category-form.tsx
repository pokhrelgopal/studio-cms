"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import TextInput from "@/components/molecules/text-input";
import SelectField from "@/components/organisms/select-field";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import FormErrorMessage from "@/components/atoms/form-error-message";

import {
  addCategorySchema,
  AddCategorySchemaType,
  statusOptions,
} from "@/schema/settings/add-categories";

type Props = {
  onSuccess?: () => void;
};

const AddCategoryForm = ({ onSuccess }: Props) => {
  const form = useForm<AddCategorySchemaType>({
    mode: "onChange",
    resolver: zodResolver(addCategorySchema),
    defaultValues: {
      name: "",
      description: "",
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

  const handleFormSubmit = async (data: AddCategorySchemaType) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Category data:", data);

      toast.success("Category added successfully!");
      reset();
      onSuccess?.();
    } catch (error) {
      console.error("Error adding category:", error);
      toast.error("Failed to add category. Please try again.");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="space-y-4">
        <TextInput
          {...register("name")}
          label="Category Name"
          placeholder="Enter category name"
          error={errors.name?.message}
          required
        />

        <div>
          <Label htmlFor="description" className="text-base font-medium">
            Description
          </Label>
          <Textarea
            {...register("description")}
            placeholder="Enter category description"
            className="h-24 mt-1"
          />
          <FormErrorMessage message={errors.description?.message} />
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
          {isSubmitting ? "Adding..." : "Add Category"}
        </Button>
      </div>
    </form>
  );
};

export default AddCategoryForm;
