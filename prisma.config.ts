/**
 * Prisma v7 Configuration File
 *
 * Minimal config — just points to the schema location.
 * The database connection URL is passed at runtime via environment variable,
 * not through this config file.
 *
 * The actual DB connection for Prisma CLI commands (db push, migrate, studio)
 * is handled by setting DATABASE_URL in .env.local.
 *
 * Docs: https://pris.ly/d/config-datasource
 */
import path from "node:path";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: path.join(__dirname, "prisma/schema.prisma"),
});
