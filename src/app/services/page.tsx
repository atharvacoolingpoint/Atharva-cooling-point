import React from 'react';
import ServiceGrid from '@/components/ServiceGrid';
import { generateBreadcrumbSchema } from '@/lib/seo';

export const metadata = {
  title: 'All Repair Services | TV & Refrigerator Repair in Surat',
  description: 'Explore complete TV and Refrigerator doorstep repair services in Surat including LED backlight replacement, display panel fix, gas charging, compressor swap & PCB chip repair.',
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
