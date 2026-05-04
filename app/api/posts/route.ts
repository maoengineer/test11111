import { NextResponse } from "next/server";

// GET /api/posts — list posts (paginated)
// POST /api/posts — create a new post (admin/editor only)
// Full implementation in Step 7
export async function GET() {
  return NextResponse.json({ posts: [], total: 0, page: 1 });
}

export async function POST() {
  return NextResponse.json({ message: "API coming in Step 7" }, { status: 501 });
}
