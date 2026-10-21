'use client';

import React from 'react';
import { Phone, Calendar, MessageSquare, MapPin } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '@/lib/seo';

interface MobileDockProps {
  onOpenBooking: () => void;
}

export default function MobileDock({ onOpenBooking }: MobileDockProps) {
  return (
    <aside aria-label="Mobile quick actions" className="fixed bottom-3 left-3 right-3 z-40 lg:hidden">
      <div className="glass-panel rounded-3xl p-2 shadow-2xl border border-white/80 backdrop-blur-2xl flex items-center justify-around">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex flex-col items-center justify-center p-2 text-slate-700 hover:text-blue-600 transition-colors"
        >
          <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-0.5">
            <Phone className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold">Call Tech</span>
        </a>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Atharva%20Cooling%20Point%2C%20I%20want%20to%20book%20a%20repair`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 text-slate-700 hover:text-emerald-600 transition-colors"
        >
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-0.5">
            <MessageSquare className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold">WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center px-4 py-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md shadow-blue-500/25"
        >
          <Calendar className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-bold">Quick Book</span>
        </button>

        <a
          href="/location"
          className="flex flex-col items-center justify-center p-2 text-slate-700 hover:text-blue-600 transition-colors"
        >
          <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-0.5">
            <MapPin className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold">Surat Areas</span>
        </a>
      </div>
    </aside>
  );
}
