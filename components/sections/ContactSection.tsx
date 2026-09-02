"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Globe,
  Mail,
  MessageSquare,
} from "lucide-react";

import type { SiteContent } from "@/types/site";

type Props = {
  contact: SiteContent["contact"];
};

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactSection({ contact }: Props) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      setStatus("error");
      setErrorMessage("API URL is missing. Please check environment setup.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch(`${apiUrl}/api/v1/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("success");

      setForm({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact error:", error);

      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020617] py-28 lg:py-40"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[8%] h-[580px] w-[580px] rounded-full bg-blue-600/[0.09] blur-[160px]" />

        <div className="absolute right-[-10%] bottom-[0%] h-[680px] w-[680px] rounded-full bg-indigo-600/[0.08] blur-[180px]" />

        <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Closing headline */}
        <div className="grid gap-12 border-b border-white/[0.07] pb-16 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-300">
              {contact.eyebrow}
            </div>

            <h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.4rem]">
              {contact.title}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="max-w-xl text-base leading-8 text-slate-400 lg:justify-self-end"
          >
            {contact.desc}
          </motion.p>
        </div>

        {/* Contact channels */}
        <div className="grid border-b border-white/[0.07] md:grid-cols-3">
          <motion.a
            href="mailto:info@vexnorasoft.com"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="group border-b border-white/[0.07] py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-blue-300">
                <Mail className="h-4 w-4" />
              </div>

              <ArrowUpRight className="h-4 w-4 text-slate-700 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-300" />
            </div>

            <div className="mt-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-600">
              {contact.labels.email}
            </div>

            <div className="mt-2 text-lg font-semibold text-white">
              info@vexnorasoft.com
            </div>
          </motion.a>

          <motion.a
            href="https://vexnorasoft.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="group border-b border-white/[0.07] py-8 md:border-b-0 md:border-r md:px-7"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-blue-300">
                <Globe className="h-4 w-4" />
              </div>

              <ArrowUpRight className="h-4 w-4 text-slate-700 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-300" />
            </div>

            <div className="mt-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-600">
              {contact.labels.website}
            </div>

            <div className="mt-2 text-lg font-semibold text-white">
              vexnorasoft.com
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="py-8 md:px-7 md:last:pr-0"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-blue-300">
              <Building2 className="h-4 w-4" />
            </div>

            <div className="mt-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-600">
              {contact.labels.location}
            </div>

            <div className="mt-2 text-lg font-semibold text-white">Germany</div>
          </motion.div>
        </div>

        {/* Main inquiry area */}
        <div className="mt-20 grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          {/* Left brief */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="lg:sticky lg:top-28"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Start a conversation
            </div>

            <div className="mt-5 max-w-lg text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl">
              Tell us what you’re trying to build, fix or automate.
            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              You don’t need to prepare a formal specification. A short
              description of the challenge, current process and desired outcome
              is enough to start.
            </p>

            <div className="mt-10 space-y-5 border-t border-white/[0.07] pt-7">
              {[
                "No obligation consultation",
                "Technical feasibility discussion",
                "Clear next-step recommendation",
                "Scope and engagement model guidance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-blue-500/[0.04] blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.6rem] border border-white/[0.08] bg-[#050b18]/90 p-6 shadow-[0_50px_150px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-72 w-72 rounded-full bg-blue-500/[0.08] blur-[90px]" />

              <div className="relative">
                <div className="mb-9 flex items-start justify-between gap-6">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-300">
                      Project Inquiry
                    </div>

                    <div className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Tell us about your project.
                    </div>
                  </div>

                  <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-blue-300 sm:flex">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                        {contact.labels.name}
                      </label>

                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        type="text"
                        placeholder={contact.labels.name}
                        required
                        className="w-full border-b border-white/[0.1] bg-transparent px-0 py-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-blue-300/50"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                        {contact.labels.emailInput}
                      </label>

                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        placeholder={contact.labels.emailInput}
                        required
                        className="w-full border-b border-white/[0.1] bg-transparent px-0 py-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-blue-300/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                      {contact.labels.company}
                    </label>

                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      type="text"
                      placeholder={contact.labels.company}
                      className="w-full border-b border-white/[0.1] bg-transparent px-0 py-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-blue-300/50"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                      {contact.labels.service}
                    </label>

                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full border-b border-white/[0.1] bg-transparent px-0 py-4 text-sm text-white outline-none transition focus:border-blue-300/50"
                    >
                      <option value="" className="bg-[#050b18]">
                        {contact.labels.service}
                      </option>

                      {contact.services.map((service) => (
                        <option
                          key={service}
                          value={service}
                          className="bg-[#050b18]"
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                      {contact.labels.message}
                    </label>

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder={contact.labels.message}
                      required
                      className="w-full resize-none border-b border-white/[0.1] bg-transparent px-0 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-slate-700 focus:border-blue-300/50"
                    />
                  </div>

                  <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="max-w-sm text-xs leading-6 text-slate-600">
                      By submitting this form, you allow VexnoraSoft to contact
                      you regarding your inquiry.
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-slate-950 transition duration-300 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "loading"
                        ? contact.labels.sending
                        : contact.labels.submit}

                      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </div>

                  {status === "success" && (
                    <div className="mt-2 flex items-start gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.08] px-4 py-4 text-sm text-emerald-200">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                      Message sent successfully. We will contact you soon.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="mt-2 rounded-2xl border border-red-400/20 bg-red-400/[0.08] px-4 py-4 text-sm text-red-200">
                      {errorMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final brand statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 border-t border-white/[0.07] pt-14"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-5xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Good software starts with
              <span className="block text-white/30">
                understanding the real problem.
              </span>
            </div>

            <a
              href="mailto:info@vexnorasoft.com"
              className="group flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-center text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-white hover:text-slate-950 lg:h-36 lg:w-36"
            >
              <span>
                Say
                <br />
                Hello
              </span>

              <ArrowUpRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
