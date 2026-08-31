"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Code2,
  CreditCard,
  Database,
  Globe,
  Settings,
  Shield,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
import type { SiteContent } from "@/types/site";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Smartphone,
  Shield,
  ShoppingBag,
  Settings,
  Database,
  Bot,
  CreditCard,
  BarChart3,
};

type Props = {
  trust: [string, string][];
  services: SiteContent["services"];
};

type ServiceItem = {
  _id: string;
  title: string;
  description: string;
  icon: string;
  shortText: string;
  isActive: boolean;
  order: number;
};

export default function Services({ trust, services }: Props) {
  const [serviceItems, setServiceItems] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const loadServices = async () => {
      try {
        if (!apiUrl) return;

        const res = await fetch(`${apiUrl}/api/v1/services`, {
          cache: "no-store",
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch services");
        }

        setServiceItems(data.data || []);
      } catch (error) {
        console.error("Services fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, [apiUrl]);

  return (
    <section
      id="services"
      className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="sticky top-28">
          <div className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
            {services.eyebrow}
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            {services.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            {services.desc}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {trust.map(([title, subtitle]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="text-sm font-semibold text-blue-300">
                  {subtitle}
                </div>
                <div className="mt-2 text-lg font-bold text-white">{title}</div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-50"
          >
            Discuss Your Solution
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="space-y-5">
          {loading ? (
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 text-center text-slate-400">
              Loading services...
            </div>
          ) : serviceItems.length === 0 ? (
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 text-center text-slate-400">
              No services available right now.
            </div>
          ) : (
            serviceItems.map((service, index) => {
              const Icon =
                typeof service.icon === "string" && iconMap[service.icon]
                  ? iconMap[service.icon]
                  : Code2;

              return (
                <motion.article
                  key={service._id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-900/75 to-blue-950/20 p-6 transition hover:border-blue-300/35"
                >
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="flex-1">
                      {service.shortText && (
                        <div className="mb-2 text-sm font-bold text-blue-300">
                          {service.shortText}
                        </div>
                      )}

                      <h3 className="text-2xl font-black text-white">
                        {service.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-400">
                        {service.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {[
                          "Scalable",
                          "Secure",
                          "API Ready",
                          "Long-Term Support",
                        ].map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-semibold text-slate-300"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-blue-300" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
