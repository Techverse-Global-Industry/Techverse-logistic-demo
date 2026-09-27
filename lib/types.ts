export type Language = "en" | "fr";
export type ShipmentStatusKey = "created" | "pickedUp" | "departedHub" | "inTransit" | "localHub" | "outForDelivery" | "delivered";

export interface Shipment {
  id: string;
  origin: string;
  destination: string;
  status: ShipmentStatusKey;
  progress: number;
  driver: string;
  vehicle: string;
  eta: string;
  timeline: ShipmentStatusKey[];
}

export interface Driver {
  id: string;
  name: string;
  vehicle: string;
  status: "available" | "route" | "break";
  zone: string;
}

export interface Vehicle {
  id: string;
  type: "van" | "truck" | "bike";
  status: "active" | "available" | "maintenance";
  mileage: number;
}

export interface Booking {
  id: string;
  pickup: string;
  destination: string;
  packageType: string;
  weight: string;
  vehicleType: string;
  pickupDate: string;
  priority: string;
  customerName: string;
  phone: string;
  email: string;
}

export interface LogisticsException {
  id: string;
  type: "delayed" | "wrongAddress" | "breakdown" | "unavailable" | "damaged" | "missing";
  severity: "low" | "medium" | "high";
  time: string;
  shipment: string;
  location: string;
  team: string;
  status: "open" | "assigned" | "resolved" | "escalated";
}

export interface DemoNotification {
  id: string;
  type: "shipment" | "driver" | "maintenance" | "sla";
  read: boolean;
  time: string;
}

export interface Customer {
  id: string;
  name: string;
  active: number;
  completed: number;
  upcoming: number;
  supportTier: string;
}

export interface MaintenanceRecord {
  id: string;
  type: "van" | "truck" | "bike";
  mileage: number;
  status: "good" | "dueSoon" | "overdue";
  nextService: string;
  health: number;
}

export interface SLAMetric {
  id: string;
  value: number;
  format: "percent" | "hours" | "count";
  trend: number;
}

export interface CompanyConfig {
  name: string;
  whatsappNumber: string;
  supportEmail: string;
}
