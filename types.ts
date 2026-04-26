export enum ServiceType {
  EXPRESS = 'Express Wash',
  DELUXE = 'Deluxe Wash',
  INTERIOR = 'Interior Detail',
  FULL_DETAIL = 'Full Detail',
  CERAMIC = 'Ceramic Coating'
}

export interface Service {
  id: string;
  type: ServiceType;
  name: string;
  description: string;
  price: number;
  duration: string; // e.g., "30 min"
  image: string;
  features: string[];
}

export interface Booking {
  id: string;
  serviceId: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  vehicleModel: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
