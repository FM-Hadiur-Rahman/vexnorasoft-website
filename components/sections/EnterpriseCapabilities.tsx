"use client";

import { motion } from "framer-motion";

import {
  Bot,
  Building2,
  CheckCircle2,
  Cloud,
  Database,
  Landmark,
  Layers3,
  LockKeyhole,
  Network,
  ServerCog,
  Workflow,
} from "lucide-react";

const primaryCapabilities = [
  {
    icon: Landmark,
    label: "Government",
    title: "Digital platforms for public-sector transformation.",
    description:
      "Secure citizen services, administrative workflows, document processes and connected public-sector systems.",
    items: [
      "Citizen portals",
      "Document management",
      "Approval workflows",
      "Internal administration",
    ],
  },
  {
    icon: Building2,
    label: "Enterprise",
    title: "Business-critical software for modern organizations.",
    description:
      "Operational systems designed to improve efficiency, visibility, automation and long-term scalability.",
    items: [
      "ERP & CRM systems",
      "Operations platforms",
      "Business dashboards",
      "Multi-branch systems",
    ],
  },
];

const engineeringLayers = [
  {
    icon: Bot,
    title: "AI & Automation",
    text: "Computer vision, intelligent workflows, decision support and practical AI systems.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    text: "Cloud-native architecture, CI/CD, deployment, observability and scalable operations.",
  },
  {
    icon: LockKeyhole,
    title: "Security",
    text: "Identity, permissions, auditability, secure APIs and compliance-focused architecture.",
  },
];

const infrastructure = [
  {
    icon: Network,
    title: "API",
    text: "System integration",
  },
  {
    icon: Database,
    title: "Data",
    text: "Reliable information",
  },
  {
    icon: ServerCog,
    title: "Cloud",
    text: "Scalable operation",
  },
  {
    icon: Workflow,
    title: "Automation",
    text: "Optimized processes",
  },
];

export default function EnterpriseCapabilities() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-[#030817] py-28 lg:py-36"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[6%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="absolute right-[-8%] top-[30%] h-[520px] w-[520px] rounded-full bg-indigo-600/10 blur-[130px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:52px_52px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
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
          className="max-w-4xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/15 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
            <Layers3 className="h-4 w-4" />
            Enterprise Capabilities
          </div>

          <h2 className="max-w-5xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white md:text-6xl">
            Software systems designed for{" "}
            <span className="bg-gradient-to-r from-blue-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              complex real-world operations.
            </span>
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
            We combine software engineering, AI, cloud infrastructure, security
            and system integration to build reliable digital platforms for
            businesses and public-sector organizations.
          </p>
        </motion.div>

        {/* Architecture area */}
        <div className="relative mt-20">
          {/* Connector line */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-blue-400/0 via-blue-400/15 to-blue-400/0 lg:block" />

          <div className="grid items-stretch gap-10 lg:grid-cols-[1fr_320px_1fr]">
            {/* Government */}
            <CapabilityCard item={primaryCapabilities[0]} index={0} />

            {/* Core */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute h-[360px] w-[360px] rounded-full border border-blue-400/[0.06]" />

              <div className="absolute h-[280px] w-[280px] rounded-full border border-white/[0.05]" />

              <div className="relative z-10 w-full rounded-[2rem] border border-blue-300/15 bg-gradient-to-b from-blue-500/[0.08] to-white/[0.025] p-6 shadow-[0_35px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-300/15 bg-blue-500/10 text-blue-300">
                  <Layers3 className="h-7 w-7" />
                </div>

                <div className="mt-5 text-center">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                    VexnoraSoft
                  </div>

                  <div className="mt-2 text-xl font-semibold text-white">
                    Engineering Core
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Strategy · Software · AI · Cloud · Integration
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  {engineeringLayers.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3.5"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                          <Icon className="h-4 w-4" />
                        </div>

                        <div>
                          <div className="text-sm font-semibold text-white">
                            {item.title}
                          </div>

                          <div className="mt-1 text-xs leading-5 text-slate-500">
                            {item.text}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Enterprise */}
            <CapabilityCard item={primaryCapabilities[1]} index={1} />
          </div>
        </div>

        {/* Infrastructure strip */}
        <motion.div
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
            margin: "-80px",
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="relative mt-16 rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-4 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-5"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {infrastructure.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-[#07101f]/60 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/20 hover:bg-blue-500/[0.04]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-white">
                      {item.title}
                    </div>

                    <div className="mt-1 text-xs text-slate-500">
                      {item.text}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Trust row */}
        <div className="mt-10 flex flex-wrap gap-3">
          {[
            "Secure by Design",
            "Cloud Native",
            "API First",
            "Scalable Architecture",
            "Long-Term Operation",
          ].map((item) => (
            <div
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-slate-400"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-blue-300" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom diagonal */}
      <div className="pointer-events-none absolute bottom-[-1px] left-0 right-0 h-20 overflow-hidden">
        <div className="absolute -bottom-14 -left-[5%] h-24 w-[110%] rotate-[1.4deg] border-t border-white/[0.05] bg-[#020617]" />
      </div>
    </section>
  );
}

function CapabilityCard({
  item,
  index,
}: {
  item: (typeof primaryCapabilities)[number];
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: index === 0 ? -26 : 26,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl"
    >
      <div className="absolute right-[-20%] top-[-20%] h-64 w-64 rounded-full bg-blue-500/[0.07] blur-3xl transition duration-500 group-hover:bg-blue-500/[0.12]" />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-300/10 bg-blue-500/10 text-blue-300">
            <Icon className="h-6 w-6" />
          </div>

          <div className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            {item.label}
          </div>
        </div>

        <h3 className="mt-8 max-w-md text-2xl font-semibold leading-tight tracking-[-0.025em] text-white">
          {item.title}
        </h3>

        <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
          {item.description}
        </p>

        <div className="mt-7 space-y-2.5">
          {item.items.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3.5 py-3 text-sm text-slate-300"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-300" />
              {feature}
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
