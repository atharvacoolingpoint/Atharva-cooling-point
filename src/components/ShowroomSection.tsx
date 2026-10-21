'use client';

import React, { useState } from 'react';
import { 
  WashingMachine,
  Wind,
  Flame,
  Snowflake, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Zap, 
  Phone, 
  ArrowRight, 
  Cpu, 
  MapPin, 
  Activity,
  Layers
} from 'lucide-react';
import { PHONE_NUMBER } from '@/lib/seo';

interface Symptom {
  id: string;
  title: string;
  subtitle: string;
  severity: 'Low' | 'Moderate' | 'Critical';
  rootCause: string;
  solution: string;
  estTime: string;
  estCostRange: string;
  warranty: string;
  partsUsed: string;
}

const WASHING_SYMPTOMS: Symptom[] = [
  {
    id: 'wm-not-spinning',
    title: 'Drum Not Spinning / Machine Vibration',
    subtitle: 'Motor Capacitor or Drive Belt Failure',
    severity: 'Moderate',
    rootCause: 'Worn motor drive belt, blown capacitor, or broken tub spider shaft arm.',
    solution: 'On-site drive belt tensioning, carbon brush replacement, or tub bearing overhaul.',
    estTime: '45 - 60 Mins',
    estCostRange: '₹499 - ₹999',
    warranty: '90 Days Free Warranty',
    partsUsed: 'Genuine High-Tension Drive Belt & Bearings'
  },
  {
    id: 'wm-drain-error',
    title: 'Water Not Draining / E2 & OE Error',
    subtitle: 'Drain Pump Motor Blockage',
    severity: 'Critical',
    rootCause: 'Coin/lint clogged impeller or burnt synchronous drain pump motor.',
    solution: 'Drain line flush, coin trap cleaning, and drain pump motor unit swap.',
    estTime: '30 - 45 Mins',
    estCostRange: '₹399 - ₹799',
    warranty: '90 Days Free Warranty',
    partsUsed: 'Original Synchronous Drain Pump Motor'
  },
  {
    id: 'wm-pcb-error',
    title: 'PCB Error Code / Program Stuck',
    subtitle: 'Digital Control Board Microcontroller Fault',
    severity: 'Critical',
    rootCause: 'Voltage spike burned power IC or pressure sensor signal drop.',
    solution: 'Component-level micro-soldering of PCB logic board and pressure switch calibration.',
    estTime: '45 - 60 Mins',
    estCostRange: '₹699 - ₹1,299',
    warranty: '90 Days PCB Warranty',
    partsUsed: 'Genuine Inverter Driver IC & Pressure Sensor'
  }
];

const AC_SYMPTOMS: Symptom[] = [
  {
    id: 'ac-not-cooling',
    title: 'AC Running but Room is Warm',
    subtitle: 'Low Refrigerant Gas or Choked Coil',
    severity: 'Critical',
    rootCause: 'Copper pipe pinhole leak or dirty evaporator coil blocking airflow.',
    solution: 'Nitrogen pressure leak test, silver brazing, deep vacuuming & eco gas charging.',
    estTime: '60 Mins',
    estCostRange: '₹999 - ₹1,899',
    warranty: '90 Days Gas Warranty',
    partsUsed: 'Pure R32 / R410a Eco Refrigerant'
  },
  {
    id: 'ac-water-dripping',
    title: 'Water Leaking Inside Room from AC',
    subtitle: 'Blocked Condensate Drain Tray',
    severity: 'Moderate',
    rootCause: 'Algae buildup in indoor drain hose or iced up evaporator fins.',
    solution: 'High-pressure drain line flush, tray alignment, and deep foam jet wash.',
    estTime: '30 - 45 Mins',
    estCostRange: '₹399 - ₹699',
    warranty: '30 Days Service Warranty',
    partsUsed: 'Anti-Bacterial Foam & Drain Hose'
  },
  {
    id: 'ac-tripping-mcb',
    title: 'Compressor Tripping House MCB',
    subtitle: 'Compressor Start Capacitor Failure',
    severity: 'Critical',
    rootCause: 'Failed 45uF compressor dual capacitor or grounded compressor winding.',
    solution: 'Capacitor swap, contactor relay replacement, and compressor winding insulation test.',
    estTime: '30 - 45 Mins',
    estCostRange: '₹499 - ₹899',
    warranty: '90 Days Warranty',
    partsUsed: 'Heavy Duty 450V Dual Run Capacitor'
  }
];

