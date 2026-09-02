"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, CheckCircle2, CircleDot } from "lucide-react";

import type { SiteContent } from "@/types/site";

type Props = {
  testimonials: SiteContent["testimonials"];
};

export default function Testimonials({ testimonials }: Props) {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#030817] py-28 lg:py-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[8%] h-[520px] w-[520px] rounded-full bg-blue-600/[0.07] blur-[150px]" />

        <div className="absolute right-[-8%] bottom-[4%] h-[580px] w-[580px] rounded-full bg-indigo-500/[0.07] blur-[160px]" />

        <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Intro */}
        <div className="grid gap-12 border-b border-white/[0.07] pb-16 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-300">
              {testimonials.eyebrow}
            </div>

            <h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5rem]">
              {testimonials.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="lg:justify-self-end"
          >
            <p className="max-w-xl text-base leading-8 text-slate-400">
              From the first conversation to production and long-term operation,
              we work in clear technical stages with measurable outputs at every
              step.
            </p>
          </motion.div>
        </div>

        {/* Process */}
        <div className="relative mt-20">
          {/* Main vertical line */}
          <div className="absolute bottom-0 left-[27px] top-0 hidden w-px bg-gradient-to-b from-blue-300/40 via-white/10 to-transparent md:block lg:left-1/2" />

          <div className="space-y-10 lg:space-y-0">
            {testimonials.items.map((item, index) => {
              const reversed = index % 2 === 1;

              return (
                <motion.article
                  key={`${item.name}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 28,
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
                    delay: index * 0.06,
                  }}
                  className="relative lg:grid lg:min-h-[320px] lg:grid-cols-2"
                >
                  {/* Center marker */}
                  <div className="absolute left-0 top-0 z-20 hidden -translate-x-1/2 md:block lg:left-1/2 lg:top-16">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-300/20 bg-[#050b18] shadow-[0_0_50px_rgba(59,130,246,0.12)]">
                      <CircleDot className="h-5 w-5 text-blue-300" />
                    </div>
                  </div>

                  {/* Index */}
                  <div
                    className={`pointer-events-none absolute top-0 select-none text-[8rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.018] sm:text-[11rem] ${
                      reversed
                        ? "right-0 lg:left-[55%] lg:right-auto"
                        : "right-0 lg:right-[55%]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div
                    className={`relative border-b border-white/[0.07] py-10 lg:py-16 ${
                      reversed
                        ? "lg:col-start-2 lg:pl-20"
                        : "lg:col-start-1 lg:pr-20"
                    }`}
                  >
                    <div className="max-w-xl">
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-semibold text-blue-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="h-px w-10 bg-white/15" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                          Process
                        </span>
                      </div>

                      <h3 className="mt-6 text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-4xl">
                        {item.name}
                      </h3>

                      <p className="mt-5 text-base leading-8 text-slate-400">
                        {item.quote}
                      </p>

                      {item.role && (
                        <div className="mt-7 flex items-start gap-3 border-t border-white/[0.07] pt-6">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />

                          <div className="text-sm leading-6 text-slate-300">
                            {item.role}
                          </div>
                        </div>
                      )}

                      <div className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                        Next phase
                        <ArrowDownRight className="h-4 w-4 text-blue-300" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Process summary */}
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
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-24 border-y border-white/[0.07] py-8"
        >
          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["01", "Understand", "Business & requirements"],
              ["02", "Design", "Architecture & experience"],
              ["03", "Build", "Engineering & integration"],
              ["04", "Operate", "Deploy, support & improve"],
            ].map(([number, title, description], index) => (
              <div
                key={number}
                className={`relative py-2 md:px-6 ${
                  index !== 3 ? "md:border-r md:border-white/[0.07]" : ""
                } ${index === 0 ? "md:pl-0" : ""}`}
              >
                <div className="text-xs font-semibold text-blue-300">
                  {number}
                </div>

                <div className="mt-3 text-lg font-semibold text-white">
                  {title}
                </div>

                <div className="mt-2 text-sm leading-6 text-slate-500">
                  {description}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
