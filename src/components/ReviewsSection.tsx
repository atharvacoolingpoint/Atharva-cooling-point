'use client';

import React from 'react';
import { Star, MapPin, Quote } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      name: 'Patel Hitesh',
      area: 'Adajan, Surat',
      service: 'IFB Front Load Washing Machine Drum Repair',
      comment: 'My IFB washing machine drum was making loud noise during spin cycle. Called Atharva Cooling Point at 11 AM, technician reached my flat in Honey Park Adajan by 11:25 AM. Replaced drum bearings on spot. Perfect operation!',
      rating: 5,
      date: '2 days ago'
    },
    {
      name: 'Anjali Shah',
      area: 'Vesu, Surat',
      service: 'LG 1.5 Ton Split AC Gas Refilling',
      comment: 'LG inverter split AC stopped cooling right before a family gathering on VIP Road Vesu. Atharva Cooling Point team did nitrogen pressure leak test, brazing, and R32 gas refilling cleanly. 90-day warranty provided.',
      rating: 5,
      date: '1 week ago'
    },
    {
      name: 'Sanjay Chovatiya',
      area: 'Varachha, Surat',
      service: 'Voltas AC Inverter Motherboard PCB Fix',
      comment: 'Voltas AC showed EC error code near Mini Bazar Varachha. Authorized service center quoted massive replacement cost, but Atharva Cooling Point repaired the power board at chip level for a fraction of price.',
      rating: 5,
      date: '4 days ago'
    }
  ];

  return (
    <section className="py-20 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-bold text-amber-600 uppercase tracking-wider">
            ★ Verified Surat Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved By Homeowners <span className="gradient-text">Across Surat</span>
          </h2>
          <p className="text-slate-600 text-base">
            Read real stories from customers in Adajan, Vesu, Varachha, Katargam, Athwa, and Piplod.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-white/90 shadow-lg flex flex-col justify-between space-y-6 relative"
            >
              <Quote className="w-8 h-8 text-blue-200 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  "{rev.comment}"
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{rev.name}</h4>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-blue-600" /> {rev.area}
                  </span>
                </div>

                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  Verified Repair
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
