import { z } from "zod";

export const addAccountSchema = z.object({
  name: z.string().min(1, "Name is required"),
  type: z.string().min(1, "Type is required"),
  openingBalance: z.number().min(0, "Opening balance must be non-negative"),
  isDefault: z.boolean().default(false),
  status: z.string().min(1, "Status is required"),
});

export type AddAccountSchemaType = z.input<typeof addAccountSchema>;

export const statusOptions = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];
