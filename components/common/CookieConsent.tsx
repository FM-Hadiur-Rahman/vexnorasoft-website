"use client";

import { useEffect, useState } from "react";
import { Cookie, Settings, X } from "lucide-react";

type Consent = "accepted" | "essential";

const STORAGE_KEY = "backpunkt_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setVisible(true);
  }, []);

  const saveConsent = (value: Consent) => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
    setSettingsOpen(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-[999] w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
      <div className="rounded-[1.75rem] border border-white/10 bg-[#020617]/95 p-5 shadow-2xl shadow-black/50 backdrop-blur-2xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
              <Cookie className="h-6 w-6" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">
                Privacy Preferences
              </h3>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                We use essential cookies to make this website work. With your
                permission, we may also use analytics cookies to improve our
                services.
              </p>

              {settingsOpen && (
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="font-semibold text-white">Essential</div>
                    <div className="mt-1 text-xs text-slate-400">
                      Always active
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="font-semibold text-white">Analytics</div>
                    <div className="mt-1 text-xs text-slate-400">
                      Only after consent
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="font-semibold text-white">Marketing</div>
                    <div className="mt-1 text-xs text-slate-400">
                      Disabled by default
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <button
              onClick={() => setSettingsOpen((prev) => !prev)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              <Settings className="h-4 w-4" />
              Customize
            </button>

            <button
              onClick={() => saveConsent("essential")}
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.06]"
            >
              Essential Only
            </button>

            <button
              onClick={() => saveConsent("accepted")}
              className="rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-50"
            >
              Accept All
            </button>
          </div>
        </div>

        <button
          onClick={() => saveConsent("essential")}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
          aria-label="Close cookie banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
