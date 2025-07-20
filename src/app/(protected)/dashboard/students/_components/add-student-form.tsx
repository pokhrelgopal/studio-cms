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

// Utility functions
import {
  studentAddSchema,
  StudentAddSchemaType,
} from "@/schema/students/student-add";
import { DatePicker } from "@/components/organisms/date-picker";
import FormErrorMessage from "@/components/atoms/form-error-message";
import SplitFormContainer from "@/components/molecules/split-form-container";

const AddStudentForm = () => {
  const form = useForm<StudentAddSchemaType>({
    mode: "onChange",
    resolver: zodResolver(studentAddSchema),
    defaultValues: {
      family_id: "",
      first_name: "",
      last_name: "",
      gender: "",
      date_of_birth: undefined,
      phone: "",
      email: "",
      school_name: "",
      tshirt_size: "",
      skill_note: "",
    },
  });
  const { handleSubmit, register, formState } = form;

  const handleFormSubmit = (data: StudentAddSchemaType) => {
    console.log("Student data:", data);
  };

  return (
    <form className="space-y-10" onSubmit={handleSubmit(handleFormSubmit)}>
      <SplitFormContainer title="Personal Details" childClassName="space-y-5">
        <TextInput
          className="rounded-md"
          id="family_id"
          label="Family ID"
          placeholder="Enter family ID"
          {...register("family_id")}
          error={formState.errors.family_id?.message}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TextInput
            className="rounded-md"
            id="first_name"
            label="First Name"
            placeholder="Enter student's first name"
            {...register("first_name")}
            error={formState.errors.first_name?.message}
          />
          <TextInput
            className="rounded-md"
            id="last_name"
            label="Last Name"
            placeholder="Enter student's last name"
            {...register("last_name")}
            error={formState.errors.last_name?.message}
          />
        </div>
      </SplitFormContainer>
      <SplitFormContainer title="Personal Details" childClassName="space-y-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SelectField
            control={form.control}
            className="rounded-md"
            label="Gender"
            placeholder="Select gender"
            options={genderOptions}
            {...register("gender")}
          />
          <div className="">
            <Label htmlFor="date_of_birth" className="text-sm mb-0.5">
              Date of Birth
            </Label>
            <Controller
              name="date_of_birth"
              control={form.control}
              render={({ field }) => (
                <DatePicker
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Choose date of birth"
                  className="h-12 text-b2 w-full"
                  disableFutureDates={true}
                />
              )}
            />
            <FormErrorMessage
              message={formState.errors.date_of_birth?.message}
            />
          </div>
          <TextInput
            className="rounded-md"
            id="school_name"
            label="School Name"
            placeholder="Enter school name"
            {...register("school_name")}
            error={formState.errors.school_name?.message}
          />
          <TextInput
            className="rounded-md"
            id="phone"
            label="Phone Number (optional)"
            placeholder="Enter phone number"
            {...register("phone")}
            error={formState.errors.phone?.message}
          />
          <TextInput
            className="rounded-md"
            id="email"
            label="Email Address (optional)"
            placeholder="Enter email address"
            type="email"
            {...register("email")}
            error={formState.errors.email?.message}
          />
          <SelectField
            control={form.control}
            className="rounded-md"
            label="T-Shirt Size (optional)"
            placeholder="Select t-shirt size"
            options={tshirtSizeOptions}
            {...register("tshirt_size")}
          />
        </div>
        <Textarea
          className="rounded-md"
          id="skill_note"
          label="Skills/Notes (optional)"
          placeholder="Enter any special skills, talents, or important notes about the student"
          {...register("skill_note")}
          error={formState.errors.skill_note?.message}
        />
      </SplitFormContainer>

      <div className="mt-6 flex items-center justify-end">
        <Button type="submit" className="rounded-full !px-5">
          Add Student
        </Button>
      </div>
    </form>
  );
};

export default AddStudentForm;

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

const tshirtSizeOptions = [
  { label: "Extra Small (XS)", value: "xs" },
  { label: "Small (S)", value: "s" },
  { label: "Medium (M)", value: "m" },
  { label: "Large (L)", value: "l" },
  { label: "Extra Large (XL)", value: "xl" },
  { label: "Double XL (XXL)", value: "xxl" },
];
