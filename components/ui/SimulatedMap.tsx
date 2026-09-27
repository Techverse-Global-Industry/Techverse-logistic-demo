"use client";

import { MapPin, Navigation, Warehouse } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function SimulatedMap({ progress = 62, compact = false }: { progress?: number; compact?: boolean }) {
  const { t } = useLanguage();
  const x = 16 + (progress / 100) * 68;
  const y = 70 - Math.sin((progress / 100) * Math.PI) * 38;

  return (
    <div className={`scan relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c1827] ${compact ? "h-52" : "h-80"}`} aria-label={t("common.simulatedMap")}>
      <div className="absolute inset-0 grid-noise opacity-50" />
      <svg viewBox="0 0 100 80" className="absolute inset-0 h-full w-full" role="img" aria-label={t("common.routeAria")}>
        <path d="M12 66 C28 22, 48 25, 58 50 S78 64, 90 18" fill="none" stroke="rgba(231,222,205,.15)" strokeWidth="7" strokeLinecap="round" />
        <path className="route-line" d="M12 66 C28 22, 48 25, 58 50 S78 64, 90 18" fill="none" stroke="#E7DECD" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx={x} cy={y} r="2.2" fill="#27C281" />
        <circle cx={x} cy={y} r="5" fill="none" stroke="rgba(39,194,129,.35)" strokeWidth="1" />
      </svg>
      <div className="absolute left-[7%] bottom-[11%] grid h-10 w-10 place-items-center rounded-full bg-sand text-navy shadow-glow"><Warehouse size={17} /></div>
      <div className="absolute right-[5%] top-[12%] grid h-10 w-10 place-items-center rounded-full bg-forest text-white"><MapPin size={17} /></div>
      <div className="absolute rounded-full border border-success/40 bg-success/15 p-2 text-success" style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}><Navigation size={14} /></div>
      <div className="absolute inset-x-5 bottom-4 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/45">
        <span>{t("common.originHub")}</span><span>{t("common.simulatedRoute")}</span><span>{t("tracking.destination")}</span>
      </div>
    </div>
  );
}
