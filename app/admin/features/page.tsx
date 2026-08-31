"use client";

import { useEffect, useState } from "react";
import {
  Plus,
  RefreshCcw,
  Pencil,
  Trash2,
  Search,
  Settings2,
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
  description: string;
  category: string;
  price: number;
  isActive: boolean;
  order: number;
};

type FeatureFormState = {
  name: string;
  key: string;
  description: string;
  category: string;
  price: number | "";
  isActive: boolean;
  order: number | "";
};

const emptyForm: FeatureFormState = {
  name: "",
  key: "",
  description: "",
  category: "Basis",
  price: "",
  isActive: true,
  order: 0,
};

const featureCategories = [
  "Basis",
  "Inhalte",
  "Marketing",
  "Admin",
  "Formulare & Leads",
  "Buchung",
  "E-Commerce",
  "Lieferung & Bestellung",
  "Zahlung",
  "Analytik",
  "Deployment",
  "Sicherheit",
  "Kommunikation",
  "Support",
];

function SortableFeatureCard({
  feature,
  onEdit,
  onDelete,
  onToggleStatus,
}: {
  feature: FeatureItem;
  onEdit: (feature: FeatureItem) => void;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: feature._id });

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
                {feature.name}
              </h3>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                {feature.category}
              </span>

              <span
                className={`rounded-full px-3 py-1 text-xs ${
                  feature.isActive
                    ? "bg-emerald-400/10 text-emerald-300"
                    : "bg-white/10 text-white/60"
                }`}
              >
                {feature.isActive ? "Aktiv" : "Inaktiv"}
              </span>
            </div>

            <div className="text-sm text-white/50">
              Key: <span className="text-white/75">{feature.key}</span>
            </div>

            <p className="max-w-3xl text-sm leading-7 text-white/65">
              {feature.description || "Keine Beschreibung vorhanden."}
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-white/70">
              <div>
                Preis:{" "}
                <span className="font-semibold text-white">
                  €{feature.price}
                </span>
              </div>
              <div>
                Reihenfolge:{" "}
                <span className="font-semibold text-white">
                  {feature.order}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onToggleStatus(feature._id)}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
            >
              <Power className="h-4 w-4" />
              {feature.isActive ? "Deaktivieren" : "Aktivieren"}
            </button>

            <button
              onClick={() => onEdit(feature)}
              className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
            >
              <Pencil className="h-4 w-4" />
              Bearbeiten
            </button>

            <button
              onClick={() => onDelete(feature._id)}
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

