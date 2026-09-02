"use client";

import { useState } from "react";
import { Building2, Globe, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
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
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            {contact.eyebrow}
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/65">{contact.desc}</p>

          <div className="mt-10 space-y-4 text-white/75">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-2 flex items-center gap-2 text-cyan-300">
                <Mail className="h-4 w-4" /> {contact.labels.email}
              </div>
              <div>info@vexnorasoft.com</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-2 flex items-center gap-2 text-cyan-300">
                <Globe className="h-4 w-4" /> {contact.labels.website}
              </div>
              <div>vexnorasoft.com</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-2 flex items-center gap-2 text-cyan-300">
                <Building2 className="h-4 w-4" /> {contact.labels.location}
              </div>
              <div>Germany</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:p-8"
        >
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder={contact.labels.name}
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 text-white outline-none placeholder:text-white/35"
                required
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder={contact.labels.emailInput}
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 text-white outline-none placeholder:text-white/35"
                required
              />
            </div>

            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              type="text"
              placeholder={contact.labels.company}
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 text-white outline-none placeholder:text-white/35"
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 text-white outline-none"
              required
            >
              <option value="">{contact.labels.service}</option>
              {contact.services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              placeholder={contact.labels.message}
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 text-white outline-none placeholder:text-white/35"
              required
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading"
                ? contact.labels.sending
                : contact.labels.submit}
              <MessageSquare className="h-4 w-4" />
            </button>

            {status === "success" && (
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                ✅ Message sent successfully. We will contact you soon.
              </div>
            )}

            {status === "error" && (
              <div className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                ❌ {errorMessage}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
