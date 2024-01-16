import type { Metadata } from 'next'
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import BackgroundComets from "@/components/BackgroundComets";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sasidharan (@sasicodes)",
  description: "Crafting, coding, and beyond.",
  category: "Personal",
  robots: "index, follow",
  twitter: { card: "summary_large_image" },
  metadataBase: new URL("https://sasi.codes"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sasi.codes",
    images: "https://sasi.codes/og.png",
  },
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
        <BackgroundComets />
        <Analytics />
      </body>
    </html>
  );
}
