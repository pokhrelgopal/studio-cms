import { z } from "zod";

export const addTransactionSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  category: z.string().min(1, "Category is required"),
  transaction_type: z.string().min(1, "Transaction type is required"),
  account: z.string().min(1, "Account is required"),
  description: z.string().optional(),
  reference: z.string().optional(),
  date: z.date({
    error: "Date is required",
  }),
  status: z.string().min(1, "Status is required"),
});

export type AddTransactionSchemaType = z.infer<typeof addTransactionSchema>;

export const accountOptions = [
  { label: "Cash", value: "cash" },
  { label: "Bank", value: "bank" },
  { label: "Petty Cash", value: "petty-cash" },
];

export const categoryOptions = [
  { label: "Class Enrollment Fee", value: "class-enrollment-fee" },
  { label: "Library", value: "library" },
  { label: "Petty Cash", value: "petty-cash" },
  { label: "Registration", value: "registration" },
  { label: "Sports", value: "sports" },
  { label: "Tuition", value: "tuition" },
  { label: "Uniform", value: "uniform" },
];

export const statusOptions = [
  { label: "Paid", value: "paid" },
  { label: "Unpaid", value: "unpaid" },
  { label: "Partial", value: "partial" },
];
