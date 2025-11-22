import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://moeezrehman.com'), // Update with your actual domain
  title: {
    default: "Moeez Rehman - Backend Engineer | Python, Laravel & FastAPI Developer",
    template: "%s | Moeez Rehman"
  },
  description: "Expert Backend Engineer specializing in Python (FastAPI, Flask), Laravel PHP, API Development, E-commerce Integrations (Shopify, eBay), Automation Workflows, and SaaS Backend Systems. 5+ years building scalable solutions.",
  keywords: [
    "Backend Engineer",
    "Python Developer",
    "Laravel Developer",
    "FastAPI",
    "API Development",
    "REST API",
    "Shopify Integration",
    "eBay API",
    "E-commerce Backend",
    "SaaS Development",
    "AI Workflows",
    "Automation",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "AWS",
    "Backend Architecture",
    "Microservices",
    "Pakistan Developer",
    "Remote Backend Engineer"
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
    url: "https://moeezrehman.com",
    title: "Moeez Rehman - Backend Engineer | Python & Laravel Specialist",
    description: "Expert Backend Engineer with 5+ years experience in Python, Laravel, API Development, E-commerce Integrations, and SaaS Systems. Built solutions processing 300k+ products and 40+ daily automated orders.",
    siteName: "Moeez Rehman Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Moeez Rehman - Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moeez Rehman - Backend Engineer | Python & Laravel",
    description: "Backend Engineer specializing in Python, Laravel, APIs, Integrations, and Automation. Building scalable backend systems.",
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
    google: "your-google-site-verification-code", // Add your verification code
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
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
