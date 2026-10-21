import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SURAT_LOCATIONS } from '@/data/locations';
import { REPAIR_SERVICES } from '@/data/services';
import { generateBreadcrumbSchema, generateFAQSchema, PHONE_NUMBER, WHATSAPP_NUMBER } from '@/lib/seo';
import FaqAccordion from '@/components/FaqAccordion';
import { MapPin, Clock, ShieldCheck, Phone, Calendar, ArrowRight, CheckCircle2, UserCheck, Star } from 'lucide-react';

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SURAT_LOCATIONS.map((loc) => ({
    slug: loc.slug
  }));
}

export async function generateMetadata({ params }: LocationPageProps) {
  const { slug } = await params;
  const loc = SURAT_LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return { title: 'Location Not Found' };

  return {
    title: `TV & Refrigerator Repair in ${loc.name}, Surat | 30 Min Doorstep Service`,
    description: `Professional doorstep TV & Refrigerator repair in ${loc.name}, Surat (${loc.pincode}). Certified technicians near ${loc.landmarks.slice(0, 3).join(', ')}. 90-day warranty.`,
    keywords: `TV repair in ${loc.name}, Refrigerator repair in ${loc.name}, TV technician ${loc.name} Surat, fridge gas refill ${loc.name}`
  };
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const loc = SURAT_LOCATIONS.find((l) => l.slug === slug);

  if (!loc) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Surat Locations', url: '/location' },
    { name: `${loc.name}, Surat`, url: `/location/${loc.slug}` }
  ]);

  const locationFaqs = [
    {
      question: `How fast can a technician reach my home in ${loc.name}?`,
      answer: `We have ${loc.activeTechnicians} dedicated repair vehicles active in ${loc.name} right now. Our average arrival time is ${loc.responseTime} near ${loc.landmarks[0]} and surrounding areas.`
    },
    {
      question: `Do you charge extra for visiting ${loc.name}?`,
      answer: `No extra location travel charges! When you proceed with the repair service, the initial inspection fee is completely waived.`
    },
    {
      question: `Which brands do you service in ${loc.name}?`,
      answer: `We repair all major TV and refrigerator brands in ${loc.name} including Samsung, LG, Sony, Whirlpool, Godrej, Bosch, Mi, and Panasonic.`
    }
  ];

  const faqSchema = generateFAQSchema(locationFaqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="pt-28 pb-20 bg-slate-50">
        
        {/* Location Header Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/90 shadow-2xl relative overflow-hidden">
            
            <div className="max-w-3xl space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {loc.zone} • Pincode {loc.pincode}
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5" /> {loc.activeTechnicians} Technicians Active
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Doorstep TV & Refrigerator Repair in <span className="gradient-text">{loc.name}, Surat</span>
              </h1>

              <p className="text-slate-600 text-base leading-relaxed">
                {loc.localizedDescription}
              </p>

              {/* Landmarks */}
              <div className="glass-pill p-4 rounded-2xl border border-white/90">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Key Coverage Landmarks in {loc.name}:</p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-800">
                  {loc.landmarks.map((landmark, i) => (
                    <span key={i} className="bg-white/80 px-3 py-1 rounded-xl shadow-xs border border-slate-200/60">
                      📍 {landmark}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-500/25 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 animate-pulse" /> Call {loc.name} Technician: {PHONE_NUMBER}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Atharva%20Cooling%20Point%2C%20I%20need%20repair%20service%20in%20${encodeURIComponent(loc.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 flex items-center gap-2"
                >
                  <span>💬 Book via WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Popular Services in this Area */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
            Popular Repairs Requested in {loc.name}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {loc.popularServices.map((serviceName, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-3xl border border-white/90 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                  #{idx + 1}
                </div>
                <h3 className="font-bold text-base text-slate-900">{serviceName}</h3>
                <p className="text-xs text-slate-500">Same-day doorstep completion with 90-day spare warranty.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Localized Reviews */}
        {loc.reviews.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
              Customer Reviews from {loc.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loc.reviews.map((rev, i) => (
                <div key={i} className="glass-panel p-6 rounded-3xl border border-white/90 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900">{rev.author}</span>
                    <span className="text-xs text-slate-400">{rev.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, r) => (
                      <Star key={r} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 italic">"{rev.comment}"</p>
                  <span className="inline-block text-[10px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {rev.serviceProvided}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Location Specific FAQs */}
        <FaqAccordion faqs={locationFaqs} title={`Repair FAQs for ${loc.name}, Surat`} />

      </div>
    </>
  );
}
