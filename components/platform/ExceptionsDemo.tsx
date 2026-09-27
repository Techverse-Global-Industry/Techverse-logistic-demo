"use client";

import { useState } from "react";
import { AlertOctagon } from "lucide-react";
import { exceptions as seed } from "@/lib/data";
import type { LogisticsException } from "@/lib/types";
import { useLanguage } from "@/hooks/useLanguage";

export function ExceptionsDemo() {
  const { t } = useLanguage();
  const [items, setItems] = useState<LogisticsException[]>(seed);
  const setStatus=(id:string,status:LogisticsException["status"])=>setItems(list=>list.map(x=>x.id===id?{...x,status}:x));
  const sev={low:"text-success bg-success/10",medium:"text-warning bg-warning/10",high:"text-danger bg-danger/10"};
  return <div className="mx-auto max-w-7xl"><div className="mb-7"><h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{t("exceptions.title")}</h2><p className="mt-3 text-sm text-white/50">{t("exceptions.description")}</p></div><div className="space-y-3">{items.map(item=><article key={item.id} className="panel p-5"><div className="flex flex-col gap-5 xl:flex-row xl:items-center"><div className="flex min-w-0 flex-1 items-start gap-4"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-danger/10 text-danger"><AlertOctagon size={18}/></div><div><div className="flex flex-wrap items-center gap-2"><h3 className="font-medium">{t(`exceptions.${item.type}`)}</h3><span className={`rounded-full px-2.5 py-1 text-[10px] ${sev[item.severity]}`}>{t(`exceptions.${item.severity}`)}</span><span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] text-white/45">{t(`statuses.${item.status}`)}</span></div><div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/40"><span>{item.shipment}</span><span>{item.location}</span><span>{item.team}</span><span>{item.time}</span></div></div></div><div className="flex flex-wrap gap-2"><button onClick={()=>setStatus(item.id,"assigned")} className="rounded-xl border border-white/10 px-4 py-2 text-xs">{t("exceptions.assign")}</button><button onClick={()=>setStatus(item.id,"resolved")} className="rounded-xl border border-success/20 bg-success/5 px-4 py-2 text-xs text-success">{t("exceptions.resolve")}</button><button onClick={()=>setStatus(item.id,"escalated")} className="rounded-xl border border-danger/20 bg-danger/5 px-4 py-2 text-xs text-danger">{t("exceptions.escalate")}</button></div></div></article>)}</div></div>;
}
