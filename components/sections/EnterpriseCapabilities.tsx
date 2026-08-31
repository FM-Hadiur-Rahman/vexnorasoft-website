"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Building2,
  CheckCircle2,
  Cloud,
  Landmark,
  LockKeyhole,
} from "lucide-react";

const primaryCapabilities = [
  {
    icon: Landmark,
    label: "Government",
    title: "Digital platforms for public sector transformation.",
    description:
      "We build secure systems for municipalities, institutions and public-sector workflows.",
    items: [
      "Citizen portals",
      "Document management",
      "Approval workflows",
      "Internal administration",
      "Secure public services",
    ],
  },
  {
    icon: Building2,
    label: "Enterprise",
    title: "Business-critical software for growing organizations.",
    description:
      "We develop operational platforms that improve efficiency, visibility and scalability.",
    items: [
      "ERP & CRM systems",
      "Business dashboards",
      "Operations platforms",
      "Workflow automation",
      "Multi-branch management",
    ],
  },
];

const secondaryCapabilities = [
  {
    icon: Bot,
    title: "AI & Automation",
    text: "Computer vision, intelligent workflows, predictive analytics and AI-assisted operations.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    text: "Cloud-native platforms, scalable deployment, DevOps pipelines and reliable operations.",
  },
  {
    icon: LockKeyhole,
    title: "Security & Compliance",
    text: "Secure APIs, authentication, role management, auditability and GDPR-ready architecture.",
  },
];

export default function EnterpriseCapabilities() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-[#020617] py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(37,99,235,0.13),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(96,165,250,0.10),transparent_32%)]" />
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="mb-5 inline-flex rounded-full border border-blue-300/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Enterprise Capabilities
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Enterprise software for{" "}
            <span className="bg-gradient-to-r from-blue-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              government and business transformation.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            We engineer secure digital platforms, AI systems and cloud
            infrastructure for organizations that require reliability,
            scalability and long-term operation.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {primaryCapabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-blue-950/25 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl"
              >
                <div className="absolute right-[-18%] top-[-25%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-blue-500/16" />

                <div className="relative z-10">
                  <div className="mb-8 flex items-center justify-between gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-500/10 text-blue-300">
                      <Icon className="h-8 w-8" />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-300">
                      {item.label}
                    </span>
                  </div>

                  <h3 className="text-3xl font-black leading-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {item.items.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-slate-300"
                      >
                        <CheckCircle2 className="h-4 w-4 text-blue-300" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {secondaryCapabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-blue-300/30 hover:bg-white/[0.06]"
              >
                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-black text-white">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl md:p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Government Ready",
              "Enterprise Grade",
              "Cloud Native",
              "API First",
              "Secure by Design",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#0b1220]/70 px-5 py-4 text-sm font-bold text-slate-300"
              >
                <span className="mr-2 text-blue-300">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
