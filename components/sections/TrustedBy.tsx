"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  ArrowUpRight,
  Building2,
  ExternalLink,
  Globe2,
  ShieldCheck,
} from "lucide-react";

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

export default function TrustedBy() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadClients = async () => {
      try {
        const res = await fetch(`${API_URL}/api/clients`);

        if (!res.ok) {
          throw new Error("Failed to load clients");
        }

        const data = await res.json();

        setClients(
          (data.clients || []).filter(
            (client: Client) => client.isFeatured !== false,
          ),
        );
      } catch (error) {
        console.error("Failed to load clients", error);
      } finally {
        setLoading(false);
      }
    };

    loadClients();
  }, []);

  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-[#020617] py-24 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[4%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.07] blur-[150px]" />

        <div className="absolute right-[-10%] bottom-[0%] h-[560px] w-[560px] rounded-full bg-indigo-600/[0.06] blur-[160px]" />

        <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-12 border-b border-white/[0.07] pb-14 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-300">
              Selected Partnerships
            </div>

            <h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.8rem]">
              Built with businesses
              <span className="block text-white/30">
                that operate in the real world.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-8 text-slate-400">
              We work closely with businesses that need dependable software,
              connected platforms and technology designed around real
              operational workflows.
            </p>
          </div>
        </div>

        {/* Compact logo rail */}
        {!loading && clients.length > 0 && (
          <div className="border-b border-white/[0.07] py-10">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-8 lg:gap-x-14">
              {clients.map((client) => (
                <div
                  key={client._id}
                  className="group flex min-h-12 items-center gap-4"
                >
                  {client.logoUrl ? (
                    <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-white p-1.5">
                      <Image
                        src={client.logoUrl}
                        alt={client.companyName}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-blue-300">
                      <Building2 className="h-5 w-5" />
                    </div>
                  )}

                  <div className="text-base font-semibold tracking-[-0.02em] text-slate-400 transition group-hover:text-white">
                    {client.companyName}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Client stories */}
        <div className="mt-16">
          {loading ? (
            <div className="py-20 text-center text-sm text-slate-600">
              Loading partnerships...
            </div>
          ) : clients.length === 0 ? (
            <div className="border-y border-white/[0.07] py-14">
              <div className="max-w-2xl">
                <div className="text-xs uppercase tracking-[0.24em] text-blue-300">
                  Partnership Network
                </div>

                <div className="mt-4 text-2xl font-semibold text-white">
                  Client references will appear here.
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Featured organizations can be managed through the VexnoraSoft
                  administration area.
                </p>
              </div>
            </div>
          ) : (
            <div>
              {clients.map((client, index) => (
                <article
                  key={client._id}
                  className="group relative grid gap-10 border-b border-white/[0.07] py-12 lg:grid-cols-[0.42fr_1.18fr_0.4fr] lg:items-start lg:py-16"
                >
                  {/* Number / logo */}
                  <div>
                    <div className="flex items-center gap-5">
                      <div className="text-xs font-semibold text-blue-300">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="h-px w-10 bg-white/10" />
                    </div>

                    <div className="mt-8">
                      {client.logoUrl ? (
                        <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-white p-2">
                          <Image
                            src={client.logoUrl}
                            alt={client.companyName}
                            width={80}
                            height={80}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.025] text-blue-300">
                          <Building2 className="h-7 w-7" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Main content */}
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                      {client.industry ||
                        client.relationship ||
                        "Technology Partnership"}
                    </div>

                    <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                      {client.companyName}
                    </h3>

                    {client.description && (
                      <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
                        {client.description}
                      </p>
                    )}

                    {client.services && client.services.length > 0 && (
                      <div className="mt-8 border-y border-white/[0.07] py-5">
                        <div className="flex flex-wrap gap-x-8 gap-y-3">
                          {client.services.map((service, serviceIndex) => (
                            <div
                              key={service}
                              className="flex items-center gap-2 text-sm text-slate-300"
                            >
                              <span className="text-xs text-blue-300">
                                {String(serviceIndex + 1).padStart(2, "0")}
                              </span>

                              {service}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action */}
                  <div className="flex items-start lg:justify-end">
                    {client.website ? (
                      <a
                        href={client.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-3 text-sm font-semibold text-white"
                      >
                        Visit website
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition group-hover/link:border-blue-300/30 group-hover/link:bg-blue-500/10">
                          <ExternalLink className="h-4 w-4 transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </span>
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                        <ShieldCheck className="h-4 w-4" />
                        Partner
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Positioning strip */}
        <div className="mt-20 grid border-y border-white/[0.07] md:grid-cols-3">
          <div className="border-b border-white/[0.07] py-8 md:border-b-0 md:border-r md:pr-8">
            <Globe2 className="h-5 w-5 text-blue-300" />

            <div className="mt-5 text-lg font-semibold text-white">
              Germany based
            </div>

            <p className="mt-2 max-w-sm text-sm leading-7 text-slate-500">
              Engineering and project coordination with a European business
              perspective.
            </p>
          </div>

          <div className="border-b border-white/[0.07] py-8 md:border-b-0 md:border-r md:px-8">
            <Building2 className="h-5 w-5 text-blue-300" />

            <div className="mt-5 text-lg font-semibold text-white">
              Operational focus
            </div>

            <p className="mt-2 max-w-sm text-sm leading-7 text-slate-500">
              Solutions designed around actual workflows, users and business
              processes.
            </p>
          </div>

          <div className="py-8 md:pl-8">
            <ShieldCheck className="h-5 w-5 text-blue-300" />

            <div className="mt-5 text-lg font-semibold text-white">
              Long-term systems
            </div>

            <p className="mt-2 max-w-sm text-sm leading-7 text-slate-500">
              Architecture intended for maintainability, integration and future
              growth.
            </p>
          </div>
        </div>

        {/* Closing line */}
        <div className="mt-16 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
            More than a vendor.
            <span className="text-white/30">
              {" "}
              A technical partner for the systems behind the business.
            </span>
          </div>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-white"
          >
            Start a conversation
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition group-hover:border-blue-300/30 group-hover:bg-blue-500/10">
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
