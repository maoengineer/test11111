import { NextResponse } from "next/server";

// GET /api/search?q=term — search posts
// Full Fuse.js integration in Step 7
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") ?? "";
  return NextResponse.json({ results: [], query: q, message: "Step 7" });
}
