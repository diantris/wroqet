import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wroqet - Professional Testing Consultancy",
  description: "Exposing critical flaws before your users do. 10 years of precision testing expertise.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
