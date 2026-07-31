import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emilee's Sweet House — Authentic Turkish Baklava · Vancouver",
  description:
    "Hand-rolled Turkish baklava, warm börek, lokum and rich Turkish coffee — made fresh daily in Vancouver, BC. Order on Uber Eats or visit us on East Hastings.",
  keywords: [
    "baklava Vancouver",
    "Turkish desserts Vancouver",
    "Emilee's Sweet House",
    "Turkish coffee",
    "börek",
    "lokum",
    "Turkish breakfast",
  ],
  openGraph: {
    title: "Emilee's Sweet House — Authentic Turkish Baklava",
    description:
      "Hand-rolled baklava, börek, lokum & Turkish coffee, made fresh daily in Vancouver, BC.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
