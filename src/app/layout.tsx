import type { Metadata } from 'next'
import './globals.css'
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Noto_Sans_TC } from "next/font/google";

const NotoSansTC = Noto_Sans_TC({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-tc",
});

export const metadata: Metadata = {
  title: 'SHUSHU.bio',
  description: 'Nice to see you!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${NotoSansTC.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
