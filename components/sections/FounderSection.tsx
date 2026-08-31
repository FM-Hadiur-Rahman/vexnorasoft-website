"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Code2, Globe2 } from "lucide-react";

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
    <section id="company" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-blue-950/25 shadow-2xl shadow-black/30 backdrop-blur-xl"
        >
          <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />

          <div className="relative grid items-center gap-12 px-6 py-10 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-14 lg:py-14">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-blue-500/20 to-indigo-500/10 blur-2xl" />

                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#020617]/80 p-3">
                  <img
                    src={founder.image}
                    alt={founder.title}
                    className="h-[460px] w-full rounded-[22px] object-cover"
                  />

                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#020617]/75 p-4 backdrop-blur-md">
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-300">
                      <Code2 size={16} />
                      <span>Core Stack</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {founder.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-slate-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <span className="inline-flex rounded-full border border-blue-300/20 bg-blue-500/10 px-4 py-1 text-sm font-semibold text-blue-300">
                {founder.badge}
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-white md:text-5xl">
                {founder.title}
              </h2>

              <p className="mt-4 text-lg font-semibold text-blue-200">
                {founder.subtitle}
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                {founder.description}
              </p>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
                {founder.description2}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {founder.stats.map((item, index) => {
                  const Icon =
                    index === 0 ? Briefcase : index === 1 ? Globe2 : Code2;

                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-sm"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                        <Icon size={18} />
                      </div>
                      <p className="text-2xl font-bold text-white">
                        {item.value}
                      </p>
                      <p className="mt-1 text-sm text-slate-400">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-50"
                >
                  {founder.ctaPrimary}
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#work"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  {founder.ctaSecondary}
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
