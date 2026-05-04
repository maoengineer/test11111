import type { Metadata } from "next";

export const metadata: Metadata = { title: "Post" };

// In Next.js 16+, params is a Promise and must be awaited
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main style={{ padding: "2rem", color: "var(--text-base)" }}>
      Post: {slug} — Step 6
    </main>
  );
}
