import React from "react";
import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

import "./globals.css";

// Configure the fonts
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anugrah.dev"),
  alternates: {
    canonical: "/",
  },
  title: "Anugrah NM — Software Engineer",
  description:
    "London-based software engineer with First Class Honours in CS. Building full-stack web apps with TypeScript, React, Next.js, Python, FastAPI and PostgreSQL. Open to on-site, remote, and hybrid roles.",
  openGraph: {
    title: "Anugrah NM — Software Engineer",
    description:
      "London-based software engineer with First Class Honours in CS. Building full-stack web apps with TypeScript, React, Next.js, Python, FastAPI and PostgreSQL. Open to on-site, remote, and hybrid roles.",
    url: "https://anugrah.dev",
    siteName: "Anugrah NM",
    images: [
      {
        url: "https://anugrah.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anugrah NM — Software Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anugrah NM — Software Engineer",
    description:
      "London-based software engineer with First Class Honours in CS. Building full-stack web apps with TypeScript, React, Next.js, Python, FastAPI and PostgreSQL. Open to on-site, remote, and hybrid roles.",
    images: ["https://anugrah.dev/og-image.png"],
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
