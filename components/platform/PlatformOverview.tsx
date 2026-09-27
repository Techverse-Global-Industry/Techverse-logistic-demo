"use client";

import Link from "next/link";
import { ArrowUpRight, Bell, Gauge, PackageCheck, Truck, Users } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { SimulatedMap } from "@/components/ui/SimulatedMap";

export function PlatformOverview() {
  const { t } = useLanguage();
  const metrics = [
    ["platform.activeDeliveries", "12", PackageCheck],
    ["platform.availableDrivers", "6", Users],
    ["platform.vehicles", "18", Truck],
    ["platform.delayedDeliveries", "3", Bell],
    ["platform.completedDeliveries", "47", Gauge],
    ["platform.openExceptions", "4", Bell],
  ] as const;
  const modules = ["tracking","booking","dispatch","drivers","exceptions","customers","maintenance","sla"];

  return <div className="mx-auto max-w-7xl">
    <div className="mb-8"><h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{t("overview.title")}</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-white/50">{t("overview.description")}</p></div>
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">{metrics.map(([key,value,Icon]) => <div key={key} className="panel p-4 xl:col-span-1"><Icon size={17} className="text-sand"/><div className="mt-5 text-2xl font-semibold">{value}</div><div className="mt-1 text-[11px] text-white/40">{t(key)}</div></div>)}</div>
    <div className="mt-5 grid gap-5 xl:grid-cols-[1.3fr_.7fr]">
      <section className="panel p-4 sm:p-5"><div className="mb-4 flex items-center justify-between"><div><h3 className="font-medium">{t("overview.mapTitle")}</h3><p className="mt-1 text-xs text-white/35">{t("overview.flow")}</p></div><span className="text-[10px] uppercase tracking-[0.18em] text-success">{t("common.simulated")}</span></div><SimulatedMap progress={68}/></section>
      <section className="panel p-5"><h3 className="font-medium">{t("platformShowcase.title")}</h3><div className="mt-5 space-y-2">{modules.map((module) => <Link key={module} href={`/platform/${module}`} className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-sm text-white/65 transition hover:border-sand/20 hover:text-white"><span>{t(`platform.${module}`)}</span><ArrowUpRight size={15}/></Link>)}</div></section>
    </div>
  </div>;
}
