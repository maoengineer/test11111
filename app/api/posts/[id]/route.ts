import { NextResponse } from "next/server";

// GET /api/posts/[id] — get single post
// PATCH /api/posts/[id] — update post
// DELETE /api/posts/[id] — delete post
// Full implementation in Step 7
// Note: In Next.js 16+, params is a Promise and must be awaited

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return NextResponse.json({ id, message: "Step 7" });
}

export async function PATCH() {
  return NextResponse.json({ message: "Step 7" }, { status: 501 });
}

export async function DELETE() {
  return NextResponse.json({ message: "Step 7" }, { status: 501 });
}
