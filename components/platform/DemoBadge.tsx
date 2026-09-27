"use client";

import { useLanguage } from "@/hooks/useLanguage";

export function DemoBadge() {
  const { t } = useLanguage();
  return <span className="inline-flex rounded-full border border-warning/25 bg-warning/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-warning">{t("common.demoData")}</span>;
}
