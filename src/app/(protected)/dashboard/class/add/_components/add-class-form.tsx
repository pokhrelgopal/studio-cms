"use client";

// External Packages
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// UI Components
import { Button } from "@/components/ui/button";
import TextInput from "@/components/molecules/text-input";
import SelectField from "@/components/organisms/select-field";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MultiSelect } from "@/components/organisms/multi-select";

// Utility functions
import { classFormSchema, ClassFormValues } from "@/schema/class/add-class";
import { DatePicker } from "@/components/organisms/date-picker";
import FormErrorMessage from "@/components/atoms/form-error-message";
import SplitFormContainer from "@/components/molecules/split-form-container";

const AddClassForm = () => {
  const form = useForm<ClassFormValues>({
    mode: "onChange",
    resolver: zodResolver(classFormSchema),
    defaultValues: {
      class_name: "",
      instructor: "",
      category: "",
      classDescription: "",
      studioBranch: "",
      startDate: new Date(),
      time: "",
      days: [],
      classDuration: "",
      hasRegistrationFee: "",
      registrationStartDate: new Date(),
      classFee: "",
      classCapacity: 0,
      feeTerms: "",
    },
  });
  const { handleSubmit, register, formState } = form;

  const handleFormSubmit = (data: ClassFormValues) => {
    console.log("Class data:", data);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(handleFormSubmit)}>
      <SplitFormContainer title="Class Details">
        <div className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {" "}
            <TextInput
              {...register("class_name")}
              label="Class Name"
              placeholder="Enter class name"
              error={formState.errors.class_name?.message}
            />
            <TextInput
              {...register("instructor")}
              label="Instructor"
              placeholder="Enter instructor name"
              error={formState.errors.instructor?.message}
            />
          </div>

          <SelectField
            {...register("category")}
            label="Category"
            control={form.control}
            placeholder="Select category"
            options={categoryOptions}
          />

          <Textarea
            {...register("classDescription")}
            label="Class Description"
            placeholder="Enter class description"
            error={formState.errors.classDescription?.message}
            className="h-24"
          />
        </div>
      </SplitFormContainer>
      <SplitFormContainer title="Schedule & Logistics">
        <div className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {" "}
            <SelectField
              {...register("studioBranch")}
              label="Studio Branch"
              control={form.control}
              placeholder="Select studio branch"
              options={studioBranchOptions}
            />
            <div className="">
              <Label htmlFor="startDate" className="text-base font-medium">
                Start Date
              </Label>
              <Controller
                name="startDate"
                control={form.control}
                render={({ field }) => (
                  <DatePicker
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Choose start date"
                    className="h-12 text-b2 w-full"
                    disablePastDates={true}
                  />
                )}
              />
              <FormErrorMessage message={formState.errors.startDate?.message} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="days-select">Days</Label>
            <Controller
              name="days"
              control={form.control}
              render={({ field }) => (
                <MultiSelect
                  badgeClassName="bg-black/8 rounded-full px-2"
                  className="text-b2 h-9 text-sm"
                  options={daysOptions}
                  selected={field.value}
                  onChangeAction={field.onChange}
                />
              )}
            />
            <FormErrorMessage message={formState.errors.days?.message} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TextInput
              {...register("time")}
              label="Time"
              placeholder="Enter class time"
              error={formState.errors.time?.message}
            />
            <SelectField
              {...register("classDuration")}
              label="Class Duration"
              control={form.control}
              placeholder="Select class duration"
              options={durationOptions}
            />
          </div>
        </div>
      </SplitFormContainer>
      <SplitFormContainer title="Registration & Fees">
        <div className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="">
              <Label htmlFor="registrationStartDate" className="mb-2">
                Registration Start Date
              </Label>
              <Controller
                name="registrationStartDate"
                control={form.control}
                render={({ field }) => (
                  <DatePicker
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Choose registration start date"
                    className="h-12 text-b2 w-full"
                    disablePastDates={true}
                  />
                )}
              />
              <FormErrorMessage
                message={formState.errors.registrationStartDate?.message}
              />
            </div>
            <SelectField
              {...register("hasRegistrationFee")}
              label="Has Registration Fee"
              control={form.control}
              placeholder="Select option"
              options={registrationFeeOptions}
            />
          </div>

          {form.watch("hasRegistrationFee") === "Yes" && (
            <TextInput
              {...register("classFee")}
              label="Class Fee"
              placeholder="Enter class fee"
              error={formState.errors.classFee?.message}
            />
          )}

          <TextInput
            {...register("classCapacity", { valueAsNumber: true })}
            label="Class Capacity"
            type="number"
            placeholder="Enter class capacity"
            error={formState.errors.classCapacity?.message}
          />

          <Textarea
            {...register("feeTerms")}
            label="Fee Terms"
            placeholder="Enter fee terms and conditions"
            error={formState.errors.feeTerms?.message}
            className="h-24"
          />
        </div>
      </SplitFormContainer>

      <div className="mt-6 flex items-center justify-end">
        <Button type="submit" className="rounded-full !px-5">
          Add Class
        </Button>
      </div>
    </form>
  );
};

export default AddClassForm;

const categoryOptions = [
  { label: "Dance", value: "Dance" },
  { label: "Music", value: "Music" },
  { label: "Art", value: "Art" },
  { label: "Drama", value: "Drama" },
  { label: "Fitness", value: "Fitness" },
  { label: "Language", value: "Language" },
  { label: "Academic", value: "Academic" },
  { label: "Sports", value: "Sports" },
  { label: "Technology", value: "Technology" },
  { label: "Craft", value: "Craft" },
];

const studioBranchOptions = [
  { label: "Main Campus", value: "main-campus" },
  { label: "North Branch", value: "north-branch" },
  { label: "South Branch", value: "south-branch" },
  { label: "East Branch", value: "east-branch" },
  { label: "West Branch", value: "west-branch" },
];

const durationOptions = [
  { label: "30 minutes", value: "30 min" },
  { label: "45 minutes", value: "45 min" },
  { label: "1 hour", value: "1 hour" },
  { label: "1.5 hours", value: "1.5 hours" },
  { label: "2 hours", value: "2 hours" },
  { label: "2.5 hours", value: "2.5 hours" },
  { label: "3 hours", value: "3 hours" },
];

const registrationFeeOptions = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];

const daysOptions = [
  { label: "Monday", value: "Monday" },
  { label: "Tuesday", value: "Tuesday" },
  { label: "Wednesday", value: "Wednesday" },
  { label: "Thursday", value: "Thursday" },
  { label: "Friday", value: "Friday" },
  { label: "Saturday", value: "Saturday" },
  { label: "Sunday", value: "Sunday" },
];
