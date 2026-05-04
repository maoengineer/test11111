import type { Metadata } from "next";

export const metadata: Metadata = { title: "Edit Post" };

// In Next.js 16+, params is a Promise and must be awaited
export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main style={{ padding: "2rem", color: "var(--text-base)" }}>
      Edit Post {id} — Step 5
    </main>
  );
}
