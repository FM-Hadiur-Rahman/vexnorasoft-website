"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Cloud,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";

type Props = {
  productKey?: string;
};

const models = [
  {
    icon: Building2,
    badge: "Custom Delivery",
    title: "Project Delivery",
    desc: "End-to-end software development for companies, public-sector projects and digital transformation.",
    price: "From €10,000+",
    highlight: false,
    points: [
      "Architecture",
      "UI / UX",
      "Frontend",
      "Backend",
      "Cloud",
      "Deployment",
    ],
    cta: "Discuss Project",
  },
  {
    icon: Users,
    badge: "Most Strategic",
    title: "Dedicated Development Team",
    desc: "A dedicated engineering team for long-term product development, maintenance and scaling.",
    price: "Custom Quote",
    highlight: true,
    points: ["Project Manager", "UI / UX", "Frontend", "Backend", "AI", "QA"],
    cta: "Book Consultation",
  },
  {
    icon: Cloud,
    badge: "Product Based",
    title: "SaaS & Platform Subscription",
    desc: "Ready-made or customizable SaaS platforms for restaurants, operations, inventory and business workflows.",
    price: "Custom Monthly",
    highlight: false,
    points: [
      "Restaurant SaaS",
      "POS",
      "Inventory",
      "HR",
      "Dashboards",
      "Support",
    ],
    cta: "View Products",
  },
];

export default function Pricing({ productKey = "backpunkt" }: Props) {
  console.log(productKey);

  return (
    <section
      id="pricing"
      className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-blue-950/25 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl lg:p-10">
        <div className="absolute right-[-14%] top-[-22%] h-96 w-96 rounded-full bg-blue-500/12 blur-3xl" />
        <div className="absolute left-[-14%] bottom-[-25%] h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
              Engagement Models
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Flexible ways to build serious software with us.
            </h2>
          </motion.div>

          <p className="max-w-xl leading-8 text-slate-300">
            Whether you need one complete project, a dedicated software team or
            a SaaS platform, we create the right cooperation model for your
            business goals.
          </p>
        </div>

        <div className="relative z-10 mt-12 grid gap-6 lg:grid-cols-3">
          {models.map((model, index) => {
            const Icon = model.icon;

            return (
              <motion.article
                key={model.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className={`relative overflow-hidden rounded-[2rem] border p-7 transition ${
                  model.highlight
                    ? "border-blue-300/40 bg-blue-500/10 shadow-2xl shadow-blue-500/10"
                    : "border-white/10 bg-[#020617]/70 hover:border-blue-300/30"
                }`}
              >
                {model.highlight && (
                  <div className="absolute right-[-20%] top-[-20%] h-52 w-52 rounded-full bg-blue-400/20 blur-3xl" />
                )}

                <div className="relative z-10">
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                      <Icon className="h-7 w-7" />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                      {model.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white">
                    {model.title}
                  </h3>

                  <p className="mt-4 min-h-[112px] text-sm leading-7 text-slate-400">
                    {model.desc}
                  </p>

                  <div className="mt-8">
                    <div className="text-sm font-semibold text-slate-400">
                      Investment
                    </div>
                    <div className="mt-2 text-3xl font-black text-white">
                      {model.price}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {model.points.map((point) => (
                      <span
                        key={point}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-semibold text-slate-300"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-300" />
                        {point}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className={`mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${
                      model.highlight
                        ? "bg-white text-slate-950 hover:bg-blue-50"
                        : "border border-white/10 bg-white/[0.045] text-white hover:bg-white/[0.08]"
                    }`}
                  >
                    {model.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="relative z-10 mt-10 rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-300">
                <ShieldCheck className="h-4 w-4" />
                Enterprise & Public Sector Ready
              </div>

              <h3 className="text-2xl font-black text-white md:text-3xl">
                Need something unique?
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Every organization has different requirements. We can prepare a
                tailored proposal based on your scope, timeline, security needs
                and long-term support expectations.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Workshop", "Requirements & roadmap"],
                ["Prototype", "Clickable product vision"],
                ["Proposal", "Scope, timeline & budget"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-[#020617]/70 p-5"
                >
                  <Rocket className="mb-4 h-5 w-5 text-blue-300" />
                  <div className="font-bold text-white">{title}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-400">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
