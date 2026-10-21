'use client';

import React from 'react';
import { WHATSAPP_NUMBER } from '@/lib/seo';

export default function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Atharva%20Cooling%20Point%2C%20I%20want%20to%20book%20a%20doorstep%20repair%20for%20my%20appliance.`;

  return (
    <div className="fixed bottom-8 right-6 z-50 hidden lg:flex items-center select-none">
      {/* Main Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-500 text-white shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/30"
        aria-label="Chat on WhatsApp"
      >
        {/* Glowing Ping Ripple Effect */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />

        {/* Authentic SVG WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-current transition-transform group-hover:rotate-12"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.002 3.66 3.745-.993zm11.233-6.495c-.296-.148-1.753-.865-2.025-.963-.272-.098-.47-.148-.668.149-.197.297-.766.963-.94 1.16-.173.198-.347.223-.643.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.753-.719 2.001-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.568-.347z" />
        </svg>
      </a>
    </div>
  );
}
