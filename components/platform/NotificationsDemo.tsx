"use client";

import { useState } from "react";
import { Bell, Check, Eye, X } from "lucide-react";
import { notifications as seed } from "@/lib/data";
import { useLanguage } from "@/hooks/useLanguage";

export function NotificationsDemo(){
 const {t}=useLanguage(); const [items,setItems]=useState(seed);
 const read=(id:string)=>setItems(list=>list.map(x=>x.id===id?{...x,read:true}:x));
 const dismiss=(id:string)=>setItems(list=>list.filter(x=>x.id!==id));
 return <div className="mx-auto max-w-4xl"><div className="mb-7"><h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{t("notifications.title")}</h2><p className="mt-3 text-sm text-white/50">{t("notifications.description")}</p></div>{items.length===0?<div className="panel p-12 text-center text-white/40">{t("notifications.empty")}</div>:<div className="space-y-3">{items.map(item=><article key={item.id} className={`panel p-5 ${!item.read?"border-sand/20":"opacity-70"}`}><div className="flex gap-4"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-sand"><Bell size={17}/></div><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-4"><p className="text-sm leading-6">{t(`notifications.${item.type}`)}</p><span className="shrink-0 text-[10px] text-white/30">{item.time}</span></div><div className="mt-4 flex flex-wrap gap-2"><button onClick={()=>read(item.id)} className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-[11px]"><Check size={13}/>{t("common.markRead")}</button><button className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-[11px]"><Eye size={13}/>{t("common.view")}</button><button onClick={()=>dismiss(item.id)} className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-[11px]"><X size={13}/>{t("common.dismiss")}</button></div></div></div></article>)}</div>}</div>;
}
