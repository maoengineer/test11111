import { NextResponse } from "next/server";

// POST /api/auth/[...nextauth] — handled by NextAuth
// This file is a placeholder; the real handler is created in Step 3
export async function GET() {
  return NextResponse.json({ status: "auth routes coming in Step 3" });
}
