'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SURAT_LOCATIONS } from '@/data/locations';
import { MapPin, Search, Clock, ArrowRight, UserCheck } from 'lucide-react';
import { PHONE_NUMBER } from '@/lib/seo';

export default function SuratAreaGrid() {
  const [query, setQuery] = useState('');

  const filtered = SURAT_LOCATIONS.filter(loc =>
    loc.name.toLowerCase().includes(query.toLowerCase()) ||
    loc.zone.toLowerCase().includes(query.toLowerCase()) ||
    loc.pincode.includes(query) ||
    loc.landmarks.some(lm => lm.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <section className="py-20 relative bg-slate-950 text-white overflow-hidden" id="surat-areas">
      {/* Background Glow - GPU Optimized Radial Gradient */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(37, 99, 235, 0) 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-xs font-bold text-blue-400 uppercase tracking-wider">
            📍 Surat Local Area Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Doorstep Technician Available Across <span className="text-blue-400">All 20+ Surat Areas</span>
          </h2>
          <p className="text-slate-400 text-base">
            Select your locality below to see average arrival times, assigned technicians on duty, and local customer reviews.
          </p>

          {/* Search Input */}
          <div className="max-w-md mx-auto pt-2">
            <div className="glass-card-dark p-2 rounded-2xl flex items-center gap-2 border border-white/20 shadow-2xl">
              <Search className="w-5 h-5 text-blue-400 ml-2" />
              <input
                type="text"
                placeholder="Search Adajan, Vesu, Varachha, Katargam..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full py-2 bg-transparent text-sm font-medium text-white placeholder-slate-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((location) => (
            <Link
              key={location.slug}
              href={`/location/${location.slug}`}
              className="glass-card-dark p-5 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-slate-900/90 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                    <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
                      {location.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                    {location.pincode}
                  </span>
                </div>

                <p className="text-[11px] text-slate-400 mb-4 line-clamp-1">
                  Near {location.landmarks.slice(0, 2).join(', ')}
                </p>
              </div>

              <div className="border-t border-white/10 pt-3 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <Clock className="w-3.5 h-3.5" /> {location.responseTime}
                </span>
                <span className="flex items-center gap-1 text-blue-300 font-medium group-hover:translate-x-1 transition-transform">
                  View Area <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Dynamic Surat Emergency Callout */}
        <div className="mt-12 glass-card-dark p-6 rounded-3xl border border-white/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="font-bold text-lg text-white flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-emerald-400" /> Don't see your specific Surat neighborhood listed?
            </h4>
            <p className="text-xs text-slate-400">
              We cover 100% of Surat district including outer ring roads and industrial GIDC zones. Call our dispatch hotline directly.
            </p>
          </div>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-lg shrink-0 hover:scale-105 transition-all"
          >
            Call Dispatch Hotline ({PHONE_NUMBER})
          </a>
        </div>

      </div>
    </section>
  );
}
