'use client';

import React from 'react';
import { Phone, Calendar, MapPin } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '@/lib/seo';

interface MobileDockProps {
  onOpenBooking: () => void;
}

export default function MobileDock({ onOpenBooking }: MobileDockProps) {
  return (
    <aside aria-label="Mobile quick actions" className="fixed bottom-3 left-3 right-3 z-40 lg:hidden">
      <div className="glass-panel rounded-3xl p-2 shadow-2xl border border-white/80 backdrop-blur-2xl flex items-center justify-around">
        {/* 1. Call Now */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex flex-col items-center justify-center p-2 text-slate-700 hover:text-blue-600 transition-colors"
        >
          <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-0.5">
            <Phone className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold">Call Now</span>
        </a>

        {/* 2. Original WhatsApp */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Atharva%20Cooling%20Point%2C%20I%20want%20to%20book%20a%20repair`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 text-slate-700 hover:text-emerald-600 transition-colors"
        >
          <div className="w-10 h-10 rounded-2xl bg-[#25D366] text-white flex items-center justify-center mb-0.5 shadow-sm shadow-emerald-500/20">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.002 3.66 3.745-.993zm11.233-6.495c-.296-.148-1.753-.865-2.025-.963-.272-.098-.47-.148-.668.149-.197.297-.766.963-.94 1.16-.173.198-.347.223-.643.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.753-.719 2.001-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.568-.347z"/>
            </svg>
          </div>
          <span className="text-[10px] font-semibold text-emerald-700">WhatsApp</span>
        </a>

        {/* 3. Quick Book (Normal Clean Box) */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center p-2 text-slate-700 hover:text-blue-600 transition-colors"
        >
          <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-0.5">
            <Calendar className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold">Quick Book</span>
        </button>

        {/* 4. Surat Areas */}
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
