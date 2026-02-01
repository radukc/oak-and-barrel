import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oak & Barrel | NYC Steakhouse, Sushi & Craft Beers",
  description:
    "Experience the finest steaks, fresh sushi, gourmet burgers, and craft beers at Oak & Barrel. A premier NYC dining destination since 2004.",
  keywords: [
    "NYC restaurant",
    "steakhouse",
    "sushi",
    "craft beer",
    "gourmet burgers",
    "fine dining",
    "New York City",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
