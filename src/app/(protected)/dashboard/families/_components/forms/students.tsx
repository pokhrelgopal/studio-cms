"use client";

import React from "react";
import { useFamilyForm } from "./form-context";
import { FamilyFormSchemaType } from "@/schema/family/family-add";
import TextInput from "@/components/molecules/text-input";
import SelectField from "@/components/organisms/select-field";
import Heading from "@/components/atoms/heading";
import { Label } from "@/components/ui/label";
import { Controller, useFieldArray } from "react-hook-form";
import { DatePicker } from "@/components/organisms/date-picker";
import FormErrorMessage from "@/components/atoms/form-error-message";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

const Students = (): React.JSX.Element => {
  const { form, submitForm } = useFamilyForm();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    trigger,
  } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "students",
  });

  const addStudent = () => {
    append({
      firstName: "",
      lastName: "",
      dateOfBirth: new Date(),
      phone: "",
      email: "",
      tshirt_size: "",
      class: "",
      gender: "",
    });
  };

  const removeStudent = (index: number) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  const handleFormSubmit = async (data: FamilyFormSchemaType) => {
    const isValid = await trigger("students");
    if (isValid) {
      console.log("All Form Data:", data);
      await submitForm(data);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Heading
          text="Student Information"
          className="text-xl font-medium text-gray-900"
        />
        <Button
          type="button"
          onClick={addStudent}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Student
        </Button>
      </div>

      <form
        id="student-form"
        onSubmit={handleSubmit(handleFormSubmit)}
        className="space-y-8"
      >
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="space-y-6 p-6 border border-gray-200 rounded-lg"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">
                Student {index + 1}
              </h3>
              {fields.length > 1 && (
                <Button
                  type="button"
                  onClick={() => removeStudent(index)}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                  Remove
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextInput
                {...register(`students.${index}.firstName`)}
                label="First Name"
                placeholder="Enter student's first name"
                error={errors.students?.[index]?.firstName?.message}
                required
              />

              <TextInput
                {...register(`students.${index}.lastName`)}
                label="Last Name"
                placeholder="Enter student's last name"
                error={errors.students?.[index]?.lastName?.message}
                required
              />

              <TextInput
                {...register(`students.${index}.phone`)}
                label="Phone"
                placeholder="Enter student's phone number"
                error={errors.students?.[index]?.phone?.message}
              />

              <TextInput
                {...register(`students.${index}.email`)}
                label="Email"
                placeholder="Enter student's email address"
                error={errors.students?.[index]?.email?.message}
              />

              <SelectField
                label="Gender"
                name={`students.${index}.gender`}
                control={control}
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                  { label: "Other", value: "other" },
                ]}
                required
              />

              <SelectField
                label="Class"
                name={`students.${index}.class`}
                control={control}
                options={[
                  { label: "Nursery", value: "nursery" },
                  { label: "Kindergarten", value: "kindergarten" },
                ]}
                required
              />

              <SelectField
                label="T-shirt Size"
                name={`students.${index}.tshirt_size`}
                control={control}
                options={[
                  { label: "Small", value: "small" },
                  { label: "Medium", value: "medium" },
                  { label: "Large", value: "large" },
                  { label: "Extra Large", value: "xl" },
                ]}
              />

              <div>
                <Label
                  htmlFor={`date-${index}`}
                  className="text-base font-medium"
                >
                  Date of Birth
                </Label>
                <Controller
                  name={`students.${index}.dateOfBirth`}
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Select date of birth"
                      className="h-12 text-b2 w-full"
                      disablePastDates={false}
                    />
                  )}
                />
                <FormErrorMessage
                  message={errors.students?.[index]?.dateOfBirth?.message}
                />
              </div>
            </div>
          </div>
        ))}

        {errors.students && typeof errors.students.message === "string" && (
          <FormErrorMessage message={errors.students.message} />
        )}
      </form>
    </div>
  );
};

export default Students;
