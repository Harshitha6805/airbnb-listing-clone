"use client";

import React from "react";

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

export default function PhotoModal({ isOpen, onClose, images }: PhotoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-xl font-bold p-2 bg-gray-800 rounded-full"
      >
        ✕
      </button>

      <div className="grid grid-cols-2 gap-4 max-w-3xl max-h-[80vh] overflow-y-auto p-4 bg-white rounded-xl">
        {images?.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Photo ${idx + 1}`}
            className="w-full h-48 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}