"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Cloud,
  Database,
  Layers3,
  LockKeyhole,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { FeatureContent, HeroContent } from "@/types/site";
import WorldMapNetwork from "@/components/effects/WorldMapNetwork";

type Props = {
  hero: HeroContent;
  feature: FeatureContent;
};

const capabilities = [
  "Government Ready",
  "Enterprise Software",
  "AI & Automation",
  "Cloud Native",
  "GDPR Ready",
  "API First",
];

const ecosystem = [
  { icon: Bot, label: "AI Systems", value: "Automation" },
  { icon: Database, label: "Data Platforms", value: "Analytics" },
  { icon: Cloud, label: "Cloud Apps", value: "Scalable" },
  { icon: ShieldCheck, label: "Security", value: "GDPR" },
];

export default function Hero({ hero }: Props) {
  return (
    <section className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-[#020617]">
      <WorldMapNetwork />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-24 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:pb-28 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-300/15 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-blue-300" />
            {hero.badge}
          </div>

          <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl lg:text-[5rem]">
            Enterprise Software{" "}
            <span className="bg-gradient-to-r from-blue-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              für digitale Transformation.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Backpunkt IT Solutions entwickelt sichere Softwareplattformen,
            mobile Apps, KI-Systeme und digitale Infrastruktur für Unternehmen,
            öffentliche Auftraggeber und skalierbares Wachstum.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {capabilities.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-xl"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-bold text-slate-950 shadow-2xl shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Projekt starten
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>

            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.04] px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
            >
              Projekte ansehen
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />

          <div className="relative rounded-[2.2rem] border border-white/10 bg-white/[0.055] p-3 shadow-2xl shadow-black/50 backdrop-blur-2xl">
            <div className="rounded-[1.7rem] border border-white/10 bg-[#020617]/85 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-400">
                    Enterprise Control Center
                  </div>
                  <div className="mt-1 text-2xl font-semibold text-white">
                    Digital Operations Platform
                  </div>
                </div>

                <div className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                  Live
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {ecosystem.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
                      className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="mt-4 text-sm font-bold text-white">
                        {item.label}
                      </div>
                      <div className="mt-1 text-sm text-slate-400">
                        {item.value}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                      <Network className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        Multi-System Architecture
                      </div>
                      <div className="text-xs text-slate-500">
                        Web · Mobile · API · AI · Cloud
                      </div>
                    </div>
                  </div>

                  <LockKeyhole className="h-5 w-5 text-emerald-300" />
                </div>

                <div className="space-y-3">
                  {["Identity & Access", "Secure APIs", "Analytics Layer"].map(
                    (item, index) => (
                      <div key={item}>
                        <div className="mb-2 flex justify-between text-xs">
                          <span className="text-slate-400">{item}</span>
                          <span className="text-blue-300">
                            {92 + index * 2}%
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${92 + index * 2}%` }}
                            transition={{
                              duration: 1,
                              delay: 0.4 + index * 0.12,
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-blue-300 to-indigo-300"
                          />
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {["GDPR", "Cloud", "AI"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-center"
                  >
                    <Layers3 className="mx-auto h-5 w-5 text-blue-300" />
                    <div className="mt-2 text-sm font-bold text-white">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
