import React from 'react';
import FaqAccordion from '@/components/FaqAccordion';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';

export const metadata = {
  title: 'Frequently Asked Questions | TV & Refrigerator Repair Surat',
  description: 'Find answers to common TV and Refrigerator repair questions in Surat including arrival times, pricing, 90-day warranty, and brand parts availability.',
};

export default function FaqPage() {
  const faqs = [
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

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' }
  ]);
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="pt-24">
        <FaqAccordion faqs={faqs} title="Frequently Asked Questions in Surat" />
      </div>
    </>
  );
}
