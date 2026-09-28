"use client";

import React, { useState } from "react";
import { listingData } from "../data/listing";
import { Star, Share, Heart, Grid, Shield, Award } from "lucide-react";
import PhotoModal from "../components/PhotoModal";
import BookingCard from "../components/BookingCard";
import AmenitiesSection from "../components/AmenitiesSection";
import ReviewsSection from "../components/ReviewsSection";
import HostSection from "../components/HostSection";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <main className="max-w-7xl mx-auto px-6 py-8 font-sans text-gray-900">
      {/* Title & Top Action Bar */}
      <section className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">{listingData.title}</h1>
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 font-medium">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-current text-black" />
              {listingData.rating}
            </span>
            <span>·</span>
            <span className="underline cursor-pointer">
              {listingData.reviewsCount} reviews
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 text-sm font-medium hover:bg-gray-100 px-3 py-2 rounded-md transition cursor-pointer">
              <Share className="w-4 h-4" /> <span className="underline">Share</span>
            </button>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className="flex items-center gap-2 text-sm font-medium hover:bg-gray-100 px-3 py-2 rounded-md transition cursor-pointer"
            >
              <Heart
                className={`w-4 h-4 ${
                  isSaved ? "fill-[#FF385C] text-[#FF385C]" : ""
                }`}
              />
              <span className="underline">{isSaved ? "Saved" : "Save"}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="relative grid grid-cols-4 grid-rows-2 gap-2 rounded-2xl overflow-hidden h-[400px] mb-8">
        <div
          className="col-span-2 row-span-2 relative cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={listingData.images[0]}
            alt="Main photo"
            className="w-full h-full object-cover hover:opacity-95 transition"
          />
        </div>
        {listingData.images.slice(1, 5).map((img, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src={img}
              alt={`Gallery photo ${idx + 1}`}
              className="w-full h-full object-cover hover:opacity-95 transition"
            />
          </div>
        ))}
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute bottom-4 right-4 bg-white border border-black px-4 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-md hover:bg-gray-50 z-10 cursor-pointer"
        >
          <Grid className="w-4 h-4" /> Show all photos
        </button>
      </section>

      {/* Main Content Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-6">
          <div className="border-b pb-6">
            <h2 className="text-xl font-semibold">
              Entire rental unit hosted by {listingData.host}
            </h2>
            <p className="text-gray-600 text-sm mt-1">{listingData.details}</p>
            <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
              <Award className="w-4 h-4 inline" /> {listingData.hostingYears}
            </p>
          </div>

          {/* Highlights */}
          <div className="border-b pb-6 space-y-4">
            {listingData.highlights?.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <Shield className="w-6 h-6 mt-1 text-gray-700" />
                <div>
                  <h3 className="font-medium text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Amenities Grid */}
          <AmenitiesSection amenities={listingData.amenities} />
        </div>

        {/* Right Column */}
        <div className="relative">
          <BookingCard
            pricePerNight={listingData.pricePerNight}
            rating={listingData.rating}
            reviewsCount={listingData.reviewsCount}
          />
        </div>
      </div>

      {/* Reviews Section */}
      <ReviewsSection
        rating={listingData.rating}
        reviewsCount={listingData.reviewsCount}
        breakdown={listingData.ratingBreakdown}
        reviews={listingData.reviews}
      />

      {/* Host Profile Section */}
      <HostSection
        host={listingData.host}
        hostAvatar={listingData.hostAvatar}
        hostingYears={listingData.hostingYears}
        isSuperhost={listingData.isSuperhost}
        coHosts={listingData.coHosts}
        hostBio={listingData.hostBio}
        rating={listingData.rating}
        reviewsCount={listingData.reviewsCount}
      />

      {/* Modal Popup */}
      <PhotoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={listingData.images}
      />
    </main>
  );
}