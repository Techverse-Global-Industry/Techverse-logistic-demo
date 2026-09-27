"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { translate } from "@/lib/translations";
import type { Language } from "@/lib/types";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("koraflow-language");
    if (stored === "en" || stored === "fr") {
      setLanguageState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLanguage = useCallback((value: Language) => {
    setLanguageState(value);
    window.localStorage.setItem("koraflow-language", value);
    document.documentElement.lang = value;
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "en" ? "fr" : "en");
  }, [language, setLanguage]);

  const t = useCallback((key: string) => translate(language, key), [language]);
  const value = useMemo(() => ({ language, setLanguage, toggleLanguage, t }), [language, setLanguage, toggleLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
