"use client";

import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { companyConfig } from "@/lib/config";

export function WhatsAppButton({ context = "general", label = true }: { context?: "general" | "tracking" | "booking" | "driver"; label?: boolean }) {
  const { t } = useLanguage();
  const href = `https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent(t(`whatsapp.${context}`))}`;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-success px-4 py-3 text-sm font-semibold text-[#07150e] shadow-lg transition hover:scale-[1.02]" aria-label={t("whatsapp.label")}>
      <MessageCircle size={18} />{label && <span>{t("whatsapp.label")}</span>}
    </a>
  );
}

export function FloatingWhatsApp() {
  return <div className="fixed bottom-5 right-5 z-40"><WhatsAppButton label={false} /></div>;
}
