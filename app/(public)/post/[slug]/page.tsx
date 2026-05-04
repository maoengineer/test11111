import type { Metadata } from "next";

export const metadata: Metadata = { title: "Post" };

export default function PostPage({ params }: { params: { slug: string } }) {
  return (
    <main style={{ padding: "2rem", color: "var(--text-base)" }}>
      Post: {params.slug} — Step 6
    </main>
  );
}
