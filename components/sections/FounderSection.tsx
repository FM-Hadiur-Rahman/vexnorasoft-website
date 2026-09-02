"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Code2, Globe2, Sparkles } from "lucide-react";

type FounderSectionProps = {
  founder: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    description2: string;
    stats: { label: string; value: string }[];
    skills: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    image: string;
  };
};

export default function FounderSection({ founder }: FounderSectionProps) {
  return (
    <section
      id="company"
      className="relative overflow-hidden bg-[#020617] py-28 lg:py-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-14%] top-[10%] h-[560px] w-[560px] rounded-full bg-blue-600/[0.08] blur-[160px]" />

        <div className="absolute right-[-10%] bottom-[0%] h-[620px] w-[620px] rounded-full bg-indigo-600/[0.07] blur-[180px]" />

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
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-blue-300">
              <Sparkles className="h-4 w-4" />
              {founder.badge}
            </div>

            <h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5rem]">
              {founder.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="lg:justify-self-end"
          >
            <div className="text-lg font-semibold leading-8 text-blue-200">
              {founder.subtitle}
            </div>
          </motion.div>
        </div>

        {/* Founder story */}
        <div className="mt-20 grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[560px]">
              {/* Offset frame */}
              <div className="absolute -left-8 top-8 hidden h-[94%] w-[96%] -rotate-[3deg] rounded-[2.75rem] border border-blue-300/10 bg-blue-500/[0.045] lg:block" />

              <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-[#07101f] shadow-[0_50px_150px_rgba(0,0,0,0.55)]">
                <img
                  src={founder.image}
                  alt={founder.title}
                  className="h-[560px] w-full object-cover md:h-[680px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />

                {/* Image footer */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-300">
                    Founder / Engineering
                  </div>

                  <div className="mt-2 text-xl font-semibold text-white">
                    VexnoraSoft
                  </div>
                </div>
              </div>

              {/* Floating tech panel */}
              <div className="absolute -right-5 top-10 hidden w-[230px] rounded-2xl border border-white/10 bg-[#07101f]/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                    <Code2 className="h-4 w-4" />
                  </div>

                  <div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-slate-600">
                      Core Stack
                    </div>

                    <div className="mt-1 text-xs font-semibold text-white">
                      Engineering Focus
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {founder.skills.slice(0, 5).map((skill) => (
                    <span key={skill} className="text-[11px] text-slate-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.05 }}
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold text-blue-300">01</span>

                <div className="h-px w-10 bg-white/15" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                  The Approach
                </span>
              </div>

              <p className="mt-8 text-xl leading-9 tracking-[-0.02em] text-slate-200 md:text-2xl md:leading-10">
                {founder.description}
              </p>

              <p className="mt-7 text-base leading-8 text-slate-400">
                {founder.description2}
              </p>

              {/* Stats */}
              <div className="mt-10 border-y border-white/[0.07]">
                {founder.stats.map((item, index) => {
                  const Icon =
                    index === 0 ? Briefcase : index === 1 ? Globe2 : Code2;

                  return (
                    <div
                      key={item.label}
                      className={`grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 ${
                        index !== founder.stats.length - 1
                          ? "border-b border-white/[0.07]"
                          : ""
                      }`}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-blue-300">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div className="text-sm text-slate-400">{item.label}</div>

                      <div className="text-2xl font-semibold tracking-[-0.03em] text-white">
                        {item.value}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Skills */}
              {founder.skills.length > 0 && (
                <div className="mt-9">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                    Technical Focus
                  </div>

                  <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4">
                    {founder.skills.map((skill, index) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <span className="text-xs text-blue-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-5">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 text-sm font-semibold text-white"
                >
                  {founder.ctaPrimary}

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition group-hover:border-blue-300/30 group-hover:bg-blue-500/10">
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>

                <a
                  href="#work"
                  className="inline-flex items-center text-sm font-semibold text-slate-500 transition hover:text-white"
                >
                  {founder.ctaSecondary}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28 grid gap-8 border-y border-white/[0.07] py-10 md:grid-cols-3"
        >
          {[
            {
              number: "01",
              title: "Build around the operation",
              text: "Software should fit real business workflows instead of forcing teams into unnecessary complexity.",
            },
            {
              number: "02",
              title: "Think beyond launch",
              text: "Architecture, maintainability and long-term operation matter as much as the first release.",
            },
            {
              number: "03",
              title: "Stay technically involved",
              text: "Strategy and engineering stay connected so decisions remain grounded in what can actually be built.",
            },
          ].map((item, index) => (
            <div
              key={item.number}
              className={`relative ${
                index !== 2
                  ? "border-b border-white/[0.07] pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-8"
                  : ""
              } ${index !== 0 ? "md:pl-8" : ""}`}
            >
              <div className="text-xs font-semibold text-blue-300">
                {item.number}
              </div>

              <div className="mt-4 text-lg font-semibold text-white">
                {item.title}
              </div>

              <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
