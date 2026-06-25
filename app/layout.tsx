import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://link.ecreator.ch";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "eCreator — Wir bauen digitale Systeme, die Unternehmen wachsen lassen",
  description:
    "eCreator entwickelt keine Standard-Webseiten. Wir bauen Systeme – AI Websites, CRM, Performance Ads & Automatisierung – die mehr Kunden, mehr Umsatz und planbares Wachstum ermöglichen.",
  keywords: [
    "eCreator",
    "Digitalagentur Schweiz",
    "AI Websites",
    "CRM Systeme",
    "Performance Marketing",
    "Automatisierung",
    "SEO",
    "Webdesign Schweiz",
  ],
  authors: [{ name: "eCreator" }],
  creator: "eCreator",
  publisher: "eCreator",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: siteUrl,
    siteName: "eCreator",
    title: "eCreator — Wir bauen digitale Systeme, die Unternehmen wachsen lassen",
    description:
      "AI Websites. CRM Systeme. Performance Ads. Automatisierung. Wir bauen Systeme, die planbares Wachstum ermöglichen.",
    images: [
      {
        url: "/ecreator-logo.png",
        width: 1200,
        height: 630,
        alt: "eCreator — We create customers, not clicks.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eCreator — Wir bauen digitale Systeme, die Unternehmen wachsen lassen",
    description:
      "AI Websites. CRM Systeme. Performance Ads. Automatisierung. Wir bauen Systeme für planbares Wachstum.",
    images: ["/ecreator-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "eCreator",
  description:
    "Schweizer Digitalagentur für AI Websites, CRM Systeme, Performance Ads und Automatisierung.",
  url: siteUrl,
  email: "info@ecreator.ch",
  slogan: "We create customers, not clicks.",
  areaServed: "CH",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "37",
    bestRating: "5",
  },
  sameAs: [
    "https://www.instagram.com/ecreator.ch",
    "https://www.tiktok.com/@ecreator.ch",
    "https://www.linkedin.com/company/ecreator",
    "https://www.youtube.com/@ecreator",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Meta Pixel / Analytics placeholder — drop your IDs in to activate.
        <Script id="meta-pixel" strategy="afterInteractive">{`...`}</Script> */}
        {children}
      </body>
    </html>
  );
}
