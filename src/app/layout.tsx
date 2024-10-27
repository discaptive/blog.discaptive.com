import type { Metadata } from "next";
import "@/config/globals.css";
import {
  baseDomain,
  blogDesc,
  blogName,
  blogThumbnailURL,
} from "@/config/const";
import localFont from "next/font/local";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

const pretendard = localFont({
  src: "/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseDomain),
  title: blogName,
  description: blogDesc,
  openGraph: {
    title: blogName,
    description: blogDesc,
    siteName: blogName,
    images: [blogThumbnailURL],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: blogName,
    description: blogDesc,
    images: [blogThumbnailURL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className=" scroll-smooth">
      <body
        className={`${pretendard.variable} font-pretendard antialiased flex flex-col min-h-screen bg-gradient-to-r from-[#f8fbff] via-[#fffafc] to-[#ffffff] dark:from-[#1a1a1a] dark:via-[#1c1c1c] dark:to-[#1e1e1e]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="mt-16 flex flex-1 flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
        <Toaster />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-V7XF3T4VPW" />
        <GoogleTagManager gtmId="G-V7XF3T4VPW" />
      </body>
    </html>
  );
}
