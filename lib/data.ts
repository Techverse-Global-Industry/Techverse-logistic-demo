import type { Customer, DemoNotification, Driver, LogisticsException, MaintenanceRecord, Shipment, SLAMetric, Vehicle } from "./types";

export const shipments: Shipment[] = [
  {
    id: "LGT-2026-001247",
    origin: "Cotonou",
    destination: "Porto-Novo",
    status: "inTransit",
    progress: 68,
    driver: "Demo Driver 04",
    vehicle: "TR-04",
    eta: "16:40",
    timeline: ["created", "pickedUp", "departedHub", "inTransit", "localHub", "outForDelivery", "delivered"],
  },
  {
    id: "LGT-2026-001302",
    origin: "Abomey-Calavi",
    destination: "Ouidah",
    status: "outForDelivery",
    progress: 88,
    driver: "Demo Driver 12",
    vehicle: "VN-12",
    eta: "15:15",
    timeline: ["created", "pickedUp", "departedHub", "inTransit", "localHub", "outForDelivery", "delivered"],
  },
];

export const drivers: Driver[] = [
  { id: "DRV-04", name: "Demo Driver 04", vehicle: "TR-04", status: "route", zone: "Cotonou East" },
  { id: "DRV-07", name: "Demo Driver 07", vehicle: "VN-07", status: "available", zone: "Calavi" },
  { id: "DRV-12", name: "Demo Driver 12", vehicle: "VN-12", status: "route", zone: "Porto-Novo" },
  { id: "DRV-18", name: "Demo Driver 18", vehicle: "BK-18", status: "available", zone: "Cotonou Centre" },
];

export const vehicles: Vehicle[] = [
  { id: "TR-04", type: "truck", status: "active", mileage: 22640 },
  { id: "VN-07", type: "van", status: "available", mileage: 12402 },
  { id: "VN-12", type: "van", status: "active", mileage: 18770 },
  { id: "BK-18", type: "bike", status: "available", mileage: 4908 },
  { id: "TR-21", type: "truck", status: "maintenance", mileage: 41110 },
];

export const exceptions: LogisticsException[] = [
  { id: "EX-01", type: "delayed", severity: "high", time: "14:08", shipment: "LGT-2026-001247", location: "Akpakpa", team: "Control Desk", status: "open" },
  { id: "EX-02", type: "wrongAddress", severity: "medium", time: "13:42", shipment: "LGT-2026-001255", location: "Ganhi", team: "Support", status: "assigned" },
  { id: "EX-03", type: "breakdown", severity: "high", time: "12:16", shipment: "LGT-2026-001271", location: "Godomey", team: "Fleet", status: "escalated" },
  { id: "EX-04", type: "unavailable", severity: "low", time: "11:38", shipment: "LGT-2026-001286", location: "Cadjehoun", team: "Dispatch", status: "open" },
];

export const notifications: DemoNotification[] = [
  { id: "NT-01", type: "shipment", read: false, time: "2 min" },
  { id: "NT-02", type: "driver", read: false, time: "8 min" },
  { id: "NT-03", type: "maintenance", read: true, time: "22 min" },
  { id: "NT-04", type: "sla", read: false, time: "31 min" },
];

export const customers: Customer[] = [
  { id: "CUS-01", name: "Demo Retail Account", active: 4, completed: 38, upcoming: 2, supportTier: "Standard" },
  { id: "CUS-02", name: "Demo Marketplace", active: 7, completed: 61, upcoming: 5, supportTier: "Priority" },
  { id: "CUS-03", name: "Demo Distribution Account", active: 3, completed: 24, upcoming: 1, supportTier: "Standard" },
];

export const maintenanceRecords: MaintenanceRecord[] = [
  { id: "TR-001", type: "van", mileage: 12402, status: "dueSoon", nextService: "8 days", health: 78 },
  { id: "TR-004", type: "truck", mileage: 22640, status: "good", nextService: "31 days", health: 92 },
  { id: "VN-012", type: "van", mileage: 18770, status: "good", nextService: "22 days", health: 88 },
  { id: "TR-021", type: "truck", mileage: 41110, status: "overdue", nextService: "Overdue", health: 54 },
];

export const slaMetrics: SLAMetric[] = [
  { id: "onTime", value: 94, format: "percent", trend: 2.4 },
  { id: "delayed", value: 7, format: "count", trend: -1.1 },
  { id: "compliance", value: 96, format: "percent", trend: 1.8 },
  { id: "averageTime", value: 4.6, format: "hours", trend: -0.4 },
  { id: "firstAttempt", value: 91, format: "percent", trend: 1.2 },
];
