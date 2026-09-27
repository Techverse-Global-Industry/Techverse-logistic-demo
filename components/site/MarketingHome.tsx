"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Boxes, Building2, ChevronDown, CircleDot, Gauge, PackageCheck, Route, ShieldCheck, Truck, Warehouse } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/hooks/useLanguage";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsApp, WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";

const LogisticsScene = dynamic(() => import("@/components/three/LogisticsScene"), { ssr: false });

const solutionIcons = [Route, Truck, Warehouse, Gauge, Boxes, Building2];

export function MarketingHome() {
  const { t } = useLanguage();
  const root = useRef<HTMLDivElement>(null);
  const [contactSent, setContactSent] = useState(false);
  const [finderOpen, setFinderOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-eyebrow]", { y: 20, opacity: 0, duration: 0.6 })
        .from("[data-hero-title]", { y: 48, opacity: 0, duration: 0.9 }, "-=0.25")
        .from("[data-hero-copy]", { y: 26, opacity: 0, duration: 0.7 }, "-=0.45")
        .from("[data-hero-actions]", { y: 18, opacity: 0, duration: 0.6 }, "-=0.3")
        .from("[data-hero-ui]", { scale: 0.96, opacity: 0, duration: 0.8 }, "-=0.35");

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 42,
          opacity: 0,
          duration: 0.85,
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const solutions = [
    ["solutions.lastMile", "solutions.lastMileDesc"],
    ["solutions.freight", "solutions.freightDesc"],
    ["solutions.warehousing", "solutions.warehousingDesc"],
    ["solutions.fleet", "solutions.fleetDesc"],
    ["solutions.crossBorder", "solutions.crossBorderDesc"],
    ["solutions.corporate", "solutions.corporateDesc"],
  ] as const;

  const platformCards = ["tracking", "booking", "dispatch", "drivers", "delivery", "exceptions", "notifications", "customers", "maintenance", "sla"];
  const process = ["book", "dispatch", "track", "deliver", "confirm", "analyze"];

  return (
    <div ref={root}>
      <Navbar />
      <main>
        <section id="home" className="relative min-h-screen overflow-hidden border-b border-white/10 pt-24">
          <div className="absolute inset-0 grid-noise opacity-50" />
          <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-sand/10 blur-3xl" />
          <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-forest/20 blur-3xl" />
          <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-5 py-12 lg:grid-cols-[0.95fr_1.35fr] lg:px-8">
            <div className="relative z-10">
              <p data-hero-eyebrow className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-sand/60">{t("hero.eyebrow")}</p>
              <h1 data-hero-title className="max-w-3xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">{t("hero.title")}</h1>
              <p data-hero-copy className="mt-7 max-w-xl text-balance text-base leading-7 text-white/60 sm:text-lg">{t("hero.description")}</p>
              <div data-hero-actions className="mt-8 flex flex-wrap gap-3">
                <a href="#solutions" className="inline-flex items-center gap-2 rounded-full bg-sand px-6 py-3.5 text-sm font-semibold text-navy">{t("hero.explore")}<ArrowRight size={16} /></a>
                <Link href="/platform/tracking" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white">{t("hero.tracking")}</Link>
              </div>
              <div className="mt-10 grid max-w-lg grid-cols-2 gap-3 text-xs text-white/50">
                <div className="glass rounded-2xl p-4"><CircleDot className="mb-3 text-success" size={18}/><div className="font-medium text-white/80">{t("hero.liveOps")}</div></div>
                <div className="glass rounded-2xl p-4"><Route className="mb-3 text-sand" size={18}/><div className="font-medium text-white/80">{t("hero.visibility")}</div></div>
              </div>
            </div>
            <div data-hero-ui className="relative h-[440px] overflow-hidden rounded-[32px] border border-white/10 bg-[#091524] shadow-2xl sm:h-[560px] lg:h-[680px]">
              <LogisticsScene />
              <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/10 bg-midnight/70 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white/55 backdrop-blur-xl">{t("common.simulated")}</div>
              <div className="pointer-events-none absolute bottom-4 right-4 w-[230px] rounded-2xl border border-white/10 bg-midnight/75 p-4 backdrop-blur-xl sm:w-[280px]">
                <div className="flex items-center justify-between text-xs"><span className="text-white/50">{t("common.routeLayer")}</span><span className="text-success">68%</span></div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[68%] rounded-full bg-sand" /></div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-[10px] text-white/45"><span>{t("common.hub")}</span><span className="text-center">{t("common.transit")}</span><span className="text-right">{t("common.drop")}</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div data-reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sand/55">{t("solutions.eyebrow")}</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{t("solutions.title")}</h2>
            <p className="mt-5 text-base leading-7 text-white/55">{t("solutions.description")}</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map(([title, desc], i) => {
              const Icon = solutionIcons[i];
              return <article data-reveal key={title} className="group panel min-h-64 p-7 transition duration-300 hover:-translate-y-1 hover:border-sand/20">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5 text-sand"><Icon size={20}/></div>
                <h3 className="mt-8 text-xl font-semibold">{t(title)}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{t(desc)}</p>
              </article>;
            })}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#08131f] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div data-reveal className="grid items-end gap-8 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sand/55">{t("platformShowcase.eyebrow")}</p>
                <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{t("platformShowcase.title")}</h2>
              </div>
              <div><p className="max-w-xl text-white/55">{t("platformShowcase.description")}</p><Link href="/platform" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sand">{t("platformShowcase.enter")}<ArrowRight size={16}/></Link></div>
            </div>
            <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {platformCards.map((key, index) => <div data-reveal key={key} className={`glass relative min-h-36 rounded-3xl p-5 ${index === 0 || index === 8 ? "lg:translate-y-5" : ""}`}>
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/35">0{index + 1}</div>
                <div className="mt-9 font-medium">{t(`platformShowcase.${key}`)}</div>
                <div className="absolute bottom-5 right-5 h-2 w-2 rounded-full bg-success shadow-[0_0_20px_rgba(39,194,129,.7)]" />
              </div>)}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2">
            <div data-reveal className="relative min-h-[460px] overflow-hidden rounded-[30px] border border-white/10">
              <Image src="/images/logistics/warehouse-operations.jpg" alt="Illustrative warehouse operations placeholder" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
                {["warehouse.inventory","warehouse.sorting","warehouse.dispatch"].map((key) => <div key={key} className="glass rounded-2xl p-3 text-xs">{t(key)}</div>)}
              </div>
            </div>
            <div data-reveal className="flex flex-col justify-center lg:pl-10">
              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{t("warehouse.title")}</h2>
              <p className="mt-5 max-w-xl leading-7 text-white/55">{t("warehouse.description")}</p>
              <div className="mt-9 space-y-5">
                {["warehouse.inventory","warehouse.sorting","warehouse.dispatch","warehouse.transportation","warehouse.delivery"].map((key, i) => <div key={key} className="flex items-center gap-4"><span className="grid h-9 w-9 place-items-center rounded-full border border-sand/20 text-xs text-sand">0{i+1}</span><span>{t(key)}</span><div className="h-px flex-1 bg-white/10" /></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="company" className="border-y border-white/10 bg-[#07111d] py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2 lg:px-8">
            <div data-reveal className="order-2 flex flex-col justify-center lg:order-1 lg:pr-10">
              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{t("driverSection.title")}</h2>
              <p className="mt-5 max-w-xl leading-7 text-white/55">{t("driverSection.description")}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["navigation","queue","customerDetails","pod","routeUpdates","reporting"].map((key) => <div key={key} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75">{t(`driverSection.${key}`)}</div>)}
              </div>
            </div>
            <div data-reveal className="relative order-1 min-h-[500px] overflow-hidden rounded-[30px] border border-white/10 lg:order-2">
              <Image src="/images/logistics/delivery-driver.jpg" alt="Illustrative delivery driver placeholder" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-transparent to-transparent" />
              <div className="glass float-slow absolute left-4 top-4 rounded-2xl p-4 text-xs"><PackageCheck className="mb-2 text-success" size={18}/>{t("driverSection.pod")}</div>
              <div className="glass float-slow absolute bottom-5 right-4 rounded-2xl p-4 text-xs [animation-delay:1s]"><Route className="mb-2 text-sand" size={18}/>{t("driverSection.routeUpdates")}</div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr]">
            <div data-reveal className="relative min-h-[480px] overflow-hidden rounded-[30px] border border-white/10">
              <Image src="/images/logistics/driver-tablet.jpg" alt="Illustrative field technology placeholder" fill className="object-cover" sizes="(max-width:1024px) 100vw, 55vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-transparent to-transparent" />
              <div className="glass absolute bottom-5 left-5 right-5 rounded-2xl p-4">
                <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-3">{["currentRoute","instructions","customer","packageList","pod","reporting"].map((key) => <div key={key} className="rounded-xl bg-white/5 px-3 py-2">{t(`field.${key}`)}</div>)}</div>
              </div>
            </div>
            <div data-reveal className="lg:pl-8">
              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{t("field.title")}</h2>
              <p className="mt-5 max-w-xl leading-7 text-white/55">{t("field.description")}</p>
              <div className="mt-8 rounded-[30px] border border-white/10 bg-[#0b1726] p-4 shadow-2xl">
                <div className="rounded-[24px] border border-white/8 bg-[#0e1c2d] p-5">
                  <div className="flex items-center justify-between"><span className="text-xs text-white/45">{t("field.currentRoute")}</span><span className="rounded-full bg-success/10 px-2 py-1 text-[10px] text-success">{t("common.simulated")}</span></div>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[72%] rounded-full bg-sand" /></div>
                  <div className="mt-5 grid grid-cols-2 gap-2 text-xs">{["field.instructions","field.customer","field.packageList","field.pod"].map((key)=><div key={key} className="rounded-xl border border-white/8 p-3 text-white/60">{t(key)}</div>)}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div data-reveal className="relative min-h-[560px] overflow-hidden rounded-[36px] border border-white/10">
            <Image src="/images/logistics/warehouse-team.jpg" alt="Illustrative warehouse team placeholder" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/70 to-midnight/20" />
            <div className="relative z-10 flex min-h-[560px] max-w-xl flex-col justify-center p-8 sm:p-12">
              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{t("operations.title")}</h2>
              <p className="mt-5 leading-7 text-white/60">{t("operations.description")}</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {["platform.activeDeliveries","platform.availableDrivers","platform.vehicles","platform.openExceptions"].map((key, i) => <div key={key} className="glass rounded-2xl p-4"><div className="text-2xl font-semibold">{[12,6,18,4][i]}</div><div className="mt-1 text-xs text-white/45">{t(key)}</div></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 data-reveal className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{t("process.title")}</h2>
            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
              {process.map((key, i) => <div data-reveal key={key} className="panel relative min-h-44 p-5"><div className="text-xs text-sand/50">0{i+1}</div><div className="absolute bottom-5 left-5 text-lg font-medium">{t(`process.${key}`)}</div></div>)}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div data-reveal className="grid gap-8 rounded-[32px] border border-white/10 bg-white/[0.025] p-6 sm:p-9 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em]">{t("finder.title")}</h2>
              <p className="mt-4 text-sm leading-6 text-white/50">{t("finder.description")}</p>
            </div>
            <div>
              <div className="grid gap-3 sm:grid-cols-2">
                {["origin","destination","serviceType","deliverySpeed","vehicleType"].map((key, i) => i < 2 ? <input key={key} aria-label={t(`finder.${key}`)} placeholder={t(`finder.${key}`)} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/30" /> : <select key={key} aria-label={t(`finder.${key}`)} className="rounded-2xl border border-white/10 bg-[#101d2d] px-4 py-3 text-sm"><option>{t(`finder.${key}`)}</option><option>{t("finder.standard")}</option><option>{t("finder.express")}</option></select>)}
              </div>
              <button onClick={() => setFinderOpen(true)} className="mt-4 rounded-full bg-sand px-5 py-3 text-sm font-semibold text-navy">{t("finder.search")}</button>
              {finderOpen && <div className="mt-5 grid gap-3 sm:grid-cols-3">{["standard","express","sameDay"].map((key) => <div key={key} className="rounded-2xl border border-success/20 bg-success/5 p-4 text-sm"><ShieldCheck className="mb-3 text-success" size={18}/>{t(`finder.${key}`)}<div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/35">{t("common.demoData")}</div></div>)}</div>}
            </div>
          </div>
        </section>

        <section id="contact" className="border-y border-white/10 bg-[#08131f] py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
            <div data-reveal>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{t("contact.title")}</h2>
              <p className="mt-5 max-w-xl leading-7 text-white/55">{t("contact.description")}</p>
              <div className="mt-8"><WhatsAppButton /></div>
            </div>
            <form data-reveal className="grid gap-3" onSubmit={(e) => { e.preventDefault(); setContactSent(true); }}>
              <div className="grid gap-3 sm:grid-cols-2">
                {["name","company","email","phone"].map((key) => <label key={key} className="text-xs text-white/45">{t(`contact.${key}`)}<input required className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none" /></label>)}
              </div>
              <label className="text-xs text-white/45">{t("contact.service")}<select className="mt-2 w-full rounded-2xl border border-white/10 bg-[#101d2d] px-4 py-3 text-sm"><option>{t("solutions.lastMile")}</option><option>{t("solutions.freight")}</option><option>{t("solutions.warehousing")}</option></select></label>
              <label className="text-xs text-white/45">{t("contact.message")}<textarea required rows={4} className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none" /></label>
              <button className="mt-2 rounded-full bg-sand px-6 py-3.5 text-sm font-semibold text-navy">{t("contact.submit")}</button>
              {contactSent && <p className="rounded-2xl border border-success/20 bg-success/5 p-4 text-sm text-success">{t("contact.success")}</p>}
            </form>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-24 lg:px-8">
          <h2 data-reveal className="text-center text-3xl font-semibold sm:text-4xl">{t("faq.title")}</h2>
          <div className="mt-9 space-y-3">
            {[1,2,3].map((i) => <details data-reveal key={i} className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">{t(`faq.q${i}`)}<ChevronDown className="transition group-open:rotate-180" size={18}/></summary><p className="mt-4 max-w-3xl text-sm leading-6 text-white/50">{t(`faq.a${i}`)}</p></details>)}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32">
          <div data-reveal className="relative overflow-hidden rounded-[36px] border border-sand/15 bg-sand p-8 text-navy sm:p-12 lg:p-16">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[50px] border-navy/5" />
            <h2 className="relative max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">{t("finalCta.title")}</h2>
            <p className="relative mt-5 max-w-2xl leading-7 text-navy/65">{t("finalCta.description")}</p>
            <div className="relative mt-8 flex flex-wrap gap-3"><Link href="/platform" className="rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white">{t("finalCta.platform")}</Link><WhatsAppButton /></div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
