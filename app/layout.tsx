import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700", "800", "1000"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Pankaj + Co.",
  description: "A DevWars project submitted by Prabodh Kumar Panda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>{children}</body>
    </html>
  );
}
