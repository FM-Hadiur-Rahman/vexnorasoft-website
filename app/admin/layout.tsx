"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  LayoutDashboard,
  Mail,
  LogOut,
  Menu,
  X,
  Shield,
  MessageSquare,
  Settings,
  BriefcaseBusiness,
  BadgeEuro,
  Star,
  Calculator,
  FileText,
  Wrench,
  Layers3,
  FolderKanban,
  Users,
  Building2,
} from "lucide-react";

type AdminUser = {
  id?: string;
  email?: string;
};

const navItems = [
  {
    href: "/admin/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/admin/contacts",
    label: "Contacts",
    icon: Mail,
  },
  {
    href: "/admin/consultations",
    label: "Consultations",
    icon: MessageSquare,
  },
  {
    href: "/admin/settings",
    label: "Settings",
    icon: Settings,
  },
  {
    href: "/admin/projects",
    label: "Projects",
    icon: FolderKanban,
  },
  {
    href: "/admin/clients",
    label: "Clients",
    icon: Building2,
  },
  {
    href: "/admin/services",
    label: "Services",
    icon: BriefcaseBusiness,
  },
  {
    href: "/admin/team",
    label: "Team",
    icon: Users,
  },
  {
    href: "/admin/presets",
    label: "Presets",
    icon: Layers3,
  },
  {
    href: "/admin/features",
    label: "Features",
    icon: Wrench,
  },
  {
    href: "/admin/pricing",
    label: "Pricing",
    icon: BadgeEuro,
  },
  {
    href: "/admin/testimonials",
    label: "Testimonials",
    icon: Star,
  },
  {
    href: "/admin/pricing-builder",
    label: "Pricing Builder",
    icon: Calculator,
  },
  {
    href: "/admin/quotations",
    label: "Quotations",
    icon: FileText,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    setMounted(true);

    if (typeof window === "undefined") return;

    const token = localStorage.getItem("adminToken");
    const storedUser = localStorage.getItem("adminUser");

    if (storedUser) {
      try {
        setAdminUser(JSON.parse(storedUser));
      } catch {
        setAdminUser(null);
      }
    }

    if (!token && !isLoginPage) {
      router.replace("/admin/login");
    }

    if (token && pathname === "/admin/login") {
      router.replace("/admin/dashboard");
    }
  }, [isLoginPage, pathname, router]);

  const pageTitle = useMemo(() => {
    if (pathname === "/admin/dashboard") return "Dashboard";
    if (pathname === "/admin/contacts") return "Contacts";
    if (pathname === "/admin/consultations") return "Consultations";
    if (pathname === "/admin/settings") return "Settings";
    if (pathname === "/admin/projects") return "Projects";
    if (pathname === "/admin/clients") return "Clients";
    if (pathname === "/admin/services") return "Services";
    if (pathname === "/admin/presets") return "Presets";
    if (pathname === "/admin/features") return "Features";
    if (pathname === "/admin/team") return "Team";
    if (pathname === "/admin/pricing") return "Pricing";
    if (pathname === "/admin/testimonials") return "Testimonials";
    if (pathname === "/admin/pricing-builder") return "Pricing Builder";
    if (pathname === "/admin/quotations") return "Quotations";
    if (pathname === "/admin/login") return "Login";
    return "Admin";
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    router.replace("/admin/login");
  };

  if (!mounted) return null;

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">
        {mobileOpen && (
          <button
            type="button"
            aria-label="Close sidebar backdrop"
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        <aside
          className={`fixed inset-y-0 left-0 z-50 w-72 transform border-r border-white/10 bg-slate-950/95 backdrop-blur-xl transition-transform duration-300 lg:static lg:translate-x-0 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  VexnoraSoft
                </div>
                <div className="mt-2 text-xl font-semibold">Admin Panel</div>
              </div>

              <button
                type="button"
                className="rounded-xl border border-white/10 p-2 text-white/70 lg:hidden"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="border-b border-white/10 px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Shield className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <div className="text-sm font-medium text-white">
                    Administrator
                  </div>
                  <div className="truncate text-xs text-white/50">
                    {adminUser?.email || "admin@vexnorasoft.com"}
                  </div>
                </div>
              </div>
            </div>

            <nav className="flex-1 space-y-2 px-4 py-5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      active
                        ? "bg-cyan-400/10 text-cyan-300"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-white/10 p-4">
              <button
                onClick={handleLogout}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
            <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="rounded-2xl border border-white/10 p-2 text-white/70 lg:hidden"
                  onClick={() => setMobileOpen(true)}
                >
                  <Menu className="h-5 w-5" />
                </button>

                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                    VexnoraSoft
                  </div>
                  <h1 className="mt-1 text-xl font-semibold">{pageTitle}</h1>
                </div>
              </div>

              <div className="hidden text-right sm:block">
                <div className="text-sm text-white/80">Admin Area</div>
                <div className="text-xs text-white/50">
                  Manage leads and business requests
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
