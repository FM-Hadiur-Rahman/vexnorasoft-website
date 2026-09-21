"use client";

import {
  ArrowUpRight,
  BrainCircuit,
  Building2,
  LockKeyhole,
  Network,
  Scale,
  Users,
} from "lucide-react";

type MissionVisionContent = {
  eyebrow: string;
  title: string;
  desc: string;

  mission: {
    number: string;
    label: string;
    title: string;
    desc: string;
  };

  vision: {
    number: string;
    label: string;
    title: string;
    desc: string;
  };

  principlesEyebrow: string;
  principlesTitle: string;

  principles: {
    number: string;
    title: string;
    desc: string;
  }[];
};

type Props = {
  content: MissionVisionContent;
};

const principleIcons = [
  Building2,
  Scale,
  LockKeyhole,
  Users,
  BrainCircuit,
  Network,
];

export default function MissionVision({ content }: Props) {
  return (
    <section
      id="mission"
      className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[5%] h-[520px] w-[520px] rounded-full bg-blue-600/[0.07] blur-[120px]" />

        <div className="absolute right-[-10%] top-[35%] h-[520px] w-[520px] rounded-full bg-sky-400/[0.05] blur-[130px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* ======================================================
            INTRO
        ====================================================== */}

        <div className="grid gap-12 border-b border-white/[0.08] pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.34em] text-sky-300">
                {content.eyebrow}
              </span>

              <span className="h-px w-14 bg-gradient-to-r from-sky-400/60 to-transparent" />
            </div>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl lg:text-[68px]">
              {content.title}
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-base leading-8 text-slate-400">
              {content.desc}
            </p>
          </div>
        </div>

        {/* ======================================================
            MISSION
        ====================================================== */}

        <div className="grid min-h-[520px] border-b border-white/[0.08] lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative flex flex-col justify-between border-white/[0.08] py-16 lg:border-r lg:pr-16">
            <div className="flex items-center gap-5">
              <span className="text-xs font-medium tracking-[0.25em] text-sky-300">
                {content.mission.number}
              </span>

              <span className="h-px w-10 bg-white/15" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500">
                {content.mission.label}
              </span>
            </div>

            <div className="mt-24 lg:mt-0">
              <h3 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl">
                {content.mission.title}
              </h3>

              <p className="mt-8 max-w-xl text-[15px] leading-8 text-slate-400">
                {content.mission.desc}
              </p>
            </div>
          </div>

          {/* Mission visual */}
          <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden py-16 lg:min-h-full lg:pl-16">
            <div className="absolute right-4 top-8 select-none text-[150px] font-semibold leading-none tracking-[-0.08em] text-white/[0.018] sm:text-[220px]">
              01
            </div>

            <div className="relative flex h-[330px] w-[330px] items-center justify-center sm:h-[390px] sm:w-[390px]">
              <div className="absolute inset-0 rounded-full border border-sky-300/[0.08]" />
              <div className="absolute inset-[12%] rounded-full border border-sky-300/[0.10]" />
              <div className="absolute inset-[25%] rounded-full border border-sky-300/[0.13]" />

              <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-sky-400/10 to-transparent" />
              <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-sky-400/10 to-transparent" />

              <div className="absolute left-[7%] top-[25%] h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_22px_rgba(125,211,252,.55)]" />
              <div className="absolute bottom-[18%] right-[12%] h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(147,197,253,.55)]" />
              <div className="absolute right-[3%] top-[43%] h-1 w-1 rounded-full bg-white/60" />

              <div className="relative flex h-40 w-40 flex-col items-center justify-center rounded-[34px] border border-sky-300/15 bg-slate-950/70 shadow-[0_25px_80px_rgba(0,0,0,.45)] backdrop-blur-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-300/15 bg-sky-400/[0.08] text-sky-300">
                  <Building2 size={21} />
                </div>

                <span className="mt-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Business
                </span>

                <span className="mt-1 text-sm font-semibold text-white">
                  First
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================
            VISION
        ====================================================== */}

        <div className="grid min-h-[520px] border-b border-white/[0.08] lg:grid-cols-[1.18fr_0.82fr]">
          {/* Vision visual */}
          <div className="relative order-2 flex min-h-[430px] items-center justify-center overflow-hidden py-16 lg:order-1 lg:border-r lg:border-white/[0.08] lg:pr-16">
            <div className="absolute left-2 top-8 select-none text-[150px] font-semibold leading-none tracking-[-0.08em] text-white/[0.018] sm:text-[220px]">
              02
            </div>

            <div className="relative h-[350px] w-full max-w-[520px]">
              {/* connection lines */}
              <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-sky-300/20 to-transparent" />

              <div className="absolute left-1/2 top-1/2 h-[70%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-sky-300/20 to-transparent" />

              <div className="absolute left-[15%] top-[20%] h-px w-[70%] rotate-[28deg] bg-gradient-to-r from-transparent via-blue-300/10 to-transparent" />

              <div className="absolute left-[15%] bottom-[20%] h-px w-[70%] -rotate-[28deg] bg-gradient-to-r from-transparent via-blue-300/10 to-transparent" />

              {/* nodes */}
              <NetworkNode className="left-[8%] top-[17%]" />
              <NetworkNode className="right-[8%] top-[20%]" />
              <NetworkNode className="bottom-[14%] left-[14%]" />
              <NetworkNode className="bottom-[12%] right-[15%]" />

              <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-sky-300/15 bg-slate-950/80 shadow-[0_0_80px_rgba(56,189,248,.08)]">
                <Network className="text-sky-300" size={25} />

                <span className="mt-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                  VexnoraSoft
                </span>

                <span className="mt-1 text-sm font-semibold text-white">
                  Global Systems
                </span>
              </div>
            </div>
          </div>

          <div className="relative order-1 flex flex-col justify-between py-16 lg:order-2 lg:pl-16">
            <div className="flex items-center gap-5">
              <span className="text-xs font-medium tracking-[0.25em] text-sky-300">
                {content.vision.number}
              </span>

              <span className="h-px w-10 bg-white/15" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500">
                {content.vision.label}
              </span>
            </div>

            <div className="mt-24 lg:mt-0">
              <h3 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl">
                {content.vision.title}
              </h3>

              <p className="mt-8 max-w-xl text-[15px] leading-8 text-slate-400">
                {content.vision.desc}
              </p>
            </div>
          </div>
        </div>

        {/* ======================================================
            PRINCIPLES
        ====================================================== */}

        <div className="pt-24">
          <div className="grid gap-8 pb-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-sky-300">
                {content.principlesEyebrow}
              </span>
            </div>

            <h3 className="max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              {content.principlesTitle}
            </h3>
          </div>

          <div className="grid border-l border-t border-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
            {content.principles.map((principle, index) => {
              const Icon = principleIcons[index % principleIcons.length];

              return (
                <article
                  key={`${principle.number}-${principle.title}`}
                  className="group relative min-h-[270px] border-b border-r border-white/[0.08] p-8 transition-colors duration-500 hover:bg-white/[0.025] lg:p-9"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.28em] text-sky-300">
                      {principle.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-slate-500 transition-all duration-500 group-hover:border-sky-300/20 group-hover:text-sky-300">
                      <Icon size={17} />
                    </div>
                  </div>

                  <div className="mt-16">
                    <h4 className="max-w-xs text-xl font-semibold tracking-[-0.025em] text-white">
                      {principle.title}
                    </h4>

                    <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
                      {principle.desc}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="absolute bottom-8 right-8 text-white/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-300/60"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function NetworkNode({ className }: { className: string }) {
  return (
    <div
      className={`absolute ${className} flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-300/10 bg-slate-950/80 shadow-[0_15px_40px_rgba(0,0,0,.35)]`}
    >
      <div className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,.6)]" />
    </div>
  );
}
