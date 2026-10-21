import React from 'react';
import BrandShowcase from '@/components/BrandShowcase';
import { generateBreadcrumbSchema } from '@/lib/seo';

export const metadata = {
  title: 'TV & Refrigerator Brand Repair Services in Surat',
  description: 'Certified doorstep repair for Samsung, LG, Sony, Whirlpool, Godrej, Bosch, Panasonic, Haier, Mi, OnePlus & TCL in Surat. Original factory spare parts with 90-day warranty.',
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
