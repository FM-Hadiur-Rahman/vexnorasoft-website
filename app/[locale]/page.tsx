import { notFound } from "next/navigation";
import VexnoraSoftWebsite from "@/components/VexnoraSoftWebsite";
import type { Lang } from "@/types/site";

const locales: Lang[] = ["de", "en", "bn"];

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Lang)) {
    notFound();
  }

  return <VexnoraSoftWebsite locale={locale as Lang} />;
}
