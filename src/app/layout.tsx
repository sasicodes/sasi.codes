import type { Metadata } from 'next'
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sasidharan (@sasicodes)",
  description: "Crafting, coding, and beyond.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
