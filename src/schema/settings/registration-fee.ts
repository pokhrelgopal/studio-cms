import { z } from "zod";

export const newFamilySchema = z.object({
  charge_new_families: z.boolean(),
  when_to_charge: z.string().min(1, {
    message: "Please select a valid option",
  }),
  student_fee: z.string().min(1, {
    message: "Fee amount is required",
  }),
});

export const existingFamilySchema = z.object({
  charge_existing_families: z.boolean(),
  when_to_charge: z.string().min(1, {
    message: "Please select a valid option",
  }),
  student_fee: z.string().min(1, {
    message: "Fee amount is required",
  }),
});

export type NewFamilyFormValues = z.infer<typeof newFamilySchema>;
export type ExistingFamilyFormValues = z.infer<typeof existingFamilySchema>;
