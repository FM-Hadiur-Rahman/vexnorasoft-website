"use client";

import { useEffect, useState } from "react";
import { Plus, RefreshCcw, Star, Trash2, Pencil } from "lucide-react";

type PricingFeature = {
  text: string;
  included: boolean;
};

type PricingPlan = {
  _id: string;
  productKey: string;
  productName: string;
  name: string;
  description: string;
  price: string;
  currency: string;
  billingLabel: string;
  buttonText: string;
  buttonLink: string;
  badge?: string;
  isPopular: boolean;
  isPublished: boolean;
  order: number;
  features: PricingFeature[];
};

type FormState = {
  productKey: string;
  productName: string;
  name: string;
  description: string;
  price: string;
  currency: string;
  billingLabel: string;
  buttonText: string;
  buttonLink: string;
  badge: string;
  isPopular: boolean;
  isPublished: boolean;
  order: number;
  features: PricingFeature[];
};

const productMap: Record<string, string> = {
  vexnorasoft: "VexnoraSoft",
  zonoops: "ZonoOps",
  zonovision: "ZonoVision",
  zonosupplyn: "ZonoSupplyn",
  zonopos: "ZonoPOS",
  zonokfz: "ZonoKFZ",
  zonofriseur: "ZonoFriseur",
  zonomart: "ZonoMart",
  zonodine: "ZonoDine",
};

const emptyForm: FormState = {
  productKey: "vexnorasoft",
  productName: "VexnoraSoft",
  name: "",
  description: "",
  price: "",
  currency: "EUR",
  billingLabel: "one-time",
  buttonText: "Get Started",
  buttonLink: "/contact",
  badge: "",
  isPopular: false,
  isPublished: true,
  order: 0,
  features: [{ text: "", included: true }],
};

