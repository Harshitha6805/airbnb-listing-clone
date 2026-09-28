"use client";

import React from "react";
import { Search, Globe, Menu, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <svg
            className="h-8 w-auto text-[#FF385C]"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.315c0 4.408-3.601 7.806-8.25 7.806-3.111 0-5.84-1.522-7.25-3.856-1.41 2.334-4.139 3.856-7.25 3.856-4.649 0-8.25-3.398-8.25-7.806 0-.924.253-1.805.971-3.396l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C8.537 1.963 9.992 1 12 1h4zm0 2h-4c-1.258 0-2.234.61-3.15 2.25L8.33 6.223C6.425 9.957 2.38 18.423 1.48 20.528l-.132.316c-.524 1.25-.748 1.91-.748 2.656 0 3.314 2.686 5.806 6.25 5.806 2.531 0 4.756-1.39 5.808-3.513l.342-.76.342.76C14.244 27.91 16.469 29.3 19 29.3c3.564 0 6.25-2.492 6.25-5.806 0-.746-.224-1.406-.748-2.656l-.132-.316c-.9-2.105-4.945-10.571-6.85-14.305L16.85 3.25C15.934 1.61 14.958 1 13.7 1H16z" />
          </svg>
          <span className="font-bold text-xl tracking-tight text-[#FF385C] hidden sm:inline">
            airbnb
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer text-sm font-medium">
          <button className="px-2">Anywhere</button>
          <span className="h-4 w-[1px] bg-gray-300"></span>
          <button className="px-2">Any week</button>
          <span className="h-4 w-[1px] bg-gray-300"></span>
          <button className="px-2 text-gray-500 font-normal">Add guests</button>
          <div className="bg-[#FF385C] p-2 rounded-full text-white ml-2">
            <Search className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        </div>

        {/* User Controls */}
        <div className="flex items-center gap-3">
          <button className="text-sm font-semibold hover:bg-gray-100 py-2 px-3 rounded-full transition hidden md:block">
            Airbnb your home
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            <Globe className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3 border border-gray-300 rounded-full py-1.5 px-3 hover:shadow-md transition cursor-pointer">
            <Menu className="w-4 h-4" />
            <div className="bg-gray-500 text-white rounded-full p-1">
              <User className="w-4 h-4 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}