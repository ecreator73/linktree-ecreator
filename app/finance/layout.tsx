import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import FinanceNav from "@/components/finance/FinanceNav";
import FinanceFooter from "@/components/finance/FinanceFooter";
import FinanceBackground from "@/components/finance/FinanceBackground";
import { BRAND } from "@/lib/finance";

// Premium optical serif for display headings — the "wealth management" feel.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const siteUrl = BRAND.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${BRAND.name} — ${BRAND.claim}`,
    template: `%s | ${BRAND.name} by eCreator`,
  },
  description: BRAND.subclaim,
  applicationName: BRAND.name,
  keywords: [
    "Marketing für Finanzberater",
    "Leads für Versicherungsberater",
    "Broker Leads Schweiz",
    "Neukundengewinnung Finanzberater",
    "Versicherungsberater Webseite",
    "Broker CRM",
    "Finanzberater Ads",
    "Vorsorgeberater Marketing",
    "Versicherung Leads Schweiz",
  ],
  authors: [{ name: BRAND.name }, { name: "eCreator" }],
  creator: "eCreator",
  publisher: "eCreator",
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: siteUrl,
    siteName: `${BRAND.name} by eCreator`,
    title: `${BRAND.name} — ${BRAND.claim}`,
    description: BRAND.subclaim,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — ${BRAND.claim}`,
    description: BRAND.subclaim,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${BRAND.name} by eCreator`,
  description: BRAND.subclaim,
  url: siteUrl,
  email: BRAND.email,
  telephone: "+41449742760",
  areaServed: "CH",
  parentOrganization: { "@type": "Organization", name: "eCreator", url: "https://ecreator.ch" },
  knowsAbout: [
    "Marketing für Finanzberater",
    "Leadgenerierung für Versicherungsbroker",
    "CRM für Broker",
    "Performance Ads für Finanzdienstleister",
  ],
  sameAs: [
    "https://www.instagram.com/ecreator.ch",
    "https://www.linkedin.com/company/ecreator",
    "https://www.tiktok.com/@ecreator.ch",
  ],
};

export default function FinanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`finance-scope ${fraunces.variable} relative min-h-screen font-sans`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <FinanceBackground />
      <FinanceNav />
      <main className="relative z-10">{children}</main>
      <FinanceFooter />
    </div>
  );
}
