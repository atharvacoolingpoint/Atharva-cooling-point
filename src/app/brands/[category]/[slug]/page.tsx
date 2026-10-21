import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BRANDS_DATA } from '@/data/brands';
import { generateBreadcrumbSchema, generateFAQSchema, PHONE_NUMBER, WHATSAPP_NUMBER } from '@/lib/seo';
import FaqAccordion from '@/components/FaqAccordion';
import { ShieldCheck, Clock, CheckCircle2, Phone, Calendar, ArrowRight, Shield } from 'lucide-react';

interface BrandPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return BRANDS_DATA.map((brand) => ({
    category: brand.category === 'all' ? 'washing-machine' : brand.category,
    slug: brand.slug
  }));
}

export async function generateMetadata({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = BRANDS_DATA.find((b) => b.slug === slug);
  if (!brand) return { title: 'Brand Not Found' };

  return {
    title: `${brand.name} Repair Service in Surat | Doorstep Fix & 90-Day Warranty`,
    description: brand.description,
    keywords: `${brand.name} repair Surat, ${brand.name} technician near me, ${brand.name} spare parts Surat`
  };
}

export default async function BrandDetailPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = BRANDS_DATA.find((b) => b.slug === slug);

  if (!brand) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Brands', url: '/brands' },
    { name: `${brand.name} Repair`, url: `/brands/${brand.category}/${brand.slug}` }
  ]);
  const faqSchema = generateFAQSchema(brand.faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="pt-28 pb-20 bg-slate-50">
        
        {/* Brand Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/90 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wider">
                {brand.logoText}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {brand.category.toUpperCase()} REPAIR SPECIALIST
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Authorized Quality <span className="gradient-text">{brand.name} Repair</span> in Surat
            </h1>

            <p className="text-slate-600 text-base leading-relaxed max-w-3xl">
              {brand.description} We carry genuine OEM factory spare parts, replacement power boards, LED backlight strips, compressor relays, and sensors specifically designed for {brand.name} models.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-500/25 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 animate-pulse" /> Call {brand.name} Specialist: {PHONE_NUMBER}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Atharva%20Cooling%20Point%2C%20I%20need%20repair%20for%20my%20${encodeURIComponent(brand.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 flex items-center gap-2"
              >
                <span>💬 Book via WhatsApp</span>
              </a>
            </div>

          </div>
        </section>

        {/* Common Issues Fixed & Models Covered */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="glass-panel p-8 rounded-3xl border border-white/90">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Common {brand.name} Issues We Resolve
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {brand.commonIssuesFixed.map((issue, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/90">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Popular {brand.name} Models Serviced
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {brand.popularModels.map((model, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{model}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* Brand FAQs */}
        <FaqAccordion faqs={brand.faqs} title={`${brand.name} Repair FAQs`} />

      </div>
    </>
  );
}
