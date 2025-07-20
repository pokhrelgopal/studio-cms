import { z } from "zod";

export const addBranchSchema = z.object({
  name: z.string().min(1, "Branch name is required"),
  addressLine1: z.string().min(1, "Address line 1 is required"),
  addressLine2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(1, "ZIP code is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.email("Invalid email format").optional(),
  status: z.string().min(1, "Status is required"),
});

export type AddBranchSchemaType = z.infer<typeof addBranchSchema>;

export const statusOptions = [
  { value: "active", label: "Active" },
  { value: "draft", label: "Draft" },
];
