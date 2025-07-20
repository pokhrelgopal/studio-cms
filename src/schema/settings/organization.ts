import { z } from "zod";

export const organizationSchema = z.object({
  organization_name: z
    .string()
    .min(1, { message: "Organization name is required." })
    .max(100, { message: "Organization name cannot exceed 100 characters." }),

  organization_email: z
    .string()
    .min(1, { message: "Organization email is required." })
    .email({ message: "Enter a valid organization email address." }),

  organization_type: z
    .string()
    .min(1, { message: "Organization type is required." }),

  organization_phone: z
    .string()
    .min(1, { message: "Phone number is required." }),

  fax_number: z.string().min(1, { message: "Fax number is required." }),

  reply_to_email: z
    .string()
    .min(1, { message: "Reply-to email address is required." })
    .email({ message: "Enter a valid reply-to email address." }),

  email_to_receive_notification: z
    .string()
    .min(1, { message: "Notification email is required." })
    .email({ message: "Enter a valid notification email address." }),

  address_line_1: z.string().min(1, { message: "Address Line 1 is required." }),

  address_line_2: z.string().min(1, { message: "Address Line 2 is required." }),

  city: z.string().min(1, { message: "City is required." }),

  state: z.string().min(1, { message: "State is required." }),

  zip_code: z.string().min(1, { message: "Zip code is required." }),

  tax_id_label: z.string().min(1, { message: "Tax ID label is required." }),

  tax_number: z.string().min(1, { message: "Tax number is required." }),

  is_tution_taxable: z.boolean().default(false),

  is_registration_fee_taxable: z.boolean().default(false),

  tax_rate: z
    .number()
    .min(0, { message: "Tax rate cannot be negative." })
    .max(100, { message: "Tax rate cannot exceed 100%." })
    .default(0),

  min_age_child: z
    .number()
    .min(0, { message: "Minimum age cannot be negative." })
    .default(0),
});

export type OrganizationFormValues = z.input<typeof organizationSchema>;

export const stateOptions = [
  { label: "Alabama", value: "Alabama" },
  { label: "Alaska", value: "Alaska" },
  { label: "Arizona", value: "Arizona" },
  { label: "Arkansas", value: "Arkansas" },
  { label: "California", value: "California" },
  { label: "Colorado", value: "Colorado" },
  { label: "Connecticut", value: "Connecticut" },
  { label: "Delaware", value: "Delaware" },
  { label: "Florida", value: "Florida" },
  { label: "Georgia", value: "Georgia" },
  { label: "Hawaii", value: "Hawaii" },
  { label: "Idaho", value: "Idaho" },
  { label: "Illinois", value: "Illinois" },
  { label: "Indiana", value: "Indiana" },
  { label: "Iowa", value: "Iowa" },
  { label: "Kansas", value: "Kansas" },
  { label: "Kentucky", value: "Kentucky" },
  { label: "Louisiana", value: "Louisiana" },
  { label: "Maine", value: "Maine" },
  { label: "Maryland", value: "Maryland" },
  { label: "Massachusetts", value: "Massachusetts" },
  { label: "Michigan", value: "Michigan" },
  { label: "Minnesota", value: "Minnesota" },
  { label: "Mississippi", value: "Mississippi" },
  { label: "Missouri", value: "Missouri" },
  { label: "Montana", value: "Montana" },
  { label: "Nebraska", value: "Nebraska" },
  { label: "Nevada", value: "Nevada" },
  { label: "New Hampshire", value: "New Hampshire" },
  { label: "New Jersey", value: "New Jersey" },
  { label: "New Mexico", value: "New Mexico" },
  { label: "New York", value: "New York" },
  { label: "North Carolina", value: "North Carolina" },
  { label: "North Dakota", value: "North Dakota" },
  { label: "Ohio", value: "Ohio" },
  { label: "Oklahoma", value: "Oklahoma" },
  { label: "Oregon", value: "Oregon" },
  { label: "Pennsylvania", value: "Pennsylvania" },
  { label: "Rhode Island", value: "Rhode Island" },
  { label: "South Carolina", value: "South Carolina" },
  { label: "South Dakota", value: "South Dakota" },
  { label: "Tennessee", value: "Tennessee" },
  { label: "Texas", value: "Texas" },
  { label: "Utah", value: "Utah" },
  { label: "Vermont", value: "Vermont" },
  { label: "Virginia", value: "Virginia" },
  { label: "Washington", value: "Washington" },
  { label: "West Virginia", value: "West Virginia" },
  { label: "Wisconsin", value: "Wisconsin" },
  { label: "Wyoming", value: "Wyoming" },
];
