"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink, Layers3, Target, X } from "lucide-react";
import ProjectMockupFrame from "@/components/sections/components/ProjectMockupFrame";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

type Project = {
  _id: string;
  title: string;
  category: string;
  description: string;
  imageUrl?: string;
  galleryImages?: string[];
  highlightText?: string;
  link?: string;
  order: number;
};

const getOutcome = (project: Project) => {
  const text = `${project.title} ${project.category}`.toLowerCase();

  if (text.includes("zono") || text.includes("vision")) {
    return "Real-time AI detection, alert workflow and security monitoring.";
  }

  if (text.includes("werkstatt") || text.includes("auto")) {
    return "Vehicle service management, repair workflow and operational overview.";
  }

  if (text.includes("baker") || text.includes("kaffee")) {
    return "Customer ordering, loyalty, POS integration and restaurant operations.";
  }

  return "Custom software platform built for real business operations.";
};

export default function Work() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedGallery, setSelectedGallery] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/projects`);
        const data = await res.json();
        setProjects(data.projects || []);
      } catch (error) {
        console.error("Failed to load projects", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <section
      id="work"
      className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-blue-950/25 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl lg:p-10">
        <div className="absolute right-[-15%] top-[-20%] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute left-[-12%] bottom-[-22%] h-80 w-80 rounded-full bg-sky-400/8 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
              Featured Case Studies
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Real platforms built for daily business operations.
            </h2>
          </motion.div>

          <p className="max-w-xl leading-8 text-slate-300">
            From AI security platforms to operational business software, we
            build digital systems that are used in real workflows.
          </p>
        </div>

        <div className="relative z-10">
          {loading ? (
            <div className="mt-12 rounded-[2rem] border border-dashed border-white/10 p-16 text-center text-slate-400">
              Projekte werden geladen...
            </div>
          ) : projects.length === 0 ? (
            <div className="mt-12 rounded-[2rem] border border-dashed border-white/10 p-16 text-center text-slate-400">
              Keine Projekte gefunden.
            </div>
          ) : (
            <div className="mt-14 space-y-10">
              {projects.map((project, index) => {
                const gallery = project.galleryImages || [];
                const mainImage = project.imageUrl || gallery[0] || "";
                const mobileImage = gallery.find((img) => img !== mainImage);
                const reversed = index % 2 === 1;

                return (
                  <motion.article
                    key={project._id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#020617]/70 p-5 shadow-2xl shadow-black/25 transition hover:border-blue-300/35"
                  >
                    <div
                      className={`grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center ${
                        reversed ? "lg:grid-flow-dense" : ""
                      }`}
                    >
                      <div className={reversed ? "lg:col-start-2" : ""}>
                        <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b1220]">
                          <ProjectMockupFrame
                            title={project.title}
                            mainImage={mainImage}
                            mobileImage={mobileImage}
                            onClick={() => {
                              if (!mainImage) return;
                              setSelectedGallery(
                                gallery.length > 0 ? gallery : [mainImage],
                              );
                              setSelectedImage(mainImage);
                            }}
                          />
                        </div>
                      </div>

                      <div
                        className={
                          reversed ? "lg:col-start-1 lg:row-start-1" : ""
                        }
                      >
                        <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-6 lg:p-8">
                          <div className="text-sm font-bold uppercase tracking-[0.24em] text-blue-300">
                            {project.category}
                          </div>

                          <h3 className="mt-4 text-3xl font-black leading-tight text-white md:text-4xl">
                            {project.title}
                          </h3>

                          <div className="mt-6 rounded-2xl border border-white/10 bg-[#020617]/70 p-5">
                            <div className="mb-2 flex items-center gap-2 text-sm font-bold text-white">
                              <Target className="h-4 w-4 text-blue-300" />
                              Business Outcome
                            </div>

                            <p className="text-sm leading-7 text-slate-400">
                              {getOutcome(project)}
                            </p>
                          </div>

                          <p className="mt-6 text-sm leading-7 text-slate-400">
                            {project.description}
                          </p>

                          {gallery.length > 0 && (
                            <div className="mt-6 flex gap-2 overflow-hidden">
                              {gallery.slice(0, 5).map((img, i) => (
                                <button
                                  type="button"
                                  key={`${project._id}-${i}`}
                                  onClick={() => {
                                    setSelectedGallery(gallery);
                                    setSelectedImage(img);
                                  }}
                                  className="relative h-16 w-20 overflow-hidden rounded-xl border border-white/10 transition hover:border-blue-300/50"
                                >
                                  <Image
                                    src={img}
                                    alt={`${project.title} ${i + 1}`}
                                    width={140}
                                    height={100}
                                    className="h-full w-full object-cover"
                                  />

                                  {i === 4 && gallery.length > 5 && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-xs font-semibold text-white">
                                      +{gallery.length - 5}
                                    </div>
                                  )}
                                </button>
                              ))}
                            </div>
                          )}

                          <div className="mt-8 flex flex-wrap gap-3">
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-50"
                              >
                                View Case Study
                                <ExternalLink size={15} />
                              </a>
                            )}

                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-300">
                              <Layers3 className="h-4 w-4 text-blue-300" />
                              {project.highlightText ||
                                "Custom Enterprise Platform"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl rounded-[2rem] border border-white/10 bg-[#020617] p-4 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-slate-950 transition hover:scale-105"
            >
              <X size={20} />
            </button>

            <div className="overflow-hidden rounded-[1.5rem] bg-black/30">
              <Image
                src={selectedImage}
                alt="Project gallery"
                width={1400}
                height={800}
                className="max-h-[70vh] w-full object-contain"
              />
            </div>

            {selectedGallery.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                {selectedGallery.map((img, index) => (
                  <button
                    key={`${img}-${index}`}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`h-20 w-28 shrink-0 overflow-hidden rounded-xl border transition ${
                      selectedImage === img
                        ? "border-blue-300"
                        : "border-white/10"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Gallery thumbnail ${index + 1}`}
                      width={160}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
