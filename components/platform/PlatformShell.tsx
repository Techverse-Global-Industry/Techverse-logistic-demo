"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, BookOpenCheck, ChevronLeft, CircleGauge, ClipboardCheck, Gauge, Languages, LayoutDashboard, MapPinned, Menu, Truck, Users, Wrench, X, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { DemoBadge } from "./DemoBadge";

const routes = [
  ["/platform", "platform.overview", LayoutDashboard],
  ["/platform/tracking", "platform.tracking", MapPinned],
  ["/platform/booking", "platform.booking", BookOpenCheck],
  ["/platform/dispatch", "platform.dispatch", CircleGauge],
  ["/platform/drivers", "platform.drivers", Truck],
  ["/platform/pod", "platform.pod", ClipboardCheck],
  ["/platform/exceptions", "platform.exceptions", AlertTriangle],
  ["/platform/notifications", "platform.notifications", Bell],
  ["/platform/customers", "platform.customers", Users],
  ["/platform/maintenance", "platform.maintenance", Wrench],
  ["/platform/sla", "platform.sla", Gauge],
] as const;

export function PlatformShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const Sidebar = () => (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-5">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-sand text-sm font-black text-navy">KF</span>
        <div><div className="text-sm font-semibold">KoraFlow</div><div className="text-[10px] text-white/35">{t("platform.subtitle")}</div></div>
      </div>
      <nav className="flex-1 overflow-y-auto p-3" aria-label="Platform navigation">
        <div className="space-y-1">
          {routes.map(([href, key, Icon]) => {
            const active = href === "/platform" ? pathname === href : pathname.startsWith(href);
            return <Link key={href} href={href} onClick={() => setMobileOpen(false)} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${active ? "bg-sand text-navy" : "text-white/55 hover:bg-white/5 hover:text-white"}`}><Icon size={17}/><span>{t(key)}</span></Link>;
          })}
        </div>
      </nav>
      <div className="border-t border-white/10 p-4">
        <Link href="/" className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/55 hover:bg-white/5"><ChevronLeft size={16}/>{t("platform.back")}</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#091420]">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-white/10 bg-[#08121f] lg:block"><Sidebar /></aside>
      {mobileOpen && <div className="fixed inset-0 z-50 lg:hidden"><button aria-label={t("common.close")} className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} /><aside className="absolute inset-y-0 left-0 w-72 border-r border-white/10 bg-[#08121f]"><button className="absolute right-3 top-3 z-10 rounded-full border border-white/10 p-2" onClick={() => setMobileOpen(false)}><X size={16}/></button><Sidebar /></aside></div>}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-white/10 bg-[#091420]/85 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
          <div className="flex items-center gap-3"><button onClick={() => setMobileOpen(true)} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 lg:hidden" aria-label={t("nav.openMenu")}><Menu size={18}/></button><div><h1 className="text-sm font-semibold sm:text-base">{t("platform.title")}</h1><div className="mt-1 hidden text-[10px] text-white/35 sm:block">{t("common.demoNote")}</div></div></div>
          <div className="flex items-center gap-2"><DemoBadge /><button onClick={() => setLanguage(language === "en" ? "fr" : "en")} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-white/65"><Languages size={14}/>{language.toUpperCase()}</button></div>
        </header>
        <main className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
