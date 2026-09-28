"use client";

import React from "react";
import {
  Wifi,
  Waves,
  Car,
  Wind,
  Utensils,
  Laptop,
  Tv,
  Shirt,
  Sparkles,
  Sun,
  Check
} from "lucide-react";

interface AmenitiesSectionProps {
  amenities: string[];
}

export default function AmenitiesSection({ amenities }: AmenitiesSectionProps) {
  // Helper to map icon according to amenity text
  const getIcon = (amenity: string) => {
    const lower = amenity.toLowerCase();
    if (lower.includes("wi-fi") || lower.includes("wifi")) return Wifi;
    if (lower.includes("pool") || lower.includes("jacuzzi") || lower.includes("tub")) return Waves;
    if (lower.includes("parking") || lower.includes("car")) return Car;
    if (lower.includes("air") || lower.includes("conditioning")) return Wind;
    if (lower.includes("kitchen")) return Utensils;
    if (lower.includes("workspace")) return Laptop;
    if (lower.includes("tv")) return Tv;
    if (lower.includes("washing") || lower.includes("machine")) return Shirt;
    if (lower.includes("patio") || lower.includes("balcony")) return Sun;
    return Sparkles;
  };

  return (
    <section className="py-8 border-t border-gray-200">
      <h3 className="text-xl font-semibold mb-6">What this place offers</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        {amenities.map((item, index) => {
          const IconComponent = getIcon(item);
          return (
            <div key={index} className="flex items-center gap-4 py-2">
              <IconComponent className="w-6 h-6 text-gray-700" />
              <span className="text-sm text-gray-800">{item}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}