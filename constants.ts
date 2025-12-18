import { Wrench, Smartphone, ArrowUpCircle, Phone, Mail, MessageCircle, ShoppingBag, Cpu } from 'lucide-react';
import { ServiceItem, ContactMethod, ServiceCategory } from './types';

export const CONTACT_INFO: ContactMethod[] = [
  {
    type: 'whatsapp',
    value: '011-907 0055',
    label: 'WhatsApp',
    actionUrl: 'https://wa.me/60119070055?text=Hi%20Apple-4all%2C%20I%27d%20like%20to%20book%20a%20repair...',
    icon: MessageCircle
  },
  {
    type: 'phone',
    value: '011-907 0055',
    label: 'Call',
    actionUrl: 'tel:+60119070055',
    icon: Phone
  },
  {
    type: 'email',
    value: 'user.apple4all@gmail.com',
    label: 'Email',
    actionUrl: 'mailto:user.apple4all@gmail.com',
    icon: Mail
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'repair',
    title: 'Repair',
    description: 'Expert board repair, screens, and battery replacement.',
    icon: Wrench
  },
  {
    id: 'sales',
    title: 'Sales',
    description: 'New and used devices available in store.',
    icon: ShoppingBag
  },
  {
    id: 'upgrade',
    title: 'Upgrade',
    description: 'Storage and memory enhancements for speed.',
    icon: ArrowUpCircle
  }
];

// Mock data to populate the background "shop" to make it look active behind the glass
export const MOCK_SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'iPhone Screen Repair',
    description: 'Original OLED replacement, 30 min turnaround.',
    icon: Smartphone,
    priceStart: 'RM 150'
  },
  {
    id: 2,
    title: 'MacBook Upgrades',
    description: 'Battery replacement, SSD upgrades, and thermal paste.',
    icon: Wrench,
    priceStart: 'RM 200'
  },
  {
    id: 3,
    title: 'Trade-In Program',
    description: 'Get the best value for your used Apple devices.',
    icon: ArrowUpCircle,
    priceStart: 'Variable'
  },
  {
    id: 4,
    title: 'iPad Battery Fix',
    description: 'Restore all-day battery life to your iPad.',
    icon: Smartphone,
    priceStart: 'RM 120'
  }
];