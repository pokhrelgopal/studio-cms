import { z } from "zod";

export const addPettyCashSchema = z.object({
  account: z.string().min(1, "Account is required"),
  amount: z.string().min(1, "Amount is required"),
  description: z.string().optional(),
  date: z.date({
    error: "Date is required",
  }),
});

export type AddPettyCashSchemaType = z.infer<typeof addPettyCashSchema>;

export const accountOptions = [
  { label: "Cash", value: "cash" },
  { label: "Bank", value: "bank" },
  { label: "Petty Cash", value: "petty-cash" },
];
