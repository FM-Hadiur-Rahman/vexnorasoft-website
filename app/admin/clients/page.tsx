"use client";

import { useEffect, useState } from "react";
import {
  Building2,
  Eye,
  EyeOff,
  ExternalLink,
  ImagePlus,
  Pencil,
  Plus,
  RefreshCcw,
  Save,
  Trash2,
  X,
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const emptyForm = {
  companyName: "",
  logoUrl: "",
  website: "",
  industry: "",
  country: "Germany",
  city: "",
  status: "active_client",
  relationship: "Software Development Partner",
  description: "",
  services: [],
  screenshots: [],
  isFeatured: true,
  isVisible: true,
  order: 0,
};

export default function AdminClientsPage() {
  const [clients, setClients] = useState<any[]>([]);
  const [form, setForm] = useState<any>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [serviceInput, setServiceInput] = useState("");
  const [screenshotInput, setScreenshotInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const loadClients = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/api/clients/admin`);
      const data = await res.json();
      setClients(data.clients || []);
    } catch (error) {
      console.error("Failed to load clients", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadClients();
  }, []);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm((prev: any) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleLogoUpload = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);

      const res = await fetch(`${API_URL}/api/uploads/client-logo`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Logo upload failed");
      }

      setForm((prev: any) => ({
        ...prev,
        logoUrl: data.imageUrl,
      }));
    } catch (error) {
      console.error("Logo upload failed", error);
      alert("Logo upload failed.");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };
  const addService = () => {
    if (!serviceInput.trim()) return;
    setForm((prev: any) => ({
      ...prev,
      services: [...prev.services, serviceInput.trim()],
    }));
    setServiceInput("");
  };

  const removeService = (index: number) => {
    setForm((prev: any) => ({
      ...prev,
      services: prev.services.filter((_: any, i: number) => i !== index),
    }));
  };

  const addScreenshot = () => {
    if (!screenshotInput.trim()) return;
    setForm((prev: any) => ({
      ...prev,
      screenshots: [...prev.screenshots, screenshotInput.trim()],
    }));
    setScreenshotInput("");
  };

  const removeScreenshot = (index: number) => {
    setForm((prev: any) => ({
      ...prev,
      screenshots: prev.screenshots.filter((_: any, i: number) => i !== index),
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setSaving(true);

      const url = editingId
        ? `${API_URL}/api/clients/${editingId}`
        : `${API_URL}/api/clients`;

      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          order: Number(form.order),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to save client");
      }

      setForm(emptyForm);
      setEditingId(null);
      await loadClients();
    } catch (error) {
      console.error(error);
      alert("Failed to save client.");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (client: any) => {
    setEditingId(client._id);
    setForm({
      companyName: client.companyName || "",
      logoUrl: client.logoUrl || "",
      website: client.website || "",
      industry: client.industry || "",
      country: client.country || "Germany",
      city: client.city || "",
      status: client.status || "active_client",
      relationship: client.relationship || "Software Development Partner",
      description: client.description || "",
      services: client.services || [],
      screenshots: client.screenshots || [],
      isFeatured: client.isFeatured ?? true,
      isVisible: client.isVisible ?? true,
      order: client.order || 0,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this client?")) return;

    try {
      const res = await fetch(`${API_URL}/api/clients/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      await loadClients();
    } catch {
      alert("Failed to delete client.");
    }
  };

  return (
    <div className="space-y-6 text-white">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Client Management
            </div>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Trusted Clients
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/60">
              Manage companies shown as active clients, partners and case
              studies on the public website.
            </p>
          </div>

          <button
            type="button"
            onClick={loadClients}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            <RefreshCcw size={16} />
            Refresh
          </button>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[440px_1fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-semibold">
              {editingId ? "Edit Client" : "Add Client"}
            </h3>

            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setForm(emptyForm);
                }}
                className="rounded-full border border-white/10 p-2 text-white/60 hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="space-y-4">
            <Input
              label="Company Name"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              required
            />

            <div>
              <span className="mb-2 block text-sm text-white/65">
                Client Logo
              </span>

              <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-black/25 px-4 py-6 text-center transition hover:border-cyan-300/50 hover:bg-black/35">
                <ImagePlus className="mb-2 text-cyan-300" size={24} />
                <span className="text-sm text-white/70">
                  {uploading ? "Uploading logo..." : "Choose client logo"}
                </span>
                <span className="mt-1 text-xs text-white/40">
                  PNG, JPG or WEBP
                </span>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  disabled={uploading}
                  className="hidden"
                />
              </label>

              {form.logoUrl && (
                <div className="relative mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/25 p-4">
                  <img
                    src={form.logoUrl}
                    alt="Client logo"
                    className="h-16 w-16 rounded-2xl bg-white object-contain p-2"
                  />

                  <div className="min-w-0 flex-1 text-xs text-white/50">
                    Logo uploaded successfully
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setForm((prev: any) => ({
                        ...prev,
                        logoUrl: "",
                      }))
                    }
                    className="rounded-full bg-red-500 px-3 py-1 text-xs text-white"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            <Input
              label="Website"
              name="website"
              value={form.website}
              onChange={handleChange}
              placeholder="https://..."
            />

            <Input
              label="Industry"
              name="industry"
              value={form.industry}
              onChange={handleChange}
              placeholder="Bakery & Café"
            />

            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Country"
                name="country"
                value={form.country}
                onChange={handleChange}
              />

              <Input
                label="City"
                name="city"
                value={form.city}
                onChange={handleChange}
              />
            </div>

            <label className="block">
              <span className="mb-2 block text-sm text-white/65">Status</span>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300"
              >
                <option value="active_client">Active Client</option>
                <option value="case_study">Case Study</option>
                <option value="partner">Partner</option>
                <option value="internal">Internal Product</option>
              </select>
            </label>

            <Input
              label="Relationship"
              name="relationship"
              value={form.relationship}
              onChange={handleChange}
              placeholder="Customer App & Loyalty Platform"
            />

            <Textarea
              label="Description"
              name="description"
              value={form.description}
              onChange={handleChange}
            />

            <div>
              <span className="mb-2 block text-sm text-white/65">
                Services Delivered
              </span>

              <div className="flex gap-2">
                <input
                  value={serviceInput}
                  onChange={(e) => setServiceInput(e.target.value)}
                  placeholder="Mobile App"
                  className="flex-1 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-300"
                />

                <button
                  type="button"
                  onClick={addService}
                  className="rounded-2xl bg-cyan-400 px-4 text-sm font-semibold text-slate-950"
                >
                  Add
                </button>
              </div>

              {form.services.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {form.services.map((service: string, index: number) => (
                    <button
                      key={`${service}-${index}`}
                      type="button"
                      onClick={() => removeService(index)}
                      className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {service} ×
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <span className="mb-2 block text-sm text-white/65">
                Screenshot URLs
              </span>

              <div className="flex gap-2">
                <input
                  value={screenshotInput}
                  onChange={(e) => setScreenshotInput(e.target.value)}
                  placeholder="https://..."
                  className="flex-1 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-300"
                />

                <button
                  type="button"
                  onClick={addScreenshot}
                  className="rounded-2xl bg-cyan-400 px-4 text-sm font-semibold text-slate-950"
                >
                  Add
                </button>
              </div>

              {form.screenshots.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {form.screenshots.map((img: string, index: number) => (
                    <div
                      key={`${img}-${index}`}
                      className="group relative overflow-hidden rounded-2xl border border-white/10"
                    >
                      <img
                        src={img}
                        alt="Screenshot"
                        className="h-20 w-full object-cover"
                      />

                      <button
                        type="button"
                        onClick={() => removeScreenshot(index)}
                        className="absolute inset-0 hidden bg-black/60 text-xs text-white group-hover:block"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Input
              label="Order"
              name="order"
              type="number"
              value={form.order}
              onChange={handleChange}
            />

            <div className="grid grid-cols-2 gap-3">
              <Checkbox
                label="Featured"
                name="isFeatured"
                checked={form.isFeatured}
                onChange={handleChange}
              />

              <Checkbox
                label="Visible"
                name="isVisible"
                checked={form.isVisible}
                onChange={handleChange}
              />
            </div>

            <button
              disabled={saving}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-60"
            >
              {editingId ? <Save size={17} /> : <Plus size={17} />}
              {saving
                ? "Saving..."
                : editingId
                  ? "Update Client"
                  : "Create Client"}
            </button>
          </div>
        </form>

        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-semibold">All Clients</h3>

            <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/60">
              {clients.length} items
            </span>
          </div>

          {loading ? (
            <div className="rounded-3xl border border-dashed border-white/10 p-10 text-center text-white/50">
              Loading clients...
            </div>
          ) : clients.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-white/10 p-10 text-center text-white/50">
              No clients added yet.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {clients.map((client) => (
                <div
                  key={client._id}
                  className="rounded-3xl border border-white/10 bg-black/20 p-5"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white text-slate-950">
                        {client.logoUrl ? (
                          <img
                            src={client.logoUrl}
                            alt={client.companyName}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <Building2 size={24} />
                        )}
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold">
                          {client.companyName}
                        </h4>
                        <p className="text-xs text-cyan-300">
                          {client.industry || client.relationship}
                        </p>
                      </div>
                    </div>

                    {client.website && (
                      <a
                        href={client.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/10 p-2 text-white/60 hover:text-cyan-300"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>

                  <p className="line-clamp-3 text-sm leading-6 text-white/55">
                    {client.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {(client.services || [])
                      .slice(0, 4)
                      .map((service: string) => (
                        <span
                          key={service}
                          className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                        >
                          {service}
                        </span>
                      ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-white/60">
                      Order: {client.order}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 ${
                        client.isVisible
                          ? "bg-emerald-400/15 text-emerald-300"
                          : "bg-red-400/15 text-red-300"
                      }`}
                    >
                      {client.isVisible ? "Visible" : "Hidden"}
                    </span>

                    {client.isFeatured && (
                      <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-cyan-300">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="mt-5 flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleEdit(client)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                    >
                      <Pencil size={15} />
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(client._id)}
                      className="rounded-full border border-red-400/20 p-2 text-red-300 hover:bg-red-400/10"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function Input({ label, className = "", ...props }: any) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm text-white/65">{label}</span>
      <input
        {...props}
        className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300"
      />
    </label>
  );
}

function Textarea({ label, className = "", ...props }: any) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm text-white/65">{label}</span>
      <textarea
        {...props}
        rows={4}
        className="w-full resize-none rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300"
      />
    </label>
  );
}

function Checkbox({ label, ...props }: any) {
  return (
    <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/70">
      <input type="checkbox" {...props} className="h-4 w-4 accent-cyan-400" />
      {label}
    </label>
  );
}
