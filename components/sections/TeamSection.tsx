"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Code2, Sparkles } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

type TeamMember = {
  _id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  tags: string[];
};

type TeamSectionProps = {
  team: {
    badge: string;
    title: string;
    desc: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
};

export default function TeamSection({ team }: TeamSectionProps) {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTeam = async () => {
      try {
        const res = await fetch(`${API_URL}/api/v1/team`);

        if (!res.ok) {
          throw new Error("Failed to load team");
        }

        const data = await res.json();

        setMembers(data.data || []);
      } catch (error) {
        console.error("Failed to load team members", error);
      } finally {
        setLoading(false);
      }
    };

    loadTeam();
  }, []);

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#020617] py-28 lg:py-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[12%] h-[560px] w-[560px] rounded-full bg-blue-600/[0.08] blur-[150px]" />

        <div className="absolute right-[-10%] bottom-[5%] h-[620px] w-[620px] rounded-full bg-indigo-600/[0.08] blur-[170px]" />

        <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-12 border-b border-white/[0.07] pb-16 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-blue-300">
              <Sparkles className="h-4 w-4" />
              {team.badge}
            </div>

            <h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5rem]">
              {team.title}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="max-w-xl text-base leading-8 text-slate-400 lg:justify-self-end"
          >
            {team.desc}
          </motion.p>
        </div>

        {/* Team */}
        <div className="mt-20">
          {loading ? (
            <div className="py-24 text-center text-slate-500">
              Loading team...
            </div>
          ) : members.length === 0 ? (
            <div className="py-24 text-center text-slate-500">
              No team members found.
            </div>
          ) : (
            <div className="space-y-24 lg:space-y-32">
              {members.map((member, index) => {
                const reversed = index % 2 === 1;

                return (
                  <motion.article
                    key={member._id}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.05,
                    }}
                    className="relative border-b border-white/[0.07] pb-20"
                  >
                    {/* Giant index */}
                    <div
                      className={`pointer-events-none absolute -top-12 select-none text-[10rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.018] sm:text-[14rem] ${
                        reversed ? "left-0" : "right-0"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div
                      className={`relative z-10 grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center ${
                        reversed ? "lg:grid-flow-dense" : ""
                      }`}
                    >
                      {/* Portrait */}
                      <div className={reversed ? "lg:col-start-2" : ""}>
                        <div className="relative mx-auto max-w-[560px]">
                          <div
                            className={`absolute top-8 hidden h-[92%] w-[94%] rounded-[2.5rem] border border-blue-300/10 bg-blue-500/[0.045] lg:block ${
                              reversed
                                ? "-right-8 rotate-[3deg]"
                                : "-left-8 -rotate-[3deg]"
                            }`}
                          />

                          <motion.div
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.3 }}
                            className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#07101f] shadow-[0_50px_140px_rgba(0,0,0,0.55)]"
                          >
                            {member.imageUrl ? (
                              <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="h-[520px] w-full object-cover transition duration-700 hover:scale-[1.025] md:h-[620px]"
                              />
                            ) : (
                              <div className="flex h-[520px] items-center justify-center bg-gradient-to-br from-blue-500/10 to-indigo-500/10 md:h-[620px]">
                                <span className="text-7xl font-semibold tracking-[-0.06em] text-blue-300">
                                  {member.name
                                    .split(" ")
                                    .map((part) => part[0])
                                    .slice(0, 2)
                                    .join("")}
                                </span>
                              </div>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
                                {member.role}
                              </div>

                              <div className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                                {member.name}
                              </div>
                            </div>
                          </motion.div>

                          {/* Floating role label */}
                          <div
                            className={`absolute top-8 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#07101f]/95 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-xl sm:flex ${
                              reversed ? "-left-5" : "-right-5"
                            }`}
                          >
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                              {index % 2 === 0 ? (
                                <Code2 className="h-4 w-4" />
                              ) : (
                                <Brain className="h-4 w-4" />
                              )}
                            </div>

                            <div>
                              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-600">
                                Role
                              </div>

                              <div className="mt-1 text-xs font-semibold text-white">
                                {member.role}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Editorial content */}
                      <div
                        className={
                          reversed ? "lg:col-start-1 lg:row-start-1" : ""
                        }
                      >
                        <div className="max-w-xl">
                          <div className="flex items-center gap-4">
                            <span className="text-xs font-semibold text-blue-300">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <div className="h-px w-10 bg-white/15" />

                            <span className="text-xs uppercase tracking-[0.24em] text-slate-600">
                              VexnoraSoft Team
                            </span>
                          </div>

                          <h3 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-[4rem]">
                            {member.name}
                          </h3>

                          <div className="mt-4 text-sm font-semibold text-blue-300">
                            {member.role}
                          </div>

                          <p className="mt-8 text-base leading-8 text-slate-400">
                            {member.bio}
                          </p>

                          {member.tags?.length > 0 && (
                            <div className="mt-8 border-y border-white/[0.07] py-6">
                              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                                Focus Areas
                              </div>

                              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
                                {member.tags.map((tag, tagIndex) => (
                                  <div
                                    key={tag}
                                    className="flex items-center gap-2 text-sm text-slate-300"
                                  >
                                    <span className="text-xs text-blue-300">
                                      0{tagIndex + 1}
                                    </span>

                                    {tag}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="mt-8">
                            <a
                              href="#contact"
                              className="group inline-flex items-center gap-3 text-sm font-semibold text-white"
                            >
                              Work with our team
                              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition group-hover:border-blue-300/30 group-hover:bg-blue-500/10">
                                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        {!loading && members.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-28 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
                Collaboration
              </div>

              <div className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Small enough to stay close.
                <span className="block text-white/30">
                  Technical enough to build seriously.
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group flex h-28 w-28 items-center justify-center rounded-full bg-white text-center text-sm font-bold text-slate-950 transition duration-300 hover:scale-105 hover:bg-blue-50 lg:h-36 lg:w-36"
              >
                <span className="max-w-[78px]">{team.ctaPrimary}</span>

                <ArrowUpRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="#work"
                className="group flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-center text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-white/[0.06] lg:h-36 lg:w-36"
              >
                <span className="max-w-[78px]">{team.ctaSecondary}</span>

                <Sparkles className="ml-1 h-4 w-4 text-blue-300" />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
