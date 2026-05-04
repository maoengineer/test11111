/**
 * Zod validation schemas for Comment operations.
 */
import { z } from "zod";

export const CommentStatus = z.enum(["PENDING", "APPROVED", "REJECTED"]);
export type CommentStatusType = z.infer<typeof CommentStatus>;

/** Schema for submitting a new comment */
export const CreateCommentSchema = z.object({
  content: z
    .string()
    .min(3, "Comment must be at least 3 characters")
    .max(2000, "Comment must be under 2000 characters"),
  postId: z.string().min(1, "Post ID is required"),
  // Honeypot
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type CreateCommentInput = z.infer<typeof CreateCommentSchema>;

/** Schema for moderating a comment */
export const ModerateCommentSchema = z.object({
  commentId: z.string().min(1),
  status: CommentStatus,
});

export type ModerateCommentInput = z.infer<typeof ModerateCommentSchema>;
