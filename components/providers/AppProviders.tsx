"use client";

import { LanguageProvider } from "@/hooks/useLanguage";
import { useLenis } from "@/hooks/useLenis";

function SmoothScroll() {
  useLenis();
  return null;
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <SmoothScroll />
      {children}
    </LanguageProvider>
  );
}
