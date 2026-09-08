import type { Metadata } from "next";
import { Archivo, Literata, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/config";

/* Three roles, three faces. Display shouts, body is read, mono carries data. */
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const literata = Literata({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-literata",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

/* Runs before first paint so a returning dark-theme visitor never sees a
   flash of light. Light is the default; the OS preference is deliberately
   not consulted, only an explicit choice. */
const themeScript = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}})()`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: siteConfig.url },
  title: {
    default: `${siteConfig.name} · ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Full Stack AI Engineer",
    "AI Engineer",
    "LLM Integration",
    "Voice AI Agent",
    "Retell AI",
    "OpenAI",
    "MCP Server",
    "Model Context Protocol",
    "Python Developer",
    "FastAPI",
    "Next.js Developer",
    "API Integration",
    "Workflow Automation",
    "Shopify Integration",
    "eBay API",
    "AWS",
    "PostgreSQL",
    "Laravel Developer",
    "Lahore",
    "Remote Software Engineer",
  ],
  icons: {
    // SVG first for browsers that take it, .ico as the fallback Safari and
    // Google's search results still prefer. Apple requires PNG: it silently
    // ignores an SVG apple-touch-icon and screenshots the page instead.
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  authors: [{ name: siteConfig.author, url: siteConfig.social.github }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} · ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} · ${siteConfig.title}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "GNlnqEQ41Lg2IV7EVXPkAUxGzG3Rn1bcavqkR0CCFFA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // The pre-paint script below sets data-theme on this element before React
    // hydrates, so the server HTML and the client DOM differ here by design.
    // suppressHydrationWarning applies to this element only, one level deep,
    // so genuine mismatches further down the tree still surface.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${literata.variable} ${jetbrains.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F4F1EA" />
      </head>

      <body className="antialiased">
        {/* Film grain sits above the page and below the content. */}
        <div className="grain" aria-hidden="true" />

        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
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
          </>
        ) : null}

        <Header />
        <main className="relative z-10 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
