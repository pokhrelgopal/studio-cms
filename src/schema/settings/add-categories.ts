import { z } from "zod";

export const addCategorySchema = z.object({
  name: z.string().min(1, "Branch name is required"),
  description: z.string().min(1, "Description is required"),
  status: z.string().min(1, "Status is required"),
});

export type AddCategorySchemaType = z.infer<typeof addCategorySchema>;

export const statusOptions = [
  { value: "active", label: "Active" },
  { value: "draft", label: "Draft" },
];
