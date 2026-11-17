import React from 'react';
import FaqAccordion from '@/components/FaqAccordion';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';

export const metadata = {
  title: 'Frequently Asked Questions | Washing Machine, AC & Appliance Repair Surat',
  description: 'Find answers to common Washing Machine, AC, Microwave and Refrigerator repair questions in Surat including arrival times, pricing, 90-day warranty, and brand parts availability.',
};

export default function FaqPage() {
  const faqs = [
    {
      question: "How fast can a repair technician reach my home in Surat?",
      answer: "We have dedicated repair vans and engineers stationed in Adajan, Vesu, Varachha, Katargam, Athwa, Piplod, and City Light. Our average arrival time is 20 to 30 minutes after your booking confirmation."
    },
    {
      question: "What is your repair warranty policy?",
      answer: "All spare parts installed (such as washing machine drain pumps, drum bearings, AC compressors, refrigerator defrost timers, and gas refills) come with an official 90-day free replacement warranty."
    },
    {
      question: "Do you fix washing machine drum noise and spin issues at home?",
      answer: "Yes! 95% of washing machine motor, drain pump, belt, and bearing repairs are completed directly at your doorstep in under 45 minutes."
    },
    {
      question: "How much does refrigerator gas refilling cost in Surat?",
      answer: "Gas refilling starts from ₹799 and includes nitrogen leak pressure testing, silver brazing pipe fitting, deep vacuum evacuation, and R600a or R134a eco-friendly gas charging."
    },
    {
      question: "Which home appliance brands do you repair?",
      answer: "We service Samsung, LG, IFB, Whirlpool, Godrej, Bosch, Voltas, Daikin, Panasonic, and Haier."
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
