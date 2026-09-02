"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

import type { SiteContent } from "@/types/site";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

type Props = {
  footer: SiteContent["footer"];
};

type SiteSettings = {
  companyName?: string;
  email?: string;
  phone?: string;
  address?: string;
  website?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
};

export default function Footer({ footer }: Props) {
  const [settings, setSettings] = useState<SiteSettings>({});

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const res = await fetch(`${API_URL}/api/site-settings`);

        if (!res.ok) {
          return;
        }

        const data = await res.json();

        setSettings(data);
      } catch (error) {
        console.error("Failed to load footer settings", error);
      }
    };

    loadSettings();
  }, []);

  const companyName = settings.companyName || "VexnoraSoft";

  const socialLinks = [
    {
      label: "LinkedIn",
      href: settings.linkedin,
      icon: Linkedin,
    },
    {
      label: "Facebook",
      href: settings.facebook,
      icon: Facebook,
    },
    {
      label: "Instagram",
      href: settings.instagram,
      icon: Instagram,
    },
    {
      label: "YouTube",
      href: settings.youtube,
      icon: Youtube,
    },
  ].filter(
    (
      item,
    ): item is {
      label: string;
      href: string;
      icon: typeof Linkedin;
    } => Boolean(item.href),
  );

  return (
    <footer className="relative overflow-hidden bg-[#01040b]">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-35%] left-[4%] h-[650px] w-[650px] rounded-full bg-blue-600/[0.08] blur-[180px]" />

        <div className="absolute right-[-15%] top-[5%] h-[520px] w-[520px] rounded-full bg-indigo-600/[0.07] blur-[160px]" />

        <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-8 pt-20 lg:px-10 lg:pt-28">
        {/* Top statement */}
        <div className="grid gap-12 border-b border-white/[0.07] pb-16 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-300">
              VexnoraSoft
            </div>

            <div className="mt-6 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Engineering digital systems
              <span className="block text-white/30">
                built to operate in the real world.
              </span>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              {footer.left ||
                "Modern software, SaaS, AI and digital infrastructure for ambitious businesses."}
            </p>
          </div>

          <a
            href="#contact"
            className="group flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white text-center text-sm font-bold text-slate-950 transition duration-300 hover:scale-105 hover:bg-blue-50 lg:h-36 lg:w-36"
          >
            <span>
              Start
              <br />
              Project
            </span>

            <ArrowUpRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Main footer grid */}
        <div className="grid gap-12 border-b border-white/[0.07] py-14 md:grid-cols-2 lg:grid-cols-[1.15fr_0.7fr_0.7fr_0.75fr]">
          {/* Brand */}
          <div>
            <div className="text-2xl font-semibold tracking-[-0.035em] text-white">
              {companyName}
            </div>

            <div className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
              Designed in Germany. Built for global digital business.
            </div>

            {socialLinks.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-slate-500 transition duration-300 hover:-translate-y-1 hover:border-blue-300/25 hover:bg-blue-500/[0.08] hover:text-blue-300"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Explore */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-600">
              Explore
            </div>

            <nav className="mt-6 flex flex-col items-start gap-4">
              {[
                ["Services", "#services"],
                ["Work", "#work"],
                ["Team", "#team"],
                ["How We Work", "#testimonials"],
                ["Engagement", "#pricing"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                >
                  {label}

                  <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-600">
              Contact
            </div>

            <div className="mt-6 space-y-5">
              {settings.email && (
                <a
                  href={`mailto:${settings.email}`}
                  className="group flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />

                  <span className="break-all">{settings.email}</span>
                </a>
              )}

              {settings.phone && (
                <a
                  href={`tel:${settings.phone}`}
                  className="group flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />

                  <span>{settings.phone}</span>
                </a>
              )}

              {settings.address && (
                <div className="flex items-start gap-3 text-sm leading-6 text-slate-400">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />

                  <span>{settings.address}</span>
                </div>
              )}
            </div>
          </div>

          {/* Legal */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-600">
              Legal
            </div>

            <div className="mt-6 flex flex-col items-start gap-4">
              <a
                href="/impressum"
                className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
              >
                Impressum
                <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a
                href="/datenschutz"
                className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
              >
                Datenschutz
                <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              {settings.website && (
                <a
                  href={settings.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                >
                  Website
                  <ArrowUpRight className="h-3 w-3 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="overflow-hidden border-b border-white/[0.07] py-10 sm:py-14">
          <div className="select-none whitespace-nowrap text-[16vw] font-semibold leading-[0.75] tracking-[-0.085em] text-white/[0.035] lg:text-[13rem]">
            VEXNORASOFT
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 pt-8 text-xs text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footer.right && <span>{footer.right}</span>}

            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Digital systems / Germany
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
