/**
 * Slug generation utility
 * Wraps the `slugify` package with sensible defaults for URL generation.
 */
import SlugifyLib from "slugify";

/**
 * Convert a string to a URL-safe slug.
 * Example: "Hello World! 2024" → "hello-world-2024"
 */
export function slugify(text: string): string {
  return SlugifyLib(text, {
    lower: true,
    strict: true, // removes special characters
    trim: true,
  });
}

/**
 * Generate a unique slug by appending a short timestamp suffix.
 * Use when you need guaranteed uniqueness without a DB check.
 * Example: "hello-world" → "hello-world-1a2b3c"
 */
export function uniqueSlug(text: string): string {
  const base = slugify(text);
  const suffix = Math.random().toString(36).slice(2, 8);
  return `${base}-${suffix}`;
}
