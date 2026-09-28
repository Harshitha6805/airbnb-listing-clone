"use client";

import React from "react";
import { ShieldCheck, Star, Award, MessageCircle } from "lucide-react";

interface HostSectionProps {
  host: string;
  hostAvatar: string;
  hostingYears: string;
  isSuperhost: boolean;
  coHosts?: { name: string; avatar: string }[];
  hostBio: string;
  rating: number;
  reviewsCount: number;
}

export default function HostSection({
  host,
  hostAvatar,
  hostingYears,
  isSuperhost,
  coHosts,
  hostBio,
  rating,
  reviewsCount,
}: HostSectionProps) {
  return (
    <section className="py-10 border-t border-gray-200">
      <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
        {/* Host Card Box */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-md w-full md:w-80 flex flex-col items-center text-center">
          <div className="relative mb-3">
            <img
              src={hostAvatar}
              alt={host}
              className="w-24 h-24 rounded-full object-cover shadow-sm"
            />
            {isSuperhost && (
              <div className="absolute bottom-0 right-0 bg-[#FF385C] text-white p-1.5 rounded-full shadow">
                <ShieldCheck className="w-4 h-4" />
              </div>
            )}
          </div>
          <h3 className="text-xl font-bold">{host}</h3>
          <p className="text-xs text-gray-500 font-medium">{isSuperhost ? "Superhost" : "Host"}</p>

          <div className="w-full grid grid-cols-2 gap-2 my-4 pt-4 border-t border-gray-100 text-left">
            <div>
              <p className="text-lg font-bold">{reviewsCount}</p>
              <p className="text-[10px] uppercase text-gray-500 font-semibold">Reviews</p>
            </div>
            <div>
              <p className="text-lg font-bold flex items-center gap-1">
                {rating} <Star className="w-3.5 h-3.5 fill-current text-black" />
              </p>
              <p className="text-[10px] uppercase text-gray-500 font-semibold">Rating</p>
            </div>
          </div>
        </div>

        {/* Host Bio & Details */}
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Hosted by {host}</h3>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <Award className="w-4 h-4" /> {hostingYears}
            </p>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed max-w-xl">{hostBio}</p>

          {coHosts && coHosts.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase text-gray-500 mb-2">Co-hosts</h4>
              <div className="flex items-center gap-3">
                {coHosts.map((co, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <img src={co.avatar} alt={co.name} className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-sm font-medium">{co.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-gray-800 transition cursor-pointer">
            <MessageCircle className="w-4 h-4" /> Message Host
          </button>
        </div>
      </div>
    </section>
  );
}