'use client';

import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { PHONE_NUMBER } from '@/lib/seo';

interface PricingCalculatorProps {
  onOpenBooking: () => void;
}

type DeviceType = 'washing' | 'ac' | 'microwave' | 'refrigerator';

export default function PricingCalculator({ onOpenBooking }: PricingCalculatorProps) {
  const [device, setDevice] = useState<DeviceType>('washing');

  const washingIssues = [
    { id: 'wm-spin', label: 'Drum Not Spinning / Heavy Vibration', estPrice: '₹499 - ₹999', time: '45 mins' },
    { id: 'wm-drain', label: 'Water Not Draining / E2 & OE Error', estPrice: '₹399 - ₹799', time: '30 mins' },
    { id: 'wm-pcb', label: 'Cycle Timer Stuck / PCB Board Fix', estPrice: '₹699 - ₹1,299', time: '45 mins' },
    { id: 'wm-leak', label: 'Water Leaking from Front Door Seal', estPrice: '₹449 - ₹899', time: '40 mins' }
  ];

  const acIssues = [
    { id: 'ac-cool', label: 'AC Running but Room is Warm (Gas Check)', estPrice: '₹999 - ₹1,899', time: '60 mins' },
    { id: 'ac-leak', label: 'Water Leaking Inside Room from AC', estPrice: '₹399 - ₹699', time: '30 mins' },
    { id: 'ac-mcb', label: 'Compressor Tripping House MCB', estPrice: '₹499 - ₹899', time: '45 mins' },
    { id: 'ac-jet', label: 'AC High-Pressure Jet Service & Wash', estPrice: '₹499 - ₹799', time: '45 mins' }
  ];

  const microwaveIssues = [
    { id: 'mw-heat', label: 'Microwave Runs but Food Stays Cold', estPrice: '₹599 - ₹1,199', time: '30 mins' },
    { id: 'mw-spark', label: 'Sparking / Arcing Inside Cavity', estPrice: '₹249 - ₹499', time: '20 mins' },
    { id: 'mw-plate', label: 'Glass Turntable Plate Not Rotating', estPrice: '₹299 - ₹599', time: '25 mins' },
    { id: 'mw-fuse', label: 'Power Tripping / Fuse Blowing', estPrice: '₹349 - ₹699', time: '30 mins' }
  ];

  const fridgeIssues = [
    { id: 'fr-gas', label: 'Gas Refilling & Leak Repair (R600a/R134a)', estPrice: '₹799 - ₹1,800', time: '60 mins' },
    { id: 'fr-defrost', label: 'Top Freezer Cools, Bottom Fridge Warm', estPrice: '₹349 - ₹900', time: '45 mins' },
    { id: 'fr-compressor', label: 'Compressor Clicking Noise / Swap', estPrice: '₹699 - ₹2,900', time: '60 mins' },
    { id: 'fr-pcb', label: 'Digital Inverter Error Code (5E/22E)', estPrice: '₹449 - ₹1,200', time: '45 mins' }
  ];

  const getIssuesList = () => {
    switch (device) {
      case 'washing': return washingIssues;
      case 'ac': return acIssues;
      case 'microwave': return microwaveIssues;
      case 'refrigerator': return fridgeIssues;
    }
  };

  const activeIssues = getIssuesList();
  const [issueType, setIssueType] = useState<string>(activeIssues[0].id);

  const handleDeviceChange = (d: DeviceType) => {
    setDevice(d);
    switch (d) {
      case 'washing': setIssueType(washingIssues[0].id); break;
      case 'ac': setIssueType(acIssues[0].id); break;
      case 'microwave': setIssueType(microwaveIssues[0].id); break;
      case 'refrigerator': setIssueType(fridgeIssues[0].id); break;
    }
  };

  const selectedIssue = activeIssues.find(i => i.id === issueType) || activeIssues[0];

  return (
    <section className="py-20 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="glass-panel p-4 sm:p-8 md:p-12 rounded-3xl border border-white/90 shadow-2xl relative overflow-hidden">
          
          {/* Section Header */}
          <div className="max-w-2xl mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" /> Instant Cost Estimator
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Transparent <span className="gradient-text">Fixed Pricing</span> Guide
            </h2>
            <p className="text-slate-600 text-sm">
              No hidden visit fees when service is completed. Get an immediate estimate before our technician arrives at your door.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step 1: Device Toggle & Issue Selection */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">1. Select Appliance</label>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  <button
                    onClick={() => handleDeviceChange('washing')}
                    className={`py-3 px-3 rounded-2xl text-xs font-bold transition-all ${
                      device === 'washing'
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                        : 'glass-panel text-slate-700 hover:bg-white'
                    }`}
                  >
                    🧺 Washing Machine
                  </button>
                  <button
                    onClick={() => handleDeviceChange('ac')}
                    className={`py-3 px-3 rounded-2xl text-xs font-bold transition-all ${
                      device === 'ac'
                        ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                        : 'glass-panel text-slate-700 hover:bg-white'
                    }`}
                  >
                    ❄️ AC Service
                  </button>
                  <button
                    onClick={() => handleDeviceChange('microwave')}
                    className={`py-3 px-3 rounded-2xl text-xs font-bold transition-all ${
                      device === 'microwave'
                        ? 'bg-amber-600 text-white shadow-lg shadow-amber-500/25'
                        : 'glass-panel text-slate-700 hover:bg-white'
                    }`}
                  >
                    🍲 Microwave
                  </button>
                  <button
                    onClick={() => handleDeviceChange('refrigerator')}
                    className={`py-3 px-3 rounded-2xl text-xs font-bold transition-all ${
                      device === 'refrigerator'
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                        : 'glass-panel text-slate-700 hover:bg-white'
                    }`}
                  >
                    🧊 Refrigerator
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">2. What is the Problem?</label>
                <div className="space-y-2">
                  {activeIssues.map((issue) => (
                    <button
                      key={issue.id}
                      onClick={() => setIssueType(issue.id)}
                      className={`w-full p-3.5 sm:p-4 rounded-2xl text-left text-xs sm:text-sm font-semibold transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 border ${
                        issueType === issue.id
                          ? 'bg-blue-50 border-blue-500 text-blue-900 shadow-sm'
                          : 'bg-white/60 border-slate-200/80 text-slate-700 hover:bg-white'
                      }`}
                    >
                      <span className="min-w-0">{issue.label}</span>
                      <span className="text-[11px] sm:text-xs text-slate-500 font-normal shrink-0">Est: {issue.time}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Step 2: Instant Estimate Box */}
            <div className="lg:col-span-5">
              <div className="glass-card-dark p-8 rounded-3xl border border-white/20 shadow-2xl space-y-6 text-center lg:text-left">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Estimated Cost</span>
                  <span className="text-xs text-emerald-400 font-bold bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    90-Day Warranty
                  </span>
                </div>

                <div>
                  <h4 className="text-xs text-slate-400 font-medium uppercase tracking-wider">Selected Diagnosis</h4>
                  <p className="text-base font-bold text-white mt-1">{selectedIssue.label}</p>
                </div>

                <div className="py-2">
                  <p className="text-3xl sm:text-4xl font-extrabold text-blue-400">{selectedIssue.estPrice}</p>
                  <p className="text-xs text-slate-400 mt-1">Includes spare part + doorstep technician work in Surat</p>
                </div>

                <div className="space-y-2 border-t border-white/10 pt-4 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free doorstep inspection if service booked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>100% Genuine factory spare parts</span>
                  </div>
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold text-sm shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 transition-all shimmer-btn"
                  >
                    <span>Book This Repair</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="w-full py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors border border-white/20"
                  >
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span>Call Technician First</span>
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
