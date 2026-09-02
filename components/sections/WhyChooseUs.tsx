"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import type { SiteContent } from "@/types/site";

type Props = {
  about: SiteContent["about"];
  banner: SiteContent["banner"];
};

export default function WhyChooseUs({ about, banner }: Props) {
  return (
    <>
      <section
        id="about"
        className="relative overflow-hidden bg-[#020617] py-28 lg:py-40"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-[10%] h-[520px] w-[520px] rounded-full bg-blue-600/[0.08] blur-[150px]" />

          <div className="absolute right-[-8%] bottom-[8%] h-[560px] w-[560px] rounded-full bg-indigo-600/[0.07] blur-[160px]" />

          <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:56px_56px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10">
          {/* Header */}
          <div className="grid gap-14 border-b border-white/[0.07] pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <motion.div
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-blue-300">
                <Sparkles className="h-4 w-4" />
                {about.eyebrow}
              </div>

              <h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5rem]">
                {about.title}
              </h2>
            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.08,
              }}
              className="max-w-2xl text-base leading-8 text-slate-400 lg:justify-self-end"
            >
              {about.desc}
            </motion.p>
          </div>

          {/* Main principles */}
          <div className="mt-20 grid gap-16 lg:grid-cols-[0.82fr_1.18fr]">
            {/* Left manifesto */}
            <motion.div
              initial={{
                opacity: 0,
                x: -24,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.65,
              }}
              className="relative"
            >
              <div className="sticky top-32">
                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-gradient-to-br from-blue-500/[0.09] via-white/[0.025] to-indigo-500/[0.05] p-8 shadow-[0_40px_130px_rgba(0,0,0,0.45)] lg:p-10">
                  <div className="absolute right-[-18%] top-[-15%] h-72 w-72 rounded-full bg-blue-500/[0.08] blur-3xl" />

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-300/15 bg-blue-500/10 text-blue-300">
                      <ShieldCheck className="h-6 w-6" />
                    </div>

                    <div className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
                      VexnoraSoft Principle
                    </div>

                    <div className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl">
                      Technology should solve the operation — not create another
                      layer of complexity.
                    </div>

                    <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
                      We approach software as part of the business itself:
                      connected to people, processes, infrastructure,
                      integrations and long-term growth.
                    </p>

                    <div className="mt-8 border-t border-white/[0.08] pt-7">
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                        {[
                          "Built around real workflows",
                          "Designed for long-term operation",
                          "Architecture before shortcuts",
                          "Security from the beginning",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right principles list */}
            <div className="border-t border-white/[0.07]">
              {about.points.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="group relative border-b border-white/[0.07] py-9 sm:py-11"
                >
                  <div className="grid gap-5 sm:grid-cols-[90px_1fr_auto] sm:items-center">
                    <div className="text-xs font-semibold tracking-[0.2em] text-blue-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="max-w-2xl text-xl font-medium leading-8 tracking-[-0.02em] text-white sm:text-2xl">
                      {benefit}
                    </div>

                    <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] text-slate-600 transition duration-300 group-hover:border-blue-300/30 group-hover:bg-blue-500/10 group-hover:text-blue-300 sm:flex">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Banner / CTA */}
      <section className="relative overflow-hidden bg-[#030817] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative overflow-hidden border-y border-white/[0.08] py-16 lg:py-20"
          >
            <div className="pointer-events-none absolute right-[8%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[100px]" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-5xl">
                <div className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-300">
                  {banner.eyebrow}
                </div>

                <h3 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                  {banner.title}
                </h3>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
                  {banner.desc}
                </p>
              </div>

              <a
                href="#contact"
                className="group flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-white text-center text-sm font-bold text-slate-950 shadow-[0_25px_70px_rgba(255,255,255,0.08)] transition duration-300 hover:scale-105 hover:bg-blue-50 lg:h-40 lg:w-40"
              >
                <span className="max-w-[90px] leading-5">{banner.cta}</span>

                <ArrowUpRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
