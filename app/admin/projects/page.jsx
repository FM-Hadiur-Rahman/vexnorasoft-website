"use client";

import { useEffect, useState } from "react";
import {
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
  title: "",
  category: "",
  description: "",
  imageUrl: "",
  galleryImages: [],
  badgeText: "",
  highlightText: "Individuell anpassbar für Ihr Unternehmen",
  link: "",
  isFeatured: false,
  isActive: true,
  order: 0,
};

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [galleryUploading, setGalleryUploading] = useState(false);

  const loadProjects = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/api/projects/admin`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to load projects");
      }

      setProjects(data.projects || []);
    } catch (error) {
      console.error("Failed to load projects", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);

      const res = await fetch(`${API_URL}/api/uploads/project-image`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Image upload failed");
      }

      setForm((prev) => ({
        ...prev,
        imageUrl: data.imageUrl,
      }));
    } catch (error) {
      console.error("Image upload failed", error);
      alert("Image upload failed.");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const handleGalleryUpload = async (e) => {
    const files = Array.from(e.target.files || []);

    if (!files.length) return;

    const formData = new FormData();

    files.forEach((file) => {
      formData.append("images", file);
    });

    try {
      setGalleryUploading(true);

      const res = await fetch(`${API_URL}/api/uploads/project-gallery`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Gallery upload failed");
      }

      setForm((prev) => ({
        ...prev,
        galleryImages: [...(prev.galleryImages || []), ...(data.images || [])],
      }));
    } catch (error) {
      console.error("Gallery upload failed", error);
      alert("Gallery upload failed.");
    } finally {
      setGalleryUploading(false);
      e.target.value = "";
    }
  };

  const removeMainImage = () => {
    setForm((prev) => ({
      ...prev,
      imageUrl: "",
    }));
  };

  const removeGalleryImage = (index) => {
    setForm((prev) => ({
      ...prev,
      galleryImages: prev.galleryImages.filter((_, i) => i !== index),
    }));
  };

  const makeGalleryImageMain = (img) => {
    setForm((prev) => ({
      ...prev,
      imageUrl: img,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      const url = editingId
        ? `${API_URL}/api/projects/${editingId}`
        : `${API_URL}/api/projects`;

      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          order: Number(form.order),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to save project");
      }

      setForm(emptyForm);
      setEditingId(null);

      await loadProjects();
    } catch (error) {
      console.error("Failed to save project", error);
      alert("Failed to save project.");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (project) => {
    setEditingId(project._id);

    setForm({
      title: project.title || "",
      category: project.category || "",
      description: project.description || "",
      imageUrl: project.imageUrl || "",
      galleryImages: project.galleryImages || [],
      badgeText: project.badgeText || "",
      highlightText:
        project.highlightText || "Individuell anpassbar für Ihr Unternehmen",
      link: project.link || "",
      isFeatured: project.isFeatured || false,
      isActive: project.isActive ?? true,
      order: project.order || 0,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this project?",
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_URL}/api/projects/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to delete project");
      }

      await loadProjects();
    } catch (error) {
      console.error("Failed to delete project", error);
      alert("Failed to delete project.");
    }
  };

  const handleToggle = async (id) => {
    try {
      const res = await fetch(`${API_URL}/api/projects/${id}/toggle`, {
        method: "PATCH",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to update project status");
      }

      await loadProjects();
    } catch (error) {
      console.error("Failed to toggle project", error);
      alert("Failed to update project status.");
    }
  };

  return (
    <div className="space-y-6 text-white">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Portfolio manager
            </div>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Website Projects
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/60">
              Add, edit, hide, delete and reorder the project cards shown on the
              public website.
            </p>
          </div>

          <button
            type="button"
            onClick={loadProjects}
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
              {editingId ? "Edit Project" : "Add Project"}
            </h3>

            {editingId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="rounded-full border border-white/10 p-2 text-white/60 hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="space-y-4">
            <Input
              label="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />

            <Input
              label="Category"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="KI Sicherheitslösung"
              required
            />

            <Textarea
              label="Description"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
            />

            <div>
              <span className="mb-2 block text-sm text-white/65">
                Main Project Image
              </span>

              <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-black/25 px-4 py-6 text-center transition hover:border-cyan-300/50 hover:bg-black/35">
                <ImagePlus className="mb-2 text-cyan-300" size={24} />

                <span className="text-sm text-white/70">
                  {uploading ? "Uploading image..." : "Choose main image"}
                </span>

                <span className="mt-1 text-xs text-white/40">
                  PNG, JPG or WEBP
                </span>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="hidden"
                />
              </label>

              {form.imageUrl && (
                <div className="relative mt-4 overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={form.imageUrl}
                    alt="Project preview"
                    className="h-44 w-full object-cover"
                  />

                  <button
                    type="button"
                    onClick={removeMainImage}
                    className="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs text-white"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            <div>
              <span className="mb-2 block text-sm text-white/65">
                Gallery Images
              </span>

              <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-black/25 px-4 py-6 text-center transition hover:border-cyan-300/50 hover:bg-black/35">
                <ImagePlus className="mb-2 text-cyan-300" size={24} />

                <span className="text-sm text-white/70">
                  {galleryUploading
                    ? "Uploading gallery images..."
                    : "Choose multiple gallery images"}
                </span>

                <span className="mt-1 text-xs text-white/40">
                  You can select more than one image
                </span>

                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleGalleryUpload}
                  disabled={galleryUploading}
                  className="hidden"
                />
              </label>

              {form.galleryImages?.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {form.galleryImages.map((img, index) => (
                    <div
                      key={`${img}-${index}`}
                      className="group relative overflow-hidden rounded-2xl border border-white/10"
                    >
                      <img
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        className="h-24 w-full object-cover"
                      />

                      <div className="absolute inset-0 hidden items-center justify-center gap-1 bg-black/60 p-1 group-hover:flex">
                        <button
                          type="button"
                          onClick={() => makeGalleryImageMain(img)}
                          className="rounded-full bg-cyan-400 px-2 py-1 text-[10px] font-semibold text-slate-950"
                        >
                          Main
                        </button>

                        <button
                          type="button"
                          onClick={() => removeGalleryImage(index)}
                          className="rounded-full bg-red-500 px-2 py-1 text-[10px] font-semibold text-white"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Input
              label="Badge Text"
              name="badgeText"
              value={form.badgeText}
              onChange={handleChange}
              placeholder="Reise- & Buchungsplattform"
            />

            <Input
              label="Highlight Text"
              name="highlightText"
              value={form.highlightText}
              onChange={handleChange}
            />

            <Input
              label="Project Link"
              name="link"
              value={form.link}
              onChange={handleChange}
              placeholder="https://..."
            />

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
                label="Active"
                name="isActive"
                checked={form.isActive}
                onChange={handleChange}
              />
            </div>

            <button
              disabled={saving || uploading || galleryUploading}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {editingId ? <Save size={17} /> : <Plus size={17} />}

              {saving
                ? "Saving..."
                : editingId
                  ? "Update Project"
                  : "Create Project"}
            </button>
          </div>
        </form>

        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-semibold">All Projects</h3>

            <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/60">
              {projects.length} items
            </span>
          </div>

          {loading ? (
            <div className="rounded-3xl border border-dashed border-white/10 p-10 text-center text-white/50">
              Loading projects...
            </div>
          ) : projects.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-white/10 p-10 text-center text-white/50">
              No projects added yet.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((project) => {
                const gallery = project.galleryImages || [];

                const previewImage = project.imageUrl || gallery[0] || "";

                return (
                  <div
                    key={project._id}
                    className="overflow-hidden rounded-3xl border border-white/10 bg-black/20"
                  >
                    {previewImage && (
                      <img
                        src={previewImage}
                        alt={project.title}
                        className="h-40 w-full object-cover"
                      />
                    )}

                    <div className="p-5">
                      <div className="mb-2 text-xs text-cyan-300">
                        {project.category}
                      </div>

                      <h4 className="text-lg font-semibold">{project.title}</h4>

                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/55">
                        {project.description}
                      </p>

                      {gallery.length > 0 && (
                        <div className="mt-4 flex gap-2 overflow-hidden">
                          {gallery.slice(0, 4).map((img, index) => (
                            <img
                              key={`${img}-${index}`}
                              src={img}
                              alt={`Gallery ${index + 1}`}
                              className="h-12 w-14 rounded-xl object-cover"
                            />
                          ))}
                        </div>
                      )}

                      <div className="mt-4 flex flex-wrap gap-2 text-xs">
                        <span className="rounded-full bg-white/10 px-3 py-1 text-white/60">
                          Order: {project.order}
                        </span>

                        <span
                          className={`rounded-full px-3 py-1 ${
                            project.isActive
                              ? "bg-emerald-400/15 text-emerald-300"
                              : "bg-red-400/15 text-red-300"
                          }`}
                        >
                          {project.isActive ? "Active" : "Hidden"}
                        </span>

                        {project.isFeatured && (
                          <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-cyan-300">
                            Featured
                          </span>
                        )}

                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-white/70 hover:text-cyan-300"
                          >
                            Link
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>

                      <div className="mt-5 flex gap-2">
                        <button
                          type="button"
                          onClick={() => handleEdit(project)}
                          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                        >
                          <Pencil size={15} />
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() => handleToggle(project._id)}
                          className="rounded-full border border-white/10 p-2 text-white/70 hover:bg-white/10 hover:text-white"
                        >
                          {project.isActive ? (
                            <EyeOff size={17} />
                          ) : (
                            <Eye size={17} />
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(project._id)}
                          className="rounded-full border border-red-400/20 p-2 text-red-300 hover:bg-red-400/10"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function Input({ label, className = "", ...props }) {
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

function Textarea({ label, className = "", ...props }) {
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

function Checkbox({ label, ...props }) {
  return (
    <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/70">
      <input type="checkbox" {...props} className="h-4 w-4 accent-cyan-400" />

      {label}
    </label>
  );
}
