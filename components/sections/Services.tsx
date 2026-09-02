"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
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
        if (!apiUrl) {
          setLoading(false);
          return;
        }

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
      className="relative overflow-hidden bg-[#030817] py-28 lg:py-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[5%] h-[560px] w-[560px] rounded-full bg-blue-600/[0.08] blur-[150px]" />

        <div className="absolute right-[-10%] top-[42%] h-[620px] w-[620px] rounded-full bg-indigo-600/[0.08] blur-[160px]" />

        <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Intro */}
        <div className="grid gap-12 border-b border-white/[0.07] pb-16 lg:grid-cols-[1fr_0.72fr] lg:items-end">
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
          >
            <div className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-300">
              {services.eyebrow}
            </div>

            <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5rem]">
              {services.title}
            </h2>
          </motion.div>

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
            }}
            transition={{
              duration: 0.6,
              delay: 0.08,
            }}
            className="lg:justify-self-end"
          >
            <p className="max-w-xl text-base leading-8 text-slate-400">
              {services.desc}
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold text-white"
            >
              Discuss your solution
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition group-hover:border-blue-300/30 group-hover:bg-blue-500/10">
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Trust / positioning line */}
        {trust.length > 0 && (
          <div className="grid border-b border-white/[0.07] md:grid-cols-2 lg:grid-cols-4">
            {trust.map(([title, subtitle], index) => (
              <motion.div
                key={`${title}-${index}`}
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className="relative border-b border-white/[0.07] px-0 py-8 md:border-b-0 md:px-6 md:first:pl-0 md:not-last:border-r md:last:pr-0"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-600">
                  0{index + 1}
                </div>

                <div className="mt-4 text-sm font-semibold text-blue-300">
                  {subtitle}
                </div>

                <div className="mt-2 text-xl font-semibold tracking-[-0.02em] text-white">
                  {title}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Services */}
        <div className="mt-20">
          {loading ? (
            <div className="py-24 text-center text-slate-500">
              Loading services...
            </div>
          ) : serviceItems.length === 0 ? (
            <div className="py-24 text-center text-slate-500">
              No services available right now.
            </div>
          ) : (
            <div className="space-y-0">
              {serviceItems.map((service, index) => {
                const Icon =
                  typeof service.icon === "string" && iconMap[service.icon]
                    ? iconMap[service.icon]
                    : Code2;

                const reversed = index % 2 === 1;

                return (
                  <motion.article
                    key={service._id}
                    initial={{
                      opacity: 0,
                      y: 26,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-90px",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.04,
                    }}
                    className="group relative border-b border-white/[0.07] py-16 lg:py-20"
                  >
                    {/* Giant faded number */}
                    <div
                      className={`pointer-events-none absolute top-6 select-none text-[8rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.018] sm:text-[11rem] ${
                        reversed ? "right-0" : "left-0"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div
                      className={`relative z-10 grid gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:items-start ${
                        reversed ? "lg:grid-flow-dense" : ""
                      }`}
                    >
                      {/* Service identity */}
                      <div className={reversed ? "lg:col-start-2" : ""}>
                        <div className="flex items-center gap-5">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-300/10 bg-blue-500/10 text-blue-300 transition duration-300 group-hover:scale-105 group-hover:border-blue-300/20">
                            <Icon className="h-6 w-6" />
                          </div>

                          <div>
                            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-600">
                              Service {String(index + 1).padStart(2, "0")}
                            </div>

                            {service.shortText && (
                              <div className="mt-2 text-sm font-semibold text-blue-300">
                                {service.shortText}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Main content */}
                      <div
                        className={
                          reversed ? "lg:col-start-1 lg:row-start-1" : ""
                        }
                      >
                        <h3 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                          {service.title}
                        </h3>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
                          {service.description}
                        </p>

                        {/* Capability rail */}
                        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                          {[
                            "Scalable",
                            "Secure",
                            "API Ready",
                            "Long-Term Support",
                          ].map((item, itemIndex) => (
                            <div
                              key={item}
                              className="flex items-center gap-2 text-sm text-slate-300"
                            >
                              <span className="text-xs text-blue-300">
                                0{itemIndex + 1}
                              </span>

                              {item}
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <a
                            href="#contact"
                            className="group/link inline-flex items-center gap-3 text-sm font-semibold text-white"
                          >
                            Discuss this capability
                            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition group-hover/link:border-blue-300/30 group-hover/link:bg-blue-500/10">
                              <ArrowUpRight className="h-4 w-4 transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>

        {/* Delivery strip */}
        {!loading && serviceItems.length > 0 && (
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
            }}
            className="mt-24 grid gap-6 rounded-[2rem] border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl md:grid-cols-4 md:p-8"
          >
            {[
              ["01", "Strategy", "Requirements & architecture"],
              ["02", "Build", "Product engineering"],
              ["03", "Integrate", "APIs & infrastructure"],
              ["04", "Operate", "Support & improvement"],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="relative border-b border-white/[0.07] pb-5 md:border-b-0 md:border-r md:pb-0 md:pr-6 md:last:border-r-0"
              >
                <div className="text-xs font-semibold text-blue-300">
                  {number}
                </div>

                <div className="mt-4 text-lg font-semibold text-white">
                  {title}
                </div>

                <div className="mt-2 text-sm leading-6 text-slate-500">
                  {text}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Closing CTA */}
        {!loading && serviceItems.length > 0 && (
          <div className="mt-24 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
                Built around your operation
              </div>

              <div className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Not another generic tool.
                <span className="block text-white/30">
                  A system shaped around your workflow.
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className="group flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white text-center text-sm font-bold text-slate-950 transition duration-300 hover:scale-105 hover:bg-blue-100 lg:h-36 lg:w-36"
            >
              <span>
                Start
                <br />
                Project
              </span>

              <ArrowUpRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
