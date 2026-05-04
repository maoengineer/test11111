/**
 * `cn` — Tailwind class merger utility
 *
 * Combines clsx (conditional class handling) with tailwind-merge
 * (deduplication of conflicting Tailwind classes).
 *
 * Usage:
 *   cn("px-4 py-2", isActive && "bg-primary", "px-6")
 *   // → "py-2 bg-primary px-6"  (px-4 is overridden by px-6)
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
