import type { Metadata } from "next";
import "./globals.css";
import { hero, company, keywords } from "./config/siteConfig";

export const metadata: Metadata = {
  title: hero.title,
  description: hero.description,
  authors: [{ name: company.name }],
  creator: company.fullName,
  publisher: company.fullName,
  keywords: keywords,
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: hero.title,
    images: [hero.image],
    description: hero.description,
    siteName: company.fullName,
  },
  twitter: {
    card: "summary_large_image",
    images: [hero.image],
    title: hero.title,
    description: hero.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