export default function AdminPricingPage() {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("vexnorasoft");

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const getToken = () =>
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;

  const loadPlans = async () => {
    try {
      setLoading(true);
      setPageError("");

      const token = getToken();

      if (!token) {
        setPageError("Missing admin token");
        return;
      }

      const res = await fetch(
        `${apiUrl}/api/v1/pricing/admin?productKey=${selectedProduct}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch pricing plans");
      }

      setPlans(data.data || []);
    } catch (error) {
      setPageError(
        error instanceof Error
          ? error.message
          : "Failed to fetch pricing plans",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPlans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProduct]);

  const openCreate = () => {
    setEditingId(null);
    setForm({
      ...emptyForm,
      productKey: selectedProduct,
      productName: productMap[selectedProduct] || selectedProduct,
    });
    setShowForm(true);
  };

  const openEdit = (plan: PricingPlan) => {
    setEditingId(plan._id);
    setForm({
      productKey: plan.productKey || "vexnorasoft",
      productName: plan.productName || "VexnoraSoft",
      name: plan.name,
      description: plan.description,
      price: plan.price,
      currency: plan.currency,
      billingLabel: plan.billingLabel,
      buttonText: plan.buttonText,
      buttonLink: plan.buttonLink,
      badge: plan.badge || "",
      isPopular: plan.isPopular,
      isPublished: plan.isPublished,
      order: plan.order,
      features:
        plan.features?.length > 0
          ? plan.features
          : [{ text: "", included: true }],
    });
    setShowForm(true);
  };

  const handleProductChange = (productKey: string) => {
    setForm({
      ...form,
      productKey,
      productName: productMap[productKey] || productKey,
    });
  };

  const handleFeatureChange = (
    index: number,
    key: "text" | "included",
    value: string | boolean,
  ) => {
    setForm((prev) => {
      const updated = [...prev.features];
      updated[index] = {
        ...updated[index],
        [key]: value,
      };
      return { ...prev, features: updated };
    });
  };

  const addFeature = () => {
    setForm((prev) => ({
      ...prev,
      features: [...prev.features, { text: "", included: true }],
    }));
  };

  const removeFeature = (index: number) => {
    setForm((prev) => ({
      ...prev,
      features:
        prev.features.length === 1
          ? [{ text: "", included: true }]
          : prev.features.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setSaving(true);

      const token = getToken();

      if (!token) {
        throw new Error("Missing admin token");
      }

      const payload = {
        ...form,
        features: form.features.filter((item) => item.text.trim() !== ""),
      };

      const url = editingId
        ? `${apiUrl}/api/v1/pricing/admin/${editingId}`
        : `${apiUrl}/api/v1/pricing/admin`;

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
        throw new Error(data.message || "Failed to save pricing plan");
      }

      setSelectedProduct(form.productKey);
      setShowForm(false);
      setEditingId(null);
      setForm(emptyForm);
      await loadPlans();
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("Delete this pricing plan?");
    if (!confirmed) return;

    try {
      const token = getToken();
      if (!token) throw new Error("Missing admin token");

      const res = await fetch(`${apiUrl}/api/v1/pricing/admin/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to delete pricing plan");
      }

      await loadPlans();
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to delete");
    }
  };

  const handleTogglePublish = async (id: string) => {
    try {
      const token = getToken();
      if (!token) throw new Error("Missing admin token");

      const res = await fetch(
        `${apiUrl}/api/v1/pricing/admin/${id}/toggle-publish`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to update publish status");
      }

      await loadPlans();
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to update");
    }
  };

  const handleSetPopular = async (id: string) => {
    try {
      const token = getToken();
      if (!token) throw new Error("Missing admin token");

      const res = await fetch(
        `${apiUrl}/api/v1/pricing/admin/${id}/set-popular`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to set popular plan");
      }

      await loadPlans();
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
              Pricing management
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Pricing plans
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/60">
              Manage pricing for VexnoraSoft services and all SaaS products.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none"
            >
              {Object.entries(productMap).map(([key, name]) => (
                <option key={key} value={key}>
                  {name}
                </option>
              ))}
            </select>

            <button
              onClick={loadPlans}
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
              Add Plan
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
            {editingId ? "Edit Pricing Plan" : "Create Pricing Plan"}
          </h3>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <select
                value={form.productKey}
                onChange={(e) => handleProductChange(e.target.value)}
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
              >
                {Object.entries(productMap).map(([key, name]) => (
                  <option key={key} value={key}>
                    {name}
                  </option>
                ))}
              </select>

              <input
                value={form.productName}
                onChange={(e) =>
                  setForm({ ...form, productName: e.target.value })
                }
                placeholder="Product name"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Plan name"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
                required
              />

              <input
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                placeholder="Price"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
                required
              />
            </div>

            <textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              placeholder="Description"
              rows={3}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
            />

            <div className="grid gap-4 md:grid-cols-3">
              <input
                value={form.currency}
                onChange={(e) => setForm({ ...form, currency: e.target.value })}
                placeholder="Currency"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
              />

              <input
                value={form.billingLabel}
                onChange={(e) =>
                  setForm({ ...form, billingLabel: e.target.value })
                }
                placeholder="Billing label"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
              />

              <input
                type="number"
                value={form.order}
                onChange={(e) =>
                  setForm({ ...form, order: Number(e.target.value) })
                }
                placeholder="Order"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <input
                value={form.buttonText}
                onChange={(e) =>
                  setForm({ ...form, buttonText: e.target.value })
                }
                placeholder="Button text"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
              />

              <input
                value={form.buttonLink}
                onChange={(e) =>
                  setForm({ ...form, buttonLink: e.target.value })
                }
                placeholder="Button link"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
              />

              <input
                value={form.badge}
                onChange={(e) => setForm({ ...form, badge: e.target.value })}
                placeholder="Badge text"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-2 text-sm text-white/80">
                <input
                  type="checkbox"
                  checked={form.isPopular}
                  onChange={(e) =>
                    setForm({ ...form, isPopular: e.target.checked })
                  }
                />
                Popular plan
              </label>

              <label className="flex items-center gap-2 text-sm text-white/80">
                <input
                  type="checkbox"
                  checked={form.isPublished}
                  onChange={(e) =>
                    setForm({ ...form, isPublished: e.target.checked })
                  }
                />
                Published
              </label>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="font-medium">Features</h4>

                <button
                  type="button"
                  onClick={addFeature}
                  className="rounded-xl border border-white/10 px-3 py-2 text-sm text-white/80 hover:bg-white/5"
                >
                  Add feature
                </button>
              </div>

              <div className="space-y-3">
                {form.features.map((feature, index) => (
                  <div
                    key={index}
                    className="grid gap-3 md:grid-cols-[1fr_auto_auto]"
                  >
                    <input
                      value={feature.text}
                      onChange={(e) =>
                        handleFeatureChange(index, "text", e.target.value)
                      }
                      placeholder="Feature text"
                      className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
                    />

                    <label className="flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/80">
                      <input
                        type="checkbox"
                        checked={feature.included}
                        onChange={(e) =>
                          handleFeatureChange(
                            index,
                            "included",
                            e.target.checked,
                          )
                        }
                      />
                      Included
                    </label>

                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
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
                    ? "Update Plan"
                    : "Create Plan"}
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
          <div className="text-white/60">Loading pricing plans...</div>
        ) : plans.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-white/10 bg-white/5 p-10 text-center text-white/55">
            No pricing plans found for {productMap[selectedProduct]}.
          </div>
        ) : (
          plans.map((plan) => (
            <div
              key={plan._id}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="mb-2 text-xs uppercase tracking-[0.25em] text-cyan-300">
                    {plan.productName}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-semibold">{plan.name}</h3>

                    {plan.isPopular && (
                      <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs text-amber-300">
                        Popular
                      </span>
                    )}

                    {!plan.isPublished && (
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                        Draft
                      </span>
                    )}
                  </div>

                  <div className="mt-3 text-lg text-white/80">
                    {plan.currency} {plan.price}
                    <span className="ml-2 text-sm text-white/50">
                      {plan.billingLabel}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {plan.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => openEdit(plan)}
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
                  >
                    <Pencil className="h-4 w-4" />
                    Edit
                  </button>

                  <button
                    onClick={() => handleSetPopular(plan._id)}
                    className="inline-flex items-center gap-2 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-200"
                  >
                    <Star className="h-4 w-4" />
                    Popular
                  </button>

                  <button
                    onClick={() => handleDelete(plan._id)}
                    className="inline-flex items-center gap-2 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-2 text-sm text-red-200"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </button>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  onClick={() => handleTogglePublish(plan._id)}
                  className="rounded-2xl border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
                >
                  {plan.isPublished ? "Unpublish" : "Publish"}
                </button>
              </div>

              <div className="mt-5 space-y-2">
                {plan.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`text-sm ${
                      feature.included ? "text-white/80" : "text-white/35"
                    }`}
                  >
                    {feature.included ? "✔" : "✖"} {feature.text}
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
