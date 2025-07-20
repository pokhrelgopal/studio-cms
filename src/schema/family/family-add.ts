import { z } from "zod";

export const familyFormSchema = z.object({
  // Personal Information
  branch: z.string().min(1, "Branch is required"),
  familyName: z.string().min(1, "Family name is required"),
  registrationDate: z.string().min(1, "Registration date is required"),
  familyCode: z.string().optional(),

  // Primary Contact
  contact1: z.object({
    relation: z.string().min(1, "Relation is required"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phone: z.string().min(1, "Phone is required"),
    email: z.string().email("Invalid email"),
  }),

  // Secondary Contact
  contact2: z.object({
    relation: z.string().min(1, "Relation is required"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phone: z.string().min(1, "Phone is required"),
    email: z.string().email("Invalid email"),
  }),

  // Address Information
  address: z.object({
    homeAddress: z.string().min(1, "Home address is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    zip: z.string().min(1, "ZIP code is required"),
  }),

  // Emergency Contact
  emergencyContact: z.object({
    name: z.string().min(1, "Emergency contact name is required"),
    phone: z.string().min(1, "Emergency contact phone is required"),
  }),

  // Students Information
  students: z
    .array(
      z.object({
        firstName: z.string().min(1, "Student first name is required"),
        lastName: z.string().min(1, "Student last name is required"),
        dateOfBirth: z.date({
          message: "Please select a valid date",
        }),
        gender: z.string().min(1, "Gender is required"),
        phone: z.string().optional(),
        email: z.string().email("Invalid email").optional(),
        tshirt_size: z.string().optional(),
        class: z.string().min(1, "Class is required"),
      }),
    )
    .min(1, "At least one student is required"),
});

export type FamilyFormSchemaType = z.infer<typeof familyFormSchema>;
