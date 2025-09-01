"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import SplitFormContainer from "@/components/molecules/split-form-container";
import TextInput from "@/components/molecules/text-input";
import { Button } from "@/components/ui/button";
import { z } from "zod";

const accountSettingsSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
});

type AccountSettings = z.infer<typeof accountSettingsSchema>;

const UpdateProfilePage = () => {
  const form = useForm<AccountSettings>({
    mode: "onChange",
    resolver: zodResolver(accountSettingsSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const { handleSubmit, register, formState } = form;

  const handleFormSubmit = (data: AccountSettings) => {
    console.log("Profile update data:", data);
  };

  return (
    <SplitFormContainer
      title="Update Profile"
      description="Update your personal information and contact details"
    >
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label="First Name"
            placeholder="Enter your first name"
            {...register("firstName")}
            error={formState.errors.firstName?.message}
          />
          <TextInput
            label="Last Name"
            placeholder="Enter your last name"
            {...register("lastName")}
            error={formState.errors.lastName?.message}
          />
        </div>
        <TextInput
          label="Email"
          placeholder="Enter your email address"
          type="email"
          {...register("email")}
          error={formState.errors.email?.message}
        />
        <TextInput
          label="Phone (Optional)"
          placeholder="Enter your phone number"
          {...register("phone")}
          error={formState.errors.phone?.message}
        />
        <div className="flex items-center gap-2">
          <Button type="submit" className="rounded-full">
            Update Profile
          </Button>
          <Button type="button" variant="outline" className="rounded-full">
            Cancel
          </Button>
        </div>
      </form>
    </SplitFormContainer>
  );
};

export default UpdateProfilePage;
