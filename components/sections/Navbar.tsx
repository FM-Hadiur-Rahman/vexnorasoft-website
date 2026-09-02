"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Globe,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";
import type { Lang, NavContent } from "@/types/site";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

type Props = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  nav: NavContent;
};

type SiteSettings = {
  companyName?: string;
  tagline?: string;
  logoUrl?: string;
};

export default function Navbar({ lang, setLang }: Props) {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<SiteSettings>({
    companyName: "VexnoraSoft",
    tagline: "Enterprise Software Engineering",
    logoUrl: "logo.png",
  });

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const res = await fetch(`${API_URL}/api/site-settings`);
        const data = await res.json();

        if (res.ok) setSettings((prev) => ({ ...prev, ...data }));
      } catch (error) {
        console.error("Failed to load site settings", error);
      }
    };

    loadSettings();
  }, []);

  const links = [
    { href: "#capabilities", label: "Capabilities" },
    { href: "#work", label: "Case Studies" },
    { href: "#services", label: "Solutions" },

    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/82 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-1.5 shadow-lg shadow-blue-500/10">
            {settings.logoUrl ? (
              <Image
                src={settings.logoUrl}
                alt={settings.companyName || "VexnoraSoft"}
                fill
                sizes="48px"
                className="object-contain p-1"
                priority
              />
            ) : (
              <span className="text-sm font-bold text-slate-950">BP</span>
            )}
          </div>

          <div className="min-w-0">
            <div className="truncate text-lg font-semibold leading-tight text-white">
              {settings.companyName || "VexnoraSoft"}
            </div>

            <div className="hidden max-w-[360px] truncate text-[11px] font-medium uppercase tracking-[0.22em] text-blue-300 sm:block">
              {settings.tagline || "Enterprise Software Engineering"}
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 text-sm text-slate-300 backdrop-blur-xl lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 transition hover:bg-blue-500/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/15 bg-blue-500/10 px-3 py-2 text-xs font-semibold text-blue-300">
            <ShieldCheck className="h-4 w-4" />
            Enterprise Ready
          </div>

          <button
            onClick={() => setLang(lang === "en" ? "de" : "en")}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80 transition hover:bg-white/[0.08]"
          >
            <Globe className="h-4 w-4" />
            {lang === "en" ? "DE" : "EN"}
          </button>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-blue-500/10 transition hover:bg-blue-50"
          >
            Start Project
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#020617]/96 px-4 py-4 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto max-w-7xl space-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-slate-300 transition hover:bg-blue-500/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <div className="grid grid-cols-2 gap-3 pt-3">
              <button
                onClick={() => setLang(lang === "en" ? "de" : "en")}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/80"
              >
                <Globe className="h-4 w-4" />
                {lang === "en" ? "DE" : "EN"}
              </button>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-950"
              >
                Start
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-3 flex items-center gap-2 rounded-2xl border border-blue-300/15 bg-blue-500/10 px-4 py-3 text-sm font-semibold text-blue-300">
              <Building2 className="h-4 w-4" />
              Enterprise & Public Sector Ready
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
