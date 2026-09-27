"use client";

import { PointerEvent, useRef, useState } from "react";
import { Camera, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function PodDemo() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const [saved, setSaved] = useState(false);

  function point(event: PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current; if (!canvas) return {x:0,y:0};
    const rect=canvas.getBoundingClientRect(); return {x:(event.clientX-rect.left)*(canvas.width/rect.width),y:(event.clientY-rect.top)*(canvas.height/rect.height)};
  }
  function down(e: PointerEvent<HTMLCanvasElement>) { drawing.current=true; const ctx=canvasRef.current?.getContext("2d"); if(!ctx)return; const p=point(e); ctx.beginPath(); ctx.moveTo(p.x,p.y); e.currentTarget.setPointerCapture(e.pointerId); }
  function move(e: PointerEvent<HTMLCanvasElement>) { if(!drawing.current)return; const ctx=canvasRef.current?.getContext("2d"); if(!ctx)return; const p=point(e); ctx.strokeStyle="#E7DECD"; ctx.lineWidth=3; ctx.lineCap="round"; ctx.lineTo(p.x,p.y); ctx.stroke(); }
  function up(){ drawing.current=false; }
  function clear(){ const c=canvasRef.current; if(c)c.getContext("2d")?.clearRect(0,0,c.width,c.height); setSaved(false); }
  function save(){ setSaved(true); }

  return <div className="mx-auto max-w-5xl"><div className="mb-7"><h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{t("pod.title")}</h2><p className="mt-3 text-sm text-white/50">{t("pod.description")}</p></div><div className="grid gap-5 lg:grid-cols-2"><section className="panel p-5 sm:p-7"><div className="grid gap-3 sm:grid-cols-2">{[["pod.recipient","Demo Recipient"],["pod.packageId","PKG-001247"],["pod.deliveryTime","16:40"],["pod.driverConfirmation",t("pod.delivered")]].map(([k,v])=><div key={k} className="rounded-2xl border border-white/8 p-4"><div className="text-[10px] uppercase tracking-[.15em] text-white/35">{t(k)}</div><div className="mt-2 text-sm">{v}</div></div>)}</div><div className="mt-5"><div className="mb-2 text-xs text-white/45">{t("pod.signature")}</div><canvas ref={canvasRef} width={800} height={260} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} className="h-44 w-full touch-none rounded-2xl border border-dashed border-white/15 bg-white/[.02]" aria-label={t("pod.signature")}/></div><div className="mt-4 flex gap-3"><button onClick={clear} className="rounded-full border border-white/10 px-5 py-3 text-sm">{t("pod.clear")}</button><button onClick={save} className="rounded-full bg-sand px-5 py-3 text-sm font-semibold text-navy">{t("pod.save")}</button></div>{saved&&<p className="mt-4 rounded-2xl border border-success/20 bg-success/5 p-4 text-sm text-success">{t("pod.saved")}</p>}</section><section className="panel flex min-h-[430px] flex-col items-center justify-center p-8 text-center"><div className="grid h-20 w-20 place-items-center rounded-3xl bg-white/5"><Camera size={28} className="text-white/35"/></div><h3 className="mt-5 font-medium">{t("pod.photo")}</h3><p className="mt-2 text-sm text-white/40">{t("pod.photoNote")}</p><div className="mt-8 inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/5 px-4 py-2 text-xs text-success"><CheckCircle2 size={14}/>{t("pod.delivered")}</div></section></div></div>;
}
