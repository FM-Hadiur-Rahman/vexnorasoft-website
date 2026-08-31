"use client";

import { motion } from "framer-motion";
import type { SiteContent } from "@/types/site";

type Props = {
  about: SiteContent["about"];
  banner: SiteContent["banner"];
};

export default function WhyChooseUs({ about, banner }: Props) {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-8 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-8"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            {about.eyebrow}
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {about.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/65">{about.desc}</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {about.points.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                <p className="text-sm leading-7 text-white/80">{benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-cyan-400/10 via-white/[0.04] to-indigo-400/10 p-8 lg:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-cyan-200">
                {banner.eyebrow}
              </div>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                {banner.title}
              </h3>
              <p className="mt-4 max-w-2xl text-white/70">{banner.desc}</p>
            </div>
            <a
              href="#contact"
              className="rounded-2xl bg-white px-7 py-4 text-center text-sm font-semibold text-slate-950 transition hover:opacity-90"
            >
              {banner.cta}
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
