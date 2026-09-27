"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { companyConfig } from "@/lib/config";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["#home", "nav.home"],
    ["#solutions", "nav.solutions"],
    ["/platform", "nav.platform"],
    ["/platform/tracking", "nav.tracking"],
    ["#company", "nav.company"],
    ["#contact", "nav.contact"],
  ] as const;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-midnight/80 backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Primary navigation">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-sand text-sm font-black text-navy">KF</span>
          <span>{companyConfig.name}</span>
        </Link>
        <div className="hidden items-center gap-6 text-sm text-white/70 lg:flex">
          {links.map(([href, key]) => <Link key={href} href={href} className="transition hover:text-white">{t(key)}</Link>)}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex rounded-full border border-white/10 p-1 text-xs" aria-label="Language selector">
            <button onClick={() => setLanguage("en")} className={`rounded-full px-3 py-1.5 ${language === "en" ? "bg-white text-navy" : "text-white/60"}`}>EN</button>
            <button onClick={() => setLanguage("fr")} className={`rounded-full px-3 py-1.5 ${language === "fr" ? "bg-white text-navy" : "text-white/60"}`}>FR</button>
          </div>
          <Link href="/platform" className="rounded-full bg-sand px-5 py-2.5 text-sm font-semibold text-navy transition hover:scale-[1.02]">{t("nav.demo")}</Link>
        </div>
        <button className="grid h-11 w-11 place-items-center rounded-full border border-white/10 lg:hidden" aria-label={t("nav.openMenu")} onClick={() => setOpen((v) => !v)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-midnight/95 px-5 pb-6 pt-3 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map(([href, key]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-white/80 hover:bg-white/5">{t(key)}</Link>)}
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
            <div className="flex rounded-full border border-white/10 p-1 text-xs">
              <button onClick={() => setLanguage("en")} className={`rounded-full px-3 py-1.5 ${language === "en" ? "bg-white text-navy" : "text-white/60"}`}>EN</button>
              <button onClick={() => setLanguage("fr")} className={`rounded-full px-3 py-1.5 ${language === "fr" ? "bg-white text-navy" : "text-white/60"}`}>FR</button>
            </div>
            <Link href="/platform" onClick={() => setOpen(false)} className="rounded-full bg-sand px-4 py-2 text-xs font-semibold text-navy">{t("nav.demo")}</Link>
          </div>
        </div>
      )}
    </header>
  );
}
