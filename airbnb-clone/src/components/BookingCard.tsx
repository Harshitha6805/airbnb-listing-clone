"use client";

import React, { useState } from "react";
import { Star, ChevronDown, ChevronUp } from "lucide-react";

interface BookingCardProps {
  pricePerNight: number;
  rating: number;
  reviewsCount: number;
}

export default function BookingCard({
  pricePerNight,
  rating,
  reviewsCount,
}: BookingCardProps) {
  const [checkIn, setCheckIn] = useState("2026-10-01");
  const [checkOut, setCheckOut] = useState("2026-10-06");
  const [guests, setGuests] = useState(1);
  const [isGuestOpen, setIsGuestOpen] = useState(false);

  // Calculate nights difference
  const calculateNights = () => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights();
  const cleaningFee = 1200;
  const serviceFeeRate = 0.07; // 7% service fee
  const basePrice = pricePerNight * nights;
  const serviceFee = Math.round(basePrice * serviceFeeRate);
  const totalPrice = basePrice + cleaningFee + serviceFee;

  return (
    <div className="sticky top-28 bg-white border border-gray-200 rounded-2xl p-6 shadow-xl space-y-6">
      {/* Header Price & Rating */}
      <div className="flex justify-between items-baseline">
        <div>
          <span className="text-2xl font-bold">₹{pricePerNight.toLocaleString()}</span>
          <span className="text-gray-500 text-sm"> / night</span>
        </div>
        <div className="flex items-center gap-1 text-sm font-semibold">
          <Star className="w-4 h-4 fill-current text-black" />
          <span>{rating}</span>
          <span className="text-gray-400">·</span>
          <span className="underline text-gray-500">{reviewsCount} reviews</span>
        </div>
      </div>

      {/* Date & Guest Inputs Box */}
      <div className="border border-gray-300 rounded-xl overflow-hidden text-xs">
        <div className="grid grid-cols-2 border-b border-gray-300">
          <div className="p-2.5 border-r border-gray-300">
            <label className="block font-bold uppercase text-[10px] text-gray-700">
              Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent outline-none font-medium text-gray-800 cursor-pointer"
            />
          </div>
          <div className="p-2.5">
            <label className="block font-bold uppercase text-[10px] text-gray-700">
              Checkout
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent outline-none font-medium text-gray-800 cursor-pointer"
            />
          </div>
        </div>

        {/* Guest Selector Dropdown */}
        <div className="relative p-2.5">
          <label className="block font-bold uppercase text-[10px] text-gray-700">
            Guests
          </label>
          <button
            type="button"
            onClick={() => setIsGuestOpen(!isGuestOpen)}
            className="w-full flex justify-between items-center text-sm font-medium pt-0.5 cursor-pointer"
          >
            <span>{guests} guest{guests > 1 ? "s" : ""}</span>
            {isGuestOpen ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {isGuestOpen && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 shadow-lg rounded-xl p-4 z-20 flex justify-between items-center">
              <div>
                <p className="font-semibold text-sm">Guests</p>
                <p className="text-gray-500 text-xs">Age 13+</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  disabled={guests <= 1}
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:border-black"
                >
                  -
                </button>
                <span className="font-semibold text-sm">{guests}</span>
                <button
                  type="button"
                  disabled={guests >= 4}
                  onClick={() => setGuests((g) => Math.min(4, g + 1))}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:border-black"
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reserve Button */}
      <button
        onClick={() => alert(`Reserved for ${nights} night(s) totaling ₹${totalPrice.toLocaleString()}`)}
        className="w-full bg-[#FF385C] hover:bg-[#E00B41] text-white py-3.5 rounded-xl font-semibold text-base transition shadow-md cursor-pointer active:scale-95"
      >
        Reserve
      </button>

      <p className="text-center text-xs text-gray-500">You won't be charged yet</p>

      {/* Price Breakdown */}
      <div className="space-y-3 pt-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span className="underline">
            ₹{pricePerNight.toLocaleString()} x {nights} night{nights > 1 ? "s" : ""}
          </span>
          <span>₹{basePrice.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">Cleaning fee</span>
          <span>₹{cleaningFee.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">Airbnb service fee</span>
          <span>₹{serviceFee.toLocaleString()}</span>
        </div>
      </div>

      {/* Total Row */}
      <div className="border-t border-gray-200 pt-4 flex justify-between items-center text-base font-bold text-gray-900">
        <span>Total before taxes</span>
        <span>₹{totalPrice.toLocaleString()}</span>
      </div>
    </div>
  );
}