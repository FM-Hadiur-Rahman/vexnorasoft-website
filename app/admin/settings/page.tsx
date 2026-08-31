"use client";

import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import {
  Building2,
  Globe,
  ImagePlus,
  Mail,
  MapPin,
  Phone,
  Save,
  Search,
  Settings,
  Share2,
  Sparkles,
  Undo2,
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const tabs = [
  { id: "company", label: "Company", icon: Building2 },
  { id: "branding", label: "Branding", icon: ImagePlus },
  { id: "contact", label: "Contact", icon: Mail },
  { id: "social", label: "Social", icon: Share2 },
  { id: "seo", label: "SEO", icon: Search },
];

const initialSettings = {
  companyName: "Backpunkt IT Solutions",
  tagline: "Modern SaaS & IT solutions for growing businesses",
  logoUrl: "",
  faviconUrl: "",
  email: "info@backpunkt-it.com",
  phone: "+49 000 000000",
  address: "Mülheim an der Ruhr, Germany",
  website: "https://backpunkt-it.com",
  facebook: "",
  instagram: "",
  linkedin: "",
  youtube: "",
  metaTitle: "Backpunkt IT Solutions | SaaS & Software Development",
  metaDescription:
    "We build modern web apps, SaaS platforms, dashboards, booking systems, POS software and automation solutions.",
  keywords: "software company Germany, SaaS development, web app development",
};

type SettingsState = typeof initialSettings;

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("company");
  const [settings, setSettings] = useState<SettingsState>(initialSettings);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [uploadingFavicon, setUploadingFavicon] = useState(false);

  const activeTabData = useMemo(
    () => tabs.find((tab) => tab.id === activeTab),
    [activeTab],
  );

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const res = await fetch(`${API_URL}/api/site-settings`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to load site settings");
        }

        setSettings((prev) => ({
          ...prev,
          ...data,
        }));
      } catch (error) {
        console.error("Failed to load settings", error);
      } finally {
        setLoading(false);
      }
    };

    loadSettings();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSaved(false);
  };

  const handleReset = () => {
    setSettings(initialSettings);
    setSaved(false);
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      const res = await fetch(`${API_URL}/api/site-settings`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to save settings");
      }

      setSettings((prev) => ({
        ...prev,
        ...(data.settings || {}),
      }));

      setSaved(true);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to save settings");
    } finally {
      setSaving(false);
    }
  };

  const handleImageUpload = async (
    e: ChangeEvent<HTMLInputElement>,
    field: "logoUrl" | "faviconUrl",
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      if (field === "logoUrl") setUploadingLogo(true);
      if (field === "faviconUrl") setUploadingFavicon(true);

      const formData = new FormData();

      // If your backend multer field is "file", change this to:
      // formData.append("file", file);
      formData.append("image", file);

      const res = await fetch(`${API_URL}/api/uploads/project-image`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Upload failed");
      }

      const uploadedUrl = data.imageUrl;

      if (!uploadedUrl) {
        throw new Error("Upload succeeded but no image URL was returned");
      }

      setSettings((prev) => ({
        ...prev,
        [field]: uploadedUrl,
      }));

      setSaved(false);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Image upload failed");
    } finally {
      setUploadingLogo(false);
      setUploadingFavicon(false);
      e.target.value = "";
    }
  };

  if (loading) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center text-white/60">
        Loading settings...
      </div>
    );
  }

  return (
    <div className="space-y-6 text-white">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-cyan-300">
              <Settings size={16} />
              Site settings
            </div>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Website settings
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
              Manage logo, company info, email, address, social links, and SEO
              basics from one interactive dashboard.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <Undo2 size={16} />
              Reset
            </button>

            <button
              onClick={handleSave}
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Save size={16} />
              {saving ? "Saving..." : saved ? "Saved" : "Save changes"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[260px_1fr_360px]">
        <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
          <div className="space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm transition ${
                    isActive
                      ? "bg-cyan-400 text-slate-950"
                      : "text-white/65 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </aside>

        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="mb-6 flex items-center gap-3">
            {activeTabData && <activeTabData.icon className="text-cyan-300" />}
            <h3 className="text-xl font-semibold">{activeTabData?.label}</h3>
          </div>

          {activeTab === "company" && (
            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="Company name"
                name="companyName"
                value={settings.companyName}
                onChange={handleChange}
              />
              <Input
                label="Website"
                name="website"
                value={settings.website}
                onChange={handleChange}
              />
              <Textarea
                label="Tagline"
                name="tagline"
                value={settings.tagline}
                onChange={handleChange}
                className="md:col-span-2"
              />
            </div>
          )}

          {activeTab === "branding" && (
            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="Logo URL"
                name="logoUrl"
                value={settings.logoUrl}
                onChange={handleChange}
                placeholder="https://..."
              />
              <Input
                label="Favicon URL"
                name="faviconUrl"
                value={settings.faviconUrl}
                onChange={handleChange}
                placeholder="https://..."
              />

              <div className="md:col-span-2 grid gap-5 md:grid-cols-2">
                <label className="cursor-pointer rounded-3xl border border-dashed border-white/15 bg-black/20 p-8 text-center transition hover:bg-white/5">
                  <ImagePlus className="mx-auto mb-3 text-cyan-300" size={34} />
                  <p className="font-medium">
                    {uploadingLogo ? "Uploading logo..." : "Upload logo"}
                  </p>
                  <p className="mt-2 text-sm text-white/50">
                    Select logo from your computer.
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, "logoUrl")}
                  />
                </label>

                <label className="cursor-pointer rounded-3xl border border-dashed border-white/15 bg-black/20 p-8 text-center transition hover:bg-white/5">
                  <ImagePlus className="mx-auto mb-3 text-cyan-300" size={34} />
                  <p className="font-medium">
                    {uploadingFavicon
                      ? "Uploading favicon..."
                      : "Upload favicon"}
                  </p>
                  <p className="mt-2 text-sm text-white/50">
                    Select favicon/icon from your computer.
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, "faviconUrl")}
                  />
                </label>
              </div>

              {settings.logoUrl && (
                <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <p className="mb-3 text-sm text-white/60">Current logo</p>
                  <img
                    src={settings.logoUrl}
                    alt="Current logo"
                    className="max-h-28 rounded-2xl object-contain"
                  />
                </div>
              )}

              {settings.faviconUrl && (
                <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <p className="mb-3 text-sm text-white/60">Current favicon</p>
                  <img
                    src={settings.faviconUrl}
                    alt="Current favicon"
                    className="h-16 w-16 rounded-2xl object-cover"
                  />
                </div>
              )}
            </div>
          )}

          {activeTab === "contact" && (
            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="Email"
                name="email"
                value={settings.email}
                onChange={handleChange}
              />
              <Input
                label="Phone"
                name="phone"
                value={settings.phone}
                onChange={handleChange}
              />
              <Textarea
                label="Address"
                name="address"
                value={settings.address}
                onChange={handleChange}
                className="md:col-span-2"
              />
            </div>
          )}

          {activeTab === "social" && (
            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="Facebook"
                name="facebook"
                value={settings.facebook}
                onChange={handleChange}
                placeholder="https://facebook.com/..."
              />
              <Input
                label="Instagram"
                name="instagram"
                value={settings.instagram}
                onChange={handleChange}
                placeholder="https://instagram.com/..."
              />
              <Input
                label="LinkedIn"
                name="linkedin"
                value={settings.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/company/..."
              />
              <Input
                label="YouTube"
                name="youtube"
                value={settings.youtube}
                onChange={handleChange}
                placeholder="https://youtube.com/..."
              />
            </div>
          )}

          {activeTab === "seo" && (
            <div className="grid gap-5">
              <Input
                label="Meta title"
                name="metaTitle"
                value={settings.metaTitle}
                onChange={handleChange}
              />
              <Textarea
                label="Meta description"
                name="metaDescription"
                value={settings.metaDescription}
                onChange={handleChange}
              />
              <Textarea
                label="SEO keywords"
                name="keywords"
                value={settings.keywords}
                onChange={handleChange}
              />
            </div>
          )}
        </section>

        <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="mb-5 flex items-center gap-2 text-cyan-300">
            <Sparkles size={18} />
            <span className="text-sm uppercase tracking-[0.25em]">
              Live preview
            </span>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
            <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-cyan-400 text-xl font-bold text-slate-950">
              {settings.logoUrl ? (
                <img
                  src={settings.logoUrl}
                  alt="Logo"
                  className="h-full w-full object-cover"
                />
              ) : (
                settings.companyName.slice(0, 2).toUpperCase()
              )}
            </div>

            <h4 className="text-xl font-semibold">{settings.companyName}</h4>
            <p className="mt-2 text-sm leading-6 text-white/55">
              {settings.tagline}
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/65">
              <PreviewItem icon={Mail} text={settings.email} />
              <PreviewItem icon={Phone} text={settings.phone} />
              <PreviewItem icon={MapPin} text={settings.address} />
              <PreviewItem icon={Globe} text={settings.website} />
            </div>
          </div>

          <div className="mt-5 rounded-3xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm font-medium text-white/80">SEO Preview</p>
            <p className="mt-3 text-sm text-cyan-300">{settings.metaTitle}</p>
            <p className="mt-2 text-xs leading-5 text-white/50">
              {settings.metaDescription}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
};

function Input({ label, className = "", ...props }: InputProps) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm text-white/65">{label}</span>
      <input
        {...props}
        className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300 focus:bg-black/35"
      />
    </label>
  );
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  className?: string;
};

function Textarea({ label, className = "", ...props }: TextareaProps) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm text-white/65">{label}</span>
      <textarea
        {...props}
        rows={4}
        className="w-full resize-none rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300 focus:bg-black/35"
      />
    </label>
  );
}

type PreviewItemProps = {
  icon: React.ElementType;
  text: string;
};

function PreviewItem({ icon: Icon, text }: PreviewItemProps) {
  return (
    <div className="flex items-start gap-3">
      <Icon size={16} className="mt-0.5 text-cyan-300" />
      <span>{text || "Not added yet"}</span>
    </div>
  );
}
