import type { Metadata } from "next";
import localFont from 'next/font/local';
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next'
import { WithContext, WebSite } from 'schema-dts'

const jsonLd: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FindMyTokens',
  description: 'Match wallet transactions to exchange deposit addresses, aiding in fund recovery, identifying unclaimed balances, and improving recordkeeping.',
}

const khand = localFont({
  src: '../../public/fonts/khand/Khand-Variable.woff',
  display: 'auto',
  variable: '--font-khand'
});

const jakartaPlus = localFont({
  src: '../../public/fonts/plus-jakarta-sans/PlusJakartaSans-Variable.woff',
  display: 'auto',
  variable: '--font-jakarta-plus'
});

export const metadata: Metadata = {
  title: "FindMyTokens | Match wallet transactions to exchange deposit addresses",
  description: "FindMyTokens matches wallet transactions to exchange deposit addresses. Scan the attacker's wallet holding your tokens and check exchange interactions, enabling you to report the incident and recover your assets.",
  metadataBase: new URL("https://findmytokens.com"),
  openGraph: {
    title: "FindMyTokens",
    description: "FindMyTokens matches wallet transactions to exchange deposit addresses. Scan the attacker's wallet holding your tokens and check exchange interactions, enabling you to report the incident and recover your assets.",
    url: 'https://findmytokens.com',
    siteName: 'FindMyTokens',
    type: "website",
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://findmytokens.com',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        <meta name="google-site-verification" content="7q9syfElLokwsvPkNlNSukWpyXP6HdJs3Bvp7Ue_MFw" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${khand.variable} ${jakartaPlus.variable}`}>
        {children}
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-55D92HZQR9" />
      <Analytics />
    </html>
  );
}
