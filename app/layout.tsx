import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const SITE_URL = "https://it.backpunkt-management.de";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type SiteSettings = {
  companyName?: string;
  tagline?: string;
  faviconUrl?: string;
  logoUrl?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
};

async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const res = await fetch(`${API_URL}/api/site-settings`, {
      cache: "no-store",
    });

    if (!res.ok) return {};

    return res.json();
  } catch {
    return {};
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  const title =
    settings.metaTitle ||
    `${settings.companyName || "Backpunkt IT Solutions"} | Web, App & Software Development`;

  const description =
    settings.metaDescription ||
    settings.tagline ||
    "Backpunkt IT Solutions develops modern websites, mobile apps, business platforms, and custom software solutions for companies in Germany and beyond.";

  const keywords = settings.keywords
    ?.split(",")
    .map((item) => item.trim())
    .filter(Boolean) || [
    "Backpunkt IT Solutions",
    "software development Germany",
    "web development Germany",
    "app development Germany",
    "custom software",
    "business automation",
    "Next.js agency",
    "React development",
    "mobile app development",
    "Mülheim an der Ruhr IT company",
  ];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s | ${settings.companyName || "Backpunkt IT Solutions"}`,
    },
    description,
    keywords,
    applicationName: settings.companyName || "Backpunkt IT Solutions",
    authors: [{ name: "BackPunkt Management GmbH" }],
    creator: "BackPunkt Management GmbH",
    publisher: "BackPunkt Management GmbH",
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
    alternates: {
      canonical: SITE_URL,
    },
    openGraph: {
      title,
      description,
      url: SITE_URL,
      siteName: settings.companyName || "Backpunkt IT Solutions",
      locale: "de_DE",
      type: "website",
      images: settings.logoUrl ? [settings.logoUrl] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: settings.logoUrl ? [settings.logoUrl] : undefined,
    },
    icons: {
      icon: settings.faviconUrl || "/favicon.ico",
      shortcut: settings.faviconUrl || "/favicon.ico",
      apple: settings.faviconUrl || "/favicon.ico",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
