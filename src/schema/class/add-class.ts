import { z } from "zod";

export const classFormSchema = z.object({
  // Core Class Details
  class_name: z.string().min(1, "Class name is required."),
  instructor: z.string().min(1, "Instructor is required."),
  category: z.string().min(1, "Category is required."),
  classDescription: z.string().min(1, "Class description is required."),

  // Schedule & Logistics
  studioBranch: z.string().min(1, "Studio branch is required."),
  startDate: z.date({
    error: "Please select an available date",
  }),
  time: z.string().min(1, "Time is required."),
  days: z.array(z.string()).refine((val) => val.length > 0, {
    message: "At least one day must be selected.",
  }),
  classDuration: z.string().min(1, "Class duration is required."),

  // Registration & Fees
  registrationStartDate: z
    .date({
      error: "Please select an available date",
    })
    .optional(),
  hasRegistrationFee: z.string().min(1, "Registration fee option is required."),
  classFee: z.string().optional(),
  classCapacity: z.number().positive("Capacity must be a positive number."),
  feeTerms: z.string().min(1, "Fee terms are required."),
});

export type ClassFormValues = z.infer<typeof classFormSchema>;
