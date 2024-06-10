import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: 'Gaza Champions',
  description:
    'Initiative to find individuals to champion fundraising efforts from Gaza',
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