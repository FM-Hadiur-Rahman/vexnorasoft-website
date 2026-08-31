"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Building2, ExternalLink, ShieldCheck } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

type Client = {
  _id: string;
  companyName: string;
  logoUrl?: string;
  website?: string;
  industry?: string;
  relationship?: string;
  description?: string;
  services?: string[];
  isFeatured?: boolean;
};

const metrics = [
  ["4+", "Active Partners"],
  ["12+", "Digital Platforms"],
  ["DE", "Germany Based"],
  ["24/7", "Support Ready"],
];

export default function TrustedBy() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const loadClients = async () => {
      try {
        const res = await fetch(`${API_URL}/api/clients`);
        const data = await res.json();

        setClients(
          (data.clients || []).filter(
            (client: Client) => client.isFeatured !== false,
          ),
        );
      } catch (error) {
        console.error("Failed to load clients", error);
      }
    };

    loadClients();
  }, []);

  return (
    <section
      id="technology"
      className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-blue-950/30 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-10">
        <div className="absolute right-[-12%] top-[-30%] h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute left-[-10%] bottom-[-30%] h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-blue-300">
                Trusted Partners
              </p>

              <h2 className="max-w-3xl text-3xl font-black tracking-tight text-white md:text-5xl">
                Trusted by forward-thinking companies.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-300">
              We build long-term technology partnerships with companies that
              need reliable software, scalable platforms and continuous support.
            </p>
          </div>

          {clients.length > 0 && (
            <div className="grid gap-4 md:grid-cols-2">
              {clients.map((client) => (
                <article
                  key={client._id}
                  className="group rounded-3xl border border-white/10 bg-white/[0.055] p-6 transition hover:border-blue-300/35 hover:bg-white/[0.08]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white text-slate-950 shadow-lg shadow-black/20">
                        {client.logoUrl ? (
                          <Image
                            src={client.logoUrl}
                            alt={client.companyName}
                            width={64}
                            height={64}
                            className="h-full w-full object-contain p-2"
                          />
                        ) : (
                          <Building2 size={28} />
                        )}
                      </div>

                      <div>
                        <h3 className="text-2xl font-black text-white">
                          {client.companyName}
                        </h3>

                        <p className="mt-1 text-sm font-semibold text-blue-300">
                          {client.industry ||
                            client.relationship ||
                            "Technology Partner"}
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                      Active
                    </span>
                  </div>

                  {client.description && (
                    <p className="mt-5 text-sm leading-7 text-slate-300">
                      {client.description}
                    </p>
                  )}

                  {client.website && (
                    <a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-300/30 px-4 py-2 text-sm font-semibold text-blue-300 transition hover:bg-blue-300 hover:text-slate-950"
                    >
                      Website ansehen
                      <ExternalLink size={15} />
                    </a>
                  )}
                </article>
              ))}
            </div>
          )}

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.055] p-5"
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-blue-300" />
                  <div className="text-3xl font-black text-white">{value}</div>
                </div>

                <div className="mt-2 text-sm text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
