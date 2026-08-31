"use client";

export default function AdminConsultationsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          Consultation management
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Consultation requests
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/60">
          This page will show all consultation requests from the website.
        </p>
      </div>

      <div className="rounded-[2rem] border border-dashed border-white/10 bg-white/5 p-10 text-center text-white/55">
        Consultation API and table UI will be connected next.
      </div>
    </div>
  );
}
