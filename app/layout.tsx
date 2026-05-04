import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    default: "SoftDrop — Modern Software Download Portal",
    template: "%s | SoftDrop",
  },
  description:
    "Discover, download, and manage software with SoftDrop — the modern software download portal.",
  keywords: ["software download", "free software", "apps", "utilities", "games"],
  authors: [{ name: "SoftDrop" }],
  creator: "SoftDrop",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "SoftDrop",
    title: "SoftDrop — Modern Software Download Portal",
    description:
      "Discover, download, and manage software with SoftDrop — the modern software download portal.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftDrop — Modern Software Download Portal",
    description:
      "Discover, download, and manage software with SoftDrop — the modern software download portal.",
    creator: "@softdrop",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        {/* Global toast notifications */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "rgba(22, 22, 37, 0.95)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#e2e8f0",
              backdropFilter: "blur(12px)",
            },
          }}
          richColors
        />
      </body>
    </html>
  );
}
