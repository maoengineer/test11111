import type { Metadata } from "next";
export const metadata: Metadata = { title: "Edit Post" };
export default function EditPostPage({ params }: { params: { id: string } }) {
  return (
    <main style={{ padding: "2rem", color: "var(--text-base)" }}>Edit Post {params.id} — Step 5</main>
  );
}
