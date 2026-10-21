'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Phone, MapPin, Wrench, Shield } from 'lucide-react';
import { SURAT_LOCATIONS } from '@/data/locations';
import { WHATSAPP_NUMBER } from '@/lib/seo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultLocation?: string;
}

type DeviceType = 'washing' | 'ac' | 'microwave' | 'refrigerator';

export default function BookingModal({ isOpen, onClose, defaultLocation = '' }: BookingModalProps) {
  const [device, setDevice] = useState<DeviceType>('washing');
  const [issue, setIssue] = useState<string>('Not Spinning / Vibration Noise');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [location, setLocation] = useState<string>(defaultLocation || 'Adajan');
  const [preferredDate, setPreferredDate] = useState<string>('Today (Same-Day Urgent)');
  const [address, setAddress] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md glass-panel rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/90 z-10 animate-fadeIn my-auto max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full glass-pill text-slate-500 hover:text-slate-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <div className="flex items-center gap-1.5 text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-0.5">
                <Wrench className="w-3.5 h-3.5" /> Doorstep Technician Booking
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                Book a Repair in Surat
              </h3>
              <p className="text-[11px] text-slate-500">
                Technician dispatches within 30 mins • 90-day warranty
              </p>
            </div>

            {/* Device Selector */}
            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Select Appliance</label>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => { setDevice('washing'); setIssue('Not Spinning / Vibration Noise'); }}
                  className={`py-2 px-2.5 rounded-xl text-[11px] font-bold transition-all text-left truncate ${
                    device === 'washing' ? 'bg-blue-600 text-white shadow-md' : 'glass-panel text-slate-700'
                  }`}
                >
                  🧺 Washing Machine
                </button>
                <button
                  type="button"
                  onClick={() => { setDevice('ac'); setIssue('Not Cooling / Blowing Warm Air'); }}
                  className={`py-2 px-2.5 rounded-xl text-[11px] font-bold transition-all text-left truncate ${
                    device === 'ac' ? 'bg-cyan-600 text-white shadow-md' : 'glass-panel text-slate-700'
                  }`}
                >
                  ❄️ AC Service
                </button>
                <button
                  type="button"
                  onClick={() => { setDevice('microwave'); setIssue('Food Not Heating / Magnetron Problem'); }}
                  className={`py-2 px-2.5 rounded-xl text-[11px] font-bold transition-all text-left truncate ${
                    device === 'microwave' ? 'bg-amber-600 text-white shadow-md' : 'glass-panel text-slate-700'
                  }`}
                >
                  🍲 Microwave Oven
                </button>
                <button
                  type="button"
                  onClick={() => { setDevice('refrigerator'); setIssue('Fridge Gas Refilling & Leak Repair'); }}
                  className={`py-2 px-2.5 rounded-xl text-[11px] font-bold transition-all text-left truncate ${
                    device === 'refrigerator' ? 'bg-emerald-600 text-white shadow-md' : 'glass-panel text-slate-700'
                  }`}
                >
                  🧊 Refrigerator
                </button>
              </div>
            </div>

            {/* Issue Selector */}
            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Issue Description</label>
              <select
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                className="w-full px-3 py-2 rounded-xl glass-input text-xs font-semibold text-slate-900"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Rahul Patel"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs font-semibold text-slate-900"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 90042 67813"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs font-semibold text-slate-900"
                />
              </div>
            </div>

            {/* Surat Area Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Surat Locality</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs font-semibold text-slate-900"
                >
                  {SURAT_LOCATIONS.map((loc) => (
                    <option key={loc.slug} value={loc.name}>
                      {loc.name} ({loc.responseTime})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Preferred Time</label>
                <select
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs font-semibold text-slate-900"
                >
                  <option value="Today (Same-Day Urgent)">Today (Urgent 30-Min)</option>
                  <option value="Today Evening (4 PM - 7 PM)">Today Evening (4 PM - 7 PM)</option>
                  <option value="Tomorrow Morning (9 AM - 12 PM)">Tomorrow Morning (9 AM - 12 PM)</option>
                  <option value="Tomorrow Afternoon (12 PM - 4 PM)">Tomorrow Afternoon (12 PM - 4 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Doorstep Street Address</label>
              <textarea
                required
                rows={2}
                placeholder="House/Flat No., Building Name, Street..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3 py-2 rounded-xl glass-input text-xs font-semibold text-slate-900"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-blue-600/30 hover:scale-[1.01] transition-all shimmer-btn flex items-center justify-center gap-2"
            >
              <span>Dispatch Certified Technician</span>
            </button>

            <p className="text-[10px] text-slate-400 text-center font-medium flex items-center justify-center gap-1">
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              <span>Free Inspection on Repair Order • 90-Day Free Warranty</span>
            </p>
          </form>
        ) : (
          <div className="py-6 text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-slate-900">Repair Request Received!</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Our Surat senior technician is assigned and will arrive at your address in <span className="font-bold text-slate-900">{location}</span> within 30 minutes.
              </p>
            </div>

            <div className="glass-panel p-4 rounded-2xl text-left text-xs space-y-1 text-slate-700">
              <p><strong>Appliance:</strong> {getDeviceName(device)}</p>
              <p><strong>Selected Issue:</strong> {issue}</p>
              <p><strong>Technician Arrival:</strong> {preferredDate}</p>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={openWhatsAppConfirmation}
                className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all"
              >
                <span>💬 Instant WhatsApp Dispatch Confirm</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-2xl glass-pill text-slate-700 font-bold text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
