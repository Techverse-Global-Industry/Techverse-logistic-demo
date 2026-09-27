"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, PackagePlus } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import type { Booking } from "@/lib/types";

const initial = { pickup:"", destination:"", packageType:"parcel", weight:"", vehicleType:"van", pickupDate:"", priority:"standard", customerName:"", phone:"", email:"" };

export function BookingDemo() {
  const { t } = useLanguage();
  const [form, setForm] = useState(initial);
  const [booking, setBooking] = useState<Booking | null>(null);

  function submit(e: FormEvent) {
    e.preventDefault();
    const created: Booking = { id: `BK-${Date.now().toString().slice(-6)}`, ...form };
    setBooking(created);
    const existing = JSON.parse(window.localStorage.getItem("koraflow-bookings") || "[]") as Booking[];
    window.localStorage.setItem("koraflow-bookings", JSON.stringify([...existing, created].slice(-10)));
  }

  const inputClass="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none";
  if (booking) return <div className="mx-auto max-w-3xl"><div className="panel p-8 text-center sm:p-12"><CheckCircle2 className="mx-auto text-success" size={44}/><h2 className="mt-5 text-3xl font-semibold">{t("booking.success")}</h2><p className="mt-3 text-white/50">{t("booking.successNote")}</p><div className="mx-auto mt-7 max-w-sm rounded-2xl border border-white/10 bg-white/[.025] p-5 text-left text-sm"><div className="text-xs text-white/35">ID</div><div className="mt-1 font-medium">{booking.id}</div><div className="mt-4 text-xs text-white/35">{t("booking.pickup")} → {t("booking.destination")}</div><div className="mt-1">{booking.pickup} → {booking.destination}</div></div><button onClick={()=>setBooking(null)} className="mt-6 rounded-full bg-sand px-5 py-3 text-sm font-semibold text-navy">{t("booking.another")}</button></div></div>;

  return <div className="mx-auto max-w-5xl"><div className="mb-7"><h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{t("booking.title")}</h2><p className="mt-3 text-sm text-white/50">{t("booking.description")}</p></div><form onSubmit={submit} className="panel p-5 sm:p-7"><div className="grid gap-4 sm:grid-cols-2">
    {["pickup","destination","weight","pickupDate","customerName","phone","email"].map((key)=><label key={key} className={`text-xs text-white/45 ${key==="email"?"sm:col-span-2":""}`}>{t(`booking.${key}`)}<input required type={key==="pickupDate"?"date":key==="email"?"email":"text"} value={form[key as keyof typeof form]} onChange={(e)=>setForm({...form,[key]:e.target.value})} className={inputClass}/></label>)}
    <label className="text-xs text-white/45">{t("booking.packageType")}<select value={form.packageType} onChange={(e)=>setForm({...form,packageType:e.target.value})} className={inputClass.replace("bg-white/5","bg-[#101d2d]")}>{["parcel","pallet","documents","fragile"].map(x=><option key={x} value={x}>{t(`booking.${x}`)}</option>)}</select></label>
    <label className="text-xs text-white/45">{t("booking.vehicleType")}<select value={form.vehicleType} onChange={(e)=>setForm({...form,vehicleType:e.target.value})} className={inputClass.replace("bg-white/5","bg-[#101d2d]")}>{["van","truck","bike"].map(x=><option key={x} value={x}>{t(`booking.${x}`)}</option>)}</select></label>
    <label className="text-xs text-white/45 sm:col-span-2">{t("booking.priority")}<select value={form.priority} onChange={(e)=>setForm({...form,priority:e.target.value})} className={inputClass.replace("bg-white/5","bg-[#101d2d]")}>{[["standard","standard"],["priorityFast","priority"],["sameDay","same-day"]].map(([k,v])=><option key={v} value={v}>{t(`booking.${k}`)}</option>)}</select></label>
  </div><div className="mt-6 flex flex-wrap items-center gap-3"><button className="inline-flex items-center gap-2 rounded-full bg-sand px-6 py-3.5 text-sm font-semibold text-navy"><PackagePlus size={17}/>{t("booking.button")}</button><WhatsAppButton context="booking" /></div><p className="mt-4 text-[11px] text-white/35">{t("common.demoNote")}</p></form></div>;
}
