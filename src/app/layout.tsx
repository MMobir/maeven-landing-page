import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maeven | The Digital Concierge for Your Household",
  description:
    "Maeven is the AI Chief Operating Officer for your household. Dump your mental load, automate the groceries, and let Maeven manage the chores.",
  metadataBase: new URL("https://maeven.co"),
  openGraph: {
    title: "Maeven | The Digital Concierge for Your Household",
    description:
      "Stop nagging. Start delegating. Maeven manages your household so you don't have to.",
    type: "website",
    siteName: "Maeven",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maeven | The Digital Concierge for Your Household",
    description:
      "Stop nagging. Start delegating. Maeven manages your household so you don't have to.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
