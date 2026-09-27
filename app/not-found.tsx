"use client";

import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen grid place-items-center px-6 bg-midnight">
      <div className="panel max-w-xl p-10 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-sand/60">404 · KoraFlow</p>
        <h1 className="mt-4 text-3xl font-semibold">{t("errors.notFoundTitle")}</h1>
        <p className="mt-4 text-white/60">{t("errors.notFoundBody")}</p>
        <Link href="/" className="mt-7 inline-flex rounded-full bg-sand px-6 py-3 font-medium text-navy">{t("errors.home")}</Link>
      </div>
    </main>
  );
}
