"use client";
import React from "react";

import CardContainer from "@/components/atoms/card-container";
import { useForm } from "react-hook-form";
import {
  ChangePasswordFormValues,
  changePasswordSchema,
} from "@/schema/account-settings/change-password-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordInput from "@/components/molecules/password-input";
import { Button } from "@/components/ui/button";
import SplitFormContainer from "@/components/molecules/split-form-container";

const ChangePasswordPage = () => {
  const form = useForm<ChangePasswordFormValues>({
    mode: "onChange",
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });
  const { handleSubmit, register, formState } = form;
  const handleFormSubmit = (data: ChangePasswordFormValues) => {};
  return (
    <SplitFormContainer
      title="Change password"
      description="Please use a strong password"
    >
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <PasswordInput
          label="Old password"
          placeholder="Enter your old password"
          {...register("oldPassword")}
          error={formState.errors.oldPassword?.message}
        />
        <PasswordInput
          label="New password"
          placeholder="Enter your new password"
          {...register("newPassword")}
          error={formState.errors.newPassword?.message}
        />
        <PasswordInput
          label="Confirm new password"
          placeholder="Confirm your new password"
          {...register("confirmNewPassword")}
          error={formState.errors.confirmNewPassword?.message}
        />
        <div className="flex items-center gap-2">
          <Button type="submit" className="rounded-full">
            Change Password
          </Button>
        </div>
      </form>
    </SplitFormContainer>
  );
};

export default ChangePasswordPage;