const MICROWAVE_SYMPTOMS: Symptom[] = [
  {
    id: 'mw-not-heating',
    title: 'Microwave Runs but Food Stays Cold',
    subtitle: 'Magnetron Tube or HV Diode Burnout',
    severity: 'Critical',
    rootCause: 'Magnetron filament loss or high-voltage rectifier diode short circuit.',
    solution: 'Safety high-voltage discharge and genuine Magnetron tube replacement.',
    estTime: '30 - 45 Mins',
    estCostRange: '₹599 - ₹1,199',
    warranty: '90 Days Warranty',
    partsUsed: 'Original Panasonic / LG Magnetron Tube'
  },
  {
    id: 'mw-sparking',
    title: 'Sparking / Arcing Inside Cavity',
    subtitle: 'Burnt Mica Waveguide Cover',
    severity: 'Moderate',
    rootCause: 'Carbonized oil splatters on mica sheet causing electrical arcing.',
    solution: 'Cavity degreasing, microwave waveguide inspection, and fresh Mica sheet replacement.',
    estTime: '20 - 30 Mins',
    estCostRange: '₹249 - ₹499',
    warranty: '90 Days Warranty',
    partsUsed: 'High-Temp Mineral Mica Sheet'
  }
];

const FRIDGE_SYMPTOMS: Symptom[] = [
  {
    id: 'fridge-not-cooling',
    title: 'Not Cooling / Compressor Humming',
    subtitle: 'R600a Gas Leak or Relay Failure',
    severity: 'Critical',
    rootCause: 'Refrigerant pressure drop due to pinhole leak or failed BLDC inverter start relay.',
    solution: 'Nitrogen leak test at 250 PSI, vacuum evacuation & precision gas charging.',
    estTime: '60 Mins',
    estCostRange: '₹1,199 - ₹1,899',
    warranty: '90 Days Gas Warranty',
    partsUsed: 'Eco-Friendly R600a / R134a Gas'
  },
  {
    id: 'fridge-water-leak',
    title: 'Water Leaking Under Crisper Drawer',
    subtitle: 'Clogged Defrost Drain Hole',
    severity: 'Low',
    rootCause: 'Frozen defrost drain hole preventing condensate water from evaporating in tray.',
    solution: 'Hot steam flush of drain tube, defrost thermostat testing, and drain heater repair.',
    estTime: '30 Mins',
    estCostRange: '₹399 - ₹699',
    warranty: '90 Days Warranty',
    partsUsed: 'OEM Defrost Sensor & Valve'
  }
];

interface ShowroomSectionProps {
  onOpenBooking?: () => void;
}

