/**
 * Prisma Client Singleton (Prisma v7)
 *
 * In development, Next.js hot-reload can cause multiple PrismaClient instances,
 * exhausting the DB connection pool. This pattern reuses a single instance
 * via a global variable.
 *
 * The DATABASE_URL env var is read automatically by Prisma v7 from the environment.
 */
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
