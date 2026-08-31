"use client";

import { useEffect, useState } from "react";
import { ImagePlus, Pencil, Plus, RefreshCcw, Trash2 } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

type TeamMember = {
  _id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  tags: string[];
  isActive: boolean;
  order: number;
};

type FormState = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  tagsText: string;
  isActive: boolean;
  order: number;
};

const emptyForm: FormState = {
  name: "",
  role: "",
  bio: "",
  imageUrl: "",
  tagsText: "",
  isActive: true,
  order: 0,
};

export default function AdminTeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [pageError, setPageError] = useState("");

  const getToken = () =>
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;

  const loadMembers = async () => {
    try {
      setLoading(true);
      setPageError("");

      const token = getToken();
      if (!token) {
        setPageError("Missing admin token");
        return;
      }

      const res = await fetch(`${API_URL}/api/v1/team/admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to load team members");
      }

      setMembers(data.data || []);
    } catch (error) {
      setPageError(
        error instanceof Error ? error.message : "Failed to load team members",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMembers();
  }, []);

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setShowForm(true);
  };

  const openEdit = (member: TeamMember) => {
    setEditingId(member._id);
    setForm({
      name: member.name,
      role: member.role,
      bio: member.bio,
      imageUrl: member.imageUrl,
      tagsText: member.tags.join(", "),
      isActive: member.isActive,
      order: member.order,
    });
    setShowForm(true);
  };

  const handleUpload = async (file: File) => {
    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("image", file);

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
      alert(error instanceof Error ? error.message : "Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setSaving(true);

      const token = getToken();
      if (!token) throw new Error("Missing admin token");

      const payload = {
        name: form.name,
        role: form.role,
        bio: form.bio,
        imageUrl: form.imageUrl,
        tags: form.tagsText
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        isActive: form.isActive,
        order: form.order,
      };

      const url = editingId
        ? `${API_URL}/api/v1/team/admin/${editingId}`
        : `${API_URL}/api/v1/team/admin`;

      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to save team member");
      }

      setShowForm(false);
      setEditingId(null);
      setForm(emptyForm);
      await loadMembers();
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("Delete this team member?");
    if (!confirmed) return;

    try {
      const token = getToken();
      if (!token) throw new Error("Missing admin token");

      const res = await fetch(`${API_URL}/api/v1/team/admin/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to delete team member");
      }

      await loadMembers();
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to delete");
    }
  };

  const handleToggleStatus = async (id: string) => {
    try {
      const token = getToken();
      if (!token) throw new Error("Missing admin token");

      const res = await fetch(
        `${API_URL}/api/v1/team/admin/${id}/toggle-status`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to update status");
      }

      await loadMembers();
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to update");
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Team management
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Team members
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/60">
              Add, edit, publish, and manage public team members.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={loadMembers}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10"
            >
              <RefreshCcw className="h-4 w-4" />
              Refresh
            </button>

            <button
              onClick={openCreate}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
            >
              <Plus className="h-4 w-4" />
              Add Member
            </button>
          </div>
        </div>
      </div>

      {pageError && (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {pageError}
        </div>
      )}

      {showForm && (
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-xl font-semibold">
            {editingId ? "Edit Team Member" : "Create Team Member"}
          </h3>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Name"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
                required
              />

              <input
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                placeholder="Role"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
                required
              />
            </div>

            <textarea
              value={form.bio}
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
              placeholder="Bio"
              rows={4}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
            />

            <div className="grid gap-4 md:grid-cols-[1fr_auto]">
              <input
                value={form.imageUrl}
                onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                placeholder="Image URL"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
              />

              <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-200 transition hover:bg-cyan-400/20">
                <ImagePlus className="h-4 w-4" />
                {uploading ? "Uploading..." : "Upload image"}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleUpload(file);
                    e.target.value = "";
                  }}
                />
              </label>
            </div>

            {form.imageUrl && (
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-4">
                <img
                  src={form.imageUrl}
                  alt="Preview"
                  className="h-64 w-full rounded-2xl object-cover"
                />
              </div>
            )}

            <input
              value={form.tagsText}
              onChange={(e) => setForm({ ...form, tagsText: e.target.value })}
              placeholder="Tags separated by comma, e.g. React, Node.js, AI"
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
            />

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="number"
                value={form.order}
                onChange={(e) =>
                  setForm({ ...form, order: Number(e.target.value) })
                }
                placeholder="Order"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
              />

              <label className="flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/80">
                <input
                  type="checkbox"
                  checked={form.isActive}
                  onChange={(e) =>
                    setForm({ ...form, isActive: e.target.checked })
                  }
                />
                Active / visible on public website
              </label>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={saving}
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90 disabled:opacity-60"
              >
                {saving
                  ? "Saving..."
                  : editingId
                    ? "Update Member"
                    : "Create Member"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                  setForm(emptyForm);
                }}
                className="rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/80 hover:bg-white/5"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid gap-4 xl:grid-cols-2">
        {loading ? (
          <div className="text-white/60">Loading team members...</div>
        ) : members.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-white/10 bg-white/5 p-10 text-center text-white/55">
            No team members found.
          </div>
        ) : (
          members.map((member) => (
            <div
              key={member._id}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <div className="grid gap-5 md:grid-cols-[160px_1fr]">
                <div className="overflow-hidden rounded-3xl bg-slate-950">
                  {member.imageUrl ? (
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="h-44 w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-44 items-center justify-center text-3xl font-bold text-cyan-300">
                      {member.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-semibold">{member.name}</h3>

                    {!member.isActive && (
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                        Hidden
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-sm text-cyan-300">{member.role}</p>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {member.bio}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <button
                      onClick={() => openEdit(member)}
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
                    >
                      <Pencil className="h-4 w-4" />
                      Edit
                    </button>

                    <button
                      onClick={() => handleToggleStatus(member._id)}
                      className="rounded-2xl border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
                    >
                      {member.isActive ? "Hide" : "Show"}
                    </button>

                    <button
                      onClick={() => handleDelete(member._id)}
                      className="inline-flex items-center gap-2 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-2 text-sm text-red-200"
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
