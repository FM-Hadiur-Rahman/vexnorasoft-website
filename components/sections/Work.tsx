"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

import { ArrowUpRight, ExternalLink, Maximize2, Target, X } from "lucide-react";

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

  if (text.includes("zonogastro") || text.includes("restaurant")) {
    return "One connected operational platform across ordering, POS, kiosk, payments and restaurant workflows.";
  }

  if (text.includes("vision") || text.includes("security")) {
    return "Real-time AI detection, monitoring and intelligent alert workflows for operational security.";
  }

  if (text.includes("werkstatt") || text.includes("auto")) {
    return "Connected vehicle-service workflows with centralized operational visibility.";
  }

  if (text.includes("baker") || text.includes("kaffee")) {
    return "Connected digital ordering, customer experience and restaurant operations.";
  }

  return "Purpose-built software designed around real operational workflows.";
};

const getCapabilities = (project: Project) => {
  const text = `${project.title} ${project.category}`.toLowerCase();

  if (text.includes("zonogastro") || text.includes("restaurant")) {
    return ["POS", "Self Order", "Payments", "Operations"];
  }

  if (text.includes("vision") || text.includes("security")) {
    return ["AI", "Vision", "Monitoring", "Automation"];
  }

  if (text.includes("werkstatt") || text.includes("auto")) {
    return ["Workflow", "Dashboard", "Operations", "Management"];
  }

  return ["Software", "Cloud", "API", "Automation"];
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

        if (!res.ok) {
          throw new Error("Failed to load projects");
        }

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

  const openGallery = (
    gallery: string[],
    fallbackImage: string,
    selected?: string,
  ) => {
    const images =
      gallery.length > 0 ? gallery : fallbackImage ? [fallbackImage] : [];

    if (!images.length) {
      return;
    }

    setSelectedGallery(images);
    setSelectedImage(selected || images[0]);
  };

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#020617] py-28 lg:py-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[5%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.08] blur-[150px]" />

        <div className="absolute right-[-8%] top-[48%] h-[600px] w-[600px] rounded-full bg-indigo-500/[0.08] blur-[170px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.04),transparent_35%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* SECTION INTRO */}
        <div className="grid gap-12 border-b border-white/[0.07] pb-16 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
              Selected Work / 2026
            </div>

            <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.2rem]">
              Products that move
              <span className="block text-white/35">beyond the screen.</span>
            </h2>
          </motion.div>

          <p className="max-w-xl text-base leading-8 text-slate-400 lg:justify-self-end">
            We design and engineer digital products that connect software,
            operations, infrastructure and real-world business processes.
          </p>
        </div>

        {/* PROJECTS */}
        <div>
          {loading ? (
            <div className="py-28 text-center text-slate-500">
              Loading projects...
            </div>
          ) : projects.length === 0 ? (
            <div className="py-28 text-center text-slate-500">
              No projects found.
            </div>
          ) : (
            projects.map((project, index) => {
              const gallery = project.galleryImages || [];

              const mainImage = project.imageUrl || gallery[0] || "";

              const secondaryImage =
                gallery.find((image) => image !== mainImage) || "";

              const thirdImage =
                gallery.find(
                  (image) => image !== mainImage && image !== secondaryImage,
                ) || "";

              const capabilities = getCapabilities(project);

              const reverse = index % 2 === 1;

              return (
                <motion.article
                  key={project._id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{
                    once: true,
                    margin: "-100px",
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                  className="relative border-b border-white/[0.07] py-24 lg:py-36"
                >
                  {/* GIANT PROJECT NUMBER */}
                  <div
                    className={`pointer-events-none absolute top-14 select-none text-[12rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.018] lg:text-[20rem] ${
                      reverse ? "left-[-2%]" : "right-[-1%]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* PROJECT META */}
                  <div className="mb-12 flex items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <span className="text-xs font-semibold text-blue-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="h-px w-12 bg-white/15" />

                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                        {project.category}
                      </span>
                    </div>

                    <span className="hidden text-xs uppercase tracking-[0.2em] text-slate-700 sm:block">
                      VexnoraSoft / Selected Work
                    </span>
                  </div>

                  {/* PRODUCT VISUAL */}
                  <div
                    className={`grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center ${
                      reverse ? "lg:grid-flow-dense" : ""
                    }`}
                  >
                    <div className={reverse ? "lg:col-start-2" : ""}>
                      <div className="relative min-h-[480px] lg:min-h-[620px]">
                        {/* luminous frame */}
                        <div className="absolute inset-[5%] rounded-[4rem] bg-blue-500/[0.06] blur-3xl" />

                        {/* secondary floating image */}
                        {secondaryImage && (
                          <motion.button
                            type="button"
                            whileHover={{
                              y: -8,
                              rotate: 0,
                            }}
                            onClick={() =>
                              openGallery(gallery, mainImage, secondaryImage)
                            }
                            className={`absolute z-30 hidden overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#07101f] p-1.5 shadow-[0_30px_80px_rgba(0,0,0,0.65)] lg:block ${
                              reverse
                                ? "-right-5 top-6 rotate-[4deg]"
                                : "-left-6 top-10 -rotate-[4deg]"
                            }`}
                          >
                            <Image
                              src={secondaryImage}
                              alt={project.title}
                              width={280}
                              height={190}
                              className="h-[145px] w-[230px] rounded-[1.15rem] object-cover"
                            />
                          </motion.button>
                        )}

                        {/* MAIN PRODUCT */}
                        <motion.div
                          whileHover={{
                            y: -6,
                          }}
                          transition={{
                            duration: 0.35,
                          }}
                          className="absolute left-1/2 top-1/2 z-20 w-[96%] -translate-x-1/2 -translate-y-1/2"
                        >
                          <div className="relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-[#050b18] shadow-[0_50px_160px_rgba(0,0,0,0.75)]">
                            <div className="absolute inset-x-0 top-0 z-30 h-24 bg-gradient-to-b from-blue-400/[0.05] to-transparent" />

                            <ProjectMockupFrame
                              title={project.title}
                              mainImage={mainImage}
                              mobileImage={secondaryImage}
                              onClick={() =>
                                openGallery(gallery, mainImage, mainImage)
                              }
                            />
                          </div>
                        </motion.div>

                        {/* third floating screen */}
                        {thirdImage && (
                          <motion.button
                            type="button"
                            whileHover={{
                              y: -10,
                              rotate: 0,
                            }}
                            onClick={() =>
                              openGallery(gallery, mainImage, thirdImage)
                            }
                            className={`absolute bottom-2 z-40 hidden overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#07101f] p-1.5 shadow-[0_35px_90px_rgba(0,0,0,0.7)] lg:block ${
                              reverse
                                ? "-left-8 -rotate-[4deg]"
                                : "-right-8 rotate-[4deg]"
                            }`}
                          >
                            <Image
                              src={thirdImage}
                              alt={project.title}
                              width={270}
                              height={180}
                              className="h-[140px] w-[225px] rounded-[1.2rem] object-cover"
                            />
                          </motion.button>
                        )}

                        {/* view gallery circle */}
                        {mainImage && (
                          <button
                            type="button"
                            onClick={() =>
                              openGallery(gallery, mainImage, mainImage)
                            }
                            className="absolute bottom-[7%] left-[7%] z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#020617]/90 text-white shadow-xl backdrop-blur-xl transition hover:scale-110 hover:bg-white hover:text-slate-950"
                          >
                            <Maximize2 className="h-5 w-5" />
                          </button>
                        )}
                      </div>

                      {/* thumbnail rail */}
                      {gallery.length > 0 && (
                        <div className="mt-4 flex justify-center gap-2">
                          {gallery.slice(0, 5).map((image, galleryIndex) => (
                            <button
                              type="button"
                              key={`${project._id}-${galleryIndex}`}
                              onClick={() =>
                                openGallery(gallery, mainImage, image)
                              }
                              className="group relative h-2 w-12 overflow-hidden rounded-full bg-white/10 transition hover:w-20"
                            >
                              <div className="absolute inset-0 origin-left scale-x-0 bg-blue-300 transition group-hover:scale-x-100" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* EDITORIAL CONTENT */}
                    <div
                      className={reverse ? "lg:col-start-1 lg:row-start-1" : ""}
                    >
                      <div className="max-w-xl">
                        <div className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
                          {project.highlightText || "Digital Product"}
                        </div>

                        <h3 className="text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-[4rem]">
                          {project.title}
                        </h3>

                        <p className="mt-8 text-base leading-8 text-slate-400">
                          {project.description}
                        </p>

                        {/* outcome */}
                        <div className="mt-10 border-y border-white/[0.08] py-6">
                          <div className="flex gap-4">
                            <Target className="mt-1 h-5 w-5 shrink-0 text-blue-300" />

                            <div>
                              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                Business Outcome
                              </div>

                              <p className="mt-3 text-sm leading-7 text-slate-300">
                                {getOutcome(project)}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* capability words */}
                        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                          {capabilities.map((capability, capabilityIndex) => (
                            <div
                              key={capability}
                              className="flex items-center gap-2 text-sm text-slate-300"
                            >
                              <span className="text-xs text-blue-300">
                                0{capabilityIndex + 1}
                              </span>

                              {capability}
                            </div>
                          ))}
                        </div>

                        {/* actions */}
                        <div className="mt-10 flex flex-wrap items-center gap-6">
                          {mainImage && (
                            <button
                              type="button"
                              onClick={() =>
                                openGallery(gallery, mainImage, mainImage)
                              }
                              className="group inline-flex items-center gap-3 text-sm font-semibold text-white"
                            >
                              Explore screens
                              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition group-hover:border-blue-300/30 group-hover:bg-blue-500/10">
                                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </span>
                            </button>
                          )}

                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-3 text-sm font-semibold text-slate-400 transition hover:text-white"
                            >
                              Live project
                              <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })
          )}
        </div>

        {/* END CTA */}
        {!loading && projects.length > 0 && (
          <div className="relative py-28 lg:py-36">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
                  Your project could be next.
                </div>

                <div className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
                  Have an operational challenge?
                  <span className="block text-white/30">
                    Build the system around it.
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
          </div>
        )}
      </div>

      {/* GALLERY */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-7xl"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-14 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white hover:text-slate-950"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#030817] shadow-[0_50px_180px_rgba(0,0,0,0.9)]">
              <Image
                src={selectedImage}
                alt="Project gallery"
                width={1800}
                height={1100}
                className="max-h-[78vh] w-full object-contain"
              />
            </div>

            {selectedGallery.length > 1 && (
              <div className="mt-5 flex justify-center gap-3 overflow-x-auto">
                {selectedGallery.map((image, index) => (
                  <button
                    type="button"
                    key={`${image}-${index}`}
                    onClick={() => setSelectedImage(image)}
                    className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border transition ${
                      selectedImage === image
                        ? "border-blue-300"
                        : "border-white/10 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Project ${index + 1}`}
                      width={160}
                      height={110}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
