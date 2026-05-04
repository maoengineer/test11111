import { NextResponse } from "next/server";

// POST /api/downloads — record a download event
// GET  /api/downloads — list downloads (admin)
export async function POST() {
  return NextResponse.json({ message: "Step 7" }, { status: 501 });
}
export async function GET() {
  return NextResponse.json({ downloads: [] });
}
