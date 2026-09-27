"use client";

import { drivers, shipments, vehicles } from "@/lib/data";
import { useLanguage } from "@/hooks/useLanguage";
import { SimulatedMap } from "@/components/ui/SimulatedMap";

export function DispatchDemo() {
  const { t } = useLanguage();
  const cards = [
    ["platform.activeDeliveries", "12"], ["platform.availableDrivers", "6"], ["platform.vehicles", "18"], ["platform.delayedDeliveries", "3"], ["platform.completedDeliveries", "47"], ["platform.openExceptions", "4"],
  ];
  return <div className="mx-auto max-w-7xl"><div className="mb-7"><h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{t("dispatch.title")}</h2><p className="mt-3 text-sm text-white/50">{t("dispatch.description")}</p></div>
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">{cards.map(([k,v])=><div key={k} className="panel p-4"><div className="text-2xl font-semibold">{v}</div><div className="mt-1 text-[11px] text-white/40">{t(k)}</div></div>)}</div>
    <div className="mt-5 grid gap-5 xl:grid-cols-[1.35fr_.65fr]"><section className="panel p-4 sm:p-5"><h3 className="mb-4 text-sm font-medium">{t("dispatch.map")}</h3><SimulatedMap progress={68}/></section><section className="panel p-5"><h3 className="text-sm font-medium">{t("dispatch.driverList")}</h3><div className="mt-4 space-y-2">{drivers.map(d=><div key={d.id} className="flex items-center justify-between rounded-xl border border-white/8 px-3 py-3 text-xs"><div><div className="font-medium">{d.name}</div><div className="mt-1 text-white/35">{d.vehicle} · {d.zone}</div></div><span className={`rounded-full px-2 py-1 ${d.status==="available"?"bg-success/10 text-success":"bg-sand/10 text-sand"}`}>{t(`statuses.${d.status}`)}</span></div>)}</div></section></div>
    <div className="mt-5 grid gap-5 lg:grid-cols-2"><section className="panel p-5"><h3 className="text-sm font-medium">{t("dispatch.shipmentList")}</h3><div className="mt-4 overflow-x-auto"><table className="w-full min-w-[520px] text-left text-xs"><thead className="text-white/35"><tr><th className="pb-3">ID</th><th>{t("tracking.origin")}</th><th>{t("tracking.destination")}</th><th>{t("common.status")}</th></tr></thead><tbody>{shipments.map(s=><tr key={s.id} className="border-t border-white/8"><td className="py-3">{s.id}</td><td>{s.origin}</td><td>{s.destination}</td><td>{t(`statuses.${s.status}`)}</td></tr>)}</tbody></table></div></section><section className="panel p-5"><h3 className="text-sm font-medium">{t("dispatch.vehicleStatus")}</h3><div className="mt-4 grid gap-2 sm:grid-cols-2">{vehicles.map(v=><div key={v.id} className="rounded-xl border border-white/8 p-3 text-xs"><div className="flex items-center justify-between"><span className="font-medium">{v.id}</span><span className="text-white/35">{t(`maintenance.${v.type}`)}</span></div><div className="mt-3 text-white/45">{t(`statuses.${v.status}`)} · {v.mileage.toLocaleString()} km</div></div>)}</div></section></div>
  </div>;
}
