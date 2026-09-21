"use client";

import type { ReactNode } from "react";

import type { Lang } from "@/types/site";
import { siteContent } from "@/data/siteContent";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import EnterpriseCapabilities from "@/components/sections/EnterpriseCapabilities";
import TrustedBy from "@/components/sections/TrustedBy";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import MissionVision from "@/components/sections/MissionVision";
import TeamSection from "@/components/sections/TeamSection";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

import CookieConsent from "@/components/common/CookieConsent";

type Props = {
  locale: Lang;
};

export default function VexnoraSoftWebsite({ locale }: Props) {
  const content = siteContent[locale];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* =========================================================
          GLOBAL BACKGROUND
      ========================================================= */}
      <SiteBackground />

      {/* =========================================================
          NAVIGATION
      ========================================================= */}
      <Navbar lang={locale} nav={content.nav} />

      {/* =========================================================
          MAIN WEBSITE
      ========================================================= */}
      <main className="relative z-10">
        {/* ---------------------------------------------------------
            01. HERO
        --------------------------------------------------------- */}
        <Hero hero={content.hero} feature={content.feature} />

        {/* ---------------------------------------------------------
            02. ENTERPRISE CAPABILITIES
        --------------------------------------------------------- */}
        <SectionBlock>
          <EnterpriseCapabilities />
        </SectionBlock>

        {/* ---------------------------------------------------------
            03. TRUSTED CLIENTS / PARTNERS
        --------------------------------------------------------- */}
        <SectionBlock compact>
          <TrustedBy />
        </SectionBlock>

        {/* ---------------------------------------------------------
            04. SELECTED WORK
        --------------------------------------------------------- */}
        <SectionBlock>
          <Work />
        </SectionBlock>

        {/* ---------------------------------------------------------
            05. SERVICES
        --------------------------------------------------------- */}
        <SectionBlock angled>
          <Services trust={content.trust} services={content.services} />
        </SectionBlock>

        {/* ---------------------------------------------------------
            06. WHY VEXNORASOFT
        --------------------------------------------------------- */}
        <SectionBlock>
          <WhyChooseUs about={content.about} banner={content.banner} />
        </SectionBlock>

        {/* ---------------------------------------------------------
            07. MISSION & VISION
        --------------------------------------------------------- */}
        <SectionBlock>
          <MissionVision content={content.missionVision} />
        </SectionBlock>

        {/* ---------------------------------------------------------
            08. TEAM
        --------------------------------------------------------- */}
        <SectionBlock compact>
          <TeamSection team={content.team} />
        </SectionBlock>

        {/* ---------------------------------------------------------
            09. HOW WE WORK
        --------------------------------------------------------- */}
        <SectionBlock compact>
          <Testimonials testimonials={content.testimonials} />
        </SectionBlock>

        {/* ---------------------------------------------------------
            10. ENGAGEMENT MODELS
        --------------------------------------------------------- */}
        <SectionBlock compact>
          <Pricing productKey="vexnorasoft" />
        </SectionBlock>

        {/* ---------------------------------------------------------
            11. CONTACT
        --------------------------------------------------------- */}
        <ContactSection contact={content.contact} />
      </main>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Footer footer={content.footer} />

      {/* =========================================================
          COOKIE CONSENT
      ========================================================= */}
      <CookieConsent />
    </div>
  );
}

/* ===============================================================
   GLOBAL SITE BACKGROUND
================================================================ */

function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[#020617]" />

      {/* Ambient light — left */}
      <div className="absolute left-[-14%] top-[-16%] h-[520px] w-[520px] rounded-full bg-blue-600/12 blur-3xl" />

      {/* Ambient light — right */}
      <div className="absolute right-[-12%] top-[6%] h-[620px] w-[620px] rounded-full bg-sky-500/10 blur-3xl" />

      {/* Ambient light — bottom */}
      <div className="absolute bottom-[-20%] left-[18%] h-[560px] w-[560px] rounded-full bg-indigo-700/12 blur-3xl" />

      {/* Engineering grid */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:56px_56px]" />

      {/* Global vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.10),transparent_35%),linear-gradient(to_bottom,transparent,rgba(2,6,23,0.92))]" />
    </div>
  );
}

/* ===============================================================
   SHARED SECTION WRAPPER
================================================================ */

function SectionBlock({
  children,
  compact = false,
  angled = false,
}: {
  children: ReactNode;
  compact?: boolean;
  angled?: boolean;
}) {
  return (
    <section
      className={`relative border-t border-white/5 ${
        compact ? "py-4" : "py-0"
      }`}
    >
      {/* Subtle divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />

      {/* Optional visual transition */}
      {angled && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 -skew-y-2 bg-white/[0.015]" />
      )}

      {children}
    </section>
  );
}
