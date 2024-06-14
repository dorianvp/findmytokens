import type { Metadata } from "next";
import localFont from 'next/font/local';
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const khand = localFont({
  src: '../../public/fonts/khand/Khand-Variable.ttf',
  display: 'auto',
  variable: '--font-khand'
});

const jakartaPlus = localFont({
  src: '../../public/fonts/plus-jakarta-sans/PlusJakartaSans-Variable.ttf',
  display: 'auto',
  variable: '--font-jakarta-plus'
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-55D92HZQR9"></script>
        {/* <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-55D92HZQR9');
        </script> */}
      </head>
      <body className={`${khand.variable} ${jakartaPlus.variable}`}>{children}</body>
      <GoogleAnalytics gaId="G-55D92HZQR9" />
      <Analytics />
    </html>
  );
}
