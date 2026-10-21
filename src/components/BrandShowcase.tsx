'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BRANDS_DATA } from '@/data/brands';
import { CheckCircle, ArrowRight, Shield } from 'lucide-react';

export default function BrandShowcase() {
  const [activeTab, setActiveTab] = useState<'all' | 'washing-machine' | 'ac' | 'refrigerator'>('all');

  const filteredBrands = BRANDS_DATA.filter(brand => {
    if (activeTab === 'all') return true;
    return brand.category === activeTab || brand.category === 'all';
  });

  return (
    <section className="py-20 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-bold text-blue-600 uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" /> Multi-Brand Service Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Certified Repair For <span className="gradient-text">All Major Brands</span>
          </h2>
          <p className="text-slate-600 text-base">
            We use original factory spare parts with official component diagnostic tools for every leading home appliance manufacturer in India.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'glass-panel text-slate-700 hover:bg-white'
              }`}
            >
              All Brands
            </button>
            <button
              onClick={() => setActiveTab('washing-machine')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'washing-machine'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'glass-panel text-slate-700 hover:bg-white'
              }`}
            >
              🧺 Washing Machine
            </button>
            <button
              onClick={() => setActiveTab('ac')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'ac'
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'glass-panel text-slate-700 hover:bg-white'
              }`}
            >
              ❄️ AC Brands
            </button>
            <button
              onClick={() => setActiveTab('refrigerator')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'refrigerator'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                  : 'glass-panel text-slate-700 hover:bg-white'
              }`}
            >
              🧊 Refrigerator Brands
            </button>
          </div>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBrands.map((brand) => (
            <div
              key={brand.slug}
              className="glass-panel glass-panel-hover p-6 rounded-3xl relative overflow-hidden group border border-white/80"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-extrabold text-xl tracking-wider text-slate-900 group-hover:text-blue-600 transition-colors">
                  {brand.logoText}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                  {brand.category}
                </span>
              </div>

              <p className="text-xs text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                {brand.description}
              </p>

              {/* Common Issues Bullet Preview */}
              <div className="space-y-1.5 mb-6 border-t border-slate-100 pt-3">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Common Fixes</p>
                {brand.commonIssuesFixed.slice(0, 2).map((issue, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{issue}</span>
                  </div>
                ))}
              </div>

              <Link
                href={`/brands/${brand.category === 'all' ? 'washing-machine' : brand.category}/${brand.slug}`}
                className="w-full py-2.5 rounded-2xl glass-pill flex items-center justify-center gap-1.5 text-xs font-bold text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
              >
                <span>View Brand Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
