"use client";

import { FormEvent, useEffect, useState } from "react";
import { Check, Search } from "lucide-react";
import { shipments } from "@/lib/data";
import type { Shipment } from "@/lib/types";
import { useLanguage } from "@/hooks/useLanguage";
import { SimulatedMap } from "@/components/ui/SimulatedMap";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";

export function TrackingDemo() {
  const { t } = useLanguage();
  const [value, setValue] = useState("LGT-2026-001247");
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [error, setError] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    if (!shipment) return;
    let current = 0;
    const timer = window.setInterval(() => {
      current = Math.min(shipment.progress, current + 4);
      setAnimatedProgress(current);
      if (current >= shipment.progress) window.clearInterval(timer);
    }, 45);
    return () => window.clearInterval(timer);
  }, [shipment]);

  function submit(e: FormEvent) {
    e.preventDefault();
    const found = shipments.find((item) => item.id.toLowerCase() === value.trim().toLowerCase()) ?? null;
    setShipment(found);
    setError(!found);
    setAnimatedProgress(0);
  }

  return <div className="mx-auto max-w-7xl">
    <div className="grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
      <section>
        <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{t("tracking.title")}</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">{t("tracking.description")}</p>
        <form onSubmit={submit} className="panel mt-7 p-5">
          <label className="text-xs text-white/45">{t("tracking.label")}<div className="mt-2 flex gap-2"><input value={value} onChange={(e)=>setValue(e.target.value)} className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none" placeholder={t("tracking.placeholder")}/><button className="grid h-12 w-12 place-items-center rounded-xl bg-sand text-navy" aria-label={t("tracking.button")}><Search size={18}/></button></div></label>
          {error && <p className="mt-3 text-xs text-danger">{t("tracking.notFound")}</p>}
          <p className="mt-4 text-[11px] leading-5 text-white/35">{t("common.demoNote")}</p>
        </form>
        <div className="mt-4"><WhatsAppButton context="tracking" /></div>
      </section>
      <section className="panel p-4 sm:p-5">
        {shipment ? <div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[["tracking.shipmentId",shipment.id],["tracking.origin",shipment.origin],["tracking.destination",shipment.destination],["tracking.estimatedDelivery",shipment.eta]].map(([key,val])=><div key={key} className="rounded-2xl border border-white/8 bg-white/[.025] p-4"><div className="text-[10px] uppercase tracking-[.15em] text-white/35">{t(key)}</div><div className="mt-2 text-sm font-medium">{val}</div></div>)}
          </div>
          <div className="mt-4 rounded-2xl border border-white/8 bg-white/[.025] p-4"><div className="flex items-center justify-between text-xs"><span>{t("tracking.currentStatus")}: <strong className="ml-1 text-white">{t(`statuses.${shipment.status}`)}</strong></span><span className="text-success">{animatedProgress}%</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-white/8"><div className="h-full rounded-full bg-success transition-[width]" style={{width:`${animatedProgress}%`}}/></div></div>
          <div className="mt-4"><SimulatedMap progress={animatedProgress}/></div>
          <div className="mt-5"><h3 className="text-sm font-medium">{t("tracking.timeline")}</h3><div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">{shipment.timeline.map((status,index)=>{const active=(index/(shipment.timeline.length-1))*100<=shipment.progress;return <div key={status} className={`rounded-xl border p-3 text-xs ${active?"border-success/20 bg-success/5 text-white":"border-white/8 text-white/30"}`}><div className="flex items-center gap-2">{active?<Check size={14} className="text-success"/>:<span className="h-2 w-2 rounded-full bg-white/20"/>}{t(`statuses.${status}`)}</div></div>})}</div></div>
        </div> : <div className="grid min-h-[520px] place-items-center text-center"><div><Search className="mx-auto text-white/25" size={32}/><p className="mt-4 text-sm text-white/40">{t("tracking.description")}</p></div></div>}
      </section>
    </div>
  </div>;
}
