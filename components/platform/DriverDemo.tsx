"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle2, MapPin, Navigation, Package } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";

export function DriverDemo() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"ready"|"enRoute"|"atDestination"|"deliveredSuccessfully"|"issueReported">("ready");
  const actions = [
    ["startRoute","enRoute",Navigation], ["arrived","atDestination",MapPin], ["delivered","deliveredSuccessfully",CheckCircle2], ["issue","issueReported",AlertTriangle],
  ] as const;
  return <div className="mx-auto max-w-5xl"><div className="mb-7"><h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{t("driverApp.title")}</h2><p className="mt-3 text-sm text-white/50">{t("driverApp.description")}</p></div>
    <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]"><section className="mx-auto w-full max-w-sm rounded-[34px] border-[8px] border-[#101a28] bg-[#0c1827] p-4 shadow-2xl"><div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-white/10"/><div className="rounded-3xl bg-gradient-to-br from-forest/35 to-sand/10 p-5"><div className="text-[10px] uppercase tracking-[.2em] text-white/40">{t("driverApp.profile")}</div><div className="mt-3 text-xl font-semibold">Demo Driver 04</div><div className="mt-1 text-xs text-white/45">TR-04 · Cotonou East</div></div><div className="mt-4 rounded-3xl border border-white/8 bg-white/[.025] p-5"><div className="flex items-center gap-2 text-sm font-medium"><Navigation size={16} className="text-sand"/>{t("driverApp.currentRoute")}</div><div className="mt-4 text-xs text-white/40">{t("driverApp.nextDelivery")}</div><div className="mt-1 text-sm">{t("common.demoRecipient")} · Porto-Novo</div><div className="mt-4 grid grid-cols-2 gap-2"><div className="rounded-xl bg-white/5 p-3"><Package size={15}/><div className="mt-2 text-xs">3 {t("driverApp.packages")}</div></div><div className="rounded-xl bg-white/5 p-3"><MapPin size={15}/><div className="mt-2 text-xs">34 min</div></div></div></div><div className="mt-4 rounded-2xl border border-success/20 bg-success/5 p-4 text-center text-sm font-medium text-success">{t(`driverApp.${status}`)}</div></section>
      <section className="panel p-6 sm:p-8"><div className="grid gap-3 sm:grid-cols-2">{[["driverApp.customerName",t("common.demoRecipient")],["driverApp.deliveryAddress",`Porto-Novo · ${t("common.demoZone")}`],["driverApp.packages","3"],["driverApp.eta","16:40"]].map(([k,v])=><div key={k} className="rounded-2xl border border-white/8 p-4"><div className="text-[10px] uppercase tracking-[.15em] text-white/35">{t(k)}</div><div className="mt-2 text-sm">{v}</div></div>)}</div><div className="mt-6 grid gap-3 sm:grid-cols-2">{actions.map(([key,next,Icon])=><button key={key} onClick={()=>setStatus(next)} className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[.025] px-4 py-4 text-sm transition hover:border-sand/20 hover:bg-white/5"><Icon size={17}/>{t(`driverApp.${key}`)}</button>)}</div><div className="mt-6"><WhatsAppButton context="driver"/></div><p className="mt-5 text-[11px] text-white/35">{t("common.demoNote")}</p></section></div>
  </div>;
}
