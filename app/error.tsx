"use client";

import { useLanguage } from "@/hooks/useLanguage";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen grid place-items-center px-6 bg-midnight">
      <div className="panel max-w-xl p-10 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-sand/60">KoraFlow</p>
        <h1 className="mt-4 text-3xl font-semibold">{t("errors.title")}</h1>
        <p className="mt-4 text-white/60">{t("errors.body")}</p>
        <button onClick={reset} className="mt-7 rounded-full bg-sand px-6 py-3 font-medium text-navy">{t("errors.retry")}</button>
      </div>
    </main>
  );
}
