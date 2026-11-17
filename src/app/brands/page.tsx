import React from 'react';
import BrandShowcase from '@/components/BrandShowcase';
import { generateBreadcrumbSchema } from '@/lib/seo';

export const metadata = {
  title: 'Washing Machine, AC & Appliance Brand Repair Services in Surat',
  description: 'Certified doorstep repair for Samsung, LG, IFB, Whirlpool, Godrej, Bosch, Voltas, Daikin & Panasonic in Surat. Original factory spare parts with 90-day warranty.',
};

export default function BrandsDirectoryPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Brands', url: '/brands' }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-24">
        <BrandShowcase />
      </div>
    </>
  );
}
