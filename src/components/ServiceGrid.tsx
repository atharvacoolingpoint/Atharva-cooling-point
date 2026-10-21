'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { REPAIR_SERVICES } from '@/data/services';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceGridProps {
  onOpenBooking?: () => void;
}

export default function ServiceGrid({ onOpenBooking }: ServiceGridProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'washing-machine' | 'ac' | 'microwave' | 'refrigerator'>('all');

  const filteredServices = REPAIR_SERVICES.filter(service => {
    if (activeCategory === 'all') return true;
    return service.category === activeCategory;
  });

  return (
    <section className="py-20 relative bg-gradient-to-b from-slate-50 to-blue-50/20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-bold text-blue-600 uppercase tracking-wider">
            🛠️ Certified Repair Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive <span className="gradient-text">Home Appliance</span> Services
          </h2>
          <p className="text-slate-600 text-base">
            Expert doorstep repair for Washing Machines, ACs, Microwave Ovens, and Refrigerators across Surat.
          </p>

          {/* Service Category Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'glass-panel text-slate-700 hover:bg-white'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveCategory('washing-machine')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === 'washing-machine'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'glass-panel text-slate-700 hover:bg-white'
              }`}
            >
              🧺 Washing Machine
            </button>
            <button
              onClick={() => setActiveCategory('ac')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === 'ac'
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'glass-panel text-slate-700 hover:bg-white'
              }`}
            >
              ❄️ AC Service
            </button>
            <button
              onClick={() => setActiveCategory('microwave')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === 'microwave'
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-500/25'
                  : 'glass-panel text-slate-700 hover:bg-white'
              }`}
            >
              🍲 Microwave Oven
            </button>
            <button
              onClick={() => setActiveCategory('refrigerator')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === 'refrigerator'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                  : 'glass-panel text-slate-700 hover:bg-white'
              }`}
            >
              🧊 Refrigerator
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.slug}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/90 flex flex-col group"
            >
              {/* Card Header Image Banner */}
              <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                <Image
                  src={service.imagePath}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 glass-pill px-3 py-1 rounded-full text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                  {service.category === 'washing-machine' ? '🧺 Washing Machine' :
                   service.category === 'ac' ? '❄️ AC Service' :
                   service.category === 'microwave' ? '🍲 Microwave' : '🧊 Refrigerator'}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-xs font-semibold bg-emerald-500/90 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                    {service.warranty}
                  </span>
                  <span className="text-xs font-bold bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                    Est. {service.estimatedTime}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Common Symptoms List */}
                  <div className="space-y-1.5 border-t border-slate-100 pt-3">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Common Symptoms Fixed:</p>
                    {service.commonSymptoms.slice(0, 3).map((symptom, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Price & Action */}
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block uppercase">Service Charge</span>
                    <span className="text-lg font-extrabold text-blue-600">Starting ₹{service.startingPrice}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="px-3.5 py-2 rounded-xl glass-pill text-xs font-bold text-slate-800 hover:bg-slate-200 transition-colors"
                    >
                      Details
                    </Link>
                    <button
                      onClick={onOpenBooking}
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center gap-1"
                    >
                      <span>Book</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
