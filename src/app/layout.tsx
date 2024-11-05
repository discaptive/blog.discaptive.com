import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import {
  baseDomain,
  blogDescription,
  blogName,
  blogThumbnailURL,
} from "@/config/const";
import "@/config/globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseDomain),
  title: blogName,
  description: blogDescription,
  openGraph: {
    title: blogName,
    description: blogDescription,
    siteName: blogName,
    images: [blogThumbnailURL],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: blogName,
    description: blogDescription,
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
        className={`${pretendard.variable} font-pretendard antialiased flex flex-col min-h-screen bg-[#ffffff] dark:bg-[#1a1a1a]`}
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
