"use client";

import { useState } from "react";
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
import TeamSection from "@/components/sections/TeamSection";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import CookieConsent from "@/components/common/CookieConsent";

export default function BackpunktWebsite() {
  const [lang, setLang] = useState<Lang>("de");
  const content = siteContent[lang];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <SiteBackground />

      <Navbar lang={lang} setLang={setLang} nav={content.nav} />

      <main className="relative z-10">
        <Hero hero={content.hero} feature={content.feature} />

        <SectionBlock>
          <EnterpriseCapabilities />
        </SectionBlock>

        <SectionBlock compact>
          <TrustedBy />
        </SectionBlock>

        <SectionBlock>
          <Work />
        </SectionBlock>

        <SectionBlock angled>
          <Services trust={content.trust} services={content.services} />
        </SectionBlock>

        <SectionBlock>
          <WhyChooseUs about={content.about} banner={content.banner} />
        </SectionBlock>

        <SectionBlock compact>
          <TeamSection team={content.team} />
        </SectionBlock>

        <SectionBlock compact>
          <Testimonials testimonials={content.testimonials} />
        </SectionBlock>

        <SectionBlock compact>
          <Pricing productKey="backpunkt" />
        </SectionBlock>

        <ContactSection contact={content.contact} />
      </main>

      <Footer footer={content.footer} />
      <CookieConsent />
    </div>
  );
}

function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#020617]" />

      <div className="absolute left-[-14%] top-[-16%] h-[520px] w-[520px] rounded-full bg-blue-600/12 blur-3xl" />
      <div className="absolute right-[-12%] top-[6%] h-[620px] w-[620px] rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute bottom-[-20%] left-[18%] h-[560px] w-[560px] rounded-full bg-indigo-700/12 blur-3xl" />

      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.10),transparent_35%),linear-gradient(to_bottom,transparent,rgba(2,6,23,0.92))]" />
    </div>
  );
}

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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />

      {angled && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 -skew-y-2 bg-white/[0.015]" />
      )}

      {children}
    </section>
  );
}
