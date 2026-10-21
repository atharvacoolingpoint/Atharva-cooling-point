import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { generateBreadcrumbSchema, PHONE_NUMBER } from '@/lib/seo';
import { ShieldCheck, Award, Clock, Wrench, Users, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About Atharva Cooling Point | Surat’s Premier Appliance Repair Network',
  description: 'Learn about Atharva Cooling Point - Surat’s leading team of certified Washing Machine, AC, Microwave & Refrigerator engineers delivering 30-minute doorstep repairs with 90-day guarantee.',
};

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="pt-28 pb-20 bg-slate-50">
        
        {/* Header Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/90 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <Wrench className="w-4 h-4" /> About Atharva Cooling Point
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Redefining Home Appliance Repair in <span className="gradient-text">Surat</span>
              </h1>

              <p className="text-slate-600 text-base leading-relaxed">
                Founded with a mission to bring world-class engineering, transparent pricing, and rapid 30-minute doorstep service to homeowners across Surat, Gujarat. We bridge the gap between expensive factory replacements and unreliable local technicians.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/60 text-slate-900 font-extrabold">
                <div>
                  <span className="text-2xl text-blue-600">1,480+</span>
                  <p className="text-xs text-slate-500 font-medium">Repairs Completed</p>
                </div>
                <div>
                  <span className="text-2xl text-emerald-600">20+</span>
                  <p className="text-xs text-slate-500 font-medium">Surat Areas Covered</p>
                </div>
                <div>
                  <span className="text-2xl text-indigo-600">90 Days</span>
                  <p className="text-xs text-slate-500 font-medium">Spare Part Warranty</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
              <Image
                src="/images/hero.jpg"
                alt="About Atharva Cooling Point Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

          </div>
        </section>

        {/* Our Guiding Principles */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/90 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
              <h3 className="text-lg font-bold text-slate-900">100% Transparency</h3>
              <p className="text-xs text-slate-600">No surprise visits or hidden labor surcharges. Every estimate is explained before work starts.</p>
            </div>
            <div className="glass-panel p-8 rounded-3xl border border-white/90 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">2</div>
              <h3 className="text-lg font-bold text-slate-900">Genuine OEM Spares</h3>
              <p className="text-xs text-slate-600">We source factory original parts directly for Samsung, LG, Sony, Whirlpool, Bosch, and Godrej.</p>
            </div>
            <div className="glass-panel p-8 rounded-3xl border border-white/90 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">3</div>
              <h3 className="text-lg font-bold text-slate-900">30-Min Rapid Dispatch</h3>
              <p className="text-xs text-slate-600">Our mobile repair units stationed across Surat enable immediate doorstep arrival.</p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
