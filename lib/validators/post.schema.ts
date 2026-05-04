/**
 * Zod validation schemas for Post-related operations.
 * Used by both API routes (server) and react-hook-form (client).
 */
import { z } from "zod";

export const PostStatus = z.enum(["DRAFT", "PUBLISHED"]);
export type PostStatusType = z.infer<typeof PostStatus>;

/** Schema for creating a new post */
export const CreatePostSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(200, "Title must be under 200 characters"),
  slug: z
    .string()
    .min(3, "Slug must be at least 3 characters")
    .max(200)
    .regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens")
    .optional(),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be under 500 characters"),
  content: z.string().min(20, "Content is too short"),
  thumbnail: z.string().url("Thumbnail must be a valid URL").optional().or(z.literal("")),
  categoryId: z.string().min(1, "Category is required"),
  tags: z.array(z.string()).optional().default([]),
  status: PostStatus.default("DRAFT"),
  version: z.string().max(50, "Version string too long").optional().or(z.literal("")),
  fileSize: z.number().nonnegative().optional(),
  fileUrl: z.string().url("File URL must be valid").optional().or(z.literal("")),
  // SEO fields
  seoTitle: z.string().max(70, "SEO title must be under 70 characters").optional(),
  seoDescription: z.string().max(160, "SEO description must be under 160 characters").optional(),
  // OS compatibility (stored as JSON array)
  osCompatibility: z.array(z.string()).optional().default([]),
});

export type CreatePostInput = z.infer<typeof CreatePostSchema>;

/** Schema for updating an existing post (all fields optional) */
export const UpdatePostSchema = CreatePostSchema.partial();
export type UpdatePostInput = z.infer<typeof UpdatePostSchema>;
