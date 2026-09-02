"use client";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
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
    desc: "End-to-end software development for companies, public-sector projects and digital transformation initiatives.",
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
    desc: "A dedicated engineering team for continuous product development, maintenance, integration and scaling.",
    price: "Custom Quote",
    highlight: true,
    points: ["Project Manager", "UI / UX", "Frontend", "Backend", "AI", "QA"],
    cta: "Book Consultation",
  },
  {
    icon: Cloud,
    badge: "Platform Based",
    title: "SaaS & Platform Subscription",
    desc: "Ready-made or configurable platforms for restaurants, operations, inventory and digital business workflows.",
    price: "Custom Monthly",
    highlight: false,
    points: [
      "Restaurant SaaS",
      "POS",
      "Inventory",
      "Operations",
      "Dashboards",
      "Support",
    ],
    cta: "View Products",
  },
];

export default function Pricing({ productKey = "vexnorasoft" }: Props) {
  void productKey;

  const featuredModel = models.find((model) => model.highlight) || models[0];

  const otherModels = models.filter(
    (model) => model.title !== featuredModel.title,
  );

  const FeaturedIcon = featuredModel.icon;

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#020617] py-28 lg:py-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[6%] h-[540px] w-[540px] rounded-full bg-blue-600/[0.08] blur-[150px]" />

        <div className="absolute right-[-10%] bottom-[4%] h-[620px] w-[620px] rounded-full bg-indigo-600/[0.07] blur-[170px]" />

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
            <div className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-300">
              Engagement Models
            </div>

            <h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5rem]">
              Flexible ways to build
              <span className="block text-white/30">
                serious software together.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="max-w-xl text-base leading-8 text-slate-400 lg:justify-self-end"
          >
            Choose the collaboration model that matches your scope, internal
            capacity and long-term product goals.
          </motion.p>
        </div>

        {/* Featured engagement model */}
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.65 }}
          className="relative mt-20 overflow-hidden border-y border-white/[0.08] py-12 lg:py-16"
        >
          <div className="pointer-events-none absolute right-[-5%] top-[-20%] select-none text-[13rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.018] lg:text-[20rem]">
            01
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            {/* Identity */}
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-300/15 bg-blue-500/10 text-blue-300">
                  <FeaturedIcon className="h-6 w-6" />
                </div>

                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-600">
                    Recommended
                  </div>

                  <div className="mt-2 text-sm font-semibold text-blue-300">
                    {featuredModel.badge}
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Investment
                </div>

                <div className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  {featuredModel.price}
                </div>
              </div>
            </div>

            {/* Main content */}
            <div>
              <h3 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-[4.25rem]">
                {featuredModel.title}
              </h3>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400">
                {featuredModel.desc}
              </p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                {featuredModel.points.map((point, index) => (
                  <div
                    key={point}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <span className="text-xs text-blue-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {point}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold text-white"
              >
                {featuredModel.cta}

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition group-hover:border-blue-300/30 group-hover:bg-blue-500/10">
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </div>
          </div>
        </motion.article>

        {/* Supporting engagement models */}
        <div className="grid lg:grid-cols-2">
          {otherModels.map((model, index) => {
            const Icon = model.icon;

            return (
              <motion.article
                key={model.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className={`group relative border-b border-white/[0.07] py-14 lg:py-16 ${
                  index === 0 ? "lg:border-r lg:pr-14" : "lg:pl-14"
                }`}
              >
                <div className="flex items-center justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.025] text-blue-300 transition group-hover:border-blue-300/20 group-hover:bg-blue-500/[0.07]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="text-xs font-semibold tracking-[0.2em] text-slate-600">
                    {String(index + 2).padStart(2, "0")}
                  </div>
                </div>

                <div className="mt-8 text-xs font-semibold uppercase tracking-[0.23em] text-blue-300">
                  {model.badge}
                </div>

                <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-4xl">
                  {model.title}
                </h3>

                <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
                  {model.desc}
                </p>

                <div className="mt-8 border-y border-white/[0.07] py-6">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                    Typical Investment
                  </div>

                  <div className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                    {model.price}
                  </div>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {model.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
                      {point}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="group/link mt-9 inline-flex items-center gap-3 text-sm font-semibold text-white"
                >
                  {model.cta}

                  <ArrowUpRight className="h-4 w-4 transition group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* How engagement starts */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="flex flex-col gap-7 border-b border-white/[0.07] pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.27em] text-blue-300">
                <ShieldCheck className="h-4 w-4" />
                Enterprise & Public Sector Ready
              </div>

              <h3 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Every engagement starts with clarity.
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-400">
              Scope, architecture, timeline, security and long-term operating
              requirements are defined before a serious development commitment
              is made.
            </p>
          </div>

          <div className="grid md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Workshop",
                text: "Requirements, business workflows and technical constraints.",
              },
              {
                number: "02",
                title: "Prototype",
                text: "Product direction, architecture and interface validation.",
              },
              {
                number: "03",
                title: "Proposal",
                text: "Defined scope, timeline, delivery model and investment.",
              },
            ].map((item, index) => (
              <div
                key={item.number}
                className={`relative py-10 md:px-8 ${
                  index !== 2
                    ? "border-b border-white/[0.07] md:border-b-0 md:border-r"
                    : ""
                } ${index === 0 ? "md:pl-0" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-blue-300">
                    {item.number}
                  </div>

                  <Rocket className="h-4 w-4 text-slate-700" />
                </div>

                <div className="mt-6 text-xl font-semibold text-white">
                  {item.title}
                </div>

                <div className="mt-3 max-w-sm text-sm leading-7 text-slate-500">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
              Not sure which model fits?
            </div>

            <div className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Start with the problem.
              <span className="block text-white/30">
                We’ll define the right way to build it.
              </span>
            </div>
          </div>

          <a
            href="#contact"
            className="group flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-white text-center text-sm font-bold text-slate-950 transition duration-300 hover:scale-105 hover:bg-blue-50 lg:h-36 lg:w-36"
          >
            <span>
              Talk
              <br />
              With Us
            </span>

            <ArrowUpRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
