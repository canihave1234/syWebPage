import type { Metadata } from "next";
import type { ReactNode } from "react";
import { space, syne } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://soyunsmkim.vercel.app"),
  title: "Soyun Kim | Software Developer",
  description:
    "Toronto-based software developer with banking, authentication, and Ontario government experience. Explore practical Java, OCR, and web projects.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Soyun Kim | Software Developer",
    description: "Banking foundations. Public-sector experience. Useful software.",
    url: "/",
    siteName: "Soyun Kim",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soyun Kim | Software Developer",
    description: "Toronto-based developer building practical Java and web applications.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${space.variable} ${syne.variable}`}>{children}</body>
    </html>
  );
}