export default function AdminFeaturesPage() {
  const [features, setFeatures] = useState<FeatureItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [filterCategory, setFilterCategory] = useState("");
  const [search, setSearch] = useState("");
  const [form, setForm] = useState<FeatureFormState>(emptyForm);

  const sensors = useSensors(useSensor(PointerSensor));
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token =
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;

  const loadFeatures = async () => {
    try {
      setLoading(true);
      setPageError("");
      setSuccessMessage("");

      if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL fehlt.");
      if (!token) throw new Error("Admin-Token fehlt.");

      const params = new URLSearchParams();
      if (filterCategory.trim()) params.set("category", filterCategory.trim());
      if (search.trim()) params.set("search", search.trim());

      const query = params.toString() ? `?${params.toString()}` : "";

      const res = await fetch(`${apiUrl}/api/v1/features/admin${query}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || "Features konnten nicht geladen werden.",
        );
      }

      setFeatures(data.data || []);
    } catch (error) {
      setPageError(
        error instanceof Error
          ? error.message
          : "Features konnten nicht geladen werden.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFeatures();
  }, [filterCategory, search]);

  const saveReorder = async (items: FeatureItem[]) => {
    try {
      if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL fehlt.");
      if (!token) throw new Error("Admin-Token fehlt.");

      const payload = items.map((item, index) => ({
        id: item._id,
        order: index + 1,
      }));

      const res = await fetch(`${apiUrl}/api/v1/features/admin/reorder`, {
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
          data.message || "Reihenfolge konnte nicht gespeichert werden.",
        );
      }

      setFeatures((prev) =>
        prev.map((item, index) => ({
          ...item,
          order: index + 1,
        })),
      );

      setSuccessMessage("Reihenfolge wurde gespeichert.");
    } catch (error) {
      setPageError(
        error instanceof Error
          ? error.message
          : "Reihenfolge konnte nicht gespeichert werden.",
      );
    }
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = features.findIndex((item) => item._id === active.id);
    const newIndex = features.findIndex((item) => item._id === over.id);

    const updated = arrayMove(features, oldIndex, newIndex).map(
      (item, index) => ({
        ...item,
        order: index + 1,
      }),
    );

    setFeatures(updated);
    await saveReorder(updated);
  };

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setShowForm(true);
  };

  const openEdit = (feature: FeatureItem) => {
    setEditingId(feature._id);
    setForm({
      name: feature.name,
      key: feature.key,
      description: feature.description,
      category: feature.category,
      price: feature.price,
      isActive: feature.isActive,
      order: feature.order,
    });
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setSaving(true);
      setPageError("");
      setSuccessMessage("");

      if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL fehlt.");
      if (!token) throw new Error("Admin-Token fehlt.");

      const payload = {
        ...form,
        price: Number(form.price),
        order: Number(form.order || 0),
      };

      const url = editingId
        ? `${apiUrl}/api/v1/features/admin/${editingId}`
        : `${apiUrl}/api/v1/features/admin`;

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
        throw new Error(
          data.message || "Feature konnte nicht gespeichert werden.",
        );
      }

      closeForm();
      await loadFeatures();
      setSuccessMessage(
        editingId ? "Feature wurde aktualisiert." : "Feature wurde erstellt.",
      );
    } catch (error) {
      setPageError(
        error instanceof Error
          ? error.message
          : "Feature konnte nicht gespeichert werden.",
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Möchtest du dieses Feature wirklich löschen?",
    );
    if (!confirmed) return;

    try {
      if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL fehlt.");
      if (!token) throw new Error("Admin-Token fehlt.");

      const res = await fetch(`${apiUrl}/api/v1/features/admin/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || "Feature konnte nicht gelöscht werden.",
        );
      }

      await loadFeatures();
      setSuccessMessage("Feature wurde gelöscht.");
    } catch (error) {
      setPageError(
        error instanceof Error
          ? error.message
          : "Feature konnte nicht gelöscht werden.",
      );
    }
  };

  const handleToggleStatus = async (id: string) => {
    try {
      if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL fehlt.");
      if (!token) throw new Error("Admin-Token fehlt.");

      const res = await fetch(
        `${apiUrl}/api/v1/features/admin/${id}/toggle-status`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Status konnte nicht geändert werden.");
      }

      await loadFeatures();
      setSuccessMessage("Feature-Status wurde aktualisiert.");
    } catch (error) {
      setPageError(
        error instanceof Error
          ? error.message
          : "Status konnte nicht geändert werden.",
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Feature-Verwaltung
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Features verwalten
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/60">
              Per Drag-and-drop sortieren, bearbeiten, löschen oder aktivieren.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={loadFeatures}
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
              Neues Feature
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

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="grid gap-4 md:grid-cols-[1fr_260px_auto]">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
            <Search className="h-4 w-4 text-cyan-300" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Nach Feature suchen"
              className="w-full bg-transparent text-white outline-none placeholder:text-white/35"
            />
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
            <Settings2 className="h-4 w-4 text-cyan-300" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full bg-transparent text-white outline-none"
            >
              <option value="" className="bg-slate-950">
                Alle Kategorien
              </option>
              {featureCategories.map((category) => (
                <option
                  key={category}
                  value={category}
                  className="bg-slate-950"
                >
                  {category}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => {
              setSearch("");
              setFilterCategory("");
            }}
            className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/80 hover:bg-white/5"
          >
            Filter zurücksetzen
          </button>
        </div>
      </div>

      {showForm && (
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-2xl font-semibold">
            {editingId ? "Feature bearbeiten" : "Neues Feature anlegen"}
          </h3>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Feature-Name"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-white/35"
                required
              />

              <input
                value={form.key}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, key: e.target.value }))
                }
                placeholder="Feature-Key"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-white/35"
                required
              />
            </div>

            <textarea
              value={form.description}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, description: e.target.value }))
              }
              placeholder="Beschreibung"
              rows={3}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-white/35"
            />

            <div className="grid gap-4 md:grid-cols-3">
              <select
                value={form.category}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, category: e.target.value }))
                }
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
              >
                {featureCategories.map((category) => (
                  <option
                    key={category}
                    value={category}
                    className="bg-slate-950"
                  >
                    {category}
                  </option>
                ))}
              </select>

              <input
                type="number"
                value={form.price}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    price: e.target.value === "" ? "" : Number(e.target.value),
                  }))
                }
                placeholder="Preis"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-white/35"
                required
              />

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
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-white/35"
              />
            </div>

            <label className="flex items-center gap-2 text-sm text-white/80">
              <input
                type="checkbox"
                checked={form.isActive}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, isActive: e.target.checked }))
                }
              />
              Aktiv
            </label>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={saving}
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90 disabled:opacity-60"
              >
                {saving
                  ? "Wird gespeichert..."
                  : editingId
                    ? "Feature aktualisieren"
                    : "Feature erstellen"}
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
          items={features.map((item) => item._id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-4">
            {loading ? (
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center text-white/55">
                Features werden geladen...
              </div>
            ) : features.length === 0 ? (
              <div className="rounded-[2rem] border border-dashed border-white/10 bg-white/5 p-10 text-center text-white/55">
                Keine Features gefunden.
              </div>
            ) : (
              features.map((feature) => (
                <SortableFeatureCard
                  key={feature._id}
                  feature={feature}
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
