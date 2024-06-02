import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-55D92HZQR9"></script>
        {/* <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-55D92HZQR9');
        </script> */}
      </head>
      <body className={rubik.className}>{children}</body>
      <GoogleAnalytics gaId="G-55D92HZQR9" />
    </html>
  );
}
