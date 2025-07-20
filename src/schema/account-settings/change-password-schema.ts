import { z } from "zod";

export const changePasswordSchema = z
  .object({
    oldPassword: z
      .string()
      .min(1, "Current password is required")
      .max(100, "Current password must be at most 100 characters long"),
    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters long")
      .max(64, "New password must not exceed 64 characters")
      .regex(/[a-z]/, "New password must contain at least one lowercase letter")
      .regex(/[A-Z]/, "New password must contain at least one uppercase letter")
      .regex(/[0-9]/, "New password must contain at least one number")
      .regex(
        /[@$!%*?&]/,
        "New password must contain at least one special character (@$!%*?&)"
      ),
    confirmNewPassword: z
      .string()
      .min(1, "Please confirm your new password")
      .max(64, "Confirmation password must not exceed 64 characters"),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "New password and confirmation do not match",
    path: ["confirmNewPassword"],
  });

export type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;
