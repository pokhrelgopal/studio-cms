import { z } from "zod";

export const studentAddSchema = z.object({
  family_id: z.string().min(1, "Family ID is required"),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  gender: z.string().min(1, "Gender is required"),
  date_of_birth: z.date({
    error: "Date of birth is required",
  }),
  phone: z.string().optional(),
  email: z.string().email("Invalid email").optional(),
  school_name: z.string().min(1, "School name is required"),
  tshirt_size: z.string().optional(),
  skill_note: z.string().optional(),
});

export type StudentAddSchemaType = z.infer<typeof studentAddSchema>;
