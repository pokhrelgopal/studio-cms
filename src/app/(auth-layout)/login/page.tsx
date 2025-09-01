"use client";

// External Packages
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// UI Components
import { Button } from "@/components/ui/button";
import TextInput from "@/components/molecules/text-input";
import PasswordInput from "@/components/molecules/password-input";

// Utilities
import { LoginFormValues, loginSchema } from "@/schema/auth/login-schema";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const form = useForm<LoginFormValues>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "testemail@gmail.com",
      password: "Password@123",
    },
  });
  const { handleSubmit, register, formState } = form;
  const router = useRouter();
  const handleSubmitForm = (data: LoginFormValues) => {
    router.push("/dashboard");
  };

  return (
    <div className="w-full h-96">
      <h2 className="text-3xl text-center mb-6">Welcome Back</h2>
      <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-5">
        <TextInput
          className="rounded-md"
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          error={formState.errors.email?.message}
        />
        <PasswordInput
          className="rounded-md"
          id="password"
          label="Password"
          placeholder="Enter your password"
          {...register("password")}
          error={formState.errors.password?.message}
        />
        <Button type="submit" className="w-full rounded-full">
          Login
        </Button>
        <div className="flex justify-center">
          <Link
            href={"/forgot-password"}
            className="text-primary text-center mt-8"
          >
            Forgot Password ?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
