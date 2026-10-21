'use client';

import React, { useState } from 'react';
import Hero from '@/components/Hero';
import ServiceGrid from '@/components/ServiceGrid';
import ShowroomSection from '@/components/ShowroomSection';
import BrandShowcase from '@/components/BrandShowcase';
import SuratAreaGrid from '@/components/SuratAreaGrid';
import PricingCalculator from '@/components/PricingCalculator';
import TrustSection from '@/components/TrustSection';
import ReviewsSection from '@/components/ReviewsSection';
import FaqAccordion from '@/components/FaqAccordion';
import BookingModal from '@/components/BookingModal';
import { ArrowRight, Phone, Zap } from 'lucide-react';
import { PHONE_NUMBER } from '@/lib/seo';

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <Hero onOpenBooking={() => setBookingOpen(true)} />

      {/* Services Showcase */}
      <ServiceGrid onOpenBooking={() => setBookingOpen(true)} />

      {/* LVMH Showroom Style Interactive Engineering Gallery */}
      <ShowroomSection onOpenBooking={() => setBookingOpen(true)} />

      {/* Brand Coverage */}
      <BrandShowcase />

      {/* Interactive Surat Area Coverage */}
      <SuratAreaGrid />

      {/* Pricing Estimator */}
      <PricingCalculator onOpenBooking={() => setBookingOpen(true)} />

      {/* Trust & Guarantee */}
      <TrustSection />

      {/* Customer Reviews */}
      <ReviewsSection />

      {/* FAQs */}
      <FaqAccordion />

      {/* Final Conversion CTA Banner */}
      <section className="py-16 relative bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 text-amber-300 fill-amber-300" /> Need Same-Day Emergency Service?
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Get Your Home Appliance Fixed in Surat Today.
          </h2>
          <p className="text-blue-100 text-base max-w-2xl mx-auto">
            Our technician is ready to dispatch to Adajan, Vesu, Varachha, Katargam, Athwa, or any Surat location right now.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 rounded-2xl bg-white text-blue-900 font-extrabold text-base shadow-2xl hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Book Doorstep Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="px-8 py-4 rounded-2xl bg-blue-900/60 border border-white/30 text-white font-bold text-base hover:bg-blue-900 transition-all flex items-center gap-2"
            >
              <Phone className="w-5 h-5 text-amber-300 animate-pulse" />
              <span>Call Hotline: {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Global Booking Modal Trigger */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
