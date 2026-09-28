"use client";

import React from "react";
import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-16 text-xs text-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-200">
        <div className="space-y-3">
          <h5 className="font-semibold text-gray-900">Support</h5>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help Centre</a></li>
            <li><a href="#" className="hover:underline">AirCover</a></li>
            <li><a href="#" className="hover:underline">Anti-discrimination</a></li>
            <li><a href="#" className="hover:underline">Disability support</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h5 className="font-semibold text-gray-900">Hosting</h5>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Airbnb your home</a></li>
            <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
            <li><a href="#" className="hover:underline">Hosting resources</a></li>
            <li><a href="#" className="hover:underline">Community forum</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h5 className="font-semibold text-gray-900">Airbnb</h5>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Newsroom</a></li>
            <li><a href="#" className="hover:underline">New features</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Investors</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h5 className="font-semibold text-gray-900">Destinations</h5>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Goa Holiday Rentals</a></li>
            <li><a href="#" className="hover:underline">Candolim Stays</a></li>
            <li><a href="#" className="hover:underline">Beachfront Villas</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap gap-2 items-center">
          <span>© 2026 Airbnb Clone, Inc.</span>
          <span>·</span>
          <a href="#" className="hover:underline">Privacy</a>
          <span>·</span>
          <a href="#" className="hover:underline">Terms</a>
          <span>·</span>
          <a href="#" className="hover:underline">Sitemap</a>
        </div>
        <div className="flex items-center gap-4 font-medium text-gray-800">
          <button className="flex items-center gap-1 hover:underline">
            <Globe className="w-4 h-4" /> English (IN)
          </button>
          <span>₹ INR</span>
        </div>
      </div>
    </footer>
  );
}