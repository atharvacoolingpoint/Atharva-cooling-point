'use client';

import React from 'react';
import { ShieldCheck, Zap, Award, Wrench, CheckCircle2, Clock, ThumbsUp, HeartHandshake } from 'lucide-react';

export default function TrustSection() {
  const trustFeatures = [
    {
      icon: ShieldCheck,
      title: '90-Day Service Guarantee',
      desc: 'All TV panel replacements, LED backlight strips, and refrigerator gas fillings come with an official 90-day parts warranty.'
    },
    {
      icon: Zap,
      title: '30-Min Rapid Doorstep Arrival',
      desc: 'Our network of 14+ active repair vehicles stationed across Adajan, Vesu, Varachha, and Katargam ensures immediate dispatch.'
    },
    {
      icon: Award,
      title: '100% Genuine OEM Parts',
      desc: 'We strictly install authentic manufacturer replacement components for Samsung, LG, Sony, Whirlpool, Bosch, and Godrej.'
    },
    {
      icon: Wrench,
      title: 'Certified Master Engineers',
      desc: 'Our technicians possess chip-level electronics certifications and specialized ESD-safe diagnostic instruments.'
    },
    {
      icon: ThumbsUp,
      title: 'Transparent Fixed Quotes',
      desc: 'No surprising extra call-out fees. You receive a clear upfront estimate before any soldering or component replacement begins.'
    },
    {
      icon: HeartHandshake,
      title: '1,480+ Verified Surat Reviews',
      desc: 'Rated 4.9/5 stars by homeowners, shops, and apartments throughout Surat city for clean, polite, and honest repair work.'
    }
  ];

  return (
    <section className="py-20 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-bold text-blue-600 uppercase tracking-wider">
            ⭐ The Atharva Cooling Point Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Surat Homeowners <span className="gradient-text">Trust Us</span>
          </h2>
          <p className="text-slate-600 text-base">
            Built on transparency, engineering excellence, and rapid local response across Surat.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFeatures.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-8 rounded-3xl border border-slate-100/80 relative space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
