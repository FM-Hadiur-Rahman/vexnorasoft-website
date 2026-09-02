"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  ChevronDown,
  Globe2,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";

import type { Lang, NavContent } from "@/types/site";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

type Props = {
  lang: Lang;
  nav: NavContent;
};

type SiteSettings = {
  companyName?: string;
  tagline?: string;
  logoUrl?: string;
};

const languageLabels: Record<Lang, string> = {
  de: "Deutsch",
  en: "English",
  bn: "বাংলা",
};

const languageShort: Record<Lang, string> = {
  de: "DE",
  en: "EN",
  bn: "বাংলা",
};

export default function Navbar({ lang, nav }: Props) {
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [settings, setSettings] = useState<SiteSettings>({
    companyName: "VexnoraSoft",
    tagline: "Enterprise Software Engineering",
    logoUrl: "/logo.png",
  });

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const res = await fetch(`${API_URL}/api/site-settings`);

        if (!res.ok) {
          return;
        }

        const data = await res.json();

        setSettings((prev) => ({
          ...prev,
          ...data,
        }));
      } catch (error) {
        console.error("Failed to load site settings", error);
      }
    };

    loadSettings();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      href: "#services",
      label: nav.services,
    },
    {
      href: "#work",
      label: nav.work,
    },
    {
      href: "#pricing",
      label: nav.pricing,
    },
    {
      href: "#testimonials",
      label: nav.testimonials,
    },
    {
      href: "#contact",
      label: nav.contact,
    },
  ];

  const closeMenus = () => {
    setOpen(false);
    setLanguageOpen(false);
  };

  const isBangla = lang === "bn";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-[#020617]/92 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
          : "border-b border-white/[0.05] bg-[#020617]/78 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1480px] items-center justify-between gap-6 px-5 sm:px-6 lg:px-10">
        {/* BRAND */}
        <Link
          href={`/${lang}`}
          onClick={closeMenus}
          className="group flex min-w-0 shrink-0 items-center gap-3"
        >
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border border-white/[0.08] bg-white p-1 shadow-[0_10px_35px_rgba(0,0,0,0.25)] transition duration-300 group-hover:-translate-y-0.5">
            {settings.logoUrl ? (
              <Image
                src={settings.logoUrl}
                alt={settings.companyName || "VexnoraSoft"}
                fill
                sizes="44px"
                className="object-contain p-1"
                priority
              />
            ) : (
              <span className="text-xs font-bold text-slate-950">VS</span>
            )}
          </div>

          <div className="min-w-0">
            <div className="truncate text-[17px] font-semibold tracking-[-0.025em] text-white">
              {settings.companyName || "VexnoraSoft"}
            </div>

            <div className="mt-0.5 hidden max-w-[250px] truncate text-[8px] font-semibold uppercase tracking-[0.27em] text-blue-300/80 sm:block xl:max-w-[310px]">
              {settings.tagline || "Enterprise Software Engineering"}
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className={`hidden items-center xl:flex ${
            isBangla ? "gap-4" : "gap-6"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative whitespace-nowrap font-medium text-slate-400 transition duration-300 hover:text-white ${
                isBangla ? "text-[13px]" : "text-sm"
              }`}
            >
              {link.label}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-blue-300 to-sky-300 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* RIGHT DESKTOP */}
        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          {/* Enterprise status */}
          <div className="hidden items-center gap-2 border-l border-white/[0.08] pl-4 2xl:flex">
            <ShieldCheck className="h-4 w-4 text-blue-300" />

            <div>
              <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                Capability
              </div>

              <div className="mt-0.5 text-[11px] font-semibold text-slate-300">
                Enterprise Ready
              </div>
            </div>
          </div>

          {/* Language */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLanguageOpen((prev) => !prev)}
              aria-expanded={languageOpen}
              aria-label="Change language"
              className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 text-sm text-slate-300 transition hover:border-white/[0.14] hover:bg-white/[0.05] hover:text-white"
            >
              <Globe2 className="h-4 w-4 text-blue-300" />

              <span>{languageShort[lang]}</span>

              <ChevronDown
                className={`h-3.5 w-3.5 text-slate-600 transition duration-300 ${
                  languageOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {languageOpen && (
              <div className="absolute right-0 top-[calc(100%+12px)] w-[190px] overflow-hidden rounded-2xl border border-white/[0.09] bg-[#07101f]/98 p-2 shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
                <div className="px-3 pb-2 pt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                  Language
                </div>

                {(["de", "en", "bn"] as Lang[]).map((locale) => (
                  <Link
                    key={locale}
                    href={`/${locale}`}
                    onClick={() => setLanguageOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition ${
                      locale === lang
                        ? "bg-blue-500/[0.11] text-blue-300"
                        : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    <span>{languageLabels[locale]}</span>

                    {locale === lang && (
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="group inline-flex h-11 items-center gap-3 rounded-full bg-white pl-5 pr-3 text-sm font-bold text-slate-950 shadow-[0_10px_30px_rgba(59,130,246,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
          >
            <span>{nav.cta}</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 text-white">
              <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>

        {/* TABLET / MOBILE RIGHT */}
        <div className="flex items-center gap-2 xl:hidden">
          <Link
            href={`/${lang}`}
            className="hidden h-10 items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 text-xs text-slate-300 sm:inline-flex"
          >
            <Globe2 className="h-3.5 w-3.5 text-blue-300" />
            {languageShort[lang]}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white transition hover:bg-white/[0.06]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-white/[0.07] bg-[#020617]/98 backdrop-blur-2xl xl:hidden">
          <div className="mx-auto max-w-[1480px] px-5 py-6 sm:px-6">
            {/* Nav links */}
            <div className="border-b border-white/[0.07] pb-5">
              <div className="mb-4 text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                Navigation
              </div>

              <div className="space-y-1">
                {links.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between border-b border-white/[0.05] py-4 text-base font-medium text-slate-300 transition hover:text-white"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] text-blue-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>{link.label}</span>
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-slate-700 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Language */}
            <div className="border-b border-white/[0.07] py-5">
              <div className="mb-4 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                <Globe2 className="h-3.5 w-3.5" />
                Language
              </div>

              <div className="grid grid-cols-3 gap-2">
                {(["de", "en", "bn"] as Lang[]).map((locale) => (
                  <Link
                    key={locale}
                    href={`/${locale}`}
                    onClick={closeMenus}
                    className={`flex min-h-11 items-center justify-center rounded-xl border px-3 text-sm font-semibold transition ${
                      locale === lang
                        ? "border-blue-300/20 bg-blue-500/[0.1] text-blue-300"
                        : "border-white/[0.07] bg-white/[0.02] text-slate-400 hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    {languageShort[locale]}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile bottom */}
            <div className="pt-5">
              <div className="mb-5 flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-blue-300" />

                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                    VexnoraSoft
                  </div>

                  <div className="mt-1 text-sm font-semibold text-slate-300">
                    Enterprise & Public Sector Ready
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="group flex w-full items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm font-bold text-slate-950"
              >
                {nav.cta}

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
