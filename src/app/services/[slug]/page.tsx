import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { REPAIR_SERVICES } from '@/data/services';
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, PHONE_NUMBER, WHATSAPP_NUMBER } from '@/lib/seo';
import FaqAccordion from '@/components/FaqAccordion';
import { ShieldCheck, Clock, CheckCircle2, Phone, Calendar, ArrowRight, Wrench } from 'lucide-react';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return REPAIR_SERVICES.map((s) => ({
    slug: s.slug
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = REPAIR_SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} in Surat | Doorstep Service & 90-Day Warranty`,
    description: service.fullDesc.slice(0, 160),
    keywords: `${service.title} Surat, ${service.title} near me, doorstep ${service.category} repair Surat`
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = REPAIR_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = generateServiceSchema(service.title, service.fullDesc, service.imagePath);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${service.slug}` }
  ]);
  const faqSchema = generateFAQSchema(service.faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="pt-28 pb-20 bg-slate-50">
        
        {/* Hero Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/90 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {service.category === 'washing-machine' ? '🧺 Washing Machine Service' :
                   service.category === 'ac' ? '❄️ AC Repair Service' :
                   service.category === 'microwave' ? '🍲 Microwave Oven Service' : '🧊 Refrigerator Service'}
                </span>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  {service.warranty}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {service.title} <span className="gradient-text">in Surat</span>
              </h1>

              <p className="text-slate-600 text-base leading-relaxed">
                {service.fullDesc}
              </p>

              <div className="flex items-center gap-6 py-2 border-y border-slate-200/60">
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase block">Starting Price</span>
                  <span className="text-2xl font-extrabold text-blue-600">₹{service.startingPrice}</span>
                </div>
                <div className="border-l border-slate-200 pl-6">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase block">Est. Duration</span>
                  <span className="text-base font-bold text-slate-900">{service.estimatedTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-500/25 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 animate-pulse" /> Call Technician: {PHONE_NUMBER}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Atharva%20Cooling%20Point%2C%20I%20want%20to%20book%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 flex items-center gap-2"
                >
                  <span>💬 Book via WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
              <Image
                src={service.imagePath}
                alt={`${service.title} in Surat`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

          </div>
        </section>

        {/* Diagnostic Breakdown */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="glass-panel p-8 rounded-3xl border border-white/90">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-blue-600" /> Symptoms We Diagnose & Fix
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {service.commonSymptoms.map((sym, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{sym}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/90">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" /> What's Included in This Service
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {service.includedInService.map((inc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* Service FAQs */}
        <FaqAccordion faqs={service.faqs} title={`${service.title} FAQs`} />

      </div>
    </>
  );
}
