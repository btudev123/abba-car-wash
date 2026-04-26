import { Service, ServiceType } from './types';
import { Droplets, Sparkles, ShieldCheck, Car, Clock } from 'lucide-react';
import React from 'react';

export const SERVICES: Service[] = [
  {
    id: 's1',
    type: ServiceType.EXPRESS,
    name: 'Express Exterior',
    description: 'A quick but thorough exterior wash to get you back on the road shining.',
    price: 25,
    duration: '20 min',
    image: 'https://picsum.photos/800/600?random=1',
    features: ['Hand Wash', 'Wheel Cleaning', 'Tire Shine', 'Spot Free Rinse']
  },
  {
    id: 's2',
    type: ServiceType.DELUXE,
    name: 'Deluxe Wash & Wax',
    description: 'Includes everything in Express plus a premium wax application for protection.',
    price: 55,
    duration: '45 min',
    image: 'https://picsum.photos/800/600?random=2',
    features: ['Express Features', 'Spray Wax', 'Window Cleaning (In & Out)', 'Vacuum (Light)']
  },
  {
    id: 's3',
    type: ServiceType.INTERIOR,
    name: 'Deep Interior Clean',
    description: 'Focus solely on the inside. Steam cleaning, leather conditioning, and vacuuming.',
    price: 120,
    duration: '2 hours',
    image: 'https://picsum.photos/800/600?random=3',
    features: ['Steam Clean', 'Leather Conditioning', 'Deep Vacuum', 'Odor Removal']
  },
  {
    id: 's4',
    type: ServiceType.FULL_DETAIL,
    name: 'The Abba Full Detail',
    description: 'Our signature package. Complete interior and exterior restoration.',
    price: 250,
    duration: '4 hours',
    image: 'https://picsum.photos/800/600?random=4',
    features: ['Clay Bar Treatment', 'Machine Polish', 'Shampoo Carpets', 'Engine Bay Clean']
  },
  {
    id: 's5',
    type: ServiceType.CERAMIC,
    name: 'Ceramic Coating',
    description: 'Long-term paint protection that lasts for years. Maximum gloss and hydrophobicity.',
    price: 800,
    duration: '1 day',
    image: 'https://picsum.photos/800/600?random=5',
    features: ['Paint Correction', '3-Year Warranty', 'Hydrophobic Layer', 'UV Protection']
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "Abba Car Wash completely transformed my SUV. With three kids, the interior was a mess, but now it looks brand new!",
    rating: 5
  },
  {
    id: 2,
    name: "Mike Ross",
    text: "The ceramic coating service is worth every penny. Water just slides right off. Highly recommended.",
    rating: 5
  },
  {
    id: 3,
    name: "David Chen",
    text: "Quick, professional, and great attention to detail. The Express Exterior is perfect for my weekly routine.",
    rating: 4
  }
];
