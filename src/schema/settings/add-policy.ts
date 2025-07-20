import { z } from "zod";

export const addPolicySchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  status: z.string().min(1, "Status is required"),
});

export type AddPolicySchemaType = z.infer<typeof addPolicySchema>;

export const statusOptions = [
  { value: "active", label: "Active" },
  { value: "draft", label: "Draft" },
];
