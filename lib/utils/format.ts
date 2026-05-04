/**
 * Date and number formatting utilities
 */
import { formatDistanceToNow, format } from "date-fns";

/** Format bytes to human-readable size string (e.g., "4.2 MB") */
export function formatBytes(bytes: number, decimals = 1): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

/** Format a number with thousands separators (e.g., 1234567 → "1,234,567") */
export function formatNumber(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}

/** Format a number compactly (e.g., 1234567 → "1.2M") */
export function formatCompact(n: number): string {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(n);
}

/** Relative time (e.g., "3 hours ago") */
export function timeAgo(date: Date | string): string {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

/** Full date format (e.g., "May 4, 2026") */
export function formatDate(date: Date | string): string {
  return format(new Date(date), "MMMM d, yyyy");
}

/** Short date format (e.g., "05/04/2026") */
export function formatDateShort(date: Date | string): string {
  return format(new Date(date), "MM/dd/yyyy");
}

/** ISO datetime format for meta tags */
export function formatISODate(date: Date | string): string {
  return new Date(date).toISOString();
}

/**
 * Truncate a string to a max length, appending "..." if truncated.
 * Example: truncate("Hello World", 8) → "Hello Wo..."
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}
