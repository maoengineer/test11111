import { NextResponse } from "next/server";

// GET /api/posts/[id] — get single post
// PATCH /api/posts/[id] — update post
// DELETE /api/posts/[id] — delete post
export async function GET(_req: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({ id: params.id, message: "Step 7" });
}
export async function PATCH() {
  return NextResponse.json({ message: "Step 7" }, { status: 501 });
}
export async function DELETE() {
  return NextResponse.json({ message: "Step 7" }, { status: 501 });
}
