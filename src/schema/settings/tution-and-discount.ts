import { z } from "zod";

export const tutionAndDiscountSchema = z.object({
  enableDiscountForMultipleKids: z.boolean().default(false),
  enableDiscountForFullYearPayment: z.boolean().default(false),
  multipleKidsDiscountPercentage: z.number().min(0).max(100).default(0),
  fullYearDiscountPercentage: z.number().min(0).max(100).default(0),
});

export type TutionAndDiscountType = z.input<typeof tutionAndDiscountSchema>;
