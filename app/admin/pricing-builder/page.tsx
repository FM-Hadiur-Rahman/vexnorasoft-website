"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Euro,
  RefreshCcw,
  Sparkles,
  Save,
  FileText,
  UserRound,
  Building2,
  Phone,
  Mail,
  StickyNote,
  Info,
  BadgeCheck,
  Percent,
} from "lucide-react";

type Feature = {
  _id: string;
  name: string;
  key: string;
  description: string;
  category: string;
  price: number;
  isActive: boolean;
  order: number;
};

type CalculationBreakdownItem = {
  _id: string;
  name: string;
  category: string;
  price: number;
  description: string;
};

type CalculationResult = {
  selectedCount: number;
  subtotal: number;
  recommended: number;
  basic: number;
  premium: number;
  recommendation: string;
  breakdown: CalculationBreakdownItem[];
};

type ClientInfo = {
  clientName: string;
  businessName: string;
  phone: string;
  email: string;
  projectType: string;
  notes: string;
};

type Preset = {
  _id?: string;
  label: string;
  color: "amber" | "pink" | "cyan" | "emerald";
  keys: string[];
  description: string;
  isActive?: boolean;
  order?: number;
};

type OfferLevel = "basis" | "empfohlen" | "premium";

export default function AdminPricingBuilderPage() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [loadingFeatures, setLoadingFeatures] = useState(true);
  const [calculating, setCalculating] = useState(false);
  const [pageError, setPageError] = useState("");
  const [savingQuote, setSavingQuote] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [selectedOffer, setSelectedOffer] = useState<OfferLevel>("empfohlen");
  const [presets, setPresets] = useState<Preset[]>([]);
  const [discountPercent, setDiscountPercent] = useState<number | "">("");
  const [discountReason, setDiscountReason] = useState("");

  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    clientName: "",
    businessName: "",
    phone: "",
    email: "",
    projectType: "",
    notes: "",
  });

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token =
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;

  const groupedFeatures = useMemo(() => {
    const grouped: Record<string, Feature[]> = {};

    for (const feature of features) {
      if (!grouped[feature.category]) {
        grouped[feature.category] = [];
      }
      grouped[feature.category].push(feature);
    }

    return grouped;
  }, [features]);

  const currentPreset = useMemo(
    () => presets.find((preset) => preset.label === activePreset) || null,
    [activePreset, presets],
  );

  const baseOfferPrice = useMemo(() => {
    if (!result) return 0;
    if (selectedOffer === "basis") return result.basic;
    if (selectedOffer === "premium") return result.premium;
    return result.recommended;
  }, [result, selectedOffer]);

  const discountValue = useMemo(() => {
    const percent = Number(discountPercent || 0);
    return Math.round(baseOfferPrice * (percent / 100));
  }, [baseOfferPrice, discountPercent]);

  const finalOfferPrice = useMemo(() => {
    return Math.max(baseOfferPrice - discountValue, 0);
  }, [baseOfferPrice, discountValue]);

  const selectedOfferPrice = finalOfferPrice;

  const selectedOfferLabel = useMemo(() => {
    if (selectedOffer === "basis") return "Basis";
    if (selectedOffer === "premium") return "Premium";
    return "Empfohlen";
  }, [selectedOffer]);

  const selectedOfferHelperText = useMemo(() => {
    if (selectedOffer === "basis") {
      return "Günstigere Einstiegsversion mit reduziertem Angebot.";
    }
    if (selectedOffer === "premium") {
      return "Höherwertiges Angebot mit größerem Spielraum und Zusatzoptionen.";
    }
    return "Beste Standardempfehlung für diesen Kunden.";
  }, [selectedOffer]);

  const loadFeatures = async () => {
    try {
      setLoadingFeatures(true);
      setPageError("");
      setSaveMessage("");

      if (!apiUrl) {
        throw new Error("NEXT_PUBLIC_API_URL fehlt.");
      }

      if (!token) {
        throw new Error("Admin-Token fehlt.");
      }

      const [featuresRes, presetsRes] = await Promise.all([
        fetch(`${apiUrl}/api/v1/features/admin`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        fetch(`${apiUrl}/api/v1/presets`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);

      const featuresData = await featuresRes.json();
      const presetsData = await presetsRes.json();

      if (!featuresRes.ok) {
        throw new Error(
          featuresData.message || "Features konnten nicht geladen werden.",
        );
      }

      if (!presetsRes.ok) {
        throw new Error(
          presetsData.message || "Presets konnten nicht geladen werden.",
        );
      }

      setFeatures(featuresData.data || []);
      setPresets(presetsData.data || []);
    } catch (error) {
      setPageError(
        error instanceof Error
          ? error.message
          : "Daten konnten nicht geladen werden.",
      );
    } finally {
      setLoadingFeatures(false);
    }
  };

  const calculate = async (ids: string[]) => {
    try {
      setCalculating(true);
      setPageError("");

      if (!apiUrl) {
        throw new Error("NEXT_PUBLIC_API_URL fehlt.");
      }

      if (!token) {
        throw new Error("Admin-Token fehlt.");
      }

      const res = await fetch(`${apiUrl}/api/v1/pricing-builder/calculate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          selectedFeatureIds: ids,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Preis konnte nicht berechnet werden.");
      }

      setResult(data.data);
      setSelectedOffer("empfohlen");
    } catch (error) {
      setPageError(
        error instanceof Error
          ? error.message
          : "Preis konnte nicht berechnet werden.",
      );
      setResult(null);
    } finally {
      setCalculating(false);
    }
  };

  useEffect(() => {
    loadFeatures();
  }, []);

  useEffect(() => {
    if (!loadingFeatures) {
      calculate(selectedIds);
    }
  }, [selectedIds, loadingFeatures]);

  const getSelectedFeatureClass = () => {
    switch (activePreset) {
      case "Restaurant":
        return "border-amber-400/40 bg-amber-400/10";
      case "Salon":
        return "border-pink-400/40 bg-pink-400/10";
      case "Business Website":
        return "border-cyan-400/40 bg-cyan-400/10";
      case "Buchungssystem":
        return "border-emerald-400/40 bg-emerald-400/10";
      case "Supermarkt":
        return "border-amber-400/40 bg-amber-400/10";
      default:
        return "border-cyan-400/40 bg-cyan-400/10";
    }
  };

  const getSelectedTextClass = () => {
    switch (activePreset) {
      case "Restaurant":
        return "text-amber-200";
      case "Salon":
        return "text-pink-200";
      case "Business Website":
        return "text-cyan-200";
      case "Buchungssystem":
        return "text-emerald-200";
      case "Supermarkt":
        return "text-amber-200";
      default:
        return "text-cyan-200";
    }
  };

  const getPresetButtonClass = (preset: Preset, isActive: boolean) => {
    if (!isActive) {
      return "border-white/10 bg-slate-900/40 text-white/80 hover:bg-white/5";
    }

    switch (preset.color) {
      case "amber":
        return "border-amber-400/40 bg-amber-400/15 text-amber-200";
      case "pink":
        return "border-pink-400/40 bg-pink-400/15 text-pink-200";
      case "cyan":
        return "border-cyan-400/40 bg-cyan-400/15 text-cyan-200";
      case "emerald":
        return "border-emerald-400/40 bg-emerald-400/15 text-emerald-200";
      default:
        return "border-cyan-400/40 bg-cyan-400/15 text-cyan-200";
    }
  };

  const getOfferCardClass = (offer: OfferLevel) => {
    const active = selectedOffer === offer;

    if (!active) {
      return "rounded-2xl border border-white/10 bg-slate-900/40 p-4 cursor-pointer transition hover:bg-white/5";
    }

    if (offer === "basis") {
      return "rounded-2xl border border-amber-400/30 bg-amber-400/10 p-4 cursor-pointer transition";
    }

    if (offer === "premium") {
      return "rounded-2xl border border-pink-400/30 bg-pink-400/10 p-4 cursor-pointer transition";
    }

    return "rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4 cursor-pointer transition";
  };

  const applyPreset = (preset: Preset) => {
    const ids = features
      .filter((feature) => preset.keys.includes(feature.key))
      .map((feature) => feature._id);

    setSelectedIds(ids);
    setActivePreset(preset.label);
    setSaveMessage("");
  };

  const clearSelection = () => {
    setSelectedIds([]);
    setActivePreset(null);
    setSaveMessage("");
    setSelectedOffer("empfohlen");
    setDiscountPercent("");
    setDiscountReason("");
  };

  const toggleFeature = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );

    setActivePreset(null);
    setSaveMessage("");
  };

  const handleClientInfoChange = (key: keyof ClientInfo, value: string) => {
    setClientInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const saveQuotation = async () => {
    try {
      setSaveMessage("");
      setPageError("");

      if (!result) {
        throw new Error("Keine Angebotsdaten vorhanden.");
      }

      if (!apiUrl) {
        throw new Error("NEXT_PUBLIC_API_URL fehlt.");
      }

      if (!token) {
        throw new Error("Admin-Token fehlt.");
      }

      setSavingQuote(true);

      const res = await fetch(`${apiUrl}/api/v1/quotations/admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...clientInfo,
          selectedFeatureIds: selectedIds,
          breakdown: result.breakdown.map((item) => ({
            featureId: item._id,
            name: item.name,
            category: item.category,
            price: item.price,
          })),
          selectedCount: result.selectedCount,
          basic: result.basic,
          recommended: result.recommended,
          premium: result.premium,
          recommendation: result.recommendation,
          chosenOfferType: selectedOffer,
          chosenOfferLabel: selectedOfferLabel,
          chosenOfferBasePrice: baseOfferPrice,
          chosenOfferPrice: finalOfferPrice,
          chosenOfferFinalPrice: finalOfferPrice,
          discountPercent: Number(discountPercent || 0),
          discountValue,
          discountReason: discountReason.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || "Angebot konnte nicht gespeichert werden.",
        );
      }

      setSaveMessage("Angebot wurde erfolgreich gespeichert.");
    } catch (error) {
      setPageError(
        error instanceof Error
          ? error.message
          : "Angebot konnte nicht gespeichert werden.",
      );
    } finally {
      setSavingQuote(false);
    }
  };

  const exportPdf = () => {
    const logoUrl = `${window.location.origin}/logo.png`;

    const rows =
      result?.breakdown
        ?.map(
          (item) => `
            <tr>
              <td>${item.name}</td>
              <td>${item.category}</td>
              <td style="text-align:right;">€${item.price}</td>
            </tr>
          `,
        )
        .join("") ||
      "<tr><td colspan='3'>Keine Leistungen ausgewählt.</td></tr>";

    const html = `
      <!DOCTYPE html>
      <html lang="de">
        <head>
          <meta charset="UTF-8" />
          <title>Angebot - Backpunkt IT Solutions</title>
          <style>
            @page {
              size: A4;
              margin: 16mm;
            }

            * {
              box-sizing: border-box;
            }

            html, body {
              margin: 0;
              padding: 0;
              background: #ffffff;
              color: #0f172a;
              font-family: Arial, Helvetica, sans-serif;
              font-size: 12px;
              line-height: 1.45;
            }

            .page {
              width: 100%;
            }

            .header {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              gap: 20px;
              border-bottom: 3px solid #0ea5e9;
              padding-bottom: 16px;
              margin-bottom: 26px;
            }

            .brand-wrap {
              display: flex;
              align-items: center;
              gap: 14px;
            }

            .logo {
              width: 56px;
              height: 56px;
              object-fit: contain;
              border-radius: 10px;
              border: 1px solid #e5e7eb;
              padding: 4px;
              background: #ffffff;
            }

            .brand {
              font-size: 28px;
              font-weight: 700;
              color: #0f172a;
              margin: 0 0 6px;
            }

            .sub {
              font-size: 14px;
              color: #475569;
              margin: 0;
            }

            .meta {
              text-align: right;
              font-size: 12px;
              color: #475569;
            }

            .meta-title {
              font-size: 15px;
              font-weight: 700;
              color: #0f172a;
              margin-bottom: 6px;
            }

            .section {
              margin-bottom: 24px;
              page-break-inside: avoid;
            }

            .section-title {
              font-size: 18px;
              font-weight: 700;
              color: #0f172a;
              margin: 0 0 10px;
              padding-left: 10px;
              border-left: 4px solid #0ea5e9;
            }

            .info-table,
            .feature-table,
            .summary-table {
              width: 100%;
              border-collapse: collapse;
            }

            .info-table td,
            .feature-table th,
            .feature-table td,
            .summary-table td {
              border: 1px solid #dbe2ea;
              padding: 9px 10px;
              vertical-align: top;
            }

            .feature-table th,
            .summary-table td.label {
              background: #f8fafc;
              font-weight: 700;
            }

            .feature-table th {
              text-align: left;
              color: #0f172a;
            }

            .feature-table th:last-child,
            .feature-table td:last-child,
            .summary-table td:last-child {
              text-align: right;
            }

            .label {
              width: 220px;
              background: #f8fafc;
              font-weight: 700;
              color: #0f172a;
            }

            .offer-box {
              margin-top: 14px;
              padding: 14px 16px;
              border-radius: 10px;
              background: linear-gradient(135deg, #0f172a, #0ea5e9);
              color: white;
              font-size: 15px;
              font-weight: 700;
            }

            .footer {
              margin-top: 30px;
              text-align: center;
              border-top: 1px solid #e5e7eb;
              padding-top: 14px;
              color: #475569;
              font-size: 11px;
            }
          </style>
        </head>
        <body>
          <div class="page">
            <div class="header">
              <div class="brand-wrap">
                <img src="${logoUrl}" alt="Backpunkt Logo" class="logo" />
                <div>
                  <h1 class="brand">Backpunkt IT Solutions</h1>
                  <p class="sub">Angebot / Projektkalkulation</p>
                </div>
              </div>

              <div class="meta">
                <div class="meta-title">Angebot</div>
                <div>Erstellt am: ${new Date().toLocaleString("de-DE")}</div>
              </div>
            </div>

            <div class="section">
              <h2 class="section-title">Kundendaten</h2>
              <table class="info-table">
                <tbody>
                  <tr>
                    <td class="label">Name</td>
                    <td>${clientInfo.clientName || "-"}</td>
                  </tr>
                  <tr>
                    <td class="label">Firma</td>
                    <td>${clientInfo.businessName || "-"}</td>
                  </tr>
                  <tr>
                    <td class="label">Telefon</td>
                    <td>${clientInfo.phone || "-"}</td>
                  </tr>
                  <tr>
                    <td class="label">E-Mail</td>
                    <td>${clientInfo.email || "-"}</td>
                  </tr>
                  <tr>
                    <td class="label">Projektart</td>
                    <td>${clientInfo.projectType || "-"}</td>
                  </tr>
                  <tr>
                    <td class="label">Notizen</td>
                    <td>${clientInfo.notes || "-"}</td>
                  </tr>
                  <tr>
                    <td class="label">Rabattgrund</td>
                    <td>${discountReason || "-"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="section">
              <h2 class="section-title">Gewählte Leistungen</h2>
              <table class="feature-table">
                <thead>
                  <tr>
                    <th>Funktion</th>
                    <th>Kategorie</th>
                    <th>Preis</th>
                  </tr>
                </thead>
                <tbody>
                  ${rows}
                </tbody>
              </table>
            </div>

            <div class="section">
              <h2 class="section-title">Preiskalkulation</h2>
              <table class="summary-table">
                <tbody>
                  <tr>
                    <td class="label">Basis</td>
                    <td>€${result?.basic ?? 0}</td>
                  </tr>
                  <tr>
                    <td class="label">Empfohlen</td>
                    <td>€${result?.recommended ?? 0}</td>
                  </tr>
                  <tr>
                    <td class="label">Premium</td>
                    <td>€${result?.premium ?? 0}</td>
                  </tr>
                  <tr>
                    <td class="label">Originalpreis</td>
                    <td>€${baseOfferPrice}</td>
                  </tr>
                  <tr>
                    <td class="label">Rabatt</td>
                    <td>${Number(discountPercent || 0)}% (-€${discountValue})</td>
                  </tr>
                  <tr>
                    <td class="label">Endpreis</td>
                    <td>€${finalOfferPrice}</td>
                  </tr>
                </tbody>
              </table>

              <div class="offer-box">
                Gewählte Angebotsstufe: ${selectedOfferLabel} – €${finalOfferPrice}
              </div>
            </div>

            <div class="footer">
              Backpunkt IT Solutions · Web, App & Software Development
            </div>
          </div>
        </body>
      </html>
    `;

    const printWindow = window.open("", "_blank", "width=900,height=1200");

    if (!printWindow) {
      alert(
        "Das Druckfenster konnte nicht geöffnet werden. Bitte Pop-ups erlauben.",
      );
      return;
    }

    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();

    printWindow.onload = () => {
      printWindow.focus();

      printWindow.onafterprint = () => {
        printWindow.close();
      };

      setTimeout(() => {
        printWindow.print();
      }, 300);
    };
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Verkaufswerkzeug
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Preisrechner
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60">
              Wähle die passenden Leistungen für den Kunden aus. Das System
              berechnet automatisch ein Basis-, Standard- und Premium-Angebot.
            </p>
          </div>

          <button
            onClick={loadFeatures}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10"
          >
            <RefreshCcw className="h-4 w-4" />
            Features neu laden
          </button>
        </div>
      </div>

      {pageError && (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {pageError}
        </div>
      )}

      {saveMessage && (
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          {saveMessage}
        </div>
      )}

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          Schnellvorlagen
        </div>
        <h3 className="mt-3 text-2xl font-semibold">
          Mit einer Vorlage starten
        </h3>
        <p className="mt-3 text-sm text-white/60">
          Wähle zuerst ein passendes Geschäftsmodell aus und ergänze danach
          zusätzliche Funktionen nach Bedarf.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {presets.map((preset) => {
            const isActive = activePreset === preset.label;

            return (
              <button
                key={preset.label}
                type="button"
                onClick={() => applyPreset(preset)}
                className={`rounded-2xl border px-4 py-3 text-sm font-medium transition ${getPresetButtonClass(
                  preset,
                  isActive,
                )}`}
              >
                {preset.label}
              </button>
            );
          })}

          <button
            type="button"
            onClick={clearSelection}
            className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200 transition hover:bg-red-400/15"
          >
            Auswahl zurücksetzen
          </button>
        </div>

        {currentPreset && (
          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900/40 p-4 text-sm text-white/75">
            <div className="flex items-center gap-2 text-white">
              <BadgeCheck className="h-4 w-4 text-cyan-300" />
              <span className="font-medium">
                Aktive Vorlage: {currentPreset.label}
              </span>
            </div>
            <p className="mt-2 text-white/60">{currentPreset.description}</p>
          </div>
        )}

        {!currentPreset && selectedIds.length > 0 && (
          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900/40 p-4 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4 text-cyan-300" />
              <span className="font-medium">Individuelle Auswahl</span>
            </div>
            <p className="mt-2 text-white/60">
              Du hast die Auswahl manuell angepasst. Das Angebot wird jetzt als
              individuelle Kombination behandelt.
            </p>
          </div>
        )}
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          Kundendaten
        </div>
        <h3 className="mt-3 text-2xl font-semibold">Angebotsinformationen</h3>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
            <UserRound className="h-4 w-4 text-cyan-300" />
            <input
              value={clientInfo.clientName}
              onChange={(e) =>
                handleClientInfoChange("clientName", e.target.value)
              }
              placeholder="Name des Kunden"
              className="w-full bg-transparent text-white outline-none placeholder:text-white/35"
            />
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
            <Building2 className="h-4 w-4 text-cyan-300" />
            <input
              value={clientInfo.businessName}
              onChange={(e) =>
                handleClientInfoChange("businessName", e.target.value)
              }
              placeholder="Firmenname"
              className="w-full bg-transparent text-white outline-none placeholder:text-white/35"
            />
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
            <Phone className="h-4 w-4 text-cyan-300" />
            <input
              value={clientInfo.phone}
              onChange={(e) => handleClientInfoChange("phone", e.target.value)}
              placeholder="Telefonnummer"
              className="w-full bg-transparent text-white outline-none placeholder:text-white/35"
            />
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
            <Mail className="h-4 w-4 text-cyan-300" />
            <input
              value={clientInfo.email}
              onChange={(e) => handleClientInfoChange("email", e.target.value)}
              placeholder="E-Mail"
              className="w-full bg-transparent text-white outline-none placeholder:text-white/35"
            />
          </div>

          <div className="md:col-span-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
            <Calculator className="h-4 w-4 text-cyan-300" />
            <input
              value={clientInfo.projectType}
              onChange={(e) =>
                handleClientInfoChange("projectType", e.target.value)
              }
              placeholder="Projektart, z. B. Salon, Restaurant, Unternehmenswebsite"
              className="w-full bg-transparent text-white outline-none placeholder:text-white/35"
            />
          </div>

          <div className="md:col-span-2 flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
            <StickyNote className="mt-1 h-4 w-4 text-cyan-300" />
            <textarea
              value={clientInfo.notes}
              onChange={(e) => handleClientInfoChange("notes", e.target.value)}
              placeholder="Interne Notizen für das Vertriebsteam"
              rows={4}
              className="w-full bg-transparent text-white outline-none placeholder:text-white/35"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          {loadingFeatures ? (
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center text-white/55">
              Features werden geladen...
            </div>
          ) : (
            Object.entries(groupedFeatures).map(([category, items]) => (
              <div
                key={category}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <h3 className="text-xl font-semibold">{category}</h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {items.map((feature) => {
                    const checked = selectedIds.includes(feature._id);

                    return (
                      <button
                        key={feature._id}
                        type="button"
                        onClick={() => toggleFeature(feature._id)}
                        className={`rounded-[1.5rem] border p-5 text-left transition ${
                          checked
                            ? getSelectedFeatureClass()
                            : "border-white/10 bg-slate-900/40 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-base font-semibold text-white">
                              {feature.name}
                            </div>
                            <p className="mt-2 text-sm leading-6 text-white/55">
                              {feature.description}
                            </p>
                          </div>

                          <div className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">
                            €{feature.price}
                          </div>
                        </div>

                        <div className="mt-4 flex items-center gap-2 text-sm">
                          <div
                            className={`h-4 w-4 rounded-full border ${
                              checked
                                ? "border-current bg-current"
                                : "border-white/30"
                            } ${checked ? getSelectedTextClass() : ""}`}
                          />
                          <span
                            className={
                              checked ? getSelectedTextClass() : "text-white/50"
                            }
                          >
                            {checked ? "Ausgewählt" : "Zum Angebot hinzufügen"}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-cyan-300">
              <Calculator className="h-5 w-5" />
              Zusammenfassung
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                <div className="text-sm text-white/55">
                  Ausgewählte Funktionen
                </div>
                <div className="mt-2 text-2xl font-semibold text-white">
                  {result?.selectedCount ?? 0}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                <div className="text-sm text-white/55">
                  Aktuell gewählte Angebotsstufe
                </div>
                <div className="mt-2 flex items-center gap-1 text-3xl font-semibold text-white">
                  <Euro className="h-6 w-6 text-cyan-300" />
                  {calculating ? "..." : selectedOfferPrice}
                </div>
                <div className="mt-2 text-sm text-white/55">
                  {selectedOfferLabel}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-amber-300">
              <Sparkles className="h-5 w-5" />
              Angebotsstufe auswählen
            </div>

            <div className="mt-3 text-sm leading-6 text-white/60">
              Wähle die Preisstufe, die du dem Kunden als finales Angebot
              speichern möchtest.
            </div>

            <div className="mt-5 space-y-3">
              <div
                onClick={() => setSelectedOffer("basis")}
                className={getOfferCardClass("basis")}
              >
                <div className="text-sm text-white/70">Basis</div>
                <div className="mt-2 text-2xl font-semibold text-white">
                  €{result?.basic ?? 0}
                </div>
                <div className="mt-2 text-xs text-white/55">
                  Günstigere Einstiegsvariante
                </div>
              </div>

              <div
                onClick={() => setSelectedOffer("empfohlen")}
                className={getOfferCardClass("empfohlen")}
              >
                <div className="text-sm text-cyan-200">Empfohlen</div>
                <div className="mt-2 text-2xl font-semibold text-white">
                  €{result?.recommended ?? 0}
                </div>
                <div className="mt-2 text-xs text-cyan-100/80">
                  Beste Standardempfehlung für diesen Kunden
                </div>
              </div>

              <div
                onClick={() => setSelectedOffer("premium")}
                className={getOfferCardClass("premium")}
              >
                <div className="text-sm text-white/70">Premium</div>
                <div className="mt-2 text-2xl font-semibold text-white">
                  €{result?.premium ?? 0}
                </div>
                <div className="mt-2 text-xs text-white/55">
                  Höherwertiges Angebot mit größerem Spielraum
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-amber-300">
              <Percent className="h-5 w-5" />
              Rabatt / Einführungsangebot
            </div>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Hier kannst du dem Kunden einen prozentualen Rabatt geben, zum
              Beispiel als Einführungsangebot oder Sonderpreis.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                <div className="text-sm text-white/55">Rabatt in Prozent</div>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={discountPercent}
                  onChange={(e) =>
                    setDiscountPercent(
                      e.target.value === ""
                        ? ""
                        : Math.min(100, Math.max(0, Number(e.target.value))),
                    )
                  }
                  placeholder="z. B. 10"
                  className="mt-3 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-white/35"
                />

                <div className="mt-3 flex flex-wrap gap-2">
                  {[5, 10, 15].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setDiscountPercent(value)}
                      className="rounded-xl border border-white/10 px-3 py-2 text-sm text-white/80 hover:bg-white/5"
                    >
                      {value}% Rabatt
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                <div className="text-sm text-white/55">Rabattgrund</div>
                <input
                  type="text"
                  value={discountReason}
                  onChange={(e) => setDiscountReason(e.target.value)}
                  placeholder="z. B. Neukundenrabatt / Einführungsangebot"
                  className="mt-3 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-white/35"
                />
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 flex items-center justify-between">
                <span className="text-white/60">Originalpreis</span>
                <span className="text-white font-semibold">
                  €{baseOfferPrice}
                </span>
              </div>

              <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 flex items-center justify-between">
                <span className="text-amber-100">
                  Rabatt {discountPercent ? `(${discountPercent}%)` : ""}
                </span>
                <span className="text-amber-200 font-semibold">
                  - €{discountValue}
                </span>
              </div>

              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 flex items-center justify-between">
                <span className="text-emerald-100">Endpreis</span>
                <span className="text-white text-xl font-semibold">
                  €{finalOfferPrice}
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-emerald-300">
              <CheckCircle2 className="h-5 w-5" />
              Empfehlung
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/40 p-4">
              <div className="text-lg font-semibold text-white">
                {result?.recommendation ?? "Starter"}
              </div>
              <p className="mt-2 text-sm leading-6 text-white/60">
                {selectedOfferHelperText}
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Aktionen
            </div>

            <div className="mt-5 flex flex-col gap-3">
              <button
                type="button"
                onClick={saveQuotation}
                disabled={savingQuote || !result}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90 disabled:opacity-60"
              >
                <Save className="h-4 w-4" />
                {savingQuote
                  ? "Angebot wird gespeichert..."
                  : "Angebot speichern"}
              </button>

              <button
                type="button"
                onClick={exportPdf}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/80 hover:bg-white/5"
              >
                <FileText className="h-4 w-4" />
                PDF exportieren
              </button>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/40 p-4 text-sm text-white/65">
              Gespeichert wird aktuell:
              <span className="ml-2 font-semibold text-white">
                {selectedOfferLabel} – €{finalOfferPrice}
              </span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Leistungsübersicht
            </div>

            <div className="mt-4 space-y-3">
              {result?.breakdown?.length ? (
                result.breakdown.map((item) => (
                  <div
                    key={item._id}
                    className="rounded-2xl border border-white/10 bg-slate-900/40 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-medium text-white">
                          {item.name}
                        </div>
                        <div className="mt-1 text-xs text-white/45">
                          {item.category}
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-cyan-200">
                        €{item.price}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-white/10 p-6 text-sm text-white/45">
                  Noch keine Funktion ausgewählt.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
