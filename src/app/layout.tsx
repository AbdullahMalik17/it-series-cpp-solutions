import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IT Series C++ Study Hub — Verified MCQs, Output Traces & Errata | AbdullahMalik17",
  description:
    "Interactive Next.js + TypeScript study guide solving all 245 MCQs and 50 Output Exercises from IT Series Object-Oriented Programming using C++ (Chapters 1–5), with step-by-step traces and book errata.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen antialiased selection:bg-[var(--accent-soft)]">
        {children}
      </body>
    </html>
  );
}
