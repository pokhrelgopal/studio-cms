// context/FamilyFormContext.tsx

"use client";

import React, { createContext, useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  familyFormSchema,
  FamilyFormSchemaType,
} from "@/schema/family/family-add";
import { toast } from "sonner";

const FamilyFormContext = createContext<{
  form: ReturnType<typeof useForm<FamilyFormSchemaType>>;
  submitForm: (data: FamilyFormSchemaType) => Promise<void>;
} | null>(null);

export const FamilyFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const methods = useForm<FamilyFormSchemaType>({
    resolver: zodResolver(familyFormSchema),
    defaultValues: {
      branch: "",
      familyName: "",
      registrationDate: new Date().toISOString().split("T")[0],
      familyCode: "",
      contact1: {
        relation: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      },
      contact2: {
        relation: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      },
      address: {
        homeAddress: "",
        city: "",
        state: "",
        zip: "",
      },
      emergencyContact: {
        name: "",
        phone: "",
      },
      students: [
        {
          firstName: "",
          lastName: "",
          dateOfBirth: new Date(),
          phone: "",
          email: "",
          tshirt_size: "",
          class: "",
          gender: "",
        },
      ],
    },
  });

  const submitForm = async (data: FamilyFormSchemaType) => {
    try {
      // Mock API call
      toast.promise(
        new Promise((resolve) => {
          setTimeout(() => {
            console.log("Family form submitted:", data);
            resolve(data);
          }, 2000);
        }),
        {
          loading: "Submitting family information...",
          success: "Family registered successfully!",
          error: "Failed to register family. Please try again.",
        },
      );
    } catch (error) {
      console.error("Form submission error:", error);
      throw error;
    }
  };

  return (
    <FamilyFormContext.Provider value={{ form: methods, submitForm }}>
      <FormProvider {...methods}>{children}</FormProvider>
    </FamilyFormContext.Provider>
  );
};

export const useFamilyForm = () => {
  const context = useContext(FamilyFormContext);
  if (!context)
    throw new Error("useFamilyForm must be used within FamilyFormProvider");
  return context;
};
