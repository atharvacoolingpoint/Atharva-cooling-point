import React from 'react';
import { generateBreadcrumbSchema, PHONE_NUMBER, WHATSAPP_NUMBER, BUSINESS_ADDRESS } from '@/lib/seo';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

export const metadata = {
  title: 'Contact Atharva Cooling Point | Emergency Appliance Repair Hotline in Surat',
  description: 'Contact Atharva Cooling Point at Charbhuja Arcade, Gala No. 2, New Kosad Road, Near Charbhuja Circle, Amroli, Surat, Gujarat. Call +91 90042 67813 for fast technician dispatch.',
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact' }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="pt-28 pb-20 bg-slate-50">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-bold text-blue-600 uppercase tracking-wider">
              📞 Emergency Hotline & Support
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Contact <span className="gradient-text">Atharva Cooling Point</span>
            </h1>
            <p className="text-slate-600 text-base">
              Available 7 days a week from 8:00 AM to 10:00 PM for urgent doorstep repairs across Surat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="glass-panel p-6 rounded-3xl border border-white/90 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">Phone Dispatch Hotline</h3>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-base font-extrabold text-blue-600 hover:underline">{PHONE_NUMBER}</a>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-3xl border border-white/90 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">WhatsApp Dispatch</h3>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-emerald-600 hover:underline">
                      Chat on WhatsApp ({PHONE_NUMBER})
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-3xl border border-white/90 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">Surat Head Office & Service Center</h3>
                    <p className="text-xs text-slate-700 font-semibold leading-relaxed mt-1">
                      Charbhuja Arcade, Gala No. 2, New Kosad Road, Near Charbhuja Circle, Amroli, Surat, Gujarat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-3xl border border-white/90 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">Service Hours</h3>
                    <p className="text-xs text-slate-600">Monday - Sunday: 8:00 AM - 10:00 PM (Emergency 24x7)</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/90 shadow-xl space-y-6">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Send a Quick Service Message
                </h3>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Your Name</label>
                      <input type="text" placeholder="e.g. Hitesh Patel" className="w-full px-4 py-3 rounded-2xl glass-input text-xs font-semibold text-slate-900" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Mobile Number</label>
                      <input type="tel" placeholder="e.g. 90042 67813" className="w-full px-4 py-3 rounded-2xl glass-input text-xs font-semibold text-slate-900" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Surat Locality</label>
                    <input type="text" placeholder="e.g. Adajan / Vesu / Varachha" className="w-full px-4 py-3 rounded-2xl glass-input text-xs font-semibold text-slate-900" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Appliance & Issue Details</label>
                    <textarea rows={4} placeholder="e.g. IFB Washing machine spin cycle noise or LG AC zero cooling issue..." className="w-full px-4 py-3 rounded-2xl glass-input text-xs font-semibold text-slate-900"></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> Send Service Request
                  </button>
                </form>
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}
