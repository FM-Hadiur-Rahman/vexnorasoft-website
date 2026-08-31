"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

export default function CapabilityCard({
  icon: Icon,
  title,
  description,
  features,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl"
    >
      <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-blue-500/0 blur-3xl transition duration-500 group-hover:bg-blue-500/10" />

      <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-500 opacity-80" />

      <div className="relative p-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-500/10 text-blue-300 transition group-hover:scale-110 group-hover:bg-blue-500/20">
          <Icon size={30} />
        </div>

        <h3 className="mt-8 text-2xl font-bold text-white">{title}</h3>

        <p className="mt-4 leading-7 text-slate-400">{description}</p>

        <div className="mt-8 space-y-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 text-sm text-slate-300"
            >
              <div className="h-2 w-2 rounded-full bg-blue-300" />
              {feature}
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-2 font-semibold text-blue-300 transition group-hover:translate-x-1">
          Learn More
          <ArrowRight size={17} />
        </div>
      </div>

      <div className="absolute inset-0 rounded-[30px] ring-1 ring-inset ring-white/5" />
    </motion.div>
  );
}
