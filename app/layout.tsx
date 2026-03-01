import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/config";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  title: {
    default: "Moeez Rehman - Software Engineer | Backend, APIs & Cloud Infrastructure",
    template: "%s | Moeez Rehman"
  },
  description: "Software Engineer specializing in Backend & Infrastructure — APIs, Automation, VPS & Cloud Deployments. 5+ years building scalable systems with Python, Laravel, and React/Next.js.",
  keywords: [
    "Software Engineer",
    "Backend Engineer",
    "Infrastructure Engineer",
    "Python Developer",
    "Laravel Developer",
    "FastAPI",
    "API Development",
    "REST API",
    "Automation",
    "VPS Deployment",
    "Cloud Infrastructure",
    "Shopify Integration",
    "eBay API",
    "E-commerce Backend",
    "SaaS Development",
    "React Developer",
    "Next.js Developer",
    "Full Stack Engineer",
    "Docker",
    "AWS",
    "Pakistan Developer",
    "Remote Software Engineer"
  ],
  authors: [{ name: "Moeez Rehman", url: "https://github.com/moeezrhmn" }],
  creator: "Moeez Rehman",
  publisher: "Moeez Rehman",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Moeez Rehman - Software Engineer | Backend & Infrastructure",
    description: "Software Engineer with 5+ years experience in Backend, APIs, Automation, VPS & Cloud Deployments. Built systems processing 300k+ products and 40+ daily automated orders using Python, Laravel, and React/Next.js.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Moeez Rehman - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moeez Rehman - Software Engineer | Backend & Infrastructure",
    description: "Software Engineer specializing in Backend, APIs, Automation, and Cloud Infrastructure. Python · Laravel · React/Next.js.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "GNlnqEQ41Lg2IV7EVXPkAUxGzG3Rn1bcavqkR0CCFFA",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00ff41" />
      </head>

      <body className={`${inter.variable} antialiased`}>
        {/* Google tag (gtag.js)  */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>

        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
