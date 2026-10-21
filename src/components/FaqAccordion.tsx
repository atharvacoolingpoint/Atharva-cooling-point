'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs?: FaqItem[];
  title?: string;
}

export default function FaqAccordion({ faqs, title = "Frequently Asked Questions" }: FaqAccordionProps) {
  const defaultFaqs: FaqItem[] = [
    {
      question: "How fast can a repair technician reach my home in Surat?",
      answer: "We have dedicated repair vans and engineers stationed in Adajan, Vesu, Varachha, Katargam, Athwa, Piplod, and City Light. Our average arrival time is 20 to 30 minutes after your booking confirmation."
    },
    {
      question: "What is your repair warranty policy?",
      answer: "All spare parts installed (such as LED backlight strips, TV power boards, refrigerator compressors, defrost timers, and gas refills) come with an official 90-day free replacement warranty."
    },
    {
      question: "Do you fix TV backlight black screen issues at home?",
      answer: "Yes! 95% of TV LED backlight and power supply repairs are completed directly in your living room in front of your eyes in under 45 minutes."
    },
    {
      question: "How much does refrigerator gas refilling cost in Surat?",
      answer: "Gas refilling starts from ₹799 and includes nitrogen leak pressure testing, silver brazing pipe fitting, deep vacuum evacuation, and R600a or R134a eco-friendly gas charging."
    },
    {
      question: "Which TV and Refrigerator brands do you repair?",
      answer: "We service Samsung, LG, Sony, Whirlpool, Godrej, Bosch, Panasonic, Haier, Xiaomi/Mi, OnePlus, TCL, Vu, Philips, IFB, and Voltas."
    },
    {
      question: "Are there any hidden visit charges if I get my device repaired?",
      answer: "No! When you proceed with the repair service recommended by our technician, the initial diagnostic fee is completely waived and included in the fixed transparent quote."
    }
  ];

  const items = faqs && faqs.length > 0 ? faqs : defaultFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 relative bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-bold text-blue-600 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Support & FAQs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need to know about TV and refrigerator repairs in Surat.
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-slate-900 text-base hover:text-blue-600 transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
