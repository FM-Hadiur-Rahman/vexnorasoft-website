"use client";

import { useEffect, useState } from "react";
import {
  Plus,
  RefreshCcw,
  Pencil,
  Trash2,
  Power,
  GripVertical,
} from "lucide-react";
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type FeatureItem = {
  _id: string;
  name: string;
  key: string;
};

type PresetItem = {
  _id: string;
  label: string;
  color: "amber" | "pink" | "cyan" | "emerald";
  description: string;
  keys: string[];
  isActive: boolean;
  order: number;
};

type PresetFormState = {
  label: string;
  color: "amber" | "pink" | "cyan" | "emerald";
  description: string;
  keys: string[];
  isActive: boolean;
  order: number | "";
};

const emptyForm: PresetFormState = {
  label: "",
  color: "cyan",
  description: "",
  keys: [],
  isActive: true,
  order: 0,
};

const colorOptions: Array<"amber" | "pink" | "cyan" | "emerald"> = [
  "amber",
  "pink",
  "cyan",
  "emerald",
];

function SortablePresetCard({
  preset,
  onEdit,
  onDelete,
  onToggleStatus,
}: {
  preset: PresetItem;
  onEdit: (preset: PresetItem) => void;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: preset._id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                {...attributes}
                {...listeners}
                className="cursor-grab rounded-xl border border-white/10 p-2 text-white/55 active:cursor-grabbing"
                title="Ziehen zum Sortieren"
              >
                <GripVertical className="h-4 w-4" />
              </button>

              <h3 className="text-xl font-semibold text-white">
                {preset.label}
              </h3>

              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/75">
                {preset.color}
              </span>

              <span
                className={`rounded-full px-3 py-1 text-xs ${
                  preset.isActive
                    ? "bg-emerald-400/10 text-emerald-300"
                    : "bg-white/10 text-white/60"
                }`}
              >
                {preset.isActive ? "Aktiv" : "Inaktiv"}
              </span>
            </div>

            <p className="max-w-3xl text-sm leading-7 text-white/65">
              {preset.description || "Keine Beschreibung vorhanden."}
            </p>

            <div className="text-sm text-white/70">
              Reihenfolge:{" "}
              <span className="font-semibold text-white">{preset.order}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {preset.keys.map((key) => (
                <span
                  key={key}
                  className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                >
                  {key}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onToggleStatus(preset._id)}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
            >
              <Power className="h-4 w-4" />
              {preset.isActive ? "Deaktivieren" : "Aktivieren"}
            </button>

            <button
              onClick={() => onEdit(preset)}
              className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
            >
              <Pencil className="h-4 w-4" />
              Bearbeiten
            </button>

            <button
              onClick={() => onDelete(preset._id)}
              className="inline-flex items-center gap-2 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-2 text-sm text-red-200"
            >
              <Trash2 className="h-4 w-4" />
              Löschen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminPresetsPage() {
  const [presets, setPresets] = useState<PresetItem[]>([]);
  const [features, setFeatures] = useState<FeatureItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<PresetFormState>(emptyForm);

  const sensors = useSensors(useSensor(PointerSensor));
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token =
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;

  const loadPresets = async () => {
    try {
      setLoading(true);
      setPageError("");
      setSuccessMessage("");

      if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL fehlt.");
      if (!token) throw new Error("Admin-Token fehlt.");

      const [presetsRes, featuresRes] = await Promise.all([
        fetch(`${apiUrl}/api/v1/presets/admin`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${apiUrl}/api/v1/features/admin`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      const presetsData = await presetsRes.json();
      const featuresData = await featuresRes.json();

      if (!presetsRes.ok) {
        throw new Error(
          presetsData.message || "Presets konnten nicht geladen werden.",
        );
      }

      if (!featuresRes.ok) {
        throw new Error(
          featuresData.message || "Features konnten nicht geladen werden.",
        );
      }

      setPresets(presetsData.data || []);
      setFeatures(featuresData.data || []);
    } catch (error) {
      setPageError(
        error instanceof Error
          ? error.message
          : "Daten konnten nicht geladen werden.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPresets();
  }, []);

  const saveReorder = async (items: PresetItem[]) => {
    try {
      if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL fehlt.");
      if (!token) throw new Error("Admin-Token fehlt.");

      const payload = items.map((item, index) => ({
        id: item._id,
        order: index + 1,
      }));

      const res = await fetch(`${apiUrl}/api/v1/presets/admin/reorder`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ items: payload }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || "Preset-Reihenfolge konnte nicht gespeichert werden.",
        );
      }

      setPresets((prev) =>
        prev.map((item, index) => ({
          ...item,
          order: index + 1,
        })),
      );

      setSuccessMessage("Preset-Reihenfolge wurde gespeichert.");
    } catch (error) {
      setPageError(
        error instanceof Error
          ? error.message
          : "Preset-Reihenfolge konnte nicht gespeichert werden.",
      );
    }
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = presets.findIndex((item) => item._id === active.id);
    const newIndex = presets.findIndex((item) => item._id === over.id);

    const updated = arrayMove(presets, oldIndex, newIndex).map(
      (item, index) => ({
        ...item,
        order: index + 1,
      }),
    );

    setPresets(updated);
    await saveReorder(updated);
  };

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setShowForm(true);
  };

  const openEdit = (preset: PresetItem) => {
    setEditingId(preset._id);
    setForm({
      label: preset.label,
      color: preset.color,
      description: preset.description,
      keys: preset.keys,
      isActive: preset.isActive,
      order: preset.order,
    });
    setShowForm(true);
  };

  const closeForm = () => {
    setEditingId(null);
    setForm(emptyForm);
    setShowForm(false);
  };

  const toggleKey = (key: string) => {
    setForm((prev) => ({
      ...prev,
      keys: prev.keys.includes(key)
        ? prev.keys.filter((item) => item !== key)
        : [...prev.keys, key],
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setSaving(true);
      setPageError("");
      setSuccessMessage("");

      if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL fehlt.");
      if (!token) throw new Error("Admin-Token fehlt.");

      const url = editingId
        ? `${apiUrl}/api/v1/presets/admin/${editingId}`
        : `${apiUrl}/api/v1/presets/admin`;

      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...form,
          order: Number(form.order || 0),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || "Preset konnte nicht gespeichert werden.",
        );
      }

      closeForm();
      await loadPresets();
      setSuccessMessage(
        editingId ? "Preset wurde aktualisiert." : "Preset wurde erstellt.",
      );
    } catch (error) {
      setPageError(
        error instanceof Error
          ? error.message
          : "Preset konnte nicht gespeichert werden.",
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Möchtest du dieses Preset wirklich löschen?",
    );
    if (!confirmed) return;

    try {
      if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL fehlt.");
      if (!token) throw new Error("Admin-Token fehlt.");

      const res = await fetch(`${apiUrl}/api/v1/presets/admin/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Preset konnte nicht gelöscht werden.");
      }

      await loadPresets();
      setSuccessMessage("Preset wurde gelöscht.");
    } catch (error) {
      setPageError(
        error instanceof Error
          ? error.message
          : "Preset konnte nicht gelöscht werden.",
      );
    }
  };

  const handleToggleStatus = async (id: string) => {
    try {
      if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL fehlt.");
      if (!token) throw new Error("Admin-Token fehlt.");

      const res = await fetch(
        `${apiUrl}/api/v1/presets/admin/${id}/toggle-status`,
        {
          method: "PATCH",
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || "Preset-Status konnte nicht geändert werden.",
        );
      }

      await loadPresets();
      setSuccessMessage("Preset-Status wurde aktualisiert.");
    } catch (error) {
      setPageError(
        error instanceof Error
          ? error.message
          : "Preset-Status konnte nicht geändert werden.",
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Preset-Verwaltung
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Presets verwalten
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/60">
              Presets per Drag-and-drop sortieren, bearbeiten und aktivieren.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={loadPresets}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10"
            >
              <RefreshCcw className="h-4 w-4" />
              Neu laden
            </button>

            <button
              onClick={openCreate}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
            >
              <Plus className="h-4 w-4" />
              Neues Preset
            </button>
          </div>
        </div>
      </div>

      {pageError && (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {pageError}
        </div>
      )}

      {successMessage && (
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          {successMessage}
        </div>
      )}

      {showForm && (
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-2xl font-semibold">
            {editingId ? "Preset bearbeiten" : "Neues Preset anlegen"}
          </h3>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={form.label}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, label: e.target.value }))
                }
                placeholder="Preset-Name"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
                required
              />

              <select
                value={form.color}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    color: e.target.value as PresetFormState["color"],
                  }))
                }
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
              >
                {colorOptions.map((color) => (
                  <option key={color} value={color} className="bg-slate-950">
                    {color}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              value={form.description}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, description: e.target.value }))
              }
              placeholder="Beschreibung"
              rows={3}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
            />

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="number"
                value={form.order}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    order: e.target.value === "" ? "" : Number(e.target.value),
                  }))
                }
                placeholder="Reihenfolge"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
              />

              <label className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white/80">
                <input
                  type="checkbox"
                  checked={form.isActive}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, isActive: e.target.checked }))
                  }
                />
                Aktiv
              </label>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
              <div className="mb-4 text-lg font-semibold">
                Features auswählen
              </div>

              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {features.map((feature) => {
                  const checked = form.keys.includes(feature.key);

                  return (
                    <button
                      key={feature._id}
                      type="button"
                      onClick={() => toggleKey(feature.key)}
                      className={`rounded-2xl border p-4 text-left transition ${
                        checked
                          ? "border-cyan-400/30 bg-cyan-400/10"
                          : "border-white/10 bg-slate-950/70 hover:bg-white/5"
                      }`}
                    >
                      <div className="font-medium text-white">
                        {feature.name}
                      </div>
                      <div className="mt-1 text-xs text-white/45">
                        {feature.key}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={saving}
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90 disabled:opacity-60"
              >
                {saving
                  ? "Wird gespeichert..."
                  : editingId
                    ? "Preset aktualisieren"
                    : "Preset erstellen"}
              </button>

              <button
                type="button"
                onClick={closeForm}
                className="rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/80 hover:bg-white/5"
              >
                Abbrechen
              </button>
            </div>
          </form>
        </div>
      )}

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={presets.map((item) => item._id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-4">
            {loading ? (
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center text-white/55">
                Presets werden geladen...
              </div>
            ) : presets.length === 0 ? (
              <div className="rounded-[2rem] border border-dashed border-white/10 bg-white/5 p-10 text-center text-white/55">
                Keine Presets gefunden.
              </div>
            ) : (
              presets.map((preset) => (
                <SortablePresetCard
                  key={preset._id}
                  preset={preset}
                  onEdit={openEdit}
                  onDelete={handleDelete}
                  onToggleStatus={handleToggleStatus}
                />
              ))
            )}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
