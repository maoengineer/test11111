import type { Metadata } from "next";

export const metadata: Metadata = { title: "Category" };

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <main style={{ padding: "2rem", color: "var(--text-base)" }}>
      Category: {params.slug} — Step 6
    </main>
  );
}
