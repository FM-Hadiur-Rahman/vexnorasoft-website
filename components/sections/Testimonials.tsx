"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { SiteContent } from "@/types/site";

type Props = {
  testimonials: SiteContent["testimonials"];
};

export default function Testimonials({ testimonials }: Props) {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          {testimonials.eyebrow}
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {testimonials.title}
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.items.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
          >
            <div className="mb-5 flex items-center gap-1 text-cyan-300">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-cyan-300" />
              ))}
            </div>
            <p className="text-sm leading-7 text-white/75">“{item.quote}”</p>
            <div className="mt-6 border-t border-white/10 pt-5">
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-white/50">{item.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
