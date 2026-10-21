'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Calendar, Menu, X, ChevronDown } from 'lucide-react';
import { PHONE_NUMBER } from '@/lib/seo';

interface HeaderProps {
  onOpenBooking?: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/85 backdrop-blur-xl border-b border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.06)] py-2.5 sm:py-3' 
        : 'bg-white/70 backdrop-blur-md py-3 sm:py-3.5 border-b border-slate-200/50'
    }`}>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 lg:gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl overflow-hidden shadow-md shadow-blue-500/20 border border-blue-100/80 group-hover:scale-105 transition-transform bg-white shrink-0">
            <Image
              src="/images/logo.webp"
              alt="Atharva Cooling Point Logo"
              fill
              priority
              className="object-cover"
              sizes="44px"
            />
          </div>
          <div className="shrink-0 flex flex-col justify-center">
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="font-extrabold text-sm min-[390px]:text-base sm:text-lg lg:text-xl tracking-tight text-slate-900 whitespace-nowrap">
                ATHARVA<span className="text-blue-600"> COOLING </span>POINT
              </span>
              <span className="text-[9px] min-[390px]:text-[10px] uppercase tracking-wider font-semibold bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">
                Surat
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] font-bold text-slate-600 tracking-wider uppercase whitespace-nowrap leading-tight mt-0.5">
              Service Center
            </p>
            <p className="text-[9px] sm:text-[9.5px] font-medium text-slate-400 whitespace-nowrap hidden sm:block leading-tight">
              Washing Machine, AC, Microwave & Refrigerator Experts
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 shrink-0">
          <Link 
            href="/" 
            className="px-2.5 py-1.5 text-xs xl:text-sm font-medium text-slate-700 hover:text-blue-600 rounded-xl hover:bg-slate-100/60 transition-colors whitespace-nowrap"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button 
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs xl:text-sm font-medium text-slate-700 hover:text-blue-600 rounded-xl hover:bg-slate-100/60 transition-colors whitespace-nowrap"
            >
              Services <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {servicesDropdown && (
              <div className="absolute top-full left-0 w-80 pt-2 z-[9999]">
                <div 
                  className="dropdown-solid-panel rounded-2xl p-4 space-y-3 relative z-[9999]"
                  style={{ backgroundColor: '#ffffff', opacity: 1 }}
                >
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 px-3 mb-1">Laundry & Climate</p>
                    <Link href="/services/washing-machine-repair" className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-900 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      🧺 Washing Machine Repair
                    </Link>
                    <Link href="/services/ac-repair" className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-900 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      ❄️ AC Service & Gas Refilling
                    </Link>
                    <Link href="/services/microwave-oven-repair" className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-900 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      🍲 Microwave Oven Repair
                    </Link>
                  </div>
                  <div className="border-t border-slate-100 pt-2">
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 px-3 mb-1">Refrigeration</p>
                    <Link href="/services/refrigerator-repair" className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-900 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      🧊 Refrigerator Repair
                    </Link>
                    <Link href="/services/double-door-refrigerator-repair" className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-900 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      🚪 Frost-Free & Inverter Fix
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link 
            href="/#showroom" 
            className="px-2.5 py-1.5 text-xs xl:text-sm font-medium text-slate-700 hover:text-blue-600 rounded-xl hover:bg-slate-100/60 transition-colors whitespace-nowrap"
          >
            Diagnostic Lab
          </Link>

          <Link 
            href="/brands" 
            className="px-2.5 py-1.5 text-xs xl:text-sm font-medium text-slate-700 hover:text-blue-600 rounded-xl hover:bg-slate-100/60 transition-colors whitespace-nowrap"
          >
            Brands
          </Link>
          <Link 
            href="/location" 
            className="px-2.5 py-1.5 text-xs xl:text-sm font-medium text-slate-700 hover:text-blue-600 rounded-xl hover:bg-slate-100/60 transition-colors whitespace-nowrap"
          >
            Surat Areas
          </Link>
          <Link 
            href="/about" 
            className="px-2.5 py-1.5 text-xs xl:text-sm font-medium text-slate-700 hover:text-blue-600 rounded-xl hover:bg-slate-100/60 transition-colors whitespace-nowrap"
          >
            About Us
          </Link>
          <Link 
            href="/faq" 
            className="hidden xl:block px-2.5 py-1.5 text-xs xl:text-sm font-medium text-slate-700 hover:text-blue-600 rounded-xl hover:bg-slate-100/60 transition-colors whitespace-nowrap"
          >
            FAQ
          </Link>
          <Link 
            href="/blog" 
            className="hidden xl:block px-2.5 py-1.5 text-xs xl:text-sm font-medium text-slate-700 hover:text-blue-600 rounded-xl hover:bg-slate-100/60 transition-colors whitespace-nowrap"
          >
            Blog
          </Link>
        </nav>

        {/* Desktop CTA buttons */}
        <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 shrink-0">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-1.5 px-3 py-2 xl:px-4 xl:py-2.5 rounded-xl xl:rounded-2xl glass-pill text-slate-800 font-semibold text-xs xl:text-sm hover:bg-white transition-all shadow-sm whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-blue-600 animate-pulse" />
            <span className="hidden xl:inline">Call Technician</span>
            <span className="xl:hidden">Call Now</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-1.5 px-3.5 py-2 xl:px-5 xl:py-2.5 rounded-xl xl:rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs xl:text-sm shadow-md xl:shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all shimmer-btn whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
            <span>Book Repair</span>
          </button>
        </div>

        {/* Mobile / Tablet Quick Action & Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="px-3 py-2 rounded-xl glass-pill text-slate-800 font-bold text-xs flex items-center gap-1.5 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span>Call</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl glass-pill text-slate-700 hover:bg-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden dropdown-solid-panel border-t border-slate-200 px-6 py-6 mt-3 space-y-4 animate-fadeIn relative z-[9999] max-h-[85vh] overflow-y-auto shadow-2xl"
          style={{ backgroundColor: '#ffffff', opacity: 1 }}
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Surat Tech Hub Active
            </span>
            <span className="text-xs font-semibold text-slate-500">24x7 Doorstep</span>
          </div>
          <nav className="flex flex-col space-y-2">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600"
            >
              Home
            </Link>
            <Link 
              href="/#showroom" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600"
            >
              Diagnostic Lab
            </Link>
            <Link 
              href="/services/washing-machine-repair" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600"
            >
              🧺 Washing Machine Repair
            </Link>
            <Link 
              href="/services/ac-repair" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600"
            >
              ❄️ AC Repair & Service
            </Link>
            <Link 
              href="/services/microwave-oven-repair" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600"
            >
              🍲 Microwave Oven Repair
            </Link>
            <Link 
              href="/services/refrigerator-repair" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600"
            >
              🧊 Refrigerator Repair
            </Link>
            <Link 
              href="/brands" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600"
            >
              Brand Coverage
            </Link>
            <Link 
              href="/location" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600"
            >
              Surat Service Areas
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600"
            >
              Contact
            </Link>
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking?.(); }}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-center shadow-lg shadow-blue-600/30"
            >
              Book Repair Online
            </button>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full py-3 rounded-2xl glass-pill text-slate-900 font-semibold text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-blue-600" /> Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
