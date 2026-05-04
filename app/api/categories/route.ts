import { NextResponse } from "next/server";

// GET /api/categories — list all categories
// POST /api/categories — create category (admin)
export async function GET() {
  return NextResponse.json({ categories: [] });
}
export async function POST() {
  return NextResponse.json({ message: "Step 7" }, { status: 501 });
}
