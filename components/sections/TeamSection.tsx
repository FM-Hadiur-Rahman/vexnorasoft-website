"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Code2, Sparkles } from "lucide-react";

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
    <section id="team" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-500/10" />
          <div className="absolute -left-16 top-12 h-56 w-56 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />

          <div className="relative px-6 py-12 md:px-10 lg:px-14 lg:py-14">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
                {team.badge}
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl">
                {team.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                {team.desc}
              </p>
            </div>

            {loading ? (
              <div className="mt-12 rounded-[2rem] border border-dashed border-white/10 p-12 text-center text-white/50">
                Loading team...
              </div>
            ) : members.length === 0 ? (
              <div className="mt-12 rounded-[2rem] border border-dashed border-white/10 p-12 text-center text-white/50">
                No team members found.
              </div>
            ) : (
              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                {members.map((member, index) => (
                  <motion.div
                    key={member._id}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/60 p-4 backdrop-blur-md"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />

                    <div className="relative">
                      <div className="relative overflow-hidden rounded-[24px] bg-slate-950">
                        {member.imageUrl ? (
                          <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                          />
                        ) : (
                          <div className="flex h-[420px] items-center justify-center text-5xl font-bold text-cyan-300">
                            {member.name.slice(0, 2).toUpperCase()}
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                      </div>

                      <div className="mt-5">
                        <div className="flex items-center gap-2 text-cyan-300">
                          {index === 0 ? (
                            <Code2 size={18} />
                          ) : (
                            <Brain size={18} />
                          )}
                          <span className="text-sm font-medium">
                            {member.role}
                          </span>
                        </div>

                        <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                          {member.name}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
                          {member.bio}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {member.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {team.ctaPrimary}
                <ArrowRight size={16} />
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {team.ctaSecondary}
                <Sparkles size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
