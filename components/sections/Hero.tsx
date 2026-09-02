"use client";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Bot,
  Braces,
  CheckCircle2,
  Cloud,
  Database,
  Globe2,
  Layers3,
  LockKeyhole,
  Network,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import type { FeatureContent, HeroContent } from "@/types/site";

import WorldMapNetwork from "@/components/effects/WorldMapNetwork";

type Props = {
  hero: HeroContent;
  feature: FeatureContent;
};

const technologyNodes = [
  {
    icon: Bot,
    label: "AI",
  },
  {
    icon: Cloud,
    label: "Cloud",
  },
  {
    icon: Database,
    label: "Data",
  },
  {
    icon: Braces,
    label: "API",
  },
];

export default function Hero({ hero, feature }: Props) {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#020617]">
      <WorldMapNetwork />

      {/* Ambient lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[8%] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute right-[-8%] top-[18%] h-[520px] w-[520px] rounded-full bg-sky-500/10 blur-[140px]" />

        <div className="absolute bottom-[-20%] left-[36%] h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[140px]" />

        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.08),transparent_65%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 pb-32 pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-40 lg:pt-24">
        {/* LEFT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="relative"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-300/15 bg-white/[0.045] px-4 py-2 text-sm text-slate-300 shadow-xl shadow-blue-500/5 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-sky-300" />

            {hero.badge}
          </div>

          <h1 className="max-w-[820px] text-balance text-[3.3rem] font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.8rem] xl:text-[5.35rem]">
            <span className="block">{hero.title1}</span>

            <span className="mt-2 block bg-gradient-to-r from-blue-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              {hero.title2}
            </span>

            <span className="mt-2 block text-white/92">{hero.title3}</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:text-[1.12rem]">
            {hero.desc}
          </p>

          {/* Capability chips */}
          <div className="mt-8 flex max-w-2xl flex-wrap gap-2.5">
            {hero.chips.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + index * 0.08,
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-xl"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-sky-300" />

                {item}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-bold text-slate-950 shadow-2xl shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              {hero.primary}

              <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.04] px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
            >
              {hero.secondary}

              <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Engineering trust row */}
          <div className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-blue-300" />
              Secure
            </div>

            <div className="flex items-center gap-2">
              <Cloud className="h-4 w-4 text-blue-300" />
              Cloud Native
            </div>

            <div className="flex items-center gap-2">
              <Network className="h-4 w-4 text-blue-300" />
              API First
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
            x: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.85,
            delay: 0.08,
            ease: "easeOut",
          }}
          className="relative mx-auto hidden w-full max-w-[600px] lg:block"
        >
          {/* Behind glow */}
          <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[110px]" />

          {/* Floating node - AI */}
          <motion.div
            animate={{
              y: [0, -9, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-10 top-16 z-30 rounded-2xl border border-white/10 bg-[#07101f]/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                <Bot className="h-5 w-5" />
              </div>

              <div>
                <div className="text-xs text-slate-500">Intelligent Layer</div>

                <div className="text-sm font-semibold text-white">
                  AI & Automation
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating node - Security */}
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 5.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-8 top-40 z-30 rounded-2xl border border-white/10 bg-[#07101f]/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300">
                <LockKeyhole className="h-5 w-5" />
              </div>

              <div>
                <div className="text-xs text-slate-500">Security Layer</div>

                <div className="text-sm font-semibold text-white">
                  Secure by Design
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main architecture card */}
          <div className="relative z-20 rotate-[1.5deg] rounded-[2rem] border border-white/10 bg-white/[0.055] p-3 shadow-[0_45px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
            <div className="-rotate-[1.5deg] rounded-[1.65rem] border border-white/10 bg-[#030817]/95 p-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                    <ServerCog className="h-4 w-4" />

                    {feature.eyebrow}
                  </div>

                  <h2 className="mt-3 max-w-[360px] text-2xl font-semibold leading-tight text-white">
                    {feature.title}
                  </h2>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                  </span>

                  {feature.live}
                </div>
              </div>

              {/* Core platform */}
              <div className="relative mt-8">
                <div className="absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10" />

                <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />

                <div className="relative mx-auto flex h-[132px] w-[132px] flex-col items-center justify-center rounded-[2rem] border border-blue-300/20 bg-gradient-to-br from-blue-500/15 to-indigo-500/10 shadow-2xl shadow-blue-500/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-300">
                    <Layers3 className="h-6 w-6" />
                  </div>

                  <div className="mt-3 text-sm font-bold text-white">
                    VexnoraSoft
                  </div>

                  <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    Core Platform
                  </div>
                </div>

                {/* Technical nodes */}
                <div className="mt-8 grid grid-cols-4 gap-3">
                  {technologyNodes.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.label}
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.3 + index * 0.08,
                        }}
                        className="rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-center"
                      >
                        <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                          <Icon className="h-4 w-4" />
                        </div>

                        <div className="mt-2 text-xs font-semibold text-slate-300">
                          {item.label}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Process */}
              <div className="mt-6 space-y-3">
                {feature.items.slice(0, 3).map((item, index) => (
                  <motion.div
                    key={item[0]}
                    initial={{
                      opacity: 0,
                      x: 18,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.45 + index * 0.1,
                    }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3.5 transition hover:border-blue-400/20 hover:bg-blue-500/[0.05]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-500/10 text-sm font-bold text-blue-300">
                      0{index + 1}
                    </div>

                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-white">
                        {item[0]}
                      </div>

                      <div className="mt-1 truncate text-xs text-slate-500">
                        {item[1]}
                      </div>
                    </div>

                    <Workflow className="ml-auto h-4 w-4 shrink-0 text-slate-600 transition group-hover:text-blue-300" />
                  </motion.div>
                ))}
              </div>

              {/* Bottom infrastructure row */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                <MiniStatus icon={Globe2} title="Web" subtitle="Experience" />

                <MiniStatus icon={Network} title="API" subtitle="Integration" />

                <MiniStatus icon={Cloud} title="Cloud" subtitle="Scale" />
              </div>
            </div>
          </div>

          {/* Bottom floating card */}
          <motion.div
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-8 left-10 z-30 flex items-center gap-4 rounded-2xl border border-white/10 bg-[#07101f]/95 px-5 py-4 shadow-2xl shadow-black/50 backdrop-blur-xl"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-300">
              <Network className="h-5 w-5" />
            </div>

            <div>
              <div className="text-xs text-slate-500">Architecture</div>

              <div className="text-sm font-semibold text-white">
                Connected Digital Ecosystem
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* MOBILE VISUAL */}
        <div className="relative mx-auto w-full max-w-xl lg:hidden">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-3 backdrop-blur-xl">
            <div className="rounded-[1.55rem] border border-white/10 bg-[#030817]/90 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                    {feature.eyebrow}
                  </div>

                  <div className="mt-2 text-xl font-semibold text-white">
                    {feature.title}
                  </div>
                </div>

                <div className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  {feature.live}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {technologyNodes.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-sm font-semibold text-white">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ANGLED TRANSITION */}
      <div className="pointer-events-none absolute bottom-[-1px] left-0 right-0 z-20 h-24 overflow-hidden">
        <div className="absolute -bottom-16 -left-[5%] h-28 w-[110%] -rotate-[2deg] border-t border-white/[0.06] bg-[#030817]" />
      </div>
    </section>
  );
}

function MiniStatus({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: typeof Cloud;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-3 text-center">
      <Icon className="mx-auto h-4 w-4 text-blue-300" />

      <div className="mt-2 text-xs font-semibold text-white">{title}</div>

      <div className="mt-1 text-[10px] text-slate-600">{subtitle}</div>
    </div>
  );
}
