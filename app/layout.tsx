import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const SITE_URL = "https://vexnorasoft.com";

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
    `${settings.companyName || "VexnoraSoft"} | Web, App & Software Development`;

  const description =
    settings.metaDescription ||
    settings.tagline ||
    "VexnoraSoft develops modern websites, mobile apps, business platforms, and custom software solutions for companies in Germany and beyond.";

  const keywords = settings.keywords
    ?.split(",")
    .map((item) => item.trim())
    .filter(Boolean) || [
    "VexnoraSoft",
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
      template: `%s | ${settings.companyName || "VexnoraSoft"}`,
    },
    description,
    keywords,
    applicationName: settings.companyName || "VexnoraSoft",
    authors: [{ name: "VexnoraSoft" }],
    creator: "VexnoraSoft",
    publisher: "VexnoraSoft",
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
      siteName: settings.companyName || "VexnoraSoft",
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
