"use client";

import { useEffect, useState } from "react";
import {
  Plus,
  RefreshCcw,
  Pencil,
  Trash2,
  Power,
  Search,
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

type ServiceItem = {
  _id: string;
  title: string;
  description: string;
  icon: string;
  shortText: string;
  isActive: boolean;
  order: number;
};

type ServiceForm = {
  title: string;
  description: string;
  icon: string;
  shortText: string;
  isActive: boolean;
  order: number | "";
};

const emptyForm: ServiceForm = {
  title: "",
  description: "",
  icon: "Code2",
  shortText: "",
  isActive: true,
  order: 0,
};

function SortableServiceCard({
  service,
  onEdit,
  onDelete,
  onToggleStatus,
}: {
  service: ServiceItem;
  onEdit: (service: ServiceItem) => void;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: service._id });

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
              >
                <GripVertical className="h-4 w-4" />
              </button>

              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>

              <span
                className={`rounded-full px-3 py-1 text-xs ${
                  service.isActive
                    ? "bg-emerald-400/10 text-emerald-300"
                    : "bg-white/10 text-white/60"
                }`}
              >
                {service.isActive ? "Aktiv" : "Inaktiv"}
              </span>
            </div>

            <div className="text-sm text-white/55">Icon: {service.icon}</div>
            {service.shortText && (
              <div className="text-sm text-cyan-300">{service.shortText}</div>
            )}

            <p className="max-w-4xl text-sm leading-7 text-white/65">
              {service.description}
            </p>

            <div className="text-sm text-white/55">
              Reihenfolge: {service.order}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onToggleStatus(service._id)}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
            >
              <Power className="h-4 w-4" />
              {service.isActive ? "Deaktivieren" : "Aktivieren"}
            </button>

            <button
              onClick={() => onEdit(service)}
              className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
            >
              <Pencil className="h-4 w-4" />
              Bearbeiten
            </button>

            <button
              onClick={() => onDelete(service._id)}
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

export default function AdminServicesPage() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<ServiceForm>(emptyForm);

  const sensors = useSensors(useSensor(PointerSensor));
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token =
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;

  const loadServices = async () => {
    try {
      setLoading(true);
      setPageError("");
      setSuccessMessage("");

      const query = search.trim()
        ? `?search=${encodeURIComponent(search.trim())}`
        : "";

      const res = await fetch(`${apiUrl}/api/v1/services/admin${query}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || "Services konnten nicht geladen werden.",
        );
      }

      setServices(data.data || []);
    } catch (error) {
      setPageError(
        error instanceof Error
          ? error.message
          : "Services konnten nicht geladen werden.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadServices();
  }, [search]);

  const saveReorder = async (items: ServiceItem[]) => {
    try {
      const payload = items.map((item, index) => ({
        id: item._id,
        order: index + 1,
      }));

      const res = await fetch(`${apiUrl}/api/v1/services/admin/reorder`, {
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

      setServices((prev) =>
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

    const oldIndex = services.findIndex((item) => item._id === active.id);
    const newIndex = services.findIndex((item) => item._id === over.id);

    const updated = arrayMove(services, oldIndex, newIndex).map(
      (item, index) => ({
        ...item,
        order: index + 1,
      }),
    );

    setServices(updated);
    await saveReorder(updated);
  };

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setShowForm(true);
  };

  const openEdit = (service: ServiceItem) => {
    setEditingId(service._id);
    setForm({
      title: service.title,
      description: service.description,
      icon: service.icon,
      shortText: service.shortText,
      isActive: service.isActive,
      order: service.order,
    });
    setShowForm(true);
  };

  const closeForm = () => {
    setEditingId(null);
    setForm(emptyForm);
    setShowForm(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setSaving(true);
      setPageError("");
      setSuccessMessage("");

      const url = editingId
        ? `${apiUrl}/api/v1/services/admin/${editingId}`
        : `${apiUrl}/api/v1/services/admin`;

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
          data.message || "Service konnte nicht gespeichert werden.",
        );
      }

      closeForm();
      await loadServices();
      setSuccessMessage(
        editingId ? "Service aktualisiert." : "Service erstellt.",
      );
    } catch (error) {
      setPageError(
        error instanceof Error
          ? error.message
          : "Service konnte nicht gespeichert werden.",
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("Diesen Service wirklich löschen?");
    if (!confirmed) return;

    try {
      const res = await fetch(`${apiUrl}/api/v1/services/admin/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || "Service konnte nicht gelöscht werden.",
        );
      }

      setServices((prev) => prev.filter((item) => item._id !== id));
      setSuccessMessage("Service gelöscht.");
    } catch (error) {
      setPageError(
        error instanceof Error
          ? error.message
          : "Service konnte nicht gelöscht werden.",
      );
    }
  };

  const handleToggleStatus = async (id: string) => {
    try {
      const res = await fetch(
        `${apiUrl}/api/v1/services/admin/${id}/toggle-status`,
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

      await loadServices();
      setSuccessMessage("Servicestatus aktualisiert.");
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
              Service management
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Services
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/60">
              Add, edit, remove, activate, and reorder service items shown on
              the website.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={loadServices}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10"
            >
              <RefreshCcw className="h-4 w-4" />
              Reload
            </button>

            <button
              onClick={openCreate}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
            >
              <Plus className="h-4 w-4" />
              New Service
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
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
          <Search className="h-4 w-4 text-cyan-300" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search service"
            className="w-full bg-transparent text-white outline-none placeholder:text-white/35"
          />
        </div>
      </div>

      {showForm && (
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-2xl font-semibold">
            {editingId ? "Edit Service" : "New Service"}
          </h3>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={form.title}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="Title"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
                required
              />

              <input
                value={form.icon}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, icon: e.target.value }))
                }
                placeholder="Icon name"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
              />
            </div>

            <input
              value={form.shortText}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, shortText: e.target.value }))
              }
              placeholder="Short text"
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
            />

            <textarea
              value={form.description}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, description: e.target.value }))
              }
              placeholder="Description"
              rows={4}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
              required
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
                placeholder="Order"
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
                Active
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
                    ? "Update Service"
                    : "Create Service"}
              </button>

              <button
                type="button"
                onClick={closeForm}
                className="rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/80 hover:bg-white/5"
              >
                Cancel
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
          items={services.map((item) => item._id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-4">
            {loading ? (
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center text-white/55">
                Loading services...
              </div>
            ) : services.length === 0 ? (
              <div className="rounded-[2rem] border border-dashed border-white/10 bg-white/5 p-10 text-center text-white/55">
                No services found.
              </div>
            ) : (
              services.map((service) => (
                <SortableServiceCard
                  key={service._id}
                  service={service}
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
