import type { Metadata } from 'next';
import './globals.css';
import { generateLocalBusinessSchema, SITE_NAME, SITE_URL } from '@/lib/seo';
import ClientLayout from '@/components/ClientLayout';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Atharva Cooling Point - Washing Machine, AC, Microwave & Refrigerator Repair Service',
    template: '%s | Atharva Cooling Point'
  },
  description: 'Fast doorstep Washing Machine, AC, Microwave Oven & Refrigerator repair across Surat (Adajan, Vesu, Varachha, Katargam, Athwa & all areas). Certified technicians, original spare parts, and 90-day warranty.',
  keywords: [
    'Washing machine repair in Surat',
    'AC repair in Surat',
    'Microwave oven repair in Surat',
    'Refrigerator repair in Surat',
    'Washing machine repair near me',
    'AC service near me',
    'Microwave repair near me',
    'Fridge repair in Surat',
    'Samsung washing machine repair Surat',
    'LG washing machine repair Surat',
    'Voltas AC repair Surat',
    'Daikin AC repair Surat',
    'IFB washing machine repair Surat',
    'Emergency home appliance repair Surat'
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Atharva Cooling Point - Washing Machine, AC, Microwave & Refrigerator Repair in Surat',
    description: '30-minute doorstep repair for Washing Machines, ACs, Microwaves, and Refrigerators in Surat with 90-day warranty.',
    images: [
      {
        url: `${SITE_URL}/images/hero.jpg`,
        width: 1200,
        height: 630,
        alt: 'Atharva Cooling Point Washing Machine, AC, Microwave & Refrigerator Repair'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atharva Cooling Point - Washing Machine, AC, Microwave & Refrigerator Repair',
    description: '30-minute doorstep repair for Washing Machines, ACs, Microwaves, and Refrigerators in Surat with 90-day warranty.',
    images: [`${SITE_URL}/images/hero.jpg`]
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logo.jpg', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/images/logo.jpg', sizes: '180x180', type: 'image/jpeg' },
    ]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = generateLocalBusinessSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
