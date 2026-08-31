"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Mail,
  CheckCircle2,
  RefreshCcw,
  ArrowRight,
  Activity,
} from "lucide-react";
import Link from "next/link";

type DashboardStats = {
  totalContacts: number;
  unreadContacts: number;
};

type DashboardResponse = {
  success: boolean;
  data: DashboardStats;
};

export default function AdminDashboardPage() {
  const router = useRouter();

  const [stats, setStats] = useState<DashboardStats>({
    totalContacts: 0,
    unreadContacts: 0,
  });
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState("");

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const loadDashboard = async () => {
    try {
      setLoading(true);
      setPageError("");

      const token = localStorage.getItem("adminToken");

      if (!token) {
        router.replace("/admin/login");
        return;
      }

      if (!apiUrl) {
        throw new Error("NEXT_PUBLIC_API_URL is missing");
      }

      const res = await fetch(`${apiUrl}/api/v1/admin/dashboard`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data: DashboardResponse = await res.json();

      if (!res.ok) {
        throw new Error(
          data?.data ? "Failed to load dashboard" : "Unauthorized",
        );
      }

      setStats(data.data);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to load dashboard";

      setPageError(message);

      if (
        message.toLowerCase().includes("unauthorized") ||
        message.toLowerCase().includes("token")
      ) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");
        router.replace("/admin/login");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Overview
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Welcome to your admin dashboard
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
              Monitor incoming contact requests and keep track of unread leads.
            </p>
          </div>

          <button
            onClick={loadDashboard}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10"
          >
            <RefreshCcw className="h-4 w-4" />
            Refresh
          </button>
        </div>
      </div>

      {pageError && (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {pageError}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <div className="mb-3 flex items-center gap-2 text-cyan-300">
            <Mail className="h-5 w-5" />
            Total Contacts
          </div>
          <div className="text-3xl font-semibold">
            {loading ? "..." : stats.totalContacts}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <div className="mb-3 flex items-center gap-2 text-amber-300">
            <CheckCircle2 className="h-5 w-5" />
            Unread Contacts
          </div>
          <div className="text-3xl font-semibold">
            {loading ? "..." : stats.unreadContacts}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <div className="mb-3 flex items-center gap-2 text-emerald-300">
            <Activity className="h-5 w-5" />
            Lead Status
          </div>
          <div className="text-lg font-medium text-white">
            {loading
              ? "Loading..."
              : stats.unreadContacts > 0
                ? "Action needed"
                : "All caught up"}
          </div>
          <p className="mt-2 text-sm text-white/55">
            Review new requests from the website.
          </p>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Quick action</h3>
            <p className="mt-2 text-sm text-white/60">
              Open the contacts page to manage incoming leads.
            </p>
          </div>

          <Link
            href="/admin/contacts"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
          >
            Go to Contacts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
