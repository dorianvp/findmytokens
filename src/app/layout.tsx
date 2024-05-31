import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  weight: ['400', '700'],
  subsets: ["latin"],
  display: 'auto'
});

export const metadata: Metadata = {
  title: "FindMyTokens",
  description: "Find Unclaimed Tokens On Forgotten Exchange Accounts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
