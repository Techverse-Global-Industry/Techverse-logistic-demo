"use client";

import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { companyConfig } from "@/lib/config";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-white/10 bg-[#08121f]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3 font-semibold"><span className="grid h-9 w-9 place-items-center rounded-xl bg-sand text-sm font-black text-navy">KF</span>{companyConfig.name}</div>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/50">{t("footer.note")}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-white/60">
          <Link href="#company">{t("footer.company")}</Link>
          <Link href="#solutions">{t("footer.solutions")}</Link>
          <Link href="/platform">{t("footer.platform")}</Link>
          <Link href="/platform/tracking">{t("footer.tracking")}</Link>
          <Link href="#contact">{t("footer.contact")}</Link>
          <span>{t("footer.resources")}</span>
        </div>
        <div className="space-y-3 text-sm text-white/45">
          <p>{t("footer.privacy")}</p><p>{t("footer.terms")}</p><p>{t("footer.disclaimer")}</p>
          <p>EN / FR</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/35">© 2026 {companyConfig.name} · Front-end prototype</div>
    </footer>
  );
}
