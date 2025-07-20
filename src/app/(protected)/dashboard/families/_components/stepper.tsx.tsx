"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepperProps {
  currentStep: number;
}

const steps = [
  { id: 1, title: "Personal Info", description: "Basic Information" },
  { id: 2, title: "Contact", description: "Primary Contact" },
  { id: 3, title: "Contact", description: "Secondary details" },
  { id: 4, title: "Address", description: "Address Details" },
  { id: 5, title: "Emergency", description: "Contact for emergencies" },
  { id: 6, title: "Students", description: "Students Details" },
];

export default function Stepper({ currentStep }: StepperProps) {
  const isStepAccessible = (stepId: number) => {
    return stepId <= currentStep;
  };

  const getStepStatus = (stepId: number) => {
    if (currentStep > stepId) return "completed";
    if (currentStep === stepId) return "current";
    return "upcoming";
  };

  return (
    <div className="w-full md:max-w-4xl mx-auto md:py-6">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const status = getStepStatus(step.id);
          const isAccessible = isStepAccessible(step.id);

          return (
            <div key={step.id} className="md:flex items-center hidden">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200",
                    status === "completed"
                      ? "bg-green-500 border-green-500 text-white"
                      : status === "current"
                        ? "bg-primary border-primary text-white"
                        : isAccessible
                          ? "bg-white border-gray-300 text-gray-500"
                          : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed",
                  )}
                >
                  {status === "completed" ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-medium">{step.id}</span>
                  )}
                </div>
                <div className="mt-2 text-center">
                  <p
                    className={cn(
                      "font-medium text-sm hidden md:block",
                      status === "completed" || status === "current"
                        ? "text-gray-900"
                        : isAccessible
                          ? "text-gray-500"
                          : "text-gray-400",
                    )}
                  >
                    {step.title}
                  </p>
                  <p
                    className={cn(
                      "text-xs hidden md:block",
                      isAccessible ? "text-gray-400" : "text-gray-300",
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "flex-1 h-0.5 mx-4 transition-all duration-200",
                    status === "completed" ? "bg-green-500" : "bg-gray-300",
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
