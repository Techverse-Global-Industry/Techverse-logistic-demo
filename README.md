# KoraFlow Logistics — Front-End Prototype

A premium bilingual logistics website and browser-only operations platform demo built with Next.js App Router, React, TypeScript, Tailwind CSS, Three.js / React Three Fiber, GSAP, Lenis and Lucide.

## What is included

- Cinematic marketing homepage with a procedural 3D logistics scene.
- English / French language switcher backed by `lib/translations.ts`.
- Responsive sticky navigation, solutions, warehouse, driver, field-technology, process, service finder, contact, FAQ and CTA sections.
- `/platform` control center with dedicated routes for tracking, booking, dispatch, drivers, proof of delivery, exceptions, notifications, customers, maintenance and SLA monitoring.
- Browser-only simulated tracking, route maps, driver status changes, booking persistence, notification state and POD signature drawing.
- Central mock data in `lib/data.ts` and central company configuration in `lib/config.ts`.
- Safe synchronous cleanup for Lenis, GSAP, event listeners, intervals and route effects.
- Metadata, favicon, accessible labels/focus states and reduced-motion CSS.

## Front-end only

This project intentionally has no backend, database, authentication service, GPS connection, payment gateway, live fleet integration, messaging service, or production customer data. Platform values are sample/demo values only.

## Run locally

```bash
npm install
npm run lint
npm run build
npm run dev
```

Then open `http://localhost:3000`.

Demo tracking number: `LGT-2026-001247`.

## Stock image note

The supplied Magnific stock-page URLs could not be programmatically downloaded in the build environment. To avoid hot-linking or redistributing an asset without a verified download path/license, the four requested local filenames currently contain original geometric logistics placeholders:

- `public/images/logistics/delivery-driver.jpg`
- `public/images/logistics/driver-tablet.jpg`
- `public/images/logistics/warehouse-operations.jpg`
- `public/images/logistics/warehouse-team.jpg`

Replace those four files with the licensed assets downloaded from the source pages. The application already uses the required local paths via `next/image`, so no component changes are needed.

## WhatsApp configuration

Update `lib/config.ts`:

```ts
export const companyConfig = {
  name: "KoraFlow Logistics",
  whatsappNumber: "229XXXXXXXX",
  supportEmail: "hello@example.com",
};
```

The WhatsApp messages are contextual and switch language with the UI.

## Backend integration later

The demo keeps UI state and seed data separate from presentation components. A production implementation can replace imports from `lib/data.ts` and local state/localStorage with API clients, server actions or an external logistics backend without redesigning the whole interface.
