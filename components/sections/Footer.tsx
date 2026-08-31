"use client";

import { useEffect, useState } from "react";
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
        const data = await res.json();

        if (res.ok) {
          setSettings(data);
        }
      } catch (error) {
        console.error("Failed to load footer settings", error);
      }
    };

    loadSettings();
  }, []);

  const socialLinks = [
    { label: "Facebook", href: settings.facebook },
    { label: "Instagram", href: settings.instagram },
    { label: "LinkedIn", href: settings.linkedin },
    { label: "YouTube", href: settings.youtube },
  ].filter((item) => item.href);

  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 text-sm text-white/55 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">
            Backpunkt IT
          </div>
          <div className="mt-3 text-lg font-semibold text-white">
            {settings.companyName || "Backpunkt IT Solutions"}
          </div>
          <p className="mt-3 max-w-md leading-7">
            {footer.left ||
              "Modern SaaS & IT solutions for growing businesses."}
          </p>
        </div>

        <div>
          <div className="font-medium text-white">Kontakt</div>
          <div className="mt-3 space-y-2">
            {settings.email && (
              <a
                href={`mailto:${settings.email}`}
                className="block transition hover:text-white"
              >
                {settings.email}
              </a>
            )}

            {settings.phone && (
              <a
                href={`tel:${settings.phone}`}
                className="block transition hover:text-white"
              >
                {settings.phone}
              </a>
            )}

            {settings.address && <div>{settings.address}</div>}

            {settings.website && (
              <a
                href={settings.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-white"
              >
                {settings.website}
              </a>
            )}
          </div>
        </div>

        <div className="md:text-right">
          <div className="font-medium text-white">Rechtliches</div>

          <div className="mt-3 flex flex-col gap-2 md:items-end">
            <a href="/impressum" className="transition hover:text-white">
              Impressum
            </a>
            <a href="/datenschutz" className="transition hover:text-white">
              Datenschutz
            </a>
          </div>

          {socialLinks.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-3 md:justify-end">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
        <div>
          © {new Date().getFullYear()}{" "}
          {settings.companyName || "Backpunkt IT Solutions"}. All rights
          reserved.
        </div>
        <div>{footer.right}</div>
      </div>
    </footer>
  );
}