export default function ShowroomSection({ onOpenBooking }: ShowroomSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'washing' | 'ac' | 'microwave' | 'fridge'>('washing');
  const [selectedSymptom, setSelectedSymptom] = useState<Symptom>(WASHING_SYMPTOMS[0]);

  const currentSymptoms = 
    activeCategory === 'washing' ? WASHING_SYMPTOMS :
    activeCategory === 'ac' ? AC_SYMPTOMS :
    activeCategory === 'microwave' ? MICROWAVE_SYMPTOMS : FRIDGE_SYMPTOMS;

  const handleCategorySwitch = (cat: 'washing' | 'ac' | 'microwave' | 'fridge') => {
    setActiveCategory(cat);
    const symptoms = 
      cat === 'washing' ? WASHING_SYMPTOMS :
      cat === 'ac' ? AC_SYMPTOMS :
      cat === 'microwave' ? MICROWAVE_SYMPTOMS : FRIDGE_SYMPTOMS;
    setSelectedSymptom(symptoms[0]);
  };

  return (
    <section className="py-20 relative bg-slate-950 text-white overflow-hidden border-y border-white/10" id="showroom">
      
      {/* Dynamic Background Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-serif">
            Select Your Issue. <span className="gradient-text font-sans">Get Instant Solution & Price.</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Diagnose your Washing Machine, AC, Microwave Oven, or Refrigerator problem instantly using our Surat engineering database. Transparent pricing, genuine parts, and 30-minute doorstep arrival.
          </p>
        </div>

        {/* Appliance Category Selector Pills */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            onClick={() => handleCategorySwitch('washing')}
            className={`flex items-center justify-center gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-xl border ${
              activeCategory === 'washing'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400 shadow-blue-600/30 scale-105'
                : 'bg-slate-900/80 text-slate-400 border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            <WashingMachine className="w-4 h-4 text-blue-300 shrink-0" />
            <span className="truncate">Washing Machine</span>
          </button>

          <button
            onClick={() => handleCategorySwitch('ac')}
            className={`flex items-center justify-center gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-xl border ${
              activeCategory === 'ac'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-cyan-400 shadow-cyan-600/30 scale-105'
                : 'bg-slate-900/80 text-slate-400 border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            <Wind className="w-4 h-4 text-cyan-300 shrink-0" />
            <span className="truncate">AC Repair Lab</span>
          </button>

          <button
            onClick={() => handleCategorySwitch('microwave')}
            className={`flex items-center justify-center gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-xl border ${
              activeCategory === 'microwave'
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white border-amber-400 shadow-amber-600/30 scale-105'
                : 'bg-slate-900/80 text-slate-400 border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            <Flame className="w-4 h-4 text-amber-300 shrink-0" />
            <span className="truncate">Microwave Lab</span>
          </button>

          <button
            onClick={() => handleCategorySwitch('fridge')}
            className={`flex items-center justify-center gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-xl border ${
              activeCategory === 'fridge'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-400 shadow-emerald-600/30 scale-105'
                : 'bg-slate-900/80 text-slate-400 border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            <Snowflake className="w-4 h-4 text-emerald-300 shrink-0" />
            <span className="truncate">Refrigerator Lab</span>
          </button>
        </div>

        {/* MAIN DIAGNOSTIC WORKBENCH GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Interactive Symptom Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-400" />
              <span>Select Your Appliance Symptom:</span>
            </h3>

            {currentSymptoms.map((symptom) => {
              const isSelected = selectedSymptom.id === symptom.id;
              return (
                <div
                  key={symptom.id}
                  onClick={() => setSelectedSymptom(symptom)}
                  className={`p-4 rounded-2xl cursor-pointer border transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] relative overflow-hidden ${
                    isSelected
                      ? 'bg-slate-900 border-blue-500 shadow-xl shadow-blue-500/10'
                      : 'bg-slate-900/50 border-white/5 hover:border-white/20 hover:bg-slate-900/80'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-indigo-500" />
                  )}

                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                          symptom.severity === 'Critical'
                            ? 'bg-rose-950/80 text-rose-400 border border-rose-500/30'
                            : symptom.severity === 'Moderate'
                            ? 'bg-amber-950/80 text-amber-400 border border-amber-500/30'
                            : 'bg-blue-950/80 text-blue-400 border border-blue-500/30'
                        }`}>
                          {symptom.severity} Priority
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          Est. {symptom.estTime}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white tracking-tight">
                        {symptom.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-medium">
                        {symptom.subtitle}
                      </p>
                    </div>

                    <div className={`p-2.5 rounded-xl border ${
                      isSelected ? 'bg-blue-600 text-white border-blue-400' : 'bg-slate-800 text-slate-400 border-white/5'
                    }`}>
                      <Wrench className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Live Diagnostic HUD & Solution Analyzer (7 Cols) */}
          <div className="lg:col-span-7">
            <div
              key={selectedSymptom.id}
              className="glass-card-dark p-6 sm:p-8 rounded-3xl border border-white/15 space-y-6 shadow-2xl relative overflow-hidden transition-opacity duration-200"
            >
                
                {/* HUD Top Badge Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                      Live Surat Diagnostic Active
                    </span>
                  </div>

                  <div className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>14 Technicians Active in Surat</span>
                  </div>
                </div>

                {/* Symptom Title & Root Cause */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-500/30">
                    {activeCategory === 'washing' ? '🧺 Washing Machine Fix' :
                     activeCategory === 'ac' ? '❄️ AC HVAC Diagnostic' :
                     activeCategory === 'microwave' ? '🍲 Microwave RF Diagnostic' : '🧊 Refrigerator Diagnostic'}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {selectedSymptom.title}
                  </h3>

                  <div className="bg-slate-900/90 p-4 rounded-2xl border border-white/10 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <Cpu className="w-3.5 h-3.5 text-amber-400" /> Engineering Root Cause Analysis:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      {selectedSymptom.rootCause}
                    </p>
                  </div>
                </div>

                {/* Recommended Solution */}
                <div className="bg-blue-950/40 p-4 sm:p-5 rounded-2xl border border-blue-500/30 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Doorstep Repair Solution:
                  </span>
                  <p className="text-xs sm:text-sm text-blue-100 font-normal leading-relaxed">
                    {selectedSymptom.solution}
                  </p>
                </div>

                {/* Technical Parameters Breakdown Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-white/10 space-y-1">
                    <span className="text-[10px] text-slate-400 font-semibold block flex items-center gap-1">
                      <Clock className="w-3 h-3 text-blue-400" /> Fix Time
                    </span>
                    <span className="text-xs font-extrabold text-white block">
                      {selectedSymptom.estTime}
                    </span>
                  </div>

                  <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-white/10 space-y-1">
                    <span className="text-[10px] text-slate-400 font-semibold block flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" /> Warranty
                    </span>
                    <span className="text-xs font-extrabold text-emerald-400 block">
                      {selectedSymptom.warranty}
                    </span>
                  </div>

                  <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-white/10 space-y-1">
                    <span className="text-[10px] text-slate-400 font-semibold block flex items-center gap-1">
                      <Wrench className="w-3 h-3 text-amber-400" /> Genuine Parts
                    </span>
                    <span className="text-xs font-extrabold text-white truncate block">
                      {selectedItemShort(selectedSymptom.partsUsed)}
                    </span>
                  </div>

                  <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-white/10 space-y-1">
                    <span className="text-[10px] text-slate-400 font-semibold block flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-300" /> Est. Cost Range
                    </span>
                    <span className="text-xs font-extrabold text-amber-300 block">
                      {selectedSymptom.estCostRange}
                    </span>
                  </div>
                </div>

                {/* Direct Emergency Dispatch Call & Booking CTA */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={onOpenBooking}
                    className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-extrabold text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shimmer-btn"
                  >
                    <Wrench className="w-4 h-4" />
                    <span>Book Doorstep Fix For This Issue</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors border border-white/20"
                  >
                    <Phone className="w-4 h-4 text-emerald-400 animate-pulse" />
                    <span>Call {PHONE_NUMBER}</span>
                  </a>
                </div>

                {/* Trust Footer Note */}
                <p className="text-[11px] text-slate-400 text-center font-medium">
                  🔒 Zero Advance Payment Required • Free Inspection On Repair Order • Surat Doorstep Service in 30 Mins
                </p>

              </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function selectedItemShort(text: string): string {
  if (text.length > 20) {
    return text.substring(0, 18) + '...';
  }
  return text;
}
