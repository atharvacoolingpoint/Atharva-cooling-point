'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Calendar, Search, Star, ShieldCheck, Clock, CheckCircle2, ArrowRight, Zap, MapPin } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '@/lib/seo';
import { SURAT_LOCATIONS } from '@/data/locations';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof SURAT_LOCATIONS>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim().length > 0) {
      const filtered = SURAT_LOCATIONS.filter(loc => 
        loc.name.toLowerCase().includes(query.toLowerCase()) ||
        loc.landmarks.some(lm => lm.toLowerCase().includes(query.toLowerCase()))
      );
      setSearchResults(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50">
      {/* iOS 27 Liquid Ambient Mesh Orbs */}
      <div className="liquid-orb-blue top-10 left-1/4" />
      <div className="liquid-orb-cyan top-1/3 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-pill border border-white/90 shadow-sm text-[11px] sm:text-sm font-semibold text-slate-800 max-w-full">
              <span className="flex h-2.5 w-2.5 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="truncate">Surat's #1 Doorstep Home Appliance Repair</span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-bold shrink-0">24x7</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Expert <span className="gradient-text">Washing Machine, AC, Microwave & Fridge</span> Repair in Surat.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Certified doorstep technician arrival within <span className="font-semibold text-slate-900">30 minutes</span> across all 20+ Surat localities. Multi-brand repairs backed by a <span className="font-semibold text-blue-600">90-Day Guarantee</span> & 100% genuine spare parts.
            </p>

            {/* Surat Location Search Widget */}
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <div className="glass-panel p-1.5 sm:p-2 rounded-2xl shadow-xl border border-white/90 flex items-center gap-1.5 sm:gap-2">
                <div className="pl-2 sm:pl-3 text-blue-600 shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
                </div>
                <input
                  type="text"
                  placeholder="Search Surat area (e.g., Adajan)..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full py-1.5 sm:py-2 bg-transparent text-xs sm:text-sm font-medium text-slate-900 focus:outline-none placeholder-slate-400 min-w-0"
                />
                <button
                  onClick={() => {
                    if (searchResults.length > 0) {
                      window.location.href = `/location/${searchResults[0].slug}`;
                    }
                  }}
                  className="px-3 sm:px-4 py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-md transition-all shrink-0 flex items-center gap-1"
                >
                  <Search className="w-3.5 h-3.5" /> <span>Check Area</span>
                </button>
              </div>

              {/* Area Search Dropdown */}
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 glass-panel rounded-2xl p-3 shadow-2xl border border-white/90 z-30 max-h-60 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.map(loc => (
                      <Link
                        key={loc.slug}
                        href={`/location/${loc.slug}`}
                        className="flex items-center justify-between px-3 py-2 rounded-xl text-sm hover:bg-blue-50 text-slate-800 transition-colors"
                      >
                        <span className="font-medium">{loc.name} ({loc.pincode})</span>
                        <span className="text-xs text-emerald-600 font-semibold">{loc.responseTime} arrival</span>
                      </Link>
                    ))
                  ) : (
                    <div className="p-3 text-xs text-slate-500 text-center">
                      We cover all Surat areas! Click below to view all 20+ locations.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 shimmer-btn"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Repair Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-2xl glass-panel text-slate-900 font-bold text-sm sm:text-base hover:bg-white transition-all shadow-md flex items-center justify-center gap-2.5 border border-white/90"
              >
                <Phone className="w-5 h-5 text-blue-600 animate-pulse" />
                <span>Call {PHONE_NUMBER}</span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Atharva%20Cooling%20Point%2C%20I%20need%20urgent%20repair%20service`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 sm:py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
              >
                <span>💬 WhatsApp</span>
              </a>
            </div>

            {/* Key Trust Micro-features */}
            <div className="pt-4 grid grid-cols-1 min-[450px]:grid-cols-3 gap-3 sm:gap-4 border-t border-slate-200/60 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">90-Day Spare Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">30 Min Doorstep</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">100% Genuine OEM</span>
              </div>
            </div>

            {/* Customer Rating Indicator */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">4.9</div>
                <div className="w-9 h-9 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">★</div>
                <div className="w-9 h-9 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">1.4k</div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-500 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-bold text-slate-900 ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">Over 1,480+ Verified Repairs in Surat</p>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-panel p-3 shadow-2xl border border-white/90">
              
              {/* Product Visual Render */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src="/images/hero.webp"
                  alt="Atharva Cooling Point Home Appliance Repair Service"
                  fill
                  priority
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Floating Glass Badges on Image */}
                <div className="absolute top-4 left-4 glass-pill px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-900 flex items-center gap-1.5 shadow-lg">
                  <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>Same Day Service</span>
                </div>

                <div className="absolute bottom-4 right-4 glass-card-dark px-4 py-2 rounded-2xl text-xs font-semibold flex items-center gap-2 shadow-2xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>100% Genuine Factory Parts</span>
                </div>
              </div>

              {/* Service Quick Badges */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3">
                <div className="glass-panel p-2 sm:p-3 rounded-2xl flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-base sm:text-lg shrink-0">
                    🧺
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[11px] sm:text-xs font-bold text-slate-900 truncate">Washing Machine</h4>
                    <p className="text-[9px] sm:text-[10px] text-slate-500 truncate">Front & Top, Semi</p>
                  </div>
                </div>

                <div className="glass-panel p-2 sm:p-3 rounded-2xl flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-base sm:text-lg shrink-0">
                    ❄️
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[11px] sm:text-xs font-bold text-slate-900 truncate">AC Repair</h4>
                    <p className="text-[9px] sm:text-[10px] text-slate-500 truncate">Split & Inverter</p>
                  </div>
                </div>

                <div className="glass-panel p-2 sm:p-3 rounded-2xl flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-base sm:text-lg shrink-0">
                    🍲
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[11px] sm:text-xs font-bold text-slate-900 truncate">Microwave Oven</h4>
                    <p className="text-[9px] sm:text-[10px] text-slate-500 truncate">Convection, Solo</p>
                  </div>
                </div>

                <div className="glass-panel p-2 sm:p-3 rounded-2xl flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-base sm:text-lg shrink-0">
                    🧊
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[11px] sm:text-xs font-bold text-slate-900 truncate">Fridge Repair</h4>
                    <p className="text-[9px] sm:text-[10px] text-slate-500 truncate">Side-by-Side, Frost</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
