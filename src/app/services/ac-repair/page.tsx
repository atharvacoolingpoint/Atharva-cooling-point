import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { REPAIR_SERVICES } from '@/data/services';
import { generateServiceSchema, generateBreadcrumbSchema, PHONE_NUMBER } from '@/lib/seo';
import FaqAccordion from '@/components/FaqAccordion';
import { Phone, Calendar, ArrowRight, CheckCircle2, Wind } from 'lucide-react';

export const metadata = {
  title: 'AC Repair & Servicing in Surat | Split, Inverter & Window AC Gas Refilling Near Me',
  description: 'Doorstep AC repair in Surat for Voltas, Daikin, LG, Samsung, Whirlpool & all brands. Copper pipe leak testing, R32/R410a gas charging, high-pressure jet wash with 90-day warranty.',
  keywords: 'AC repair in Surat, AC service near me, Split AC gas refilling Surat, Voltas AC repair Surat, Daikin AC service Surat'
};

export default function AcRepairCategoryPage() {
  const acServices = REPAIR_SERVICES.filter(s => s.category === 'ac');
  const serviceSchema = generateServiceSchema('AC Repair Service in Surat', 'Professional doorstep AC repair and gas refilling in Surat for Split, Window, and Inverter AC units.', '/images/ac_repair.jpg');
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'AC Repair', url: '/services/ac-repair' }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="pt-28 pb-20 bg-slate-50">
        
        {/* Header Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
                <Wind className="w-4 h-4" /> Multi-Brand HVAC Specialists
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Doorstep <span className="gradient-text">AC Repair & Service</span> in Surat
              </h1>
              <p className="text-slate-600 text-base leading-relaxed">
                Certified HVAC engineer arrival in 30 minutes across all Surat localities. We perform nitrogen pressure leak tests, silver brazing pipe repairs, vacuuming, eco-friendly gas charging, and anti-bacterial jet washing.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call Technician: {PHONE_NUMBER}
                </a>
                <Link
                  href="/book-repair"
                  className="px-6 py-3.5 rounded-2xl glass-pill font-bold text-slate-800 text-sm hover:bg-white flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-blue-600" /> Book Repair Online
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
              <Image
                src="/images/ac_repair.jpg"
                alt="AC Repair Service in Surat"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

          </div>
        </section>

        {/* AC Service Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
            Specialized Air Conditioner Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {acServices.map((service) => (
              <div key={service.slug} className="glass-panel p-6 rounded-3xl border border-white/80 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full mb-3 inline-block">
                    {service.warranty}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-xs text-slate-600 mb-4">{service.shortDesc}</p>

                  <div className="space-y-1.5 border-t border-slate-100 pt-3">
                    <p className="text-[11px] font-bold text-slate-400 uppercase">Symptoms Fixed:</p>
                    {service.commonSymptoms.slice(0, 3).map((sym, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> {sym}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <span className="font-extrabold text-blue-600 text-base">From ₹{service.startingPrice}</span>
                  <Link href={`/services/${service.slug}`} className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center gap-1">
                    Book Service <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <FaqAccordion title="AC Repair FAQs in Surat" />

      </div>
    </>
  );
}
