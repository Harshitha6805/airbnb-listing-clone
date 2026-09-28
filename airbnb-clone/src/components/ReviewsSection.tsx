"use client";

import React from "react";
import { Star, Sparkles, CheckCircle2, MessageSquare, MapPin, Key, Tag } from "lucide-react";

interface Review {
  id: string;
  author: string;
  avatar: string;
  date: string;
  rating: number;
  comment: string;
}

interface RatingBreakdown {
  cleanliness: number;
  accuracy: number;
  communication: number;
  location: number;
  checkIn: number;
  value: number;
}

interface ReviewsSectionProps {
  rating: number;
  reviewsCount: number;
  breakdown: RatingBreakdown;
  reviews: Review[];
}

export default function ReviewsSection({
  rating,
  reviewsCount,
  breakdown,
  reviews,
}: ReviewsSectionProps) {
  const categories = [
    { label: "Cleanliness", score: breakdown.cleanliness, icon: Sparkles },
    { label: "Accuracy", score: breakdown.accuracy, icon: CheckCircle2 },
    { label: "Communication", score: breakdown.communication, icon: MessageSquare },
    { label: "Location", score: breakdown.location, icon: MapPin },
    { label: "Check-in", score: breakdown.checkIn, icon: Key },
    { label: "Value", score: breakdown.value, icon: Tag },
  ];

  return (
    <section className="py-10 border-t border-gray-200 mt-12">
      {/* Title */}
      <div className="flex items-center gap-2 text-2xl font-semibold mb-8">
        <Star className="w-6 h-6 fill-current text-black" />
        <span>{rating}</span>
        <span>·</span>
        <span>{reviewsCount} reviews</span>
      </div>

      {/* Ratings Breakdown Grid */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-12 pb-8 border-b border-gray-100">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div key={idx} className="space-y-2 border-r border-gray-100 last:border-none pr-4">
              <span className="text-xs font-semibold text-gray-700 block">{cat.label}</span>
              <span className="text-xl font-bold">{cat.score}</span>
              <Icon className="w-5 h-5 text-gray-800 pt-1" />
            </div>
          );
        })}
      </div>

      {/* Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((rev) => (
          <div key={rev.id} className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={rev.avatar}
                alt={rev.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-sm">{rev.author}</h4>
                <p className="text-xs text-gray-500">{rev.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-900">
              {Array.from({ length: rev.rating }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current text-black" />
              ))}
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{rev.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}