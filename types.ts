import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  priceStart?: string;
}

export interface ContactMethod {
  type: 'email' | 'phone' | 'whatsapp';
  value: string;
  label: string;
  actionUrl: string;
  icon: LucideIcon;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}