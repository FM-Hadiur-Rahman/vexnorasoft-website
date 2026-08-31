"use client";

import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

type QuotationBreakdownItem = {
  featureId?: string;
  name: string;
  category: string;
  price: number;
};

type Quotation = {
  _id: string;
  clientName: string;
  businessName: string;
  phone: string;
  email: string;
  projectType: string;
  notes: string;

  selectedFeatureIds?: string[];
  breakdown?: QuotationBreakdownItem[];

  selectedCount: number;
  basic: number;
  recommended: number;
  premium: number;
  recommendation: string;

  chosenOfferType?: string;
  chosenOfferLabel?: string;
  chosenOfferBasePrice?: number;
  chosenOfferPrice?: number;
  chosenOfferFinalPrice?: number;

  discountPercent?: number;
  discountValue?: number;
  discountReason?: string;

  createdAt: string;
};

export default function AdminQuotationsPage() {
  const [quotations, setQuotations] = useState<Quotation[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState("");

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token =
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;

  const loadQuotations = async () => {
    try {
      setLoading(true);
      setPageError("");

      const res = await fetch(`${apiUrl}/api/v1/quotations/admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch quotations");
      }

      setQuotations(data.data || []);
    } catch (error) {
      setPageError(
        error instanceof Error ? error.message : "Failed to fetch quotations",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadQuotations();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("Delete this quotation?");
    if (!confirmed) return;

    try {
      const res = await fetch(`${apiUrl}/api/v1/quotations/admin/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to delete quotation");
      }

      setQuotations((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      alert(
        error instanceof Error ? error.message : "Failed to delete quotation",
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          Sales history
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Saved quotations
        </h2>
      </div>

      {pageError && (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {pageError}
        </div>
      )}

      <div className="space-y-4">
        {loading ? (
          <div className="text-white/60">Loading quotations...</div>
        ) : quotations.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-white/10 bg-white/5 p-10 text-center text-white/55">
            No quotations found.
          </div>
        ) : (
          quotations.map((item) => (
            <div
              key={item._id}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">
                    {item.clientName || "Unnamed Client"}
                  </h3>

                  <div className="text-sm text-white/65">
                    {item.businessName || "No business name"}
                  </div>

                  <div className="text-sm text-white/50">
                    {item.phone || "-"} • {item.email || "-"}
                  </div>

                  <div className="text-sm text-white/50">
                    Project: {item.projectType || "-"}
                  </div>

                  <div className="text-sm text-white/50">
                    Angebot:{" "}
                    {item.chosenOfferLabel || item.recommendation || "-"}
                  </div>

                  <div className="text-sm text-white/50">
                    Originalpreis: €
                    {item.chosenOfferBasePrice ?? item.recommended ?? 0}
                  </div>

                  <div className="text-sm text-white/50">
                    Rabatt: {item.discountPercent ?? 0}% • -€
                    {item.discountValue ?? 0}
                  </div>

                  <div className="text-sm text-white/50">
                    Endpreis: €
                    {item.chosenOfferFinalPrice ??
                      item.chosenOfferPrice ??
                      item.recommended ??
                      0}
                  </div>

                  <div className="text-sm text-white/50">
                    Features: {item.selectedCount}
                  </div>

                  <div className="text-sm text-white/50">
                    Created: {new Date(item.createdAt).toLocaleString()}
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="inline-flex items-center gap-2 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-2 text-sm text-red-200"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </button>
              </div>

              {item.discountReason && (
                <div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 text-sm text-amber-100">
                  Rabattgrund: {item.discountReason}
                </div>
              )}

              {item.notes && (
                <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/75">
                  {item.notes}
                </div>
              )}

              {item.breakdown && item.breakdown.length > 0 && (
                <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="mb-3 text-sm font-semibold text-white">
                    Enthaltene Leistungen
                  </div>

                  <div className="space-y-2">
                    {item.breakdown.map((feature, index) => (
                      <div
                        key={`${feature.name}-${index}`}
                        className="flex items-center justify-between rounded-xl border border-white/10 px-3 py-2 text-sm"
                      >
                        <div>
                          <div className="text-white">{feature.name}</div>
                          <div className="text-xs text-white/45">
                            {feature.category}
                          </div>
                        </div>
                        <div className="font-medium text-cyan-200">
                          €{feature.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
