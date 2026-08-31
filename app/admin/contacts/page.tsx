"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  Mail,
  RefreshCcw,
  Trash2,
  UserRound,
} from "lucide-react";

type ContactItem = {
  _id: string;
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
  status: "new" | "read";
  createdAt: string;
  updatedAt: string;
};

type DashboardResponse = {
  success: boolean;
  data: {
    totalContacts: number;
    unreadContacts: number;
  };
};

type ContactsResponse = {
  success: boolean;
  count: number;
  data: ContactItem[];
};

export default function AdminContactsPage() {
  const router = useRouter();

  const [contacts, setContacts] = useState<ContactItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState("");
  const [stats, setStats] = useState({
    totalContacts: 0,
    unreadContacts: 0,
  });

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const token =
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;

  const headers = useMemo(
    () => ({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
    [token],
  );

  const fetchDashboard = async () => {
    if (!apiUrl || !token) return;

    const res = await fetch(`${apiUrl}/api/v1/admin/dashboard`, {
      headers,
    });

    const data: DashboardResponse = await res.json();

    if (!res.ok) {
      throw new Error("Failed to load dashboard stats");
    }

    setStats(data.data);
  };

  const fetchContacts = async () => {
    if (!apiUrl || !token) return;

    const res = await fetch(`${apiUrl}/api/v1/admin/contacts`, {
      headers,
    });

    const data: ContactsResponse = await res.json();

    if (!res.ok) {
      throw new Error("Failed to load contacts");
    }

    setContacts(data.data);
  };

  const loadData = async () => {
    try {
      setLoading(true);
      setPageError("");

      if (!apiUrl) {
        throw new Error("NEXT_PUBLIC_API_URL is missing");
      }

      if (!token) {
        router.push("/admin/login");
        return;
      }

      await Promise.all([fetchDashboard(), fetchContacts()]);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to load data";

      setPageError(message);

      if (
        message.toLowerCase().includes("unauthorized") ||
        message.toLowerCase().includes("token")
      ) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");
        router.push("/admin/login");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      router.push("/admin/login");
      return;
    }

    loadData();
  }, []);

  const handleMarkAsRead = async (id: string) => {
    try {
      if (!apiUrl || !token) return;

      const res = await fetch(`${apiUrl}/api/v1/admin/contacts/${id}/read`, {
        method: "PATCH",
        headers,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to update contact");
      }

      setContacts((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, status: "read" } : item,
        ),
      );

      setStats((prev) => ({
        ...prev,
        unreadContacts: Math.max(prev.unreadContacts - 1, 0),
      }));
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to update");
    }
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this contact?",
    );

    if (!confirmed) return;

    try {
      if (!apiUrl || !token) return;

      const target = contacts.find((item) => item._id === id);

      const res = await fetch(`${apiUrl}/api/v1/admin/contacts/${id}`, {
        method: "DELETE",
        headers,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to delete contact");
      }

      setContacts((prev) => prev.filter((item) => item._id !== id));

      setStats((prev) => ({
        totalContacts: Math.max(prev.totalContacts - 1, 0),
        unreadContacts:
          target?.status === "new"
            ? Math.max(prev.unreadContacts - 1, 0)
            : prev.unreadContacts,
      }));
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to delete");
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Lead management
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Website contact messages
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/60">
              Review, mark, and manage contact leads submitted from the website.
            </p>
          </div>

          <button
            onClick={loadData}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10"
          >
            <RefreshCcw className="h-4 w-4" />
            Refresh
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <div className="mb-3 flex items-center gap-2 text-cyan-300">
            <Mail className="h-5 w-5" />
            Total Contacts
          </div>
          <div className="text-3xl font-semibold">{stats.totalContacts}</div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <div className="mb-3 flex items-center gap-2 text-amber-300">
            <CheckCircle2 className="h-5 w-5" />
            Unread Contacts
          </div>
          <div className="text-3xl font-semibold">{stats.unreadContacts}</div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        {loading ? (
          <div className="py-12 text-center text-white/60">
            Loading contacts...
          </div>
        ) : pageError ? (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {pageError}
          </div>
        ) : contacts.length === 0 ? (
          <div className="py-12 text-center text-white/60">
            No contact messages found.
          </div>
        ) : (
          <div className="space-y-5">
            {contacts.map((contact) => (
              <div
                key={contact._id}
                className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-5"
              >
                <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-xl font-semibold">{contact.name}</h2>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          contact.status === "new"
                            ? "bg-amber-400/15 text-amber-300"
                            : "bg-emerald-400/15 text-emerald-300"
                        }`}
                      >
                        {contact.status}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-col gap-2 text-sm text-white/65">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-cyan-300" />
                        {contact.email}
                      </div>
                      <div className="flex items-center gap-2">
                        <UserRound className="h-4 w-4 text-cyan-300" />
                        {contact.company || "No company"} • {contact.service}
                      </div>
                      <div>
                        Submitted:{" "}
                        {new Date(contact.createdAt).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {contact.status === "new" && (
                      <button
                        onClick={() => handleMarkAsRead(contact._id)}
                        className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200 transition hover:bg-emerald-400/15"
                      >
                        Mark as read
                      </button>
                    )}

                    <button
                      onClick={() => handleDelete(contact._id)}
                      className="inline-flex items-center gap-2 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-2 text-sm text-red-200 transition hover:bg-red-400/15"
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/80">
                  {contact.message}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
