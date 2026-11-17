import React from 'react';
import ServiceGrid from '@/components/ServiceGrid';
import { generateBreadcrumbSchema } from '@/lib/seo';

export const metadata = {
  title: 'All Repair Services | Washing Machine, AC, Microwave & Refrigerator Repair in Surat',
  description: 'Explore complete doorstep repair services in Surat for Washing Machines, Air Conditioners, Microwave Ovens, and Refrigerators with 90-day warranty.',
};

export default function AllServicesIndexPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-24">
        <ServiceGrid />
      </div>
    </>
  );
}
