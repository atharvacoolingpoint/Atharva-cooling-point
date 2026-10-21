'use client';

import React, { useState } from 'react';
import { Calendar, Shield } from 'lucide-react';
import { SURAT_LOCATIONS } from '@/data/locations';
import { WHATSAPP_NUMBER } from '@/lib/seo';

type DeviceType = 'washing' | 'ac' | 'microwave' | 'refrigerator';

export default function BookRepairPage() {
  const [device, setDevice] = useState<DeviceType>('washing');
  const [issue, setIssue] = useState<string>('Not Spinning / Vibration Noise');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [location, setLocation] = useState<string>('Adajan');
  const [preferredDate, setPreferredDate] = useState<string>('Today (Same-Day Urgent)');
  const [address, setAddress] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getDeviceName = (d: DeviceType) => {
    switch (d) {
      case 'washing': return 'Washing Machine';
      case 'ac': return 'Air Conditioner (AC)';
      case 'microwave': return 'Microwave Oven';
      case 'refrigerator': return 'Refrigerator';
    }
  };

  const openWhatsAppConfirmation = () => {
    const message = `Hello Atharva Cooling Point, I booked a repair online:%0A%0A📱 *Device:* ${getDeviceName(device)}%0A🚨 *Issue:* ${issue}%0A👤 *Name:* ${name}%0A📞 *Phone:* ${phone}%0A📍 *Surat Area:* ${location}%0A🏠 *Address:* ${address}%0A📅 *Preferred Time:* ${preferredDate}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-bold text-blue-600 uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" /> Fast Online Dispatch
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Book Doorstep Repair in <span className="gradient-text">Surat</span>
          </h1>
          <p className="text-slate-600 text-sm">
            Technicians available in 20+ Surat localities for Washing Machines, ACs, Microwaves, & Refrigerators with 90-day warranty.
          </p>
        </div>

        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/90 shadow-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Device Selector */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Select Appliance</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => { setDevice('washing'); setIssue('Not Spinning / Vibration Noise'); }}
                    className={`py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                      device === 'washing' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' : 'glass-panel text-slate-700'
                    }`}
                  >
                    🧺 Washing Machine
                  </button>
                  <button
                    type="button"
                    onClick={() => { setDevice('ac'); setIssue('Not Cooling / Blowing Warm Air'); }}
                    className={`py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                      device === 'ac' ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25' : 'glass-panel text-slate-700'
                    }`}
                  >
                    ❄️ AC Service
                  </button>
                  <button
                    type="button"
                    onClick={() => { setDevice('microwave'); setIssue('Food Not Heating / Magnetron Problem'); }}
                    className={`py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                      device === 'microwave' ? 'bg-amber-600 text-white shadow-lg shadow-amber-500/25' : 'glass-panel text-slate-700'
                    }`}
                  >
                    🍲 Microwave Oven
                  </button>
                  <button
                    type="button"
                    onClick={() => { setDevice('refrigerator'); setIssue('Fridge Gas Refilling & Leak Repair'); }}
                    className={`py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                      device === 'refrigerator' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25' : 'glass-panel text-slate-700'
                    }`}
                  >
                    🧊 Refrigerator
                  </button>
                </div>
              </div>

              {/* Issue Selector */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Select Primary Issue</label>
                <select
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl glass-input text-xs sm:text-sm font-semibold text-slate-900"
                >
                  {device === 'washing' && (
                    <>
                      <option value="Not Spinning / Vibration Noise">Not Spinning / Vibration Noise</option>
                      <option value="Water Not Draining (OE / E2 Error)">Water Not Draining (OE / E2 Error)</option>
                      <option value="Machine Not Turning On / Power Issue">Machine Not Turning On / Power Issue</option>
                      <option value="Water Leaking from Front Door Seal">Water Leaking from Front Door Seal</option>
                      <option value="Cycle Timer / PCB Board Error">Cycle Timer / PCB Board Error</option>
                    </>
                  )}
                  {device === 'ac' && (
                    <>
                      <option value="Not Cooling / Blowing Warm Air">Not Cooling / Blowing Warm Air</option>
                      <option value="AC Gas Leak & Gas Charging (R32/R410a)">AC Gas Leak & Gas Charging (R32/R410a)</option>
                      <option value="Water Dripping Inside Room">Water Dripping Inside Room</option>
                      <option value="Compressor Tripping House MCB">Compressor Tripping House MCB</option>
                      <option value="AC Jet Service & Anti-Bacterial Wash">AC Jet Service & Anti-Bacterial Wash</option>
                    </>
                  )}
                  {device === 'microwave' && (
                    <>
                      <option value="Food Not Heating / Magnetron Problem">Food Not Heating / Magnetron Problem</option>
                      <option value="Sparking Inside Cavity">Sparking Inside Cavity</option>
                      <option value="Glass Turntable Plate Not Rotating">Glass Turntable Plate Not Rotating</option>
                      <option value="Touchpad Buttons Unresponsive">Touchpad Buttons Unresponsive</option>
                      <option value="Power Blowing Main Fuse">Power Blowing Main Fuse</option>
                    </>
                  )}
                  {device === 'refrigerator' && (
                    <>
                      <option value="Fridge Gas Refilling & Leak Repair">Fridge Gas Refilling & Leak Repair</option>
                      <option value="Top Freezer Cools, Lower Fridge Warm">Top Freezer Cools, Lower Fridge Warm</option>
                      <option value="Compressor Noise / Clicking Sound">Compressor Noise / Clicking Sound</option>
                      <option value="Digital Inverter Error Code (5E/22E)">Digital Inverter Error Code (5E/22E)</option>
                      <option value="Water Leakage / Ice Accumulation">Water Leakage / Ice Accumulation</option>
                    </>
                  )}
                </select>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hitesh Patel"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl glass-input text-xs sm:text-sm font-semibold text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 90042 67813"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl glass-input text-xs sm:text-sm font-semibold text-slate-900"
                  />
                </div>
              </div>

              {/* Surat Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">Surat Locality *</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl glass-input text-xs sm:text-sm font-semibold text-slate-900"
                  >
                    {SURAT_LOCATIONS.map((loc) => (
                      <option key={loc.slug} value={loc.name}>
                        {loc.name} ({loc.pincode})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">Preferred Date</label>
                  <select
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl glass-input text-xs sm:text-sm font-semibold text-slate-900"
                  >
                    <option value="Today (Same-Day Urgent)">Today (Same-Day Urgent)</option>
                    <option value="Tomorrow Morning">Tomorrow Morning</option>
                    <option value="Tomorrow Afternoon">Tomorrow Afternoon</option>
                    <option value="Weekend Appointment">Weekend Appointment</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">Landmark Address</label>
                <input
                  type="text"
                  placeholder="e.g. B-402, Star Residency, Near Star Bazaar, Adajan"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl glass-input text-xs sm:text-sm font-semibold text-slate-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shimmer-btn"
              >
                <Calendar className="w-5 h-5" />
                <span>Confirm & Dispatch Doorstep Repair</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl">
                ✓
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Booking Request Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2">
                  Our dispatch supervisor in <span className="font-bold text-slate-900">{location}</span> will call you on <span className="font-bold text-blue-600">{phone}</span> within 10 minutes to verify technician arrival.
                </p>
              </div>

              <button
                onClick={openWhatsAppConfirmation}
                className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all"
              >
                <span>💬 Open WhatsApp Confirmation</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
