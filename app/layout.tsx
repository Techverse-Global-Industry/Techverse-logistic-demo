import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "Modern Logistics & Transportation Solutions | KoraFlow Logistics",
  description: "A premium bilingual front-end logistics and transportation technology prototype with simulated tracking, dispatch, fleet, delivery and customer operations.",
  openGraph: {
    title: "KoraFlow Logistics — Move Faster. Deliver Smarter.",
    description: "A cinematic logistics technology website and browser-only operations platform demo.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProviders>
          <ScrollToTop />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
