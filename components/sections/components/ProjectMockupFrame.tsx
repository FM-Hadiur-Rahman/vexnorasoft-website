"use client";

import Image from "next/image";
import { ImageIcon, Maximize2, Monitor, Smartphone } from "lucide-react";

type Props = {
  title: string;
  mainImage?: string;
  mobileImage?: string;
  onClick?: () => void;
};

export default function ProjectMockupFrame({
  title,
  mainImage,
  mobileImage,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative block h-72 w-full overflow-hidden bg-[#020617] text-left"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_18%,rgba(59,130,246,0.22),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.14),transparent_40%)]" />

      <div className="absolute left-5 right-5 top-7 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0b1220] shadow-2xl shadow-black/50 transition duration-500 group-hover:-translate-y-1 group-hover:border-blue-300/30">
        <div className="flex h-9 items-center justify-between border-b border-white/10 bg-white/[0.035] px-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-[#020617]/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 sm:flex">
            <Monitor className="h-3 w-3 text-blue-300" />
            Platform
          </div>
        </div>

        <div className="relative h-40 overflow-hidden bg-slate-900">
          {mainImage ? (
            <Image
              src={mainImage}
              alt={title}
              width={1000}
              height={620}
              className="h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-slate-500">
              <ImageIcon className="h-10 w-10" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/65 via-transparent to-transparent" />
        </div>
      </div>

      {mobileImage && (
        <div className="absolute bottom-5 right-7 h-36 w-24 overflow-hidden rounded-[1.55rem] border border-white/15 bg-[#020617] p-1 shadow-2xl shadow-black/60 transition duration-500 group-hover:-translate-y-2 group-hover:border-blue-300/35">
          <div className="absolute left-1/2 top-2 z-10 h-1 w-8 -translate-x-1/2 rounded-full bg-white/20" />

          <div className="h-full overflow-hidden rounded-[1.25rem] bg-slate-900">
            <Image
              src={mobileImage}
              alt={`${title} mobile preview`}
              width={260}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}

      <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-200 backdrop-blur-xl">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
        Case Study
      </div>

      <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#020617]/70 px-3 py-1.5 text-xs font-semibold text-slate-300 opacity-0 backdrop-blur-xl transition duration-300 group-hover:opacity-100">
        <Maximize2 className="h-3.5 w-3.5 text-blue-300" />
        View Preview
      </div>

      {mobileImage && (
        <div className="absolute bottom-5 right-36 hidden items-center gap-2 rounded-full border border-white/10 bg-[#020617]/70 px-3 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-xl sm:inline-flex">
          <Smartphone className="h-3.5 w-3.5 text-blue-300" />
          Mobile
        </div>
      )}
    </button>
  );
}
