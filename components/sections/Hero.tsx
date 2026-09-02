"use client";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
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
} from "lucide-react";

import type { FeatureContent, HeroContent, Lang } from "@/types/site";

import WorldMapNetwork from "@/components/effects/WorldMapNetwork";

type Props = {
  hero: HeroContent;
  feature: FeatureContent;
  locale?: Lang;
};

const technologyNodes = [
  {
    icon: Bot,
    label: "AI",
    detail: "Automation",
  },
  {
    icon: Cloud,
    label: "Cloud",
    detail: "Infrastructure",
  },
  {
    icon: Database,
    label: "Data",
    detail: "Systems",
  },
  {
    icon: Braces,
    label: "API",
    detail: "Integration",
  },
];

export default function Hero({ hero, feature, locale = "de" }: Props) {
  const isBangla = locale === "bn";

  return (
    <section className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-[#020617]">
      {/* World background */}
      <div className="absolute inset-0 opacity-55">
        <WorldMapNetwork />
      </div>

      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/85 to-[#020617]/30" />

        <div className="absolute left-[-10%] top-[3%] h-[600px] w-[600px] rounded-full bg-blue-600/[0.12] blur-[180px]" />

        <div className="absolute right-[-10%] top-[8%] h-[720px] w-[720px] rounded-full bg-sky-500/[0.09] blur-[200px]" />

        <div className="absolute bottom-[-28%] left-[30%] h-[700px] w-[700px] rounded-full bg-indigo-600/[0.08] blur-[190px]" />

        <div className="absolute inset-0 opacity-[0.022] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-76px)] max-w-[1480px] items-center gap-12 px-6 pb-28 pt-16 lg:grid-cols-[0.94fr_1.06fr] lg:px-10 lg:pb-36 lg:pt-20 xl:gap-16">
        {/* LEFT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 26,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="relative z-20"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-sky-300">
              <Sparkles className="h-4 w-4" />
              {hero.badge}
            </div>

            <div className="hidden h-px w-16 bg-gradient-to-r from-white/20 to-transparent sm:block" />
          </div>

          {/* Main title */}
          <h1
            className={`mt-8 max-w-[900px] font-semibold text-white ${
              isBangla
                ? "text-[3.2rem] leading-[1.04] tracking-[-0.015em] sm:text-[3.9rem] lg:text-[4.35rem] xl:text-[4.75rem]"
                : "text-[3.6rem] leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-[4.9rem] xl:text-[5.55rem]"
            }`}
          >
            <span className="block">{hero.title1}</span>

            <span className="mt-2 block bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              {hero.title2}
            </span>

            <span className="mt-2 block text-white/90">{hero.title3}</span>
          </h1>

          {/* Description */}
          <p
            className={`mt-8 max-w-2xl text-slate-400 ${
              isBangla
                ? "text-[1rem] leading-8 sm:text-[1.06rem] sm:leading-9"
                : "text-base leading-8 sm:text-lg"
            }`}
          >
            {hero.desc}
          </p>

          {/* Capabilities */}
          <div className="mt-9 max-w-2xl border-y border-white/[0.07] py-5">
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {hero.chips.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.2 + index * 0.07,
                  }}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <span className="text-[10px] font-semibold text-sky-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-white"
            >
              {hero.primary}

              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-950 shadow-xl shadow-blue-500/10 transition duration-300 group-hover:scale-105 group-hover:bg-blue-50">
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center text-sm font-semibold text-slate-500 transition hover:text-white"
            >
              {hero.secondary}
            </a>
          </div>

          {/* Trust */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-[10px] font-semibold uppercase tracking-[0.19em] text-slate-600">
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

        {/* RIGHT */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
            x: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.08,
            ease: "easeOut",
          }}
          className="relative mx-auto hidden h-[700px] w-full max-w-[700px] lg:block"
        >
          {/* Visual glow */}
          <div className="absolute left-1/2 top-[47%] h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.09] blur-[140px]" />

          {/* Orbit rings */}
          <div className="absolute left-1/2 top-[45%] h-[590px] w-[590px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />

          <div className="absolute left-1/2 top-[45%] h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/[0.09]" />

          <div className="absolute left-1/2 top-[45%] h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/[0.08]" />

          {/* Axis lines */}
          <div className="absolute left-1/2 top-[7%] h-[76%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.12] to-transparent" />

          <div className="absolute left-[8%] top-[45%] h-px w-[84%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

          {/* Status header */}
          <div className="absolute left-1/2 top-[3%] z-30 -translate-x-1/2">
            <div className="flex items-center gap-4 rounded-full border border-white/[0.1] bg-[#07101f]/90 px-5 py-2.5 shadow-xl shadow-black/20 backdrop-blur-xl">
              <ServerCog className="h-4 w-4 text-blue-300" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                {feature.eyebrow}
              </span>

              <span className="h-4 w-px bg-white/10" />

              <span className="flex items-center gap-2 text-[10px] font-medium text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-50" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                </span>

                {feature.live}
              </span>
            </div>
          </div>

          {/* Center core */}
          <div className="absolute left-1/2 top-[45%] z-30 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 rgba(59,130,246,0)",
                  "0 0 90px rgba(59,130,246,0.18)",
                  "0 0 0 rgba(59,130,246,0)",
                ],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
              }}
              className="relative flex h-[210px] w-[210px] flex-col items-center justify-center rounded-[3.2rem] border border-blue-300/25 bg-[#07101f]/95 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            >
              <div className="absolute inset-3 rounded-[2.6rem] border border-white/[0.04]" />

              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/12 text-blue-300">
                <Layers3 className="h-8 w-8" />
              </div>

              <div className="relative mt-5 text-xl font-semibold text-white">
                VexnoraSoft
              </div>

              <div className="relative mt-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-600">
                Engineering Core
              </div>
            </motion.div>
          </div>

          {/* Technology nodes */}
          <TechnologyNode
            icon={Bot}
            title="AI"
            subtitle="Automation"
            className="left-[1%] top-[28%]"
            delay={0}
          />

          <TechnologyNode
            icon={Cloud}
            title="Cloud"
            subtitle="Infrastructure"
            className="right-[1%] top-[29%]"
            delay={0.25}
          />

          <TechnologyNode
            icon={Database}
            title="Data"
            subtitle="Systems"
            className="left-[4%] bottom-[24%]"
            delay={0.5}
          />

          <TechnologyNode
            icon={Braces}
            title="API"
            subtitle="Integration"
            className="right-[3%] bottom-[24%]"
            delay={0.75}
          />

          {/* Floating AI card */}
          <motion.div
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[15%] top-[13%] z-40"
          >
            <div className="rounded-2xl border border-violet-300/10 bg-[#07101f]/95 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                  <Bot className="h-4 w-4" />
                </div>

                <div>
                  <div className="text-[9px] text-slate-600">
                    Intelligent Layer
                  </div>

                  <div className="mt-1 text-xs font-semibold text-white">
                    AI & Automation
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating security card */}
          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 6.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[10%] top-[15%] z-40"
          >
            <div className="rounded-2xl border border-emerald-300/10 bg-[#07101f]/95 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300">
                  <LockKeyhole className="h-4 w-4" />
                </div>

                <div>
                  <div className="text-[9px] text-slate-600">
                    Security Layer
                  </div>

                  <div className="mt-1 text-xs font-semibold text-white">
                    Secure by Design
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Architecture footer */}
          <div className="absolute bottom-[1%] left-1/2 z-30 w-[92%] -translate-x-1/2 border-t border-white/[0.08] pt-5">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.25em] text-blue-300">
                  Platform Architecture
                </div>

                <div className="mt-2 max-w-[420px] text-xl font-semibold tracking-[-0.03em] text-white">
                  {feature.title}
                </div>
              </div>

              <Globe2 className="mt-1 h-5 w-5 text-slate-700" />
            </div>

            <div className="mt-5 grid grid-cols-3 gap-5">
              {feature.items.slice(0, 3).map((item, index) => (
                <div
                  key={item[0]}
                  className="border-t border-white/[0.07] pt-3"
                >
                  <div className="text-[9px] font-semibold text-blue-300">
                    0{index + 1}
                  </div>

                  <div className="mt-2 text-xs font-semibold text-white">
                    {item[0]}
                  </div>

                  <div className="mt-1 line-clamp-2 text-[10px] leading-5 text-slate-600">
                    {item[1]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* MOBILE ARCHITECTURE */}
        <div className="relative mx-auto w-full max-w-xl lg:hidden">
          <div className="border-y border-white/[0.07] py-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-300">
                  {feature.eyebrow}
                </div>

                <div className="mt-2 text-xl font-semibold text-white">
                  {feature.title}
                </div>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                {feature.live}
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-6">
              {technologyNodes.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="border-t border-white/[0.07] pt-4"
                  >
                    <Icon className="h-4 w-4 text-blue-300" />

                    <div className="mt-3 text-sm font-semibold text-white">
                      {item.label}
                    </div>

                    <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-600">
                      {item.detail}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="pointer-events-none absolute bottom-[-1px] left-0 right-0 z-20 h-24 overflow-hidden">
        <div className="absolute -bottom-16 -left-[5%] h-28 w-[110%] -rotate-[2deg] border-t border-white/[0.06] bg-[#030817]" />
      </div>
    </section>
  );
}

function TechnologyNode({
  icon: Icon,
  title,
  subtitle,
  className,
  delay,
}: {
  icon: typeof Cloud;
  title: string;
  subtitle: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 5.5 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`absolute z-30 ${className}`}
    >
      <div className="min-w-[150px] border-t border-white/[0.1] pt-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-[#07101f]/95 text-blue-300 shadow-xl shadow-black/20 backdrop-blur-xl">
            <Icon className="h-4 w-4" />
          </div>

          <div>
            <div className="text-sm font-semibold text-white">{title}</div>

            <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.17em] text-slate-600">
              {subtitle}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
