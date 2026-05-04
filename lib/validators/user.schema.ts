/**
 * Zod validation schemas for User-related operations.
 */
import { z } from "zod";

export const UserRole = z.enum(["ADMIN", "EDITOR", "USER"]);
export type UserRoleType = z.infer<typeof UserRole>;

/** Schema for user registration */
export const RegisterSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(30, "Username too long")
      .regex(/^[a-zA-Z0-9_-]+$/, "Username can only contain letters, numbers, - and _"),
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
    // Honeypot field — must be empty to pass bot detection
    honeypot: z.string().max(0, "Bot detected").optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterInput = z.infer<typeof RegisterSchema>;

/** Schema for login */
export const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type LoginInput = z.infer<typeof LoginSchema>;

/** Schema for updating user profile */
export const UpdateProfileSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-zA-Z0-9_-]+$/)
    .optional(),
  avatar: z.string().url().optional().or(z.literal("")),
  currentPassword: z.string().optional(),
  newPassword: z
    .string()
    .min(8)
    .regex(/[A-Z]/)
    .regex(/[0-9]/)
    .optional(),
});

export type UpdateProfileInput = z.infer<typeof UpdateProfileSchema>;

/** Schema for admin updating a user's role */
export const UpdateUserRoleSchema = z.object({
  userId: z.string().cuid(),
  role: UserRole,
});

export type UpdateUserRoleInput = z.infer<typeof UpdateUserRoleSchema>;
