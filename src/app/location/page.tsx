import React from 'react';
import SuratAreaGrid from '@/components/SuratAreaGrid';
import { generateBreadcrumbSchema } from '@/lib/seo';

export const metadata = {
  title: 'Surat TV & Refrigerator Repair Locations | 20+ Service Areas',
  description: 'Doorstep TV and Refrigerator repair service coverage across all Surat neighborhoods including Adajan, Vesu, Athwa, Varachha, Katargam, Piplod, City Light, Pal & Udhna.',
};

export default function LocationsDirectoryPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Surat Locations', url: '/location' }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-24">
        <SuratAreaGrid />
      </div>
    </>
  );
}
