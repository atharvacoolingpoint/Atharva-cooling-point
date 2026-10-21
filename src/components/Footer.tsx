'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Wrench, Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, BUSINESS_ADDRESS } from '@/lib/seo';
import { SURAT_LOCATIONS } from '@/data/locations';
import { REPAIR_SERVICES } from '@/data/services';
import { BRANDS_DATA } from '@/data/brands';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-28 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          
          {/* Col 1: Business Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-2xl overflow-hidden shadow-lg border border-blue-500/30 bg-white shrink-0">
                <Image
                  src="/images/logo.webp"
                  alt="Atharva Cooling Point Logo"
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white">ATHARVA<span className="text-blue-500"> COOLING </span>POINT</span>
                <p className="text-[10px] font-medium text-slate-400">Doorstep Appliance Service & Repair</p>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Atharva Cooling Point is Surat's premier home appliance service network. Providing 30-minute doorstep repair for Washing Machines, Air Conditioners, Microwave Ovens, and Refrigerators backed by an official 90-day guarantee.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-blue-400 font-semibold">{PHONE_NUMBER}</a>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Charbhuja Arcade, Gala No. 2, New Kosad Road, Near Charbhuja Circle, Amroli, Surat, Gujarat.</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>90-Day Parts & Workmanship Guarantee</span>
              </div>
            </div>
          </div>

          {/* Col 2: Repair Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Repair Services</h4>
            <ul className="space-y-2 text-xs">
              {REPAIR_SERVICES.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-blue-400 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Brands */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Brand Coverage</h4>
            <ul className="space-y-2 text-xs">
              {BRANDS_DATA.map(b => (
                <li key={b.slug}>
                  <Link href={`/brands/${b.category}/${b.slug}`} className="hover:text-blue-400 transition-colors">
                    {b.name} Repair
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Surat Service Localities */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Surat Service Areas</h4>
            <div className="grid grid-cols-2 gap-1 text-[11px]">
              {SURAT_LOCATIONS.slice(0, 14).map(loc => (
                <Link key={loc.slug} href={`/location/${loc.slug}`} className="hover:text-blue-400 transition-colors">
                  • {loc.name}
                </Link>
              ))}
            </div>
            <Link href="/location" className="inline-block text-xs font-bold text-blue-400 hover:underline pt-1">
              View All 20+ Surat Areas →
            </Link>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Atharva Cooling Point. All Rights Reserved. Surat, Gujarat.</p>
          <div className="flex items-center space-x-4">
            <Link href="/about" className="hover:text-slate-300">About Us</Link>
            <Link href="/contact" className="hover:text-slate-300">Contact</Link>
            <Link href="/faq" className="hover:text-slate-300">FAQ</Link>
            <Link href="/blog" className="hover:text-slate-300">Blog</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
